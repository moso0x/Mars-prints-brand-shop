import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";
import toast from "react-hot-toast";

import totebags from "@/assets/tote-bags-hero.jpg";
import calenders from "@/assets/calenders.jpg";
import custom_shirt from "@/assets/custom.jpg";
import flyers from "@/assets/a5flyer.jpg";
import rollup from "@/assets/rollup-banner.jpg";
import caps from "@/assets/caps.jpg";
import hoodie from "@/assets/hoodie.jpg";
import mounted from "@/assets/mounted-photo.jpg";
import corporate from "@/assets/corporate.jpg";
import mug from "@/assets/mugs.jpg";

const features = [
  { title: "Tote Bags Printing", price: "Starting at Ksh. 300", image: totebags },
  { title: "2026 Calendar Printing", price: "From Ksh. 100 per piece", image: calenders },
  { title: "Custom Shirt Printing", price: "From Ksh. 250 per card", image: custom_shirt },
  { title: "A5 Flyers Printing", price: "From Ksh. 150 per flyer", image: flyers },
  { title: "Caps Printing", price: "From Ksh. 200 per piece", image: caps },
  { title: "Roll-up Banner Printing", price: "From Ksh. 2000 per piece", image: rollup },
  { title: "Hoodies Printing", price: "From Ksh. 500 per piece", image: hoodie },
  { title: "Mounted Photos Printing", price: "From Ksh. 700", image: mounted },
  { title: "Custom Mugs Printing", price: "From Ksh. 400 per mug", image: mug },
  { title: "Corporate Gifts", price: "From Ksh. 580", image: corporate },
];

export const FeaturesSection = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  const handleWishlistToggle = (title: string) => {
    setWishlist((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );

    toast.success(
      wishlist.includes(title)
        ? "Removed from wishlist"
        : "Added to wishlist ❤️"
    );
  };

  const handleShare = (title: string) => {
    const shareUrl = `${window.location.origin}/product/${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")}`;

    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard 📋");
  };

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
          {/* Heading (unchanged size) */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Printing & Branding Solutions
          </h2>

          {/* Body text xs */}
          <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Jelimo Creatives, we provide a full range of branding, design, and
            printing services — from promotional items to complete brand identity
            development.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const shortDescription =
              feature.price.split(" ").slice(0, 3).join(" ") + "...";

            const slug = feature.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-");

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="rounded-xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer relative"
              >
                <div className="relative">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {/* Icons */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleWishlistToggle(feature.title)}
                      className="p-1.5 rounded-full bg-white/80 hover:bg-white shadow-md transition"
                    >
                      <Heart
                        size={16}
                        className={
                          wishlist.includes(feature.title)
                            ? "text-red-500 fill-red-500"
                            : "text-gray-700"
                        }
                      />
                    </button>

                    <button
                      onClick={() => handleShare(feature.title)}
                      className="p-1.5 rounded-full bg-white/80 hover:bg-white shadow-md transition"
                    >
                      <Share2 size={16} className="text-gray-700" />
                    </button>
                  </div>
                </div>

                <div className="p-3 text-center hover:bg-gray-50 transition-colors">
                  {/* Card heading (kept larger) */}
                  <h3 className="text-base font-semibold mb-1 text-primary">
                    {feature.title}
                  </h3>

                  {/* xs text */}
                  <p className="text-xs text-muted-foreground leading-snug mb-2">
                    {shortDescription}
                  </p>

                  <Link to={`/product/${slug}`}>
                    <button className="text-xs font-medium text-green-600 border border-white-600 rounded-full px-3 py-1 hover:bg-orange-600 hover:text-white transition-all duration-300">
                      Order now
                    </button>
                  </Link>
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
          {/* CTA heading kept larger */}
          <p className="text-base font-semibold mb-4">
            Have an idea or project you’d like to bring to life?
          </p>

          <a
            href="/contact"
            className="inline-block text-xs rounded-full bg-black text-white font-semibold px-6 py-3 transition"
          >
            Reach Us!
          </a>
        </motion.div>
      </div>
    </section>
  );
};
