"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpeg",
  "/images/gallery3.avif",
  "/images/gallery4.jpg",
];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-16 bg-pink-100 text-center">
      <h2 className="text-3xl font-semibold text-accent mb-10">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.15,
              rotate: 2,
              boxShadow: "0px 12px 30px rgba(255, 105, 180, 0.5)", // deeper pink glow
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="rounded-xl overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-pink-400 transform-gpu"
            onClick={() => setActive(src)}
          >
            <Image
              src={src}
              alt={`Gallery ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-64 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal View */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-3xl p-4"
            >
              <Image
                src={active}
                alt="Enlarged view"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
