import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Kimani",
    role: "Business Owner",
    content: "Betty Jelimo Printing transformed our brand identity completely. The quality of their work is outstanding and the team is incredibly professional.",
    rating: 5,
  },
  {
    name: "James Omondi",
    role: "Marketing Director",
    content: "Fast turnaround, excellent quality, and great customer service. They've been our go-to printing partner for the past 3 years.",
    rating: 5,
  },
  {
    name: "Grace Muthoni",
    role: "Event Organizer",
    content: "From banners to business cards, every project has been handled with care and delivered on time. Highly recommend their services!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
