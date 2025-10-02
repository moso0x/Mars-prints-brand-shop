import { Card } from "@/components/ui/card";
import { Printer, FileText, Flag, Palette } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Business Cards",
    description: "Premium business cards that make lasting first impressions with high-quality printing and design.",
  },
  {
    icon: FileText,
    title: "Flyers & Brochures",
    description: "Eye-catching marketing materials that effectively communicate your message to your audience.",
  },
  {
    icon: Flag,
    title: "Banners & Signage",
    description: "Large format printing for banners, posters, and signage that demand attention.",
  },
  {
    icon: Palette,
    title: "Branding Packages",
    description: "Complete brand identity solutions including logos, stationery, and marketing collateral.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive printing and branding solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border-2 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
