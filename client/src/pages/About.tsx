import heroImage from "@assets/CRY05923_1_LW-X4-800x800_1768277415707.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const values = [
    "Bible teaching that is clear and actionable",
    "Discipleship that shapes habits, not just opinions",
    "Community that creates accountability and care",
    "Campus outreach that meets students where they are",
    "A faith that withstands pressure, distraction, and isolation"
  ];

  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
             <img
              src={heroImage}
              alt="Pastor Kyle Reynolds"
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-heading font-bold text-primary mb-6">About Kyle</h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                I serve as a pastor with a focus on college students and young adults. My calling is to teach the Scriptures clearly, disciple patiently, and help people follow Jesus with integrity in everyday life.
              </p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-2xl border border-primary/10">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To help young adults know Christ, love the Church, and live out a steady faith through Scripture, community, and practical obedience.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-primary">Our Values</h3>
              <ul className="space-y-3">
                {values.map((value, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 italic text-primary font-heading text-xl">
              "Truth becomes sustainable when it becomes lived—and lived together."
            </div>

            <div className="pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
