import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Book() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[480px] bg-primary rounded-r-2xl rounded-l-md shadow-2xl border-l-8 border-l-primary-foreground/20 flex flex-col items-center justify-center p-12 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="w-16 h-1 bg-white/30 mb-8" />
              <h2 className="text-3xl font-heading font-bold mb-4 tracking-tighter">[BOOK TITLE]</h2>
              <div className="flex-1" />
              <p className="font-bold text-lg uppercase tracking-widest">Kyle Reynolds</p>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl font-heading font-bold text-primary mb-4 leading-tight">[Book Title Placeholder]</h1>
            <p className="text-2xl text-foreground/80 font-light leading-snug">
              A guide for young adults seeking clarity, courage, and a faith that holds under pressure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This book focuses on building a steady Christian life with real habits: Scripture, prayer, community, and wise decisions. It addresses identity, anxiety, relationships, purpose, and faithfulness in a distracted age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                Buy on Amazon
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
