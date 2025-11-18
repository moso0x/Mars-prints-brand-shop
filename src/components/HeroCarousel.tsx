import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "@fontsource-variable/nabla";
import "@fontsource/eb-garamond";

import heroBackground from "@/assets/hero-printing.jpg";
import { LogoUploadForm } from "./LogoUploadForm";

const slides = [
  {
    title: "Welcome at Jelimo Creatives.",
    description:
      "Branded printing services and safari ticket booking ",
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
      visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
      exit: { opacity: 0, transition: { duration: 0.8, ease: "easeIn" } },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
      exit: { opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: "easeIn" } },
    },
    slide: {
      hidden: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
      visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
      exit: (dir: number) => ({
        x: dir > 0 ? -100 : 100,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeIn" },
      }),
    },
  };

  const currentAnim = slides[currentSlide].animation as keyof typeof textVariants;

  return (
   <div className="relative w-[80%] mx-auto flex justify-center items-center h-[90vh] md:h-[60vh] overflow-hidden font-[EB Garamond] bg-center bg-cover">

      {/* Background Image Centered */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={heroBackground}
          alt="Brand background"
          className="w-[80%] md:w-full h-auto object-contain mx-auto"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#6C63FF]/40 mix-blend-multiply" />
      </div>

      {/* Slide Content */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          variants={textVariants[currentAnim]}
          custom={direction}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
        >
          <motion.h2 className="text-4xl md:text-7xl font-[Nabla] font-bold mb-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]">
            {slides[currentSlide].title}
          </motion.h2>

          <motion.p className="text-lg md:text-2xl mb-8 max-w-2xl text-white/90">
            {slides[currentSlide].description}
          </motion.p>

          <Link to={slides[currentSlide].link}>
            <Button className="bg-[#6C63FF] hover:bg-[#00BFA6] text-white text-lg px-8 py-3 rounded-full shadow-xl transition-transform transform hover:scale-110 font-[EB Garamond]">
              {slides[currentSlide].buttonText}
            </Button>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all ${
              i === currentSlide ? "bg-[#00BFA6] w-8 h-2" : "bg-white/70 w-2 h-2"
            }`}
          />
        ))}
      </div>

    </div>
  );
};
