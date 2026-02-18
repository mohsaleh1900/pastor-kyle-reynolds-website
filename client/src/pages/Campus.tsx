import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, CheckCircle2, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Campus() {
  const activities = [
    "Bible study that builds understanding and habits",
    "Prayer and accountability in real community",
    "One-on-one mentorship and discipleship",
    "Outreach and service opportunities",
    "Space for honest questions and real growth",
  ];

  // PDF URL served from: client/public/docs/ABC-Campus-Ministry.pdf
  const campusPdfUrl = "/docs/ABC-Campus-Ministry.pdf";

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="w-full bg-slate-900 py-20 md:py-32 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Campus Ministry & Outreach
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            College can be high-pressure and isolating. This ministry exists to help students and young adults grow in Christ through Scripture, friendship, prayer, and purposeful life.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 font-bold shadow-xl"
              >
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto py-16 md:py-24">
        {/* NEW: Campus Ministry Update (PDF content + download) */}
        <section className="mb-16 md:mb-20">
          <div className="rounded-2xl border bg-card shadow-sm p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary">
                  ABC Ohio Campus Ministry Update
                </h2>
                <p className="text-muted-foreground mt-3 max-w-3xl">
                  Here’s a snapshot of what God has been doing through the campus ministry; where we’re headed, how it began, outreach efforts, and ways to get involved.
                </p>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold">
                <a href={campusPdfUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl bg-muted/20 border">
                <h3 className="text-xl font-heading font-bold mb-3">Looking Forward (2025–2026)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Expand outreach at UC Blue Ash and UC Main.</li>
                  <li>• Kick off the semester with a Welcome Back Bash and meet new students.</li>
                  <li>• Build consistent discipleship rhythms; Scripture, prayer, and leadership development.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-muted/20 border">
                <h3 className="text-xl font-heading font-bold mb-3">How It Began (2024–2025)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Started with simple conversations; tables, bus stops, and invitations.</li>
                  <li>• Grew through Bible studies and consistent presence on campus.</li>
                  <li>• Became an official student organization; with real momentum.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-muted/20 border">
                <h3 className="text-xl font-heading font-bold mb-3">Mission Trip; Montreal, Quebec</h3>
                <p className="text-muted-foreground">
                  A team served through local partnerships, outreach, and service projects; strengthening
                  both the students’ unity and their confidence in sharing faith.
                </p>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  Key verse: Philippians 1:6
                </p>
              </div>

              <div className="p-6 rounded-xl bg-muted/20 border">
                <h3 className="text-xl font-heading font-bold mb-3">CMDA at University of Cincinnati</h3>
                <p className="text-muted-foreground">
                  A partnership focused on discipling medical and healthcare students through weekly study,
                  community, and periodic lunch talks from Christian professionals.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="p-6 rounded-xl border">
                <h3 className="text-xl font-heading font-bold mb-3">Mission</h3>
                <p className="text-muted-foreground">
                  To reach students with the gospel and disciple them toward spiritual maturity; so they can
                  live faithfully and influence others for Christ.
                </p>
              </div>

              <div className="p-6 rounded-xl border">
                <h3 className="text-xl font-heading font-bold mb-3">Vision</h3>
                <p className="text-muted-foreground">
                  To raise up students who know Scripture, walk in community, and live on mission; on campus
                  and beyond.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 rounded-xl bg-muted/20 border">
              <h3 className="text-xl font-heading font-bold mb-3">How We Carry Out the Mission</h3>
              <div className="grid gap-2 md:grid-cols-2 text-muted-foreground">
                <div>• Bible studies and teaching</div>
                <div>• Community and accountability</div>
                <div>• Prayer and spiritual formation</div>
                <div>• Leadership development</div>
                <div>• Outreach and service</div>
                <div>• Mentorship and discipleship</div>
              </div>
            </div>

            <div className="mt-10 text-sm text-muted-foreground">
              For more information, reach out via the Contact page; or email Pastor Kyle directly.
            </div>
          </div>
        </section>

        {/* Existing content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">What We Do</h2>
              <div className="space-y-6">
                {activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition-colors"
                  >
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
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-secondary" /> 7:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-secondary" /> Student Union, Room 302
                  </div>
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
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-secondary" /> 8:00 AM
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-secondary" /> Campus Coffee Shop
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End existing content */}
      </div>
    </div>
  );
}
