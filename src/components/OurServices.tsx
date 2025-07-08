"use client";
import { motion } from "framer-motion";

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/back.jpg')`, // Your image path
      }}
    >
      {/* 🔴 DIMMER OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* SECTION HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Our Services</h2>
        <p className="text-white/80 mt-2">
          What we offer to enhance your beauty
        </p>
      </div>

      {/* TRANSPARENT CARDS */}
      <div className="relative z-10 flex justify-center gap-8 flex-wrap">
        {/* Card 1 */}
        <motion.div
          className="w-[300px] h-[500px] bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-105 text-white"
          whileHover={{ y: -10 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-pink-200 mb-4">Services We Provide</h3>
            <ul className="list-disc list-inside space-y-2 text-left text-white/90">
              <li>Facial Treatments</li>
              <li>Hair Styling & Spa</li>
              <li>Skin Whitening</li>
              <li>Waxing & Threading</li>
              <li>Laser Hair Removal</li>
            </ul>
          </div>
          <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition">
            Explore Services
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-[300px] h-[500px] bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-105 text-white"
          whileHover={{ y: -10 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-pink-200 mb-4">Complementary Offers</h3>
            <ul className="list-disc list-inside space-y-2 text-left text-white/90">
              <li>Free Skin Analysis</li>
              <li>Bridal Trial Makeup</li>
              <li>Hair Diagnosis Consultation</li>
              <li>Loyalty Points on Each Visit</li>
              <li>Seasonal Discounts</li>
            </ul>
          </div>
          <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition">
            Claim Offers
          </button>
        </motion.div>
      </div>
    </section>
  );
}
