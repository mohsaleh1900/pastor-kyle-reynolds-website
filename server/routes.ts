import type { Express, Request, Response } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertCampusSignupSchema, insertNewsletterSchema } from "@shared/schema";

const YT_CHANNEL_ID = "UCVWrFKtcGFvZk3imn85pxvg";
const KYLE_TITLE_REGEX = /kyle\s*reynolds/i;

function formatMonthYear(iso: string) {
  const d = new Date(iso);
  const month = d.toLocaleString("en-US", { month: "short" });
  return `${month} ${d.getFullYear()}`;
}

let sermonsCache: { at: number; data: any[] } | null = null;
const CACHE_MS = 60 * 60 * 1000;

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {

  // ── Sermons (YouTube API) ──
  app.get("/api/sermons", async (_req: Request, res: Response) => {
    try {
      const apiKey = process.env.YOUTUBE_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Missing YOUTUBE_API_KEY" });
      }

      if (sermonsCache && Date.now() - sermonsCache.at < CACHE_MS) {
        return res.json({ sermons: sermonsCache.data });
      }

      const TARGET_COUNT = 10;
      const MAX_PAGES = 20;
      const MAX_RESULTS = 50;

      let pageToken = "";
      const collected: any[] = [];

      for (let page = 0; page < MAX_PAGES; page++) {
        const url =
          "https://www.googleapis.com/youtube/v3/search" +
          `?part=snippet&channelId=${YT_CHANNEL_ID}` +
          `&maxResults=${MAX_RESULTS}&order=date&type=video` +
          (pageToken ? `&pageToken=${pageToken}` : "") +
          `&key=${apiKey}`;

        const r = await fetch(url);
        if (!r.ok) {
          const text = await r.text();
          return res.status(r.status).json({ error: "YouTube API error", details: text });
        }

        const data: any = await r.json();

        const matches = (data.items ?? [])
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

        collected.push(...matches);
        if (collected.length >= TARGET_COUNT) break;

        pageToken = data.nextPageToken;
        if (!pageToken) break;
      }

      const top = collected.slice(0, TARGET_COUNT);
      sermonsCache = { at: Date.now(), data: top };
      res.set("Cache-Control", "public, max-age=3600");
      return res.json({ sermons: top });
    } catch (e: any) {
      return res.status(500).json({ error: "Failed to load sermons", details: e?.message ?? String(e) });
    }
  });

  // ── Blog Posts ──
  app.get("/api/blog", async (_req: Request, res: Response) => {
    try {
      const posts = await storage.getBlogPosts();
      return res.json({ posts });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  });

  // ── Contact Form ──
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
      }
      const submission = await storage.createContactSubmission(parsed.data);
      return res.status(201).json({ message: "Message sent successfully!", submission });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  });

  // ── Campus Signup ──
  app.post("/api/campus-signup", async (req: Request, res: Response) => {
    try {
      const parsed = insertCampusSignupSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
      }
      const signup = await storage.createCampusSignup(parsed.data);
      return res.status(201).json({ message: "Thanks for connecting! We'll be in touch soon.", signup });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  });

  // ── Newsletter Subscription ──
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const parsed = insertNewsletterSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Validation failed", details: parsed.error.flatten() });
      }
      const sub = await storage.createNewsletterSubscription(parsed.data);
      return res.status(201).json({ message: "Subscribed! You'll receive monthly updates.", sub });
    } catch (e: any) {
      if (e?.message?.includes("unique") || e?.code === "23505") {
        return res.status(409).json({ message: "You're already subscribed!" });
      }
      return res.status(500).json({ error: e.message });
    }
  });

  return httpServer;
}
