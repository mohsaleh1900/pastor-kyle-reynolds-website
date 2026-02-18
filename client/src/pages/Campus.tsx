import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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
    defaultValues: { name: "", email: "", interest: "small-group", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const res = await apiRequest("POST", "/api/campus-signup", values);
      return res.json();
    },
    onSuccess: (data) => {
      toast({ title: "Form Submitted!", description: data.message });
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    },
  });

  const activities = [
    "Bible study that builds understanding and habits",
    "Prayer and accountability in real community",
    "One-on-one mentorship and discipleship",
    "Outreach and service opportunities",
    "Space for honest questions and real growth"
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-slate-900 py-20 md:py-32 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Campus Ministry & Outreach</h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            College can be high-pressure and isolating. This ministry exists to help students and young adults grow in Christ through Scripture, friendship, prayer, and purposeful life.
          </p>
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

            <h2 className="text-3xl font-heading font-bold text-primary mb-8">Weekly Gatherings</h2>
            <div className="grid gap-6">
              <div className="p-8 rounded-2xl border bg-card shadow-sm">
                <div className="flex gap-4 items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary"><Users className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold font-heading">Tuesday Night Worship</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-secondary" /> 7:00 PM</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-secondary" /> Student Union, Room 302</div>
                </div>
              </div>
              <div className="p-8 rounded-2xl border bg-card shadow-sm">
                <div className="flex gap-4 items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary"><Users className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold font-heading">Thursday Morning Prayer</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-secondary" /> 8:00 AM</div>
                  <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-secondary" /> Campus Coffee Shop</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 shadow-sm sticky top-24">
            <h2 className="text-2xl font-heading font-bold mb-6">Get Connected</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input placeholder="john@university.edu" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="interest" render={({ field }) => (
                  <FormItem>
                    <FormLabel>I'm interested in...</FormLabel>
                    <FormControl>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" {...field}>
                        <option value="small-group">Joining a Small Group</option>
                        <option value="worship">Tuesday Night Worship</option>
                        <option value="coffee">Getting Coffee with a Leader</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl><Textarea placeholder="Any questions or specific requests?" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={mutation.isPending}>
                  {mutation.isPending ? "Sending..." : "Get Connected"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
