import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface AdvertProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link?: string;
}

const advertisements: AdvertProps[] = [
  {
    id: 1,
    image: "/src/assets/hero-banner.jpg",
    title: "Custom T-Shirts",
    subtitle: "Starting from $15 - Limited Time!",
    link: "/products"
  },
  {
    id: 2,
    image: "/src/assets/products-showcase.jpg",
    title: "Event Packages",
    subtitle: "Book now and save 25%",
    link: "/services"
  }
];

const AdvertRibbon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  const nextAd = () => {
    setCurrentAd((prev) => (prev + 1) % advertisements.length);
  };

  const prevAd = () => {
    setCurrentAd((prev) => (prev - 1 + advertisements.length) % advertisements.length);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-primary via-primary-foreground to-primary text-white overflow-hidden"
    >
      <div className="relative h-20 sm:h-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAd}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex items-center gap-4 max-w-6xl mx-auto px-4">
              {/* Image with pop effect */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "backOut" }}
                className="relative"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={advertisements[currentAd].image}
                    alt={advertisements[currentAd].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <motion.h3
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="font-bold text-sm sm:text-lg"
                >
                  {advertisements[currentAd].title}
                </motion.h3>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-xs sm:text-sm opacity-90"
                >
                  {advertisements[currentAd].subtitle}
                </motion.p>
              </div>

              {/* Navigation arrows */}
              {advertisements.length > 1 && (
                <div className="hidden sm:flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-white hover:bg-white/20"
                    onClick={prevAd}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-white hover:bg-white/20"
                    onClick={nextAd}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-green-800 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute left-8 top-1/2 w-1 h-1 bg-white/60 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-8 top-1/3 w-1 h-1 bg-white/60 rounded-full"
          animate={{
            y: [10, -10, 10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />

        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-2 h-6 w-6 p-0 text-orange-800 hover:bg-white/20 z-10"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-3 w-3" />
        </Button>

        {/* Dots indicator */}
        {advertisements.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {advertisements.map((_, index) => (
              <motion.div
                key={index}
                className={`w-1.5 h-1.5 rounded-full cursor-pointer ${
                  index === currentAd ? "bg-white" : "bg-white/40"
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