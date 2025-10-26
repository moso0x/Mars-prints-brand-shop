import { Header } from "@/components/Header";
import { FooterNew } from "@/components/FooterNew";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageTransition } from "@/components/PageTransition";
import toast from "react-hot-toast";
import feedback from "@/assets/feedback.png";

const Feedback = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your feedback!", {
      icon: "✨",
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8FBFF] flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div
            className="max-w-2xl mx-auto bg-white border-2 border-[#005DFF]/40 
                       rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 
                       p-8 outline outline-1 outline-[#00D45A]/30 hover:outline-[#00D45A]/60"
          >
            {/* Image */}
            <div className="flex justify-center mb-4">
              <img
                src={feedback}
                className="w-[100px] drop-shadow-md"
                alt="Feedback illustration"
              />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-center text-[#005DFF] mb-4">
              Feedback
            </h1>
            <p className="text-center text-gray-600 mb-8">
              We'd love to hear from you! Share your experience with us.
            </p>

            {/* Feedback Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="font-semibold text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="focus-visible:ring-[#005DFF]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="font-semibold text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="focus-visible:ring-[#005DFF]"
                />
              </div>

              <div>
                <Label htmlFor="feedback" className="font-semibold text-gray-700">
                  Your Feedback
                </Label>
                <Textarea
                  id="feedback"
                  placeholder="Tell us what you think..."
                  rows={6}
                  className="focus-visible:ring-[#005DFF]"
                />
              </div>

              <Button
                className="w-full bg-[#00D45A] hover:bg-[#00B84F] text-white font-semibold 
                           rounded-full py-2 transition-all duration-300 shadow-md hover:shadow-lg"
                type="submit"
              >
                Submit Feedback
              </Button>
            </form>
          </div>
        </main>
        <FooterNew />
      </div>
    </PageTransition>
  );
};

export default Feedback;
