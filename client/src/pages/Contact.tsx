import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Use the form below to ask a question, request prayer, invite Kyle to
            speak, or connect about ministry partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-12">
            <div className="p-8 rounded-2xl bg-slate-50 border border-primary/5">
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-heading font-bold">
                  Speaking Requests
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                For speaking or preaching requests, include the event date,
                location, audience, and topic idea.
              </p>
            </div>

            <a
              href="mailto:kylereynolds@kenwoodbaptist.org"
              className="flex items-center gap-4 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
              aria-label="Email Kyle Reynolds"
            >
              <Mail className="h-6 w-6" />
              <span className="text-lg font-medium">
                kylereynolds@kenwoodbaptist.org
              </span>
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-card border rounded-2xl p-8 shadow-xl shadow-primary/5">
            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfQlW2bVBgkj4-XrbzKA6caWeJLo2Q1PbLrO4r27tJiyqs1uQ/viewform?embedded=true"
                className="w-full"
                height="1100"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>

              <p className="text-sm text-muted-foreground mt-4">
                Having trouble viewing the form?{" "}
                <a
                  className="underline text-primary"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfQlW2bVBgkj4-XrbzKA6caWeJLo2Q1PbLrO4r27tJiyqs1uQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open it in a new tab.
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
