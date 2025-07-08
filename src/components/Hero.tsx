"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative bg-pink-100 min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Curved Line Background */}
      <div className="absolute inset-0 flex justify-center items-start z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20"
        >
          <path
            d="M0 600 C400 -100, 400 -100, 800 600"
            stroke="white"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-rose-600 uppercase font-semibold tracking-wider mb-2">
            Premier Destination for Beauty, Education & Laser Treatments
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Beauty Lounge 
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Beauty Lounge Parlour is  where transformation meets training —
            Beauty Lounge is your one-stop destination for luxury beauty services,
            certified academy courses, and advanced laser treatments.
          </p>
          <button className="bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition">
            Book an Appointment
          </button>
        </div>

        {/* Circular Image */}
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/Hero.jpg" // <- Add your own image in public folder
              alt="Beauty Lounge Parlour"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
