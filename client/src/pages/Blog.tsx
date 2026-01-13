import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const posts = [
  {
    title: "Faith Under Pressure",
    date: "Jan 2026",
    category: "Teaching",
    excerpt: "Pressure does not create your identity; it reveals what you trust—and what you need to rebuild."
  },
  {
    title: "A Quiet Rule for a Noisy Week",
    date: "Dec 2025",
    category: "Devotional",
    excerpt: "One small rhythm of Scripture and prayer can re-center an entire week."
  },
  {
    title: "When You Don’t Feel Close to God",
    date: "Dec 2025",
    category: "Devotional",
    excerpt: "Closeness is not always a feeling; it is often the fruit of faithfulness."
  },
  {
    title: "Dating, Discernment, and Integrity",
    date: "Nov 2025",
    category: "Teaching",
    excerpt: "A framework for wise choices that honors Christ and protects your future self."
  },
  {
    title: "Why Community Matters More Than You Think",
    date: "Oct 2025",
    category: "Campus",
    excerpt: "You don’t drift into maturity; you grow through relationships and consistency."
  },
  {
    title: "What to Do When You’re Spiritually Tired",
    date: "Sep 2025",
    category: "Devotional",
    excerpt: "A practical reset: rest, truth, prayer, and one obedient step."
  }
];

const categories = ["All", "Devotional", "Teaching", "Campus"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Blog & Devotionals</h1>
          <p className="text-xl text-muted-foreground">
            Short reflections to help you think clearly, live faithfully, and take the next step.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? "bg-primary text-white font-bold" : "text-muted-foreground"}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none px-3 py-1">
                  {post.category}
                </Badge>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{post.date}</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="text-primary font-bold text-sm mt-auto flex items-center gap-2">
                Read Article <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-secondary/10 text-secondary border-none">{selectedPost?.category}</Badge>
                <span className="text-sm text-muted-foreground">{selectedPost?.date}</span>
              </div>
              <DialogTitle className="text-2xl font-heading font-bold text-primary leading-tight">
                {selectedPost?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-6 prose prose-slate">
              <p className="text-lg leading-relaxed text-foreground/80">
                {selectedPost?.excerpt}
              </p>
              <div className="mt-8 p-6 bg-muted/30 rounded-xl text-sm text-muted-foreground border italic">
                (Full article content coming soon.)
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
