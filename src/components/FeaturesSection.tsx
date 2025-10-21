import { motion } from "framer-motion";
import merch from "@/assets/merch.jpg"
import gifts from "@/assets/custom-gifts.jpg"
import event  from "@/assets/event.png"
import delivery from "@/assets/delivery.jpg"
import eco from "@/assets/ecofriendly.jpg"
import designsupport from "@/assets/designsupport.jpg"
import offer from "@/assets/offer.jpg"

const features = [
  {
    image: merch,
    title: "Custom Merchandise & Branded Apparel",
    description:
      "Bring your vision to life with custom gear that makes a statement. From T-shirts and hoodies to caps and uniforms, we design and produce apparel that proudly showcases your brand.",
  },
  {
    image: gifts,
    title: "Gifts & Promotional Items",
    description:
      "Leave a lasting impression with custom mugs, calendars, stationery, and unique corporate gifts. Every item is designed to connect, impress, and inspire.",
  },
  {
    image: designsupport,
    title: "Full Design Support",
    description:
      "Whether you're launching a new product or rebranding, our creative team helps you design merchandise that stands out — from concept to print-ready perfection.",
  },
  {
    image: event,
    title: "Event Promotion & Purpose-Driven Collaborations",
    description:
      "We specialize in promoting and partnering on events and campaigns that inspire action, build community, and amplify meaningful causes.",
  },
  {
    image: delivery,
    title: "Nationwide Reach",
    description:
      "We deliver across Kenya — bringing your brand to every corner of the country. Regional delivery is coming soon, expanding your reach even further.",
  },
  {
    image: eco,
    title: "Eco-Friendly & Social Impact Campaigns",
    description:
      "Champion sustainability and social causes through meaningful collaborations that promote positive change and responsible branding.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Intro */}
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
              className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay on Hover */}
              <motion.div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm">{feature.description}</p>
              </motion.div>
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
          <div className="flex justify-around ">
          
            <div>
              <img src={offer} alt="" className="h-[600px] flex mx-auto items-center justify-center" />
            </div>
                

          </div>
      
        </motion.div>
      </div>
    </section>
  );
};
