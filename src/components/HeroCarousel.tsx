import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "@fontsource-variable/nabla"; // ✅ Nabla colorful font
import "@fontsource/eb-garamond"; // ✅ Garamond elegant serif font

import heroImage from "@/assets/hero-printing.jpg";
import mugsImage from "@/assets/mugs-hero.jpg";
import tshirtsImage from "@/assets/tshirts-hero.jpg";
import toteBagsImage from "@/assets/tote-bags-hero.jpg";

// ✅ Carousel slides
const slides = [
  {
    image: heroImage,
    title: "Where Your Brand Comes Alive.",
    description:
      "We transform your ideas into powerful merchandise and experiences that connect, inspire, and leave a mark.",
    buttonText: "Explore our Featured Work",
    link: "/",
    animation: "fade",
  },
  {
    image: mugsImage,
    title: "Custom Mugs & Water Bottles",
    description: "Perfect for corporate gifts and promotional events.",
    buttonText: "Explore Mugs",
    link: "/mugs",
    animation: "zoom",
  },
  {
    image: tshirtsImage,
    title: "Branded T-Shirts",
    description: "High-quality custom t-shirts for your team.",
    buttonText: "View Collection",
    link: "/marketing-materials",
    animation: "slide",
  },
  {
    image: toteBagsImage,
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
    const t = setInterval(() => {
      setDirection(1);
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((s) => (s + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // ✅ Variants for animations
  const variants = {
    fade: {
      enter: { opacity: 0 },
      center: { opacity: 1, transition: { duration: 1.2 } },
      exit: { opacity: 0, transition: { duration: 0.8 } },
    },
    zoom: {
      enter: { scale: 1.1, opacity: 0 },
      center: { scale: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
      exit: { scale: 0.95, opacity: 0, transition: { duration: 0.8, ease: "easeIn" } },
    },
    slide: {
      enter: (dir: number) => ({ x: 300 * dir, opacity: 0 }),
      center: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
      exit: (dir: number) => ({
        x: -300 * dir,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeIn" },
      }),
    },
  };

  const currentAnim = slides[currentSlide].animation as keyof typeof variants;

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden font-[EB Garamond]">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          variants={variants[currentAnim]}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* ✅ Text Overlay */}
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h2
          className="text-4xl md:text-7xl font-bold mb-4 font-[Nabla] animate-text-gradient text-[#FFFFF3]"
        >
          {slides[currentSlide].title}
        </motion.h2>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl text-white font-[EB Garamond]"
        >
          {slides[currentSlide].description}
        </motion.p>

        <Link to={slides[currentSlide].link}>
          <Button className="bg-[#6C63FF] hover:bg-[#00BFA6] text-white text-lg px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 font-[EB Garamond]">
            {slides[currentSlide].buttonText}
          </Button>
        </Link>
      </motion.div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
