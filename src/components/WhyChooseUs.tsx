import { CheckCircle2, Clock, Award, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the best materials and latest printing technology to ensure exceptional results.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality. Most orders ready within 48 hours.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our experienced team is always ready to help with design advice and technical support.",
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee on all our services.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Betty Jelimo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Excellence in every print, dedication in every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-background rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <reason.icon className="h-7 w-7 text-accent-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
