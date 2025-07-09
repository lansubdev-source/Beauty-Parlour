"use client";
import { motion } from "framer-motion";

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 min-h-screen bg-pink-100 overflow-hidden"
    >
      {/* 🔴 BACKGROUND IMAGE BEHIND CARDS */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-90 rounded-3xl overflow-hidden shadow-2xl animate-pulse-slow"
        style={{
          backgroundImage: `url('/images/back.jpg')`,
          backgroundSize: "900px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "800px",
          height: "700px",
        }}
      />

      {/* 🔴 DIMMER OVERLAY */}
      <div className="absolute inset-0 bg-pink-100/80 z-0" />

      {/* SECTION HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Our Services</h2>
        <p className="text-black/80 mt-2">
          What we offer to enhance your beauty
        </p>
      </div>

      {/* ✅ SERVICE CARDS */}
      <div className="relative z-10 flex justify-center gap-6 flex-wrap">
        {/* Card 1 */}
        <motion.div
          className="w-[260px] h-[420px] bg-black/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 text-black"
          whileHover={{ y: -10 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Services We Provide</h3>
            <ul className="list-disc list-inside space-y-2 text-left text-black/90">
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
          className="w-[260px] h-[420px] bg-black/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 text-black"
          whileHover={{ y: -10 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Complementary Offers</h3>
            <ul className="list-disc list-inside space-y-2 text-left text-black/90">
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

        {/* Card 3 */}
        <motion.div
          className="w-[260px] h-[420px] bg-black/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 text-black"
          whileHover={{ y: -10 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Premium Packages</h3>
            <ul className="list-disc list-inside space-y-2 text-left text-black/90">
              <li>Bridal Glow Package</li>
              <li>Pre-Wedding Care</li>
              <li>Full Body Spa</li>
              <li>Makeover Sessions</li>
              <li>Detox & Rejuvenation</li>
            </ul>
          </div>
          <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition">
            View Packages
          </button>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="w-[260px] h-[420px] bg-black/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105 text-black"
          whileHover={{ y: -10 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">Exclusive Membership</h3>
            <ul className="list-disc list-inside space-y-2 text-left text-black/90">
              <li>Monthly Beauty Care</li>
              <li>Priority Bookings</li>
              <li>Free Goodies</li>
              <li>Members-Only Discounts</li>
              <li>Birthday Surprises</li>
            </ul>
          </div>
          <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition">
            Join Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
