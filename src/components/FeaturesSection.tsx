import { Shield, Smile, Package } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Superior Quality",
    description: "'Satisfaction guaranteed' is all fine and dandy. But we'd much rather you be absolutely THRILLED with your order, so we go to great lengths to make that happen.",
  },
  {
    icon: Smile,
    title: "Easy Experience",
    description: "We offer on-trend designs, intuitive tools, and support options that enable any small business owner to create expertly designed marketing – even if they're not a design expert.",
  },
  {
    icon: Package,
    title: "Solutions for Everyone",
    description: "We give your business the right assortment of products and options. We don't overwhelm, but we don't come up short. And it's all at the right price.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Creative Marketing Materials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step up your marketing strategy with marketing materials that really stand out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
