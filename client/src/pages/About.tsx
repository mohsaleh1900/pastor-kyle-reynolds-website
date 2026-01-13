import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/CRY05923_1_LW-X4-800x800_1768277415707.jpg";

export default function About() {
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="relative aspect-square lg:aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
             <img
              src={heroImage}
              alt="Pastor Kyle Reynolds"
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-heading font-bold text-primary mb-2">About Kyle Reynolds</h1>
              <p className="text-xl text-muted-foreground font-light">Pastor, Author, Speaker</p>
            </div>
            
            <div className="prose prose-lg text-muted-foreground">
              <p>
                Kyle Reynolds has served in ministry for over 10 years, with a passion for reaching the next generation and equipping them to live out their faith in a complex world.
              </p>
              <p>
                He currently serves as the Lead Campus Pastor at [Church Name], where he leads a vibrant community of young adults and students. His teaching style is known for being authentic, biblical, and practical.
              </p>
              <p>
                Kyle holds a Master's of Divinity from [Seminary Name] and is the author of "Walking in Faith." When he's not preaching or writing, you can find him hiking, reading, or spending time with his family.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To see lives transformed by the gospel of Jesus Christ, building a community where everyone is welcome, known, and loved.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Authentic Community</li>
                <li>Biblical Teaching</li>
                <li>Intentional Discipleship</li>
                <li>Compassionate Outreach</li>
              </ul>
            </div>

            <div className="pt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
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
