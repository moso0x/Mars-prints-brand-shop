import { motion } from "framer-motion";
import merch from "@/assets/merch.jpg";
import gifts from "@/assets/custom-gifts.jpg";
import event from "@/assets/event.png";
import delivery from "@/assets/delivery.jpg";
import eco from "@/assets/ecofriendly.jpg";
import designsupport from "@/assets/designsupport.jpg";
import offer from "@/assets/offer.jpg";
import printing from "@/assets/printing.jpg";
import branding from "@/assets/branding.jpg";
import signage from "@/assets/signage.jpg";
import cards from "@/assets/cards.jpg";

import stationery from "@/assets/stationery.jpg";

const features = [
  {
    image: merch,
    title: "Custom Merchandise & Branded Apparel",
    description:
      "Bring your vision to life with custom gear that makes a statement.",
  },
  {
    image: gifts,
    title: "Gifts & Promotional Items",
    description:
      "Custom mugs, calendars, and corporate gifts designed to impress.",
  },
  {
    image: designsupport,
    title: "Creative Design Support",
    description:
      "We help you create strong visuals that represent your brand.",
  },
  {
    image: printing,
    title: "Digital & Offset Printing",
    description:
      "Quality printing services for flyers, posters, and business materials.",
  },
  {
    image: branding,
    title: "Corporate Branding Solutions",
    description:
      "Transform your company’s presence with full visual identity design.",
  },
  {
    image: cards,
    title: "Business Cards & Stationery",
    description:
      "Professional cards and office stationery designed for impact.",
  },
  {
    image: signage,
    title: "Outdoor & Indoor Signage",
    description:
      "Eye-catching banners, displays, and wayfinding signs that attract.",
  },

  {
    image: stationery,
    title: "Corporate Stationery Printing",
    description:
      "Letterheads, envelopes, and branded office essentials to impress.",
  },
  {
    image: eco,
    title: "Eco-Friendly Campaigns",
    description:
      "Promote sustainability with reusable and recyclable materials.",
  },
  {
    image: event,
    title: "Event Promotion & Collaborations",
    description:
      "We brand, design, and promote events that leave a lasting impact.",
  },
  {
    image: delivery,
    title: "Nationwide & Regional Delivery",
    description:
      "Fast delivery across Kenya with expanding regional coverage.",
  },
  {
    image: offer,
    title: "Special Offers & Discounts",
    description:
      "Seasonal promotions and packages for startups and loyal clients.",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Explore Our Creative & Branding Solutions
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Jelimo Creatives, we provide a full range of branding, design, and
            printing services — from promotional items to complete brand
            identity development.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const shortDescription =
              feature.description.split(" ").slice(0, 3).join(" ") + "...";

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="p-3 text-center transition-colors duration-300 hover:bg-gray-50">
                  <h3 className="text-base font-semibold mb-1 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-snug mb-2">
                    {shortDescription}
                  </p>
                  <button
                    className="text-xs font-medium text-green-600 border border-green-600 rounded-full px-3 py-1 
                               hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold mb-4">
            Have an idea or project you’d like to bring to life?
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Let’s Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
};
