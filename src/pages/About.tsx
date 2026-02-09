import React from "react";
import { Header } from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import aboutImage from "@/assets/mugs.jpg"; // Replace with hero image if needed
import { Award, Sparkles, Clock } from "lucide-react";
// Import Undraw Icons (SVGs)

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-16 text-xs md:text-sm">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16 relative">
          <div className="relative z-10">
            <h1 className="text-2xl md:text-4xl font-bold text-sky-700 mb-4">
              About Us
            </h1>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At <span className="font-semibold">Mars Creative Studio</span>, we bring your ideas to life through{" "}
              <span className="italic text-sky-600">Photography, Videography, Printing, and Branding</span>. From capturing stunning visuals to designing promotional materials, we ensure your brand stands out in every medium.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is simple: <span className="italic text-sky-500">deliver high-quality, creative, and reliable media solutions</span> that help businesses, artists, and individuals showcase their vision and leave a lasting impression.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a passion for storytelling and a keen eye for detail, Mars Creative Studio is your trusted partner for all your photography, videography, printing, and branding needs.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Mars Creative Studio Team"
              className="w-full h-80 md:h-[400px] object-cover rounded-xl shadow-lg"
            />
            {/* Sky overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Features / Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-6 text-center">
            Why Choose Mars  Studio?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
           {/* Card 1 */}
<div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
  <Award className="w-16 h-16 mb-4 text-sky-500" />
  <h3 className="font-semibold mb-2 text-sky-600">
    Professional Quality
  </h3>
  <p className="text-gray-600 text-xs">
    We use top-tier equipment and expert techniques in photography,
    videography, and printing to deliver professional-grade results every time.
  </p>
</div>

{/* Card 2 */}
<div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
  <Sparkles className="w-16 h-16 mb-4 text-sky-500" />
  <h3 className="font-semibold mb-2 text-sky-600">
    Creative & Unique
  </h3>
  <p className="text-gray-600 text-xs">
    Our creative team designs visuals and branding materials that reflect your
    story, identity, and message with originality and style.
  </p>
</div>

{/* Card 3 */}
<div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
  <Clock className="w-16 h-16 mb-4 text-sky-500" />
  <h3 className="font-semibold mb-2 text-sky-600">
    Reliable & Timely
  </h3>
  <p className="text-gray-600 text-xs">
    We value your time. Our projects are delivered on schedule without
    compromising quality, ensuring a smooth and stress-free experience.
  </p>
</div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-sky-700 mb-4">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-gray-700 mb-6">
            Whether it’s a photoshoot, a video production, a print campaign, or a full branding package, we’re here to turn your ideas into reality.
          </p>
          <a
            href="/contact"
            className="inline-block text-xs bg-sky-600 text-white py-3 px-6 rounded-full hover:bg-sky-700 font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <FooterNew />
    </>
  );
}
