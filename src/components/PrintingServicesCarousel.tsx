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
import { useInView } from "react-intersection-observer";
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
  {/* Title Section with Avalanche Scroll Reveal */}
<motion.div
  className="text-center mb-12"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }} 
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.h2
    className="text-5xl font-semibold tracking-wide"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <span className="text-[#64B5F6]">Printing</span> |{" "}
    <span className="text-[#FF5C26]">Branding</span> |{" "}
    <span className="text-[#00FF66]">Design</span> Services
  </motion.h2>

  {/* Description */}
  <motion.p
    className="mt-4 text-gray-500 text-base max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.35 }}
  >
    Explore our wide range of printing, branding, and design services to give
    your business a professional and creative edge.
  </motion.p>

  {/* Underline */}
  <motion.div
    className="mt-4 flex justify-center"
    initial={{ opacity: 0, scaleX: 0 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
  >
    <div className="w-32 h-[4px] bg-gray-900 rounded-full"></div>
  </motion.div>
</motion.div>

      {printingData.map((service, index) => (
        <ServiceRow key={index} service={service} />
      ))}
    </div>
  );
}

function ServiceRow({ service }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // AVALANCHE Scroll Trigger
  const { ref: viewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const avalanche = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

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
    <motion.div
      ref={viewRef}
      variants={avalanche}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={0}
      className="bg-white shadow-lg rounded-2xl p-6 max-w-6xl mx-auto relative"
    >
      {/* TITLE */}
      <motion.h3
        variants={avalanche}
        custom={1}
        className="text-2xl font-semibold mb-4"
      >
        {service.title}
      </motion.h3>

      <motion.p
        variants={avalanche}
        custom={2}
        className="text-gray-600 mb-6"
      >
        {service.description}
      </motion.p>

      {/* CAROUSEL */}
      <motion.div
        variants={avalanche}
        custom={3}
        className="relative"
      >
        <motion.button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white shadow-md rounded-full p-2"
          whileHover={{ scale: 1.2, backgroundColor: "#1E40AF" }}
        >
          <ArrowLeft size={22} />
        </motion.button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth py-2">
          {service.images.map((img, i) => (
            <motion.div
              key={i}
              variants={avalanche}
              custom={4 + i * 0.2}
              className="flex-shrink-0 w-48 md:w-52"
            >
              <motion.img
                src={img}
                alt={service.labels[i] || `${service.title} ${i + 1}`}
                className="w-full h-auto max-h-40 rounded-xl shadow-lg object-contain"
                whileHover={{ scale: 1.03 }}
              />
              <p className="text-center mt-2 text-xs font-semibold text-gray-800">
                {service.labels[i]}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white shadow-md rounded-full p-2"
          whileHover={{ scale: 1.2, backgroundColor: "#1E40AF" }}
        >
          <ArrowRight size={22} />
        </motion.button>
      </motion.div>

      {/* BULLET POINTS */}
      <motion.ul
        variants={avalanche}
        custom={6}
        className="mb-1 pt-12 grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4 text-sm font-semibold text-left text-black leading-tight"
      >
        {service.points?.map((item, i) => (
          <motion.li
            key={i}
            variants={avalanche}
            custom={7 + i * 0.1}
            className="flex items-start gap-2"
          >
            <span className="text-green-500 text-base leading-none mt-[2px]">✔</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* BUTTON */}
      <motion.div
        variants={avalanche}
        custom={8}
        className="flex justify-center mt-6"
      >
        <motion.div
          className="relative px-7 py-2 rounded-full font-semibold hover:bg-blue-500 flex items-center gap-2 overflow-hidden text-xs text-white bg-black group cursor-pointer"
        >
          <motion.div
            className="absolute inset-0 bg-blue-600 origin-right z-0"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
          />

          <Link
            to="/shop"
            className="relative z-10 flex items-center gap-2"
          >
            <span>Explore & Shop.</span>

            <motion.span
              className="inline-block origin-left"
              initial={{ scaleX: 1 }}
              whileHover={{ scaleX: 1.5 }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
