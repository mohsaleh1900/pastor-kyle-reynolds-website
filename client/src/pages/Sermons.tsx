import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Calendar } from "lucide-react";

type Sermon = {
  title: string;
  date: string;
  summary: string;
  url: string;
  thumbnail: string;
};

const fallbackSermons: Sermon[] = [
  { title: "A Durable Faith in a Loud World", date: "Jan 2026", summary: "How to build conviction and peace when distractions compete for your attention.", url: "#", thumbnail: "" },
  { title: "Scripture Before Speed", date: "Dec 2025", summary: "Why the Word must shape your priorities before your calendar does.", url: "#", thumbnail: "" },
  { title: "Prayer That Actually Changes You", date: "Dec 2025", summary: "Moving from prayer as habit to prayer as relationship and formation.", url: "#", thumbnail: "" },
  { title: "Identity When You Feel Behind", date: "Nov 2025", summary: "A Biblical view of identity when comparison and anxiety distort your perspective.", url: "#", thumbnail: "" },
  { title: "Friendship, Community, and the Local Church", date: "Oct 2025", summary: "Why discipleship needs people, not just content.", url: "#", thumbnail: "" },
  { title: "Temptation, Wisdom, and the Next Right Step", date: "Sep 2025", summary: "Practical guidance for integrity when pressure and loneliness rise.", url: "#", thumbnail: "" },
];

function cleanSermonTitle(raw: string) {
  let t = raw || "";
  t = t.replace(/(kyle\s*reynolds)\s*(\d{1,2}\.\d{1,2}\.\d{4})/i, "$1|$2");
  t = t.replace(/pastorkyle\s*reynolds/i, "Pastor Kyle Reynolds");
  t = t.replace(/^\s*\d+\.\s*/, "");
  const parts = t.split("|").map((p) => p.trim()).filter(Boolean);
  const preacher = (p: string) => /kyle\s*reynolds/i.test(p) || /pastor\s*kyle\s*reynolds/i.test(p);
  const date = (p: string) => /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(p);
  const cleaned = parts.filter((p) => !preacher(p) && !date(p));
  return cleaned.length ? cleaned.join(" | ") : t;
}

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/sermons");
        if (!res.ok) throw new Error("Failed to load sermons");
        const data = await res.json();
        const items = data.sermons ?? [];
        setSermons(items.length > 0 ? items : fallbackSermons);
      } catch {
        setSermons(fallbackSermons);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="w-full py-12 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4" data-testid="text-sermons-heading">
            Sermons & Messages
          </h1>
          <p className="text-xl text-muted-foreground">
            These messages aim to teach Scripture clearly and apply it directly to real life—faith, identity, relationships, purpose, and endurance.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading sermons...</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon, i) => (
              <div
                key={sermon.url + i}
                className="group bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
                data-testid={`card-sermon-${i}`}
              >
                <div className="aspect-video bg-slate-900/5 relative">
                  {sermon.thumbnail ? (
                    <img src={sermon.thumbnail} alt={sermon.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <Play className="h-14 w-14 text-primary/30" />
                    </div>
                  )}
                  {sermon.url !== "#" && (
                    <a href={sermon.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors" aria-label={`Watch: ${sermon.title}`}>
                      <Play className="h-14 w-14 text-primary drop-shadow-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    </a>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-accent-foreground mb-4 uppercase tracking-wider">
                    <Calendar className="h-3 w-3" /> {sermon.date}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {cleanSermonTitle(sermon.title)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    {sermon.summary || "Watch the full message on YouTube."}
                  </p>
                  {sermon.url !== "#" ? (
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold" data-testid={`button-watch-${i}`}>
                      <a href={sermon.url} target="_blank" rel="noopener noreferrer">Watch Message</a>
                    </Button>
                  ) : (
                    <Button className="bg-primary hover:bg-primary/90 text-white font-bold" disabled data-testid={`button-watch-${i}`}>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
