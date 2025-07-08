import React from "react";
import { FaEye, FaUser, FaCut } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="bg-pink-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <p className="text-sm uppercase tracking-widest text-rose-500 font-semibold mb-2">
            About Us
          </p>
          <h2 className="text-4xl font-serif text-gray-800 leading-snug mb-6">
            Discover the Power of Beauty & Knowledge
          </h2>
          <button className="bg-rose-500 text-white py-3 px-8 rounded-full shadow hover:bg-rose-600 transition">
            Learn More
          </button>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <FaEye className="text-4xl mx-auto text-gray-800 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Facial & Skincare</h3>
              <p className="text-sm text-gray-600">
                Get clear, glowing skin with custom facials and powerful treatments.
              </p>
            </div>
            <div className="text-center">
              <FaUser className="text-4xl mx-auto text-gray-800 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hair Treatment</h3>
              <p className="text-sm text-gray-600">
                Fix dry, damaged hair with our deep conditioning and scalp treatments.
              </p>
            </div>
            <div className="text-center">
              <FaCut className="text-4xl mx-auto text-gray-800 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hair Styling & Haircut</h3>
              <p className="text-sm text-gray-600">
                Get a haircut and style that fits your face, your life, and the moment.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="text-gray-700 leading-relaxed">
          <p>
            At <span className="font-semibold">Beauty Lounge Parlour</span>, we believe beauty is both an art and a skill. Located in the heart of Bengaluru, Karnataka, we’ve built a trusted name for over a decade, offering premium beauty services, personalized care, and professional training that empowers the next generation of beauty experts.
          </p>
          <br />
          <p>
            Our space is not just a salon, it’s an ecosystem for growth. Whether you’re looking to revamp your look, start a career in the beauty industry, or experience skin transformation through our exclusive laser treatments, you’re in the right place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
