import React from "react";
import { FaRegCircle } from "react-icons/fa";

const OpenHours = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 max-w-xl">
        <img
          src="/images/facial.jpg"
          alt="Relaxing Facial"
          className="w-full h-auto object-cover rounded"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 bg-pink-50 p-8 md:ml-[-80px] mt-10 md:mt-0 max-w-xl shadow-lg z-10">
        <p className="text-sm font-semibold text-pink-500 uppercase mb-2">Open Hours</p>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Best Relax Zone</h2>
        <ul className="space-y-4 text-gray-800 text-lg">
          <li className="flex items-center gap-4">
            <FaRegCircle className="text-pink-400" />
            Mon – Fri : 9:30 AM – 6:30 PM
          </li>
          <li className="flex items-center gap-4">
            <FaRegCircle className="text-pink-400" />
            Saturday : 9:30 AM – 7:00 PM
          </li>
          <li className="flex items-center gap-4">
            <FaRegCircle className="text-pink-400" />
            Sunday : 9:30 AM – 5:00 PM
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OpenHours;
