import { Button } from "@/components/ui/button";
import { Play, Calendar, Download } from "lucide-react";

const sermons = [
  {
    title: "A Durable Faith in a Loud World",
    date: "Jan 2026",
    summary: "How to build conviction and peace when distractions compete for your attention."
  },
  {
    title: "Scripture Before Speed",
    date: "Dec 2025",
    summary: "Why the Word must shape your priorities before your calendar does."
  },
  {
    title: "Prayer That Actually Changes You",
    date: "Dec 2025",
    summary: "Moving from prayer as habit to prayer as relationship and formation."
  },
  {
    title: "Identity When You Feel Behind",
    date: "Nov 2025",
    summary: "A Biblical view of identity when comparison and anxiety distort your perspective."
  },
  {
    title: "Friendship, Community, and the Local Church",
    date: "Oct 2025",
    summary: "Why discipleship needs people, not just content."
  },
  {
    title: "Temptation, Wisdom, and the Next Right Step",
    date: "Sep 2025",
    summary: "Practical guidance for integrity when pressure and loneliness rise."
  }
];

export default function Sermons() {
  return (
    <div className="w-full py-12 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Sermons & Messages</h1>
          <p className="text-xl text-muted-foreground">
            These messages aim to teach Scripture clearly and apply it directly to real life—faith, identity, relationships, purpose, and endurance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, i) => (
            <div key={i} className="group bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col">
              <div className="aspect-video bg-slate-900/5 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                  <Play className="h-14 w-14 text-primary drop-shadow-sm opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-accent-foreground mb-4 uppercase tracking-wider">
                  <Calendar className="h-3 w-3" /> {sermon.date}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 leading-tight group-hover:text-primary transition-colors">{sermon.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {sermon.summary}
                </p>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold">Watch Message</Button>
                  <Button variant="outline" size="icon" className="border-primary/20 hover:border-primary/50">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
