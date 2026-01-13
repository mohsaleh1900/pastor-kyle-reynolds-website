import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Campus() {
  const activities = [
    "Bible study that builds understanding and habits",
    "Prayer and accountability in real community",
    "One-on-one mentorship and discipleship",
    "Outreach and service opportunities",
    "Space for honest questions and real growth"
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="w-full bg-slate-900 py-20 md:py-32 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Campus Ministry & Outreach</h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            College can be high-pressure and isolating. This ministry exists to help students and young adults grow in Christ through Scripture, friendship, prayer, and purposeful life.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 font-bold shadow-xl">
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">What We Do</h2>
              <div className="space-y-6">
                {activities.map((activity, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                    <p className="text-lg text-muted-foreground leading-snug">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">Weekly Gatherings</h2>
            <div className="grid gap-6">
              <div className="p-8 rounded-2xl border bg-card shadow-sm">
                <div className="flex gap-4 items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">Tuesday Night Worship</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-secondary" /> 7:00 PM</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-secondary" /> Student Union, Room 302</div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border bg-card shadow-sm">
                <div className="flex gap-4 items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading">Thursday Morning Prayer</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-secondary" /> 8:00 AM</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-secondary" /> Campus Coffee Shop</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
