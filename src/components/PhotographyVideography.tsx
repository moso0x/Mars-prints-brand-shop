import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Video, ArrowRight } from "lucide-react";

/* ---------------------------- Assets ---------------------------- */
import aboutImage from "@/assets/image-collage.jpg";

import camera from "@/assets/videoPhoto/camera.jpg";
import event from "@/assets/videoPhoto/event.jpg";
import event1 from "@/assets/videoPhoto/event1.jpg";
import event2 from "@/assets/videoPhoto/event2.jpg";
import event3 from "@/assets/videoPhoto/event3.jpg";
import family from "@/assets/videoPhoto/family.jpg";
import family1 from "@/assets/videoPhoto/family1.jpg";
import family2 from "@/assets/videoPhoto/family2.jpg";
import family3 from "@/assets/videoPhoto/family3.jpg";
import outdoor from "@/assets/videoPhoto/outodoor.jpg";
import outdoor1 from "@/assets/videoPhoto/outdoor1.jpg";
import outdoor2 from "@/assets/videoPhoto/outdoor2.jpg";
import portrait from "@/assets/videoPhoto/portrait.jpg";
import portrait1 from "@/assets/videoPhoto/portrait1.jpg";
import portrait3 from "@/assets/videoPhoto/portrait3.jpg";

import videoService from "@/assets/videoPhoto/video-service.mp4";
import videoServices from "@/assets/videoPhoto/videography_service.mp4";

import moments from "@/assets/undraw/branding.png";
import videography from "@/assets/undraw/videography.png";
import photography from "@/assets/undraw/photography.png";

/* ---------------------------- Animations ---------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------------------- Data ---------------------------- */
const showcaseServices = [
  { title: "Wedding Photography", images: [event3, event1, event2], category: "Weddings" },
  { title: "Corporate Events", images: [event, camera, outdoor], category: "Corporate" },
  { title: "Family Moments", images: [family, family1, family2, family3], category: "Family" },
  { title: "Portrait Sessions", images: [portrait, portrait1, portrait3], category: "Portraits" },
  { title: "Outdoor Photography", images: [outdoor, outdoor1, outdoor2], category: "Outdoor" },
  { title: "Creative Studio Work", images: [camera, portrait, event], category: "Studio" },
];

const categories = ["All", "Weddings", "Corporate", "Family", "Portraits", "Outdoor", "Studio"];

const undrawServices = [
  { title: "Photography", image: photography },
  { title: "Videography", image: videography },
  { title: "Branding Services", image: moments },
];

/* ---------------------------- Components ---------------------------- */
const UndrawCard = ({ image, title }: { image: string; title: string }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="relative h-56 rounded-xl overflow-hidden bg-white shadow-lg"
  >
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-contain p-6" />
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#AAC832]/60 to-transparent" />
    <p className="absolute bottom-3 w-full text-center text-white font-semibold">
      {title}
    </p>
  </motion.div>
);

const RotatingImageCard = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      2500
    );
    return () => clearInterval(i);
  }, [images.length]);

  return (
    <div className="relative h-56  rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          className="absolute inset-0 w-full h-[180%] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#AAC832]/70 to-transparent" />
      <p className="absolute bottom-3 left-4 text-white font-semibold text-sm">
        {title}
      </p>
    </div>
  );
};

/* ---------------------------- MAIN ---------------------------- */
const PhotographyVideography = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? showcaseServices
      : showcaseServices.filter((s) => s.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* HEADER */}
      <h1 className="text-4xl font-bold text-center text-[#1E1E1E] mb-4">
        Photography & Videography Services
      </h1>
      <p className="text-center text-bold text-gray-600 mb-16">
        Capturing moments through creative storytelling and cinematic visuals.
      </p>

      {/* UNDRAW */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {undrawServices.map((s, i) => (
          <UndrawCard key={i} image={s.image} title={s.title} />
        ))}
      </div>

      {/* TWO COLUMN SECTION */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        {/* LEFT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Photography */}
          <motion.div
            variants={itemVariants}
            className="relative h-64 rounded-xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${portrait})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/55 p-6 flex flex-col justify-end">
              <Camera className="text-[#AAC832] mb-2" />
              <h3 className="text-lg font-semibold text-[#8C8C8C] mb-2">
                Photography
              </h3>
              <ul className="text-[#8C8C8C] text-sm font-bold list-disc list-inside space-y-1">
                <li>Corporate & Event Shoots</li>
                <li>Wedding Photography</li>
                <li>Portrait & Studio Sessions</li>
                <li>Family Photography</li>
              </ul>
            </div>
          </motion.div>

          {/* Videography */}
          <motion.div
            variants={itemVariants}
            className="relative h-64 rounded-xl overflow-hidden shadow-lg"
          >
            <video
              src={videoService}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <Video className="text-[#AAC832] mb-2" />
              <h3 className="text-lg font-semibold text-[#8C8C8C] mb-2">
                Videography
              </h3>
              <ul className="text-[#8C8C8C] text-sm font-bold  list-disc list-inside space-y-1">
                <li>Wedding Films</li>
                <li>Corporate Videos</li>
                <li>Social Media Content</li>
                <li>Cinematic Storytelling</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT – IMAGE + LAPTOP VIDEO */}
        <div
          className="relative h-[520px] rounded-2xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[320px]">
              {/* Screen */}
              <div className="relative aspect-video bg-black rounded-lg border-[6px] border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full" />
                <video
                  src={videoServices}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-sky-500/20" />
              </div>

              {/* Base */}
              <div className="mx-auto mt-1 h-3 w-[110%] bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div className="mb-20">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 border text-sm transition ${
                activeCategory === cat
                  ? "bg-[#AAC832] text-white"
                  : "border-gray-400 hover:border-green-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {filteredServices.map((s, i) => (
            <RotatingImageCard key={i} images={s.images} title={s.title} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#468C1E]    hover:bg-[#AAC832] text-white px-6 py-3 rounded-full font-semibold"
        >
         Get Quote
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default PhotographyVideography;
