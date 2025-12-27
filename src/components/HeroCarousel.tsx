import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "@fontsource-variable/nabla";
import "@fontsource/eb-garamond";
import heroVideo from "@/assets/heroVideos.mp4";

const slides = [
  {
    title: "Welcome at Jelimo Creatives.",
    description: "Branded printing services and safari ticket booking",
    buttonText: "Shop",
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
      visible: { opacity: 1, transition: { duration: 1.1 } },
      exit: { opacity: 0, transition: { duration: 0.7 } },
    },
    zoom: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      exit: { opacity: 0, scale: 1.05, transition: { duration: 0.7 } },
    },
    slide: {
      hidden: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
      visible: { x: 0, opacity: 1, transition: { duration: 1 } },
      exit: (dir: number) => ({
        x: dir > 0 ? -80 : 80,
        opacity: 0,
        transition: { duration: 0.7 },
      }),
    },
  };

  const currentAnim =
    slides[currentSlide].animation as keyof typeof textVariants;

  return (
    <section className="w-full py-6 md:py-10">
      {/* Centered container with side margins */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 font-[EB Garamond] overflow-hidden rounded-3xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          
          {/* Video column */}
          <div className="relative overflow-hidden rounded-l-3xl">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="
                w-full h-full object-cover
                brightness-110 contrast-110 saturate-110
              "
            />
            {/* LIGHT overlay (keeps clarity) */}
            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Text column */}
          <div className="relative flex items-center justify-center px-6 md:px-12 bg-black rounded-r-3xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                variants={textVariants[currentAnim]}
                custom={direction}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-xl text-center md:text-left"
              >
                <motion.h2 className="text-4xl md:text-6xl font-[Nabla] mb-6 text-white">
                  {slides[currentSlide].title}
                </motion.h2>

                <motion.p className="text-sm md:text-lg mb-8 text-white/90">
                  {slides[currentSlide].description}
                </motion.p>

                <Link to={slides[currentSlide].link}>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white text-xs px-4 py-2 rounded-full shadow-xl transition-transform hover:scale-110">
                    {slides[currentSlide].buttonText}
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <Button
              onClick={prevSlide}
              size="icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
            >
              <ChevronLeft className="h-7 w-7" />
            </Button>

            <Button
              onClick={nextSlide}
              size="icon"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
            >
              <ChevronRight className="h-7 w-7" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all rounded-full ${
                    i === currentSlide
                      ? "bg-blue-700 w-2 h-2"
                      : "bg-blue-70 w-2 h-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
