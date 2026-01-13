import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

export default function Book() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative w-[300px] h-[460px] bg-slate-100 rounded-r-2xl rounded-l-md shadow-2xl border-l-8 border-l-slate-300 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-primary to-primary/80 text-white">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/10 to-transparent rounded-r-2xl pointer-events-none"></div>
              <h2 className="text-4xl font-heading font-bold mb-2">WALKING</h2>
              <h2 className="text-4xl font-heading font-bold mb-8">IN FAITH</h2>
              <div className="w-16 h-1 bg-white/50 mb-8"></div>
              <p className="font-light tracking-widest uppercase text-sm">A 40-Day Journey</p>
              <p className="font-bold mt-12 text-lg">KYLE REYNOLDS</p>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8 order-2 lg:order-2">
            <div>
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <Star className="fill-current h-4 w-4" />
                <span className="text-muted-foreground text-sm ml-2">(48 Reviews)</span>
              </div>
              <h1 className="text-4xl font-heading font-bold text-primary mb-4">Walking in Faith</h1>
              <p className="text-xl text-muted-foreground">
                A 40-day devotional guide to deepening your trust in God and discovering your true purpose.
              </p>
            </div>

            <div className="prose text-muted-foreground">
              <p>
                In "Walking in Faith," Pastor Kyle Reynolds invites you on a transformative journey. Through daily reflections, scripture readings, and practical applications, you'll learn how to silence the noise of the world and tune into God's voice.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-accent/20 p-1 text-accent-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <span>Discover your unique spiritual gifts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-accent/20 p-1 text-accent-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <span>Overcome fear and anxiety with truth</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-accent/20 p-1 text-accent-foreground">
                  <Check className="h-4 w-4" />
                </div>
                <span>Build a consistent prayer habit</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Buy on Amazon
              </Button>
              <Button size="lg" variant="outline">
                Download Sample Chapter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
