import React from "react";
import { Header } from "@/components/Header";
import FooterNew from "@/components/FooterNew";
import aboutImage from "@/assets/mugs.jpg"; 
import { Star, Paintbrush, Clock } from "lucide-react"; // Icons

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-16 text-xs md:text-sm">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4">
              About 
            </h1>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At <span className="font-semibold">Mars printing & Branding Shop</span>, we bring your ideas to life through premium custom printing and branding solutions. From tote bags and hoodies to business cards and banners, we create products that make your brand stand out.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our mission is simple: <span className="italic">deliver high-quality, unique, and reliable printing solutions</span> that help businesses, creatives, and individuals express themselves and leave a lasting impression.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a passion for creativity and an eye for detail, Jelimo Creatives is your go-to partner for all your custom print and branding needs.
            </p>
          </div>
          <div>
            <img
              src={aboutImage}
              alt="Jelimo Creatives Team"
              className="w-full h-80 md:h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Features / Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6 text-center">
            Why Choose Mars prints brand shop?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {/* Card 1 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-semibold  mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-xs">
                We use high-quality materials and advanced printing techniques to ensure every product looks professional and lasts long.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
              <Paintbrush className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-semibold  mb-2">Creative Designs</h3>
              <p className="text-gray-600 text-xs">
                Our team of designers works with you to create custom visuals that perfectly represent your brand and vision.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center">
              <Clock className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="font-semibold  mb-2">Fast & Reliable</h3>
              <p className="text-gray-600 text-xs">
                We pride ourselves on timely delivery and excellent customer service, so your projects are always on schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-gray-700 mb-6">
            Let Jelimo Creatives help you create products that inspire, promote, and impress.
          </p>
          <a
            href="/contact"
            className="inline-block text-xs bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <FooterNew />
    </>
  );
}
