import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-printing.jpg";
import mugsImage from "@/assets/mugs-hero.jpg";
import tshirtsImage from "@/assets/tshirts-hero.jpg";
import toteBagsImage from "@/assets/tote-bags-hero.jpg";

const slides = [
  {
    image: heroImage,
    title: "Printing Bright Ideas",
    description: "We're a print company set on creating remarkable products with uncompromised high standards",
    buttonText: "Shop Now",
    link: "/",
  },
  {
    image: mugsImage,
    title: "Custom Mugs & Water Bottles",
    description: "Perfect for corporate gifts and promotional events",
    buttonText: "Explore Mugs",
    link: "/mugs",
  },
  {
    image: tshirtsImage,
    title: "Branded T-Shirts",
    description: "High-quality custom t-shirts for your team",
    buttonText: "View Collection",
    link: "/marketing-materials",
  },
  {
    image: toteBagsImage,
    title: "Tote Bags & Apparel",
    description: "Eco-friendly branded merchandise for your business",
    buttonText: "Shop Apparel",
    link: "/marketing-materials",
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
              <Link to={slide.link}>
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.buttonText}
                </Button>
              </Link>
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
