import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageTransition } from "@/components/PageTransition";
import toast from "react-hot-toast";

const Feedback = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your feedback!", {
      icon: '✨',
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Feedback</h1>
            <p className="text-muted-foreground mb-8">
              We'd love to hear from you! Share your experience with us.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              
              <div>
                <Label htmlFor="feedback">Your Feedback</Label>
                <Textarea 
                  id="feedback" 
                  placeholder="Tell us what you think..." 
                  rows={6}
                />
              </div>
              
              <Button className="w-full" type="submit">Submit Feedback</Button>
            </form>
          </div>
        </main>
        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default Feedback;
