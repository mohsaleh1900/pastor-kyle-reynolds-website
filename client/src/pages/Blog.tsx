import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const posts = [
  {
    id: 1,
    title: "Starting Your Day Right",
    category: "Devotional",
    date: "Jan 10, 2026",
    excerpt: "Morning routines matter, but spiritual routines matter more. Here are 3 ways to anchor your soul before the day begins.",
    content: "Full content placeholder for 'Starting Your Day Right'..."
  },
  {
    id: 2,
    title: "Navigating Campus Life",
    category: "Campus",
    date: "Jan 05, 2026",
    excerpt: "University can be overwhelming. How do you maintain your faith when everything around you challenges it?",
    content: "Full content placeholder for 'Navigating Campus Life'..."
  },
  {
    id: 3,
    title: "Understanding Grace",
    category: "Teaching",
    date: "Dec 28, 2025",
    excerpt: "Grace isn't just a theological concept; it's the air we breathe. A deep dive into Ephesians 2.",
    content: "Full content placeholder for 'Understanding Grace'..."
  },
  {
    id: 4,
    title: "The Art of Listening",
    category: "Devotional",
    date: "Dec 20, 2025",
    excerpt: "In a noisy world, listening is a lost art. God is speaking, but are we quiet enough to hear Him?",
    content: "Full content placeholder for 'The Art of Listening'..."
  },
  {
    id: 5,
    title: "Community in a Digital Age",
    category: "Campus",
    date: "Dec 15, 2025",
    excerpt: "Why face-to-face connection still matters in a screen-dominated world. Building real relationships.",
    content: "Full content placeholder for 'Community in a Digital Age'..."
  },
  {
    id: 6,
    title: "Prayer as a Lifestyle",
    category: "Teaching",
    date: "Dec 10, 2025",
    excerpt: "Moving beyond 'prayer lists' to a continuous conversation with the Creator.",
    content: "Full content placeholder for 'Prayer as a Lifestyle'..."
  },
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
            Thoughts on faith, culture, and ministry.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? "bg-primary text-white" : "text-muted-foreground"}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                  {post.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="text-primary font-medium text-sm mt-auto">
                Read Article &rarr;
              </div>
            </div>
          ))}
        </div>

        {/* Post Modal */}
        <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{selectedPost?.category}</Badge>
                <span className="text-sm text-muted-foreground">{selectedPost?.date}</span>
              </div>
              <DialogTitle className="text-2xl font-heading font-bold text-primary">
                {selectedPost?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                {selectedPost?.content}
              </p>
              <div className="mt-8 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground italic">
                (This is a placeholder for the full blog post content. In a real application, this would pull from a CMS or markdown file.)
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
