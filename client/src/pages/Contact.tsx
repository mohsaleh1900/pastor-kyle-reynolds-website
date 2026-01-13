import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you as soon as possible.",
    });
    form.reset();
  }

  return (
    <div className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Use the form below to ask a question, request prayer, invite Kyle to speak, or connect about ministry partnership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div className="p-8 rounded-2xl bg-slate-50 border border-primary/5">
              <div className="flex gap-4 items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-heading font-bold">Speaking Requests</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                For speaking or preaching requests, include the event date, location, audience, and topic idea.
              </p>
            </div>

            <div className="flex items-center gap-4 text-primary">
              <Mail className="h-6 w-6" />
              <span className="text-lg font-medium">hello@kyle.com</span>
            </div>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-xl shadow-primary/5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="rounded-lg h-12" {...field} />
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
                      <FormLabel className="font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" className="rounded-lg h-12" {...field} />
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
                      <FormLabel className="font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can I help you?" 
                          className="min-h-[150px] rounded-lg"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12">
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
