import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mugsImage from "@/assets/mugs-hero.jpg";
import tshirtsImage from "@/assets/tshirts-hero.jpg";
import toteBagsImage from "@/assets/tote-bags-hero.jpg";

const slides = [
  {
    image: mugsImage,
    title: "Personalized Mugs",
    description: "Get amazing discounts on Mugs printing. We brand ceramic mugs, enamel mugs, Travel Mugs, Magic Mugs and tumblers.",
    buttonText: "Place order",
  },
  {
    image: tshirtsImage,
    title: "Branded T-shirts",
    description: "T-shirt printing services at an affordable price",
    buttonText: "View options",
  },
  {
    image: toteBagsImage,
    title: "Branded Tote Bags",
    description: 'Make a "tote-ally" smart choice by ordering customized tote bags for marketing your brand. They are made of cotton or canvas materials',
    buttonText: "Shop Now",
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[500px] bg-muted overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                {slide.description}
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
