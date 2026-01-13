import { Button } from "@/components/ui/button";
import { Play, Calendar, Clock, Download } from "lucide-react";

const sermons = [
  {
    id: 1,
    title: "Finding Peace in Chaos",
    date: "January 12, 2026",
    series: "The Peaceful Heart",
    duration: "35 min",
    summary: "In a world that never stops, how do we find true rest? Join us as we explore biblical principles for peace in the midst of the storm.",
  },
  {
    id: 2,
    title: "The Power of Community",
    date: "January 5, 2026",
    series: "Better Together",
    duration: "42 min",
    summary: "We were never meant to walk this life alone. Discover why authentic community is essential for spiritual growth.",
  },
  {
    id: 3,
    title: "Walking by Faith",
    date: "December 29, 2025",
    series: "Faith Forward",
    duration: "38 min",
    summary: "What does it mean to truly trust God when we can't see the outcome? Learning to take the next step.",
  },
  {
    id: 4,
    title: "Grace Upon Grace",
    date: "December 22, 2025",
    series: "Advent 2025",
    duration: "40 min",
    summary: "Understanding the depth of God's grace and how it transforms our daily lives and relationships.",
  },
  {
    id: 5,
    title: "Living with Purpose",
    date: "December 15, 2025",
    series: "Advent 2025",
    duration: "36 min",
    summary: "You were created for a reason. Uncovering your unique calling and how to pursue it with passion.",
  },
  {
    id: 6,
    title: "The Heart of Worship",
    date: "December 8, 2025",
    series: "Advent 2025",
    duration: "45 min",
    summary: "Worship is more than a song; it's a lifestyle. exploring what it means to offer our lives as living sacrifices.",
  },
];

export default function Sermons() {
  return (
    <div className="w-full py-12 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Sermons & Teachings</h1>
          <p className="text-xl text-muted-foreground">
            Watch recent messages and dive deeper into God's word.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="group bg-background rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="aspect-video bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <Play className="h-14 w-14 text-white drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {sermon.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {sermon.duration}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{sermon.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{sermon.series}</p>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {sermon.summary}
                </p>
                <div className="flex gap-2 mt-auto">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">Watch</Button>
                  <Button variant="outline" size="icon" title="Download Audio">
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
