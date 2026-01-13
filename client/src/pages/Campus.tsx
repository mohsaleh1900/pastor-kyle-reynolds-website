import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Users, Clock, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  interest: z.string().min(1, "Please select an interest"),
  message: z.string().optional(),
});

export default function Campus() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "small-group",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Form Submitted!",
      description: "Thanks for connecting. We'll be in touch soon!",
    });
    form.reset();
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="w-full bg-slate-900 py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl font-heading font-bold text-white mb-4">Campus Ministry</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          A community for students to explore faith, ask hard questions, and find belonging.
        </p>
      </div>

      <div className="container px-4 md:px-6 mx-auto py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Weekly Gatherings</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg h-fit text-secondary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Tuesday Night Worship</h3>
                    <p className="text-muted-foreground mb-2">Join us for worship, teaching, and hanging out.</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7:00 PM</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Student Union, Room 302</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg h-fit text-secondary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Thursday Morning Prayer</h3>
                    <p className="text-muted-foreground mb-2">Start your day with prayer and coffee.</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8:00 AM</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Campus Coffee Shop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-xl border">
              <h3 className="font-bold text-lg mb-2">Why Join a Small Group?</h3>
              <p className="text-muted-foreground mb-4">
                Small groups are where real life happens. It's the best way to make friends and grow in your faith journey.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Men's Groups
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Women's Groups
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Co-ed Bible Studies
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-heading font-bold mb-6">Get Connected</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@university.edu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>I'm interested in...</FormLabel>
                      <FormControl>
                        <select 
                          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          {...field}
                        >
                          <option value="small-group">Joining a Small Group</option>
                          <option value="worship">Tuesday Night Worship</option>
                          <option value="coffee">Getting Coffee with a Leader</option>
                          <option value="other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any questions or specific requests?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </div>
  );
}
