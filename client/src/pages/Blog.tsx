import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string | null;
};

const categories = ["All", "Devotional", "Teaching", "Campus"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const { data, isLoading } = useQuery<{ posts: BlogPost[] }>({
    queryKey: ["/api/blog"],
  });

  const posts = data?.posts ?? [];
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

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p>No posts found in this category yet.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col h-full"
                data-testid={`card-blog-${post.id}`}
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
        )}

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
                {selectedPost?.content || selectedPost?.excerpt}
              </p>
              {!selectedPost?.content && (
                <div className="mt-8 p-6 bg-muted/30 rounded-xl text-sm text-muted-foreground border italic">
                  (Full article content coming soon.)
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
