"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SmokeyCursor from "@/components/SmokeyCursor";
import Gallery from "@/components/Gallery";
import BackgroundDecor from "@/components/BackgroundDecor";
import Footer from "@/components/Footer";
import OurServices from "@/components/OurServices";
import Hero from "@/components/Hero";
import InfraGallery from "@/components/InfraGallery";
import OpenHours from "@/components/OpenHours";
import ContactBanner from "@/components/ContactBanner";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <SmokeyCursor />
      <Navbar />
      <Hero />
      <BackgroundDecor />
      <OurServices />
      <OpenHours/>
      <InfraGallery/>
      <Gallery />
      <ContactBanner/>
      <AboutSection/>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 bg-pink-50 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
      </motion.section>

      <Footer />
    </>
  );
}
