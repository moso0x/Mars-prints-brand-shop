import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImage from "@/assets/image-collage.jpg";


import camera from "@/assets/videoPhoto/camera.jpg";
import creative from "@/assets/videoPhoto/creative.jpg";
import event from "@/assets/videoPhoto/event.jpg";
import event1 from "@/assets/videoPhoto/event1.jpg";
import event2 from "@/assets/videoPhoto/event2.jpg";
import event3 from "@/assets/videoPhoto/event3.jpg";
import family from "@/assets/videoPhoto/family.jpg";
import family2 from "@/assets/videoPhoto/family2.jpg";
import family3 from "@/assets/videoPhoto/family3.jpg";
import outdoor from "@/assets/videoPhoto/outodoor.jpg";
import outdoor2 from "@/assets/videoPhoto/outdoor2.jpg";
import wedding from "@/assets/videoPhoto/wedding.jpg";
import portrait from "@/assets/videoPhoto/portrait.jpg";
import portrait1 from "@/assets/videoPhoto/portrait1.jpg";
import portrait3 from "@/assets/videoPhoto/portrait3.jpg";
import outdoor1 from "@/assets/videoPhoto/outdoor1.jpg";
import family1 from "@/assets/videoPhoto/family1.jpg";
import video_service from "@/assets/videoPhoto/videography.mp4";
import videoService from "@/assets/videoPhoto/video-service.mp4";
import { Camera, Video, ArrowRight  } from "lucide-react";


// undraw Icons 

import moments from "@/assets/undraw/branding.png";
import videography from "@/assets/undraw/videography.png";
import photography from "@/assets/undraw/photography.png";


/* ---------------------------- Animation Variants --------------------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.32 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ---------------------------- Rotating Services --------------------------- */
const showcaseServices = [
  { title: "Wedding Photography", images: [event3, event1, event2] },
  { title: "Corporate Events", images: [event, camera, outdoor] },
  { title: "Family Moments", images: [family, family1, family2,family3] },
  { title: "Portrait Sessions", images: [portrait, portrait1, portrait3] },
  { title: "Outdoor Photography", images: [outdoor, outdoor1, outdoor2] },
  { title: "Creative Studio Work", images: [camera, portrait, event] },
];
const UndrawCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative h-56 rounded-xl overflow-hidden shadow-lg bg-white"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-contain p-6"
      />

      {/* 🌤 Sky Gradient Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, rgba(56,189,248,0.6) 0%, rgba(56,189,248,0.25) 45%, rgba(56,189,248,0) 100%)",
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 z-10">
        <p className="text-white font-semibold text-sm text-center drop-shadow-md">
          {title}
        </p>
      </div>
    </motion.div>
  );
};



const undrawServices = [
  { title2: " Photography", image:photography  },
  { title2: " videography", image:videography },
  { title2: "Branding Services ", image:moments  },

];
/* ---------------------------- Rotating Image Card --------------------------- */
const RotatingImageCard = ({ images, title }: any) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-56 rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* 🌤 Sky Gradient Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, rgba(56,189,248,0.75) 0%, rgba(56,189,248,0.35) 45%, rgba(56,189,248,0) 100%)",
        }}
      />

      {/* Optional subtle darkening for contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 z-10">
        <p className="text-white font-semibold text-sm drop-shadow-md">
          {title}
        </p>
      </div>
    </div>
  );
};


const PhotographyVideography = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-xs md:text-sm">
      {/* Header */}
      <h1 className="text-2xl text-center font-bold text-sky-600 mb-10">
        Photography & Videography Services
      </h1>
      <p className="text-black flex text-center justify-center ">MARS Photography and Videography brings moments to life through creative storytelling and stunning visuals. We specialize in capturing authentic emotions, powerful details, and cinematic scenes that turn events, people, and brands into unforgettable visual stories.</p>
           {/* undraw  section images  */}
                <div className="mb-20 shadow-lg p-6 rounded-2xl bg-gray-200">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
                  >
                    {undrawServices.map((service, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <UndrawCard
                          image={service.image}
                          title={service.title2}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* LEFT COLUMN */}
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
              <h3 className="text-lg font-semibold text-sky-100  mb-2">
                Photography
              </h3>
              <ul className="list-disc list-inside text-sky-100 md:text-xs  space-y-1">
                <li>Corporate & Event Photography</li>
                <li>Wedding & Engagement Shoots</li>
                <li>Studio & Portrait Sessions</li>
                <li>Family & Lifestyle Photography</li>
                <li>Outdoor & Indoor Shoots</li>
              </ul>
            </div>
          </motion.div>

          {/* Videography — VIDEO BACKGROUND */}
          <motion.div
            variants={itemVariants}
            className="relative h-64 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Video background */}
            <video
              src={videoService}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
              <Video className="text-sky-400 mb-2" />
              <h3 className="text-lg font-semibold text-sky-100 mb-2">
                Videography
              </h3>
              <ul className="list-disc list-inside text-sky-100 md:text-xs space-y-1">
                <li>Wedding & Event Coverage</li>
                <li>Corporate & Brand Videos</li>
                <li>Social Media Content</li>
                <li>Cinematic Storytelling</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div>
          <img
            src={aboutImage}
            alt="Photography and Videography showcase"
            className="w-full h-80 md:h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>


 



      {/* WIDE ARRAY SECTION */}
      <div className="mb-20">
        <h2 className="text-xl md:text-2xl font-bold text-sky-00 mb-8 text-center">
        Our Photography & Videography Portfolio
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 h-1200 gap-6"
        >
          {showcaseServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <RotatingImageCard
                images={service.images}
                title={service.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}

      <div className="text-center">
        <motion.a
          href="/Contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-xs bg-sky-600 hover:bg-sky-700 text-white py-3 px-6 rounded-full font-semibold transition"
        >
          <span>Gallery</span>

          <motion.span
            initial={{ x: 0 }}
            animate={{ x: [0, 6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center"
          >
            <ArrowRight size={16} />
          </motion.span>
        </motion.a>
</div>

    </div>
  );
};

export default PhotographyVideography;
