import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "@fontsource-variable/nabla";
import "@fontsource/eb-garamond";

import heroBackground from "@/assets/hero-printing.jpg";

const slides = [
  {
    title: "Welcome at Jelimo Creatives.",
    description: "Branded printing services and safari ticket booking",
    buttonText: "Explore our Featured Work",
    link: "/",
    animation: "fade",
  },
  {
    title: "Custom Mugs & Water Bottles",
    description: "Perfect for corporate gifts and promotional events.",
    buttonText: "Explore Mugs",
    link: "/mugs",
    animation: "zoom",
  },
  {
    title: "Branded T-Shirts",
    description: "High-quality custom t-shirts for your team.",
    buttonText: "View Collection",
    link: "/marketing-materials",
    animation: "slide",
  },
  {
    title: "Tote Bags & Apparel",
    description: "Eco-friendly branded merchandise for your business.",
    buttonText: "Shop Apparel",
    link: "/marketing-materials",
    animation: "fade",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const textVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1.2 } },
      exit: { opacity: 0, transition: { duration: 0.8 } },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      exit: { opacity: 0, scale: 1.1, transition: { duration: 0.8 } },
    },
    slide: {
      hidden: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
      visible: { x: 0, opacity: 1, transition: { duration: 1 } },
      exit: (dir: number) => ({
        x: dir > 0 ? -100 : 100,
        opacity: 0,
        transition: { duration: 0.8 },
      }),
    },
  };

  const currentAnim = slides[currentSlide].animation as keyof typeof textVariants;

  return (
    <div className="relative w-[80%] mx-auto h-[50vh] md:h-[40vh] overflow-hidden font-[EB Garamond] flex justify-center items-center">
      
      {/* Diagonal Layout Container */}
      <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2">
        
        {/* === LEFT DIAGONAL COLOR AREA (TEXT) === */}
        <div className="relative flex items-center justify-center bg-[#64B5F6]/80 text-white px-8 py-10 overflow-hidden">
          {/* Diagonal shape */}
          <div className="absolute inset-0 bg-[#FF5C26]/60 clip-diagonal" />

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              variants={textVariants[currentAnim]}
              custom={direction}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-20 text-center max-w-lg"
            >
              <motion.h2 className="text-4xl md:text-6xl font-[Nabla] font-bold mb-4">
                {slides[currentSlide].title}
              </motion.h2>

              <motion.p className="text-lg md:text-2xl mb-8 text-white/90">
                {slides[currentSlide].description}
              </motion.p>

              <Link to={slides[currentSlide].link}>
                <Button className="bg-black hover:bg-white hover:text-black text-white text-xs px-8 py-3 rounded-full shadow-xl transition-transform hover:scale-110">
                  {slides[currentSlide].buttonText}
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* === RIGHT SIDE IMAGE AREA === */}
        <div className="relative w-full h-full">
          <img
            src={heroBackground}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Arrows */}
      <Button
        onClick={prevSlide}
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        onClick={nextSlide}
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all rounded-full ${
              i === currentSlide ? "bg-[#6C63FF] w-8 h-2" : "bg-white/60 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Custom Diagonal Clip Path CSS */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 60% 0, 0 100%);
        }

        @media (min-width: 768px) {
          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 0 100%);
          }
        }
      `}</style>
    </div>
  );
};
