import type { Express, Request, Response } from "express";
import type { Server } from "http";
import { storage } from "./storage";

// Kenwood Baptist Church YouTube channel ID
const YT_CHANNEL_ID = "UCVWrFKtcGFvZk3imn85pxvg";

// Filter to Kyle's sermons based on title text
const KYLE_TITLE_REGEX = /kyle\s*reynolds/i;

function formatMonthYear(iso: string) {
  const d = new Date(iso);
  const month = d.toLocaleString("en-US", { month: "short" });
  return `${month} ${d.getFullYear()}`;
}

// Simple in-memory cache to reduce API calls (helps quota + speed)
let sermonsCache: { at: number; data: any[] } | null = null;
const CACHE_MS = 15 * 60 * 1000; // 15 minutes

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  // prefix all routes with /api

  // Example: you can still use storage here later
  // storage.insertUser(...) etc.

  app.get("/api/sermons", async (_req: Request, res: Response) => {
    try {
      const apiKey = process.env.YOUTUBE_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Missing YOUTUBE_API_KEY" });
      }

      // Serve cached results if still fresh
      if (sermonsCache && Date.now() - sermonsCache.at < CACHE_MS) {
        return res.json({ sermons: sermonsCache.data });
      }

      const url =
        "https://www.googleapis.com/youtube/v3/search" +
        `?part=snippet&channelId=${YT_CHANNEL_ID}` +
        `&maxResults=50&order=date&type=video&key=${apiKey}`;

      const r = await fetch(url);
      if (!r.ok) {
        const text = await r.text();
        return res
          .status(r.status)
          .json({ error: "YouTube API error", details: text });
      }

      const data: any = await r.json();

      const sermons = (data.items ?? [])
        .map((item: any) => {
          const videoId = item?.id?.videoId;
          const snippet = item?.snippet;
          if (!videoId || !snippet) return null;

          const title = String(snippet.title ?? "");
          const publishedAt = String(snippet.publishedAt ?? "");
          const description = String(snippet.description ?? "");

          return {
            title,
            date: publishedAt ? formatMonthYear(publishedAt) : "",
            summary: description.slice(0, 180),
            url: `https://www.youtube.com/watch?v=${videoId}`,
            thumbnail:
              snippet?.thumbnails?.high?.url ||
              snippet?.thumbnails?.medium?.url ||
              snippet?.thumbnails?.default?.url ||
              "",
          };
        })
        .filter(Boolean)
        .filter((s: any) => KYLE_TITLE_REGEX.test(s.title));

      const top = sermons.slice(0, 10);
      sermonsCache = { at: Date.now(), data: top };
      return res.json({ sermons: top });

      sermonsCache = { at: Date.now(), data: sermons };

      return res.json({ sermons });
    } catch (e: any) {
      return res.status(500).json({
        error: "Failed to load sermons",
        details: e?.message ?? String(e),
      });
    }
  });

  return httpServer;
}
