import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Book() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="flex justify-center lg:justify-end">
            <div className="w-[320px]">
              <img
                src="/books/dont-quit-cover.jpg"
                alt="Don’t Quit book cover by Kyle Reynolds"
                className="w-full h-auto rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>


          <div className="space-y-8">
            <h1 className="text-4xl font-heading font-bold text-primary mb-4 leading-tight">
              Don’t Quit
            </h1>

            <p className="text-2xl text-foreground/80 font-light leading-snug">
              A guide for young adults seeking clarity, courage, and a faith that holds
              under pressure.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This book focuses on building a steady Christian life with real habits:
              Scripture, prayer, community, and wise decisions. It addresses identity,
              anxiety, relationships, purpose, and faithfulness in a distracted age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8"
              >
                <a
                  href="https://www.amazon.com/Dont-Quit-Jason-Merkle-Story/dp/1973668955"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Amazon
                </a>
              </Button>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 px-8"
                >
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
