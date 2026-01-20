import heroImage from "@assets/CRY05923_1_LW-X4-800x800_1768277415707.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Play,
  Users,
  Calendar,
  ChevronRight,
  Mail,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Sermons", "Devotionals", "Campus Ministry", "Book"].map(
                    (badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {badge}
                      </span>
                    ),
                  )}
                </div>
                <h1 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Pastor Kyle Reynolds
                </h1>
                <p className="text-xl font-heading text-foreground/80 font-medium">
                  Scripture-centered teaching for college students and young
                  adults.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-lg font-light leading-relaxed">
                  My aim is to help young adults build a durable, lifelong faith
                  in a multi-faceted world competing for our attention. Through
                  sermons, devotionals and campus ministry, my aim is simple:
                  teach the Bible clearly, live it out faithfully, and build a
                  lasting community of Christian disciples who urgently share
                  the Gospel with others.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="/sermons">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                  >
                    <Play className="mr-2 h-4 w-4" /> Listen to Sermons
                  </Button>
                </Link>
                <Link href="/campus">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
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
                className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md w-full aspect-square"
              >
                <img
                  src={heroImage}
                  alt="Pastor Kyle Reynolds"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="w-full py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl text-primary">
              Start Here
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              If you’re new, begin with a recent message, then take the next
              step toward community. Faith grows best when truth becomes
              practice and practice becomes shared life.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Latest Sermon",
                text: "A practical message to help you take the next faithful step.",
                button: "Watch / Listen",
                icon: Play,
                href: "/sermons",
              },
              {
                title: "Campus Ministry",
                text: "Find community with students and young adults who want to grow in Christ.",
                button: "Get Connected",
                icon: Users,
                href: "/campus",
              },
              {
                title: "Devotionals",
                text: "Short Scripture-rooted reflections for real life and real decisions.",
                button: "Read the Blog",
                icon: BookOpen,
                href: "/blog",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col p-8 rounded-2xl border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {card.text}
                </p>
                <Link href={card.href}>
                  <Button
                    variant="link"
                    className="px-0 w-fit text-primary font-bold"
                  >
                    {card.button} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Promo Section */}
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl text-white">
                Featured Book
              </h2>
              <p className="text-primary-foreground/90 md:text-lg max-w-[500px] leading-relaxed">
                A guide for young adults who want clarity, courage, and a faith
                that holds under pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/book">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90 font-bold"
                  >
                    Learn More
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Buy the Book
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10, rotate: 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-48 sm:w-56 md:w-64 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/20"
              >
                <img
                  src="/books/dont-quit-cover.jpg"
                  alt="Don't Quit book cover"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="w-full py-16 md:py-24 border-t">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
            Monthly Updates
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Get sermon highlights, devotionals, and campus ministry updates once
            a month. No spam; unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
