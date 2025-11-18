import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import promotion1 from "@/assets/moreProducts-img/cap.jpg";
import promotion2 from "@/assets/moreProducts-img/tableBanner.jpg";
import promotion3 from "@/assets/moreProducts-img/teardrop.jpg";
import promotion4 from "@/assets/moreProducts-img/tshirt.jpg";
import promotion5 from "@/assets/moreProducts-img/umbrella.jpg";
import promotion6 from "@/assets/moreProducts-img/adhesive.jpg";
import promotion7 from "@/assets/moreProducts-img/poupup-banner.jpg";
import promotion8 from "@/assets/moreProducts-img/custom-gifts.jpg";
import promotion9 from "@/assets/moreProducts-img/corporate1.jpg";


import service1 from "@/assets/moreProducts-img/Diaries.jpg";
import service2 from "@/assets/moreProducts-img/corporate2.jpg";
import promotion10 from "@/assets/moreProducts-img/branding.jpg";

import hoodie from "@/assets/moreProducts-img/service1.jpg";
import calendar from "@/assets/moreProducts-img/calenders.jpg";

import service3 from "@/assets/moreProducts-img/reflectors.jpg";
import service4 from "@/assets/moreProducts-img/hoodie.jpg";
import service5 from "@/assets/moreProducts-img/caps12.jpg";
import service7 from "@/assets/moreProducts-img/caps.jpg";
import trifold from "@/assets/moreProducts-img/trifold.jpg";
import pens from "@/assets/moreProducts-img/pens.jpg";
import bcards from "@/assets/moreProducts-img/bss-cards.jpg";
import babyshower from "@/assets/moreProducts-img/babyshower.jpg";
import reciept from "@/assets/moreProducts-img/receipt.jpg";
import { Link } from "react-router-dom";
import shop from "../pages/Shop";
// Sample data
const printingData = [
  {
    title: "Branded Promotional Items",
    images: [promotion2, promotion3, promotion4, promotion5, promotion6,promotion9, promotion7, promotion8, promotion10, service2],
    description:
      "Boost your brand visibility with high-quality promotional merchandise tailored for campaigns, marketing events, and corporate identity.",
        labels: [
      "Table Banner",
      "Teardrop Banner",
      "T-Shirt Print",
      "Branded Umbrella",
      "Adhesive Stickers"
    ],
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
    images: [promotion1,  service3, service4, service5, service7, hoodie],
    description:
      "Premium apparel printing for businesses, events, staff uniforms, and promotional activities.",
             labels: [
      "Custom Cap",
      "Corporate Uniform",
      "Reflective Jacket",
      "Hoodie Print",
      "Branded Caps Set"
    ],
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
    images: [babyshower, bcards, pens, trifold, service1, reciept, calendar],
    description:
      "Professional stationery printing for business branding, events, and personal projects.",
   labels: [
      "Baby Shower Cards",
      "Business Cards",
      "Custom Pens",
      "Tri-Fold Brochure",
      "Corporate Diaries"
    ],
   
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
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold tracking-wide">
          <span className="text-[#64B5F6]">Printing</span> |{" "}
          <span className="text-[#FF5C26]">Branding</span> |{" "}
          <span className="text-[#00FF66]">Design</span> Services
        </h2>

        {/* Small description below title */}
        <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
          Explore our wide range of printing, branding, and design services to give your business a professional and creative edge.
        </p>

        {/* Underline */}
        <div className="mt-4 flex justify-center">
          <div className="w-32 h-[4px] bg-gray-900 rounded-full"></div>
        </div>
      </div>

      {printingData.map((service, index) => (
        <ServiceRow key={index} service={service} />
      ))}
    </div>
  );
}

function ServiceRow({ service }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 max-w-6xl mx-auto relative">
      <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>

      {/* IMAGE CAROUSEL */}
      <div className="relative">
            <motion.button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white shadow-md rounded-full p-2"
          whileHover={{ scale: 1.2, backgroundColor: "#1E40AF" }} // darker blue hover
        >
          <ArrowLeft size={22} />
        </motion.button>

                      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth py-2">
                {service.images.map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-48 md:w-52">
                    <motion.img
                      src={img}
                      alt={service.labels[i] || `${service.title} ${i + 1}`}
                      className="w-full h-auto max-h-40 rounded-xl shadow-lg object-contain"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Custom Label */}
                    <p className="text-center mt-2 text-xs font-semibold text-gray-800">
                      {service.labels[i]}
                    </p>
                  </div>
                ))}
              </div>


              <motion.button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white shadow-md rounded-full p-2"
            whileHover={{ scale: 1.2, backgroundColor: "#1E40AF" }}
          >
            <ArrowRight size={22} />
          </motion.button>
      </div>

      {/* BULLET POINTS */}
      <ul className="mb-1 pt-12 grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4 text-sm font-semibold text-left text-black leading-tight">
  {service.points?.map((item, i) => (
    <li key={i} className="flex items-start gap-2">
      <span className="text-green-500 text-base leading-none mt-[2px]">✔</span>
      <span>{item}</span>
    </li>
  ))}
</ul>

      {/* EXPLORE BUTTON WITH CARET & FILL */}
      <div className="flex justify-center mt-6">
        <motion.button
          className="relative px-7 py-2 rounded-full font-semibold hover:bg-blue-500 flex items-center gap-2 overflow-hidden text-xs text-white bg-black group"
        >
          {/* Blue fill from right */}
          <motion.div
            className="absolute inset-0 bg-blue-600 origin-right z-0"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            
          />
         <a
            href="@/pages/Shop"
           
          >
               <span className="relative z-10 ">Explore & Shop.</span>
          </a>
          {/* Text */}
       
          {/* Stretching caret */}
          <motion.span
            className="relative z-10 inline-block origin-left"
            initial={{ scaleX: 1 }}
            whileHover={{ scaleX: 1.5 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            <ArrowRight size={20} />
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
