import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

import { Camera, Video, ArrowRight } from "lucide-react";

import moments from "@/assets/undraw/branding.png";
import videography from "@/assets/undraw/videography.png";
import photography from "@/assets/undraw/photography.png";

/* ---------------------------- Animation Variants --------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.32 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------------------- Services --------------------------- */
const showcaseServices = [
  { title: "Wedding Photography", images: [event3, event1, event2] },
  { title: "Corporate Events", images: [event, camera, outdoor] },
  { title: "Family Moments", images: [family, family1, family2, family3] },
  { title: "Portrait Sessions", images: [portrait, portrait1, portrait3] },
  { title: "Outdoor Photography", images: [outdoor, outdoor1, outdoor2] },
  { title: "Creative Studio Work", images: [camera, portrait, event] },
];

const undrawServices = [
  { title2: "Photography", image: photography },
  { title2: "Videography", image: videography },
  { title2: "Branding Services", image: moments },
];

/* ---------------------------- Cards --------------------------- */
const UndrawCard = ({ image, title }: { image: string; title: string }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="relative h-56 rounded-xl overflow-hidden shadow-lg bg-white"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-contain p-6"
    />
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sky-400/60 via-sky-300/30 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
      <p className="text-white font-semibold text-sm text-center drop-shadow">
        {title}
      </p>
    </div>
  </motion.div>
);

const RotatingImageCard = ({ images, title }: any) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      2500
    );
    return () => clearInterval(i);
  }, [images.length]);

  return (
    <div className="relative h-56 rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-sky-500/70 via-sky-400/30 to-transparent" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
        <p className="text-white font-semibold text-sm drop-shadow">{title}</p>
      </div>
    </div>
  );
};

/* ---------------------------- MAIN COMPONENT --------------------------- */
const PhotographyVideography = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-xs md:text-sm">
      <h1 className="text-2xl text-center font-bold text-sky-600 mb-6">
        Photography & Videography Services
      </h1>

      <p className="text-center mb-16">
        MARS Photography and Videography brings moments to life through creative
        storytelling and stunning visuals.
      </p>

      {/* UNDRAW SECTION */}
      <div className="mb-20 shadow-lg p-6 rounded-2xl bg-gray-200">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {undrawServices.map((s, i) => (
            <motion.div key={i} variants={itemVariants}>
              <UndrawCard image={s.image} title={s.title2} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
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
            <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
              <Camera className="text-sky-400 mb-2" />
              <h3 className="text-lg font-semibold text-sky-100 mb-2">
                Photography
              </h3>
              <ul className="list-disc list-inside text-sky-100 space-y-1">
                <li>Corporate & Event Photography</li>
                <li>Wedding & Engagement Shoots</li>
                <li>Studio & Portrait Sessions</li>
                <li>Family & Lifestyle Photography</li>
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
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <Video className="text-sky-400 mb-2" />
              <h3 className="text-lg font-semibold text-sky-100 mb-2">
                Videography
              </h3>
              <ul className="list-disc list-inside text-sky-100 space-y-1">
                <li>Wedding & Event Coverage</li>
                <li>Corporate & Brand Videos</li>
                <li>Social Media Content</li>
                <li>Cinematic Storytelling</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE + LAPTOP VIDEO */}
        <div
          className="relative h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/40 via-sky-400/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[300px] md:w-[360px]">
              {/* Screen */}
              <div className="relative aspect-video rounded-lg bg-black border-[6px] border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full z-20" />

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
              <div className="mx-auto mt-1 h-3 w-[110%] bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div className="mb-20">
        <h2 className="text-xl font-bold text-center mb-8">
          Our Photography & Videography Portfolio
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {showcaseServices.map((s, i) => (
            <motion.div key={i} variants={itemVariants}>
              <RotatingImageCard images={s.images} title={s.title} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <motion.a
          href="/Contact"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-full font-semibold"
        >
          Gallery
          <ArrowRight size={16} />
        </motion.a>
      </div>
    </div>
  );
};

export default PhotographyVideography;
