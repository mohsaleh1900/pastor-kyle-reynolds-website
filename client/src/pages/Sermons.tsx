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

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/sermons");
        const data = await res.json();
        setSermons(data.sermons ?? []);
      } catch {
        setSermons([]);
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
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Sermons & Messages
          </h1>
          <p className="text-xl text-muted-foreground">
            These messages aim to teach Scripture clearly and apply it directly to real life; faith, identity, relationships, purpose, and endurance.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading sermons…</div>
        ) : sermons.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No sermons found yet.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sermons.map((sermon, i) => (
              <div
                key={i}
                className="group bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="aspect-video bg-slate-900/5 relative">
                  {sermon.thumbnail ? (
                    <img
                      src={sermon.thumbnail}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : null}

                  <a
                    href={sermon.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors"
                    aria-label={`Watch: ${sermon.title}`}
                  >
                    <Play className="h-14 w-14 text-primary drop-shadow-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </a>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-accent-foreground mb-4 uppercase tracking-wider">
                    <Calendar className="h-3 w-3" /> {sermon.date}
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {sermon.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    {sermon.summary || "Watch the full message on YouTube."}
                  </p>

                  <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold">
                    <a href={sermon.url} target="_blank" rel="noopener noreferrer">
                      Watch Message
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
