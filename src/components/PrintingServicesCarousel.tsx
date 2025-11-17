import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import promotion1 from "@/assets/moreProducts-img/cap.jpg";
import promotion2 from "@/assets/moreProducts-img/tableBanner.jpg";
import promotion3 from "@/assets/moreProducts-img/teardrop.jpg";
import promotion4 from "@/assets/moreProducts-img/tshirt.jpg";
import promotion5 from "@/assets/moreProducts-img/umbrella.jpg";
import promotion6 from "@/assets/moreProducts-img/adhesive.jpg";

import service1 from "@/assets/moreProducts-img/Diaries.jpg";
import service2 from "@/assets/moreProducts-img/corporate2.jpg";
import service3 from "@/assets/moreProducts-img/reflectors.jpg";
import service4 from "@/assets/moreProducts-img/hoodie.jpg";
import service5 from "@/assets/moreProducts-img/caps12.jpg";
import trifold from "@/assets/moreProducts-img/trifold.jpg";
import pens from "@/assets/moreProducts-img/pens.jpg";
import bcards from "@/assets/moreProducts-img/bss-cards.jpg";
import babyshower from "@/assets/moreProducts-img/babyshower.jpg";

// Sample images for each printing type
const printingData = [
  {
    title: "Branded Promotional Items",
    images: [promotion2, promotion3, promotion4, promotion5, promotion6],
    description:
      "Boost your brand visibility with high-quality promotional merchandise tailored for campaigns, marketing events, and corporate identity.",
    points: [
      "Wide range of brandable merchandise",
      "Election & campaign promotional materials",
      "High-quality hats, caps, flags & banners",
      "Fast production & reliable delivery",
      "Affordable rates for bulk orders",
    ],
  },
  {
    title: "Apparel: T-shirts, Hoodies & Caps",
    images: [promotion1, service2, service3, service4, service5],
    description:
      "Premium apparel printing for businesses, events, staff uniforms, and promotional activities.",
    points: [
      "High-quality screen & DTG printing",
      "Bulk printing for corporate & events",
      "Reflectors, hoodies, caps & uniforms",
      "Durable prints that last long",
      "Custom designs for all occasions",
    ],
  },
  {
    title: "Stationery Printing",
    images: [babyshower, bcards, pens, trifold, service1],
    description:
      "Professional stationery printing for business branding, events, and personal projects.",
    points: [
      "Business cards, pens & notebooks",
      "Brochures, catalogs & corporate diaries",
      "Baby shower & birthday cards",
      "Gift bags, envelopes & custom invitations",
      "High-quality finishes & paper types",
    ],
  },
];

export default function PrintingServicesCarousel() {
  return (
    <div className="w-full py-16 px-4 space-y-16">
      <h2 className="text-4xl text-center mb-10">
        <span style={{ color: "#64B5F6" }}>Printing</span> |{" "}
        <span style={{ color: "#FF5C26" }}>Branding</span> |{" "}
        <span style={{ color: "#00FF66" }}>Design</span> Services
      </h2>

      {printingData.map((service, index) => (
        <ServiceRow key={index} service={service} />
      ))}
    </div>
  );
}

function ServiceRow({ service }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Auto-scroll every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-6xl mx-auto relative">
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>

      {/* Image carousel */}
      <div className="relative">
        {/* LEFT ARROW */}
        <motion.button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md rounded-full p-2"
          whileHover={{ scale: 1.2, backgroundColor: "#E5E7EB" }}
        >
          <ArrowLeft size={24} />
        </motion.button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth"
        >
          {service.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`${service.title} ${i + 1}`}
              className="w-70 h-40 md:w-56 md:h-44 flex-shrink-0 object-cover rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        {/* RIGHT ARROW */}
        <motion.button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 shadow-md rounded-full p-2"
          whileHover={{ scale: 1.2, backgroundColor: "#E5E7EB" }}
        >
          <ArrowRight size={24} />
        </motion.button>
      </div>

      {/* Bullet Points */}
      <ul className="mb-1 pt-6 grid grid-cols-1 gap-y-1 text-xs font-semibold text-left text-black leading-tight">
        {service.points?.map((item, i) => (
          <li key={i} className="flex items-start gap-1">
            <span className="text-green-500 text-sm leading-none mt-[2px]">
              ✔
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Explore Button */}
      <div className="flex justify-center mt-6">
        <motion.button
          className="bg-black text-xs text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 overflow-hidden relative"
          whileHover={{ backgroundColor: "#1E40AF" }}
        >
          <span>Explore & Shop.</span>
          <motion.span
            className="inline-block"
            initial={{ x: -2, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <ArrowRight size={20} />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
