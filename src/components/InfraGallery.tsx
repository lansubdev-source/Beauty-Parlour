// components/InfraGallery.tsx
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const images = [
  "/images/ima1.jpg",
  "/images/ima2.webp",
  "/images/ima3.webp",
  "/images/ima4.jpg",
];

const InfraGallery = () => {
  return (
    <section className="py-16 bg-white text-center">
      <p className="text-sm font-bold text-pink-400 uppercase tracking-wide">
        Beyond Beauty
      </p>
      <h2 className="text-4xl font-extrabold mb-10 text-black">Our Infra</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative group w-[260px] h-[400px] overflow-hidden shadow-lg rounded"
          >
            <img
              src={src}
              alt={`Infra ${i + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-pink-300 transition-transform duration-500 transform group-hover:translate-y-[-70px] flex items-end justify-center">
              <div className="flex gap-4 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href="#" className="text-black text-xl hover:text-black">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="text-black text-xl hover:text-black">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-black text-xl hover:text-black">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-black text-xl hover:text-black">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfraGallery;
