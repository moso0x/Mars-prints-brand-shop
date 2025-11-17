import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import apparels from "@/assets/headers-adverts-img/caps.jpeg"
import events from "@/assets/headers-adverts-img/event.jpeg"
import tshirt from "@/assets/headers-adverts-img/tshirts.jpg"
import mug from "@/assets/headers-adverts-img/mug.png"
interface AdvertProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link?: string;
  animation?: string;
}

const advertisements: AdvertProps[] = [
  {
    id: 1,
    image: apparels,
    title: "Apparel: T-shirts, hoodies, and caps",
    subtitle: "Designed to be worn with pride!",
    link: "/products",
    animation: "slideRight",
  },
  {
    id: 2,
    image: mug,
    title: "Custom mugs, calendars, stationery",
    subtitle: "Corporate gifts that leave a lasting impression",
    link: "/services",
    animation: "fadeUp",
  },
  {
    id: 3,
    image: tshirt,
    title: "Custom Apparels ",
    subtitle: "Inspiring a spirit of discovery!",
    link: "/branding",
    animation: "zoomIn",
  },
  {
    id: 3,
    image: tshirt,
    title: "Custom Apparels ",
    subtitle: "Inspiring a spirit of discovery!",
    link: "/branding",
    animation: "zoomIn",
  },
  {
    id: 4,
    image: events,
    title: "Event Promotion and Tickets booking ",
    subtitle: "Purpose-Driven Collaborations!",
    link: "/merch",
    animation: "flipY",
  },
];

// Define transition variants for each style
const adVariants: Record<string, any> = {
  slideRight: {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 0.8,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  },

  fadeUp: {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: {
      y: -40,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  },

  zoomIn: {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },

  flipY: {
    initial: { rotateY: 90, opacity: 0 },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      rotateY: -90,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  },
};

const AdvertRibbon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  const nextAd = () => setCurrentAd((prev) => (prev + 1) % advertisements.length);
  const prevAd = () => setCurrentAd((prev) => (prev - 1 + advertisements.length) % advertisements.length);

  const currentAnimation = advertisements[currentAd].animation ?? "slideRight";

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white text-black overflow-hidden shadow-sm border-b border-gray-100"
    >
      <div className="relative h-24 sm:h-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAd}
            variants={adVariants[currentAnimation]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex items-center gap-4 max-w-6xl mx-auto px-4 w-full">
              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={advertisements[currentAd].image}
                    alt={advertisements[currentAd].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <div className="flex-1 text-center text-xs sm:text-left">
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="font-bold text-base sm:text-lg text-[#0057FF]"
                >
                  {advertisements[currentAd].title}
                </motion.h3>

                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="text-xs sm:text-sm text-gray-700"
                >
                  {advertisements[currentAd].subtitle}
                </motion.p>

              
              </div>

              {/* Navigation */}
              {advertisements.length > 1 && (
                <div className="hidden sm:flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-[#0057FF] hover:bg-[#00FF66]/10"
                    onClick={prevAd}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-[#0057FF] hover:bg-[#00FF66]/10"
                    onClick={nextAd}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-2 h-6 w-6 p-0 text-[#FF5C33] hover:bg-[#FF5C33]/10 z-10"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
        </Button>

        {/* Dots Indicator */}
        {advertisements.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {advertisements.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  index === currentAd ? "bg-[#00FF66]" : "bg-[#0057FF]/30"
                }`}
                onClick={() => setCurrentAd(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdvertRibbon;
