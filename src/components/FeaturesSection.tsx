import { Shirt, Gift, Palette, Globe, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shirt,
    color: "text-blue-500",
    title: "Custom Merchandise & Branded Apparel",
    description:
      "Bring your vision to life with custom gear that makes a statement. From T-shirts and hoodies to caps and uniforms, we design and produce apparel that proudly showcases your brand.",
  },
  {
    icon: Gift,
    color: "text-green-500",
    title: "Gifts & Promotional Items",
    description:
      "Leave a lasting impression with custom mugs, calendars, stationery, and unique corporate gifts. Every item is designed to connect, impress, and inspire.",
  },
  {
    icon: Palette,
    color: "text-yellow-500",
    title: "Full Design Support",
    description:
      "Whether you're launching a new product or rebranding, our creative team helps you design merchandise that stands out — from concept to print-ready perfection.",
  },
  {
    icon: Users,
    color: "text-blue-600",
    title: "Event Promotion & Purpose-Driven Collaborations",
    description:
      "We specialize in promoting and partnering on events and campaigns that inspire action, build community, and amplify meaningful causes.",
  },
  {
    icon: Globe,
    color: "text-green-600",
    title: "Nationwide Reach",
    description:
      "We deliver across Kenya — bringing your brand to every corner of the country. Regional delivery is coming soon, expanding your reach even further.",
  },
  {
    icon: Leaf,
    color: "text-yellow-600",
    title: "Eco-Friendly & Social Impact Campaigns",
    description:
      "Champion sustainability and social causes through meaningful collaborations that promote positive change and responsible branding.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Let’s Create Together — From Custom Merchandise to Meaningful Events
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Jelimo Creatives, we help brands make real-world connections
            through personalized merchandise, inspired designs, and impactful
            collaborations. Whether you’re launching a clothing line, promoting
            an event, or supporting a cause — we bring your ideas to life.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mx-auto mb-4">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold mb-4">
            Have an idea for a product line, an event, or a campaign?
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Us to Start Your Creative Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
};
