import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Play, Users, Calendar, ChevronRight, Mail } from "lucide-react";
import heroImage from "@assets/CRY05923_1_LW-X4-800x800_1768277415707.jpg";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Faith, Community, <br />
                  <span className="text-foreground">and Purpose.</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl font-light">
                  Welcome to the ministry of Pastor Kyle Reynolds. Dedicated to sharing the gospel, building authentic community, and equipping the next generation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sermons">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    <Play className="mr-2 h-4 w-4" /> Listen to Sermons
                  </Button>
                </Link>
                <Link href="/campus">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                    <Users className="mr-2 h-4 w-4" /> Join a Group
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full aspect-[3/4] lg:aspect-square"
              >
                <img
                  src={heroImage}
                  alt="Pastor Kyle Reynolds"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermons Preview */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl text-primary">Latest Messages</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Explore recent teachings from Sunday services and campus gatherings.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-video w-full bg-slate-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                    <Play className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="text-xs font-medium text-accent-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> January {10 + i}, 2025
                  </div>
                  <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">Finding Peace in Chaos</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    In a world that never stops, how do we find true rest? Join us as we explore biblical principles for peace.
                  </p>
                  <Button variant="link" className="px-0 w-fit mt-2 text-primary">
                    Watch Now <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/sermons">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">View All Sermons</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Book Promo Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl text-white">New Book Release</h2>
              <p className="text-primary-foreground/90 md:text-lg max-w-[500px]">
                "Walking in Faith" - A 40-day journey to deepen your trust in God and discover your true purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/book">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-48 h-72 bg-white/10 rounded shadow-2xl border border-white/20 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                <span className="text-white/50 font-heading font-bold transform -rotate-90">BOOK COVER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect/Campus Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="rounded-2xl bg-slate-50 border p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Get Connected</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8 text-lg">
              Life is better together. Whether you're a student looking for community or seeking spiritual mentorship, there's a place for you here.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
              <Link href="/campus">
                <div className="group cursor-pointer rounded-xl border bg-background p-6 hover:border-primary hover:shadow-md transition-all text-left">
                  <Users className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-bold text-lg mb-2">Campus Ministry</h3>
                  <p className="text-sm text-muted-foreground">Join our weekly gatherings and small groups on campus.</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
              <Link href="/contact">
                <div className="group cursor-pointer rounded-xl border bg-background p-6 hover:border-primary hover:shadow-md transition-all text-left">
                  <Mail className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-bold text-lg mb-2">Contact Kyle</h3>
                  <p className="text-sm text-muted-foreground">Have a question or prayer request? Reach out directly.</p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    Send message <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
