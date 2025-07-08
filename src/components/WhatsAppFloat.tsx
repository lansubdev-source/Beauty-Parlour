"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg duration-300"
      aria-label="WhatsApp"
      target="_blank"
    >
      <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current"><path d="M16 0a16 16 0 00-13.8 24l-2.2 8 8.3-2.2A16 16 0 1016 0zm8.9 24.9a13 13 0 01-19.6-1.6l-.5-.6-4.9 1.3 1.3-4.8-.4-.7a12.8 12.8 0 1110.7 6.4 12.5 12.5 0 01-6.4-1.8l-.5-.3-.8.2.3-1 .2-.8-.6-.6a10.3 10.3 0 1016.2-9.5l-.4-.3z"/><path d="M23.4 18.9c-.4-.2-2.6-1.3-3-1.4s-.7-.2-1 .2-1 1.3-1.2 1.5-.4.3-.8.1a8 8 0 01-4-3.4c-.3-.6 0-.8.2-1 .2-.2.4-.4.5-.6s.2-.4 0-.6-.9-2.1-1.2-2.9c-.3-.7-.5-.6-.8-.6h-.7c-.2 0-.6.1-.9.4s-1.2 1.1-1.2 2.6 1 3 1.2 3.2 2.4 3.8 5.9 5.3c.8.4 1.5.6 2.1.8a5.5 5.5 0 002.5 0c.8-.1 2.6-1 3-1.9.4-.9.4-1.7.3-1.9s-.4-.3-.8-.5z"/></svg>
    <FontAwesomeIcon icon= {faWhatsapp} className="w-6 h-6" />
    Book your appointment
    </a>
  );
}
