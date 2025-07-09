// components/Footer.tsx
import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-black text-pink-300/70 py-20 px-6 min-h-[400px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              "Home",
              "About Us",
              "Contact Us",
              "Franchise Opportunities",
              "Blogs",
              "Privacy Policy",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {[
              "Hair Care",
              "Skin Care",
              "Body Care",
              "Events",
              "Locate us",
              "Contact Us",
            ].map((service) => (
              <li key={service}>
                <a href="#" className="hover:underline">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-sm mb-2">
            📍 Beauty Lounge Parlour<br />
            No. 45, 2nd Floor, Orchid Plaza,<br />
            MG Road, Near City Mall,<br />
            Indiranagar, Bengaluru,<br />
            Karnataka 560038
          </p>

          <p className="mt-4 font-semibold">🏬 Store Locator</p>
          <ul className="ml-4 mt-1 space-y-1">
            <li><a href="#" className="hover:underline">Beauty Lounge Locator</a></li>
            <li><a href="#" className="hover:underline">Beauty Lounge Signature Salon Locator</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <p className="mb-2">📞 +91 81481 21292</p>
          <p className="mb-4">✉ care@beautyLounge.in</p>

          <p className="font-semibold mb-2">Our Socials</p>
          <div className="flex items-center gap-3 text-white text-xl">
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-x-twitter" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
          </div>

          <a
            href="https://wa.me/918148121292"
            target="_blank"
            className="inline-block mt-6 bg-white text-[#531d64] font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Book your appointment
          </a>
        </div>
      </div>
    </footer>
  );
}
