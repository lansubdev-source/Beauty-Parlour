"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState("#home");

  // Optional: update active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navItems.map((item) =>
        document.querySelector(item.href) as HTMLElement | null
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY + 100) {
          setActive(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full bg-white py-4 px-30 border-b border-gray-100 z-50 fixed top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-[30px] font-extrabold tracking-tight leading-none">
          <span className="text-black">The Beauty</span>
          <span className="text-rose-600 ml-1"> Lounge</span>
        </h1>

        {/* Navigation */}
        <nav className="flex gap-10 text-[18px] font-semibold">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition ${
                active === item.href
                  ? "text-pink-400"
                  : "text-black hover:text-pink-400"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
