import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const ContactBanner = () => {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/spa.avif')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Transparent Card */}
      <div className="relative z-10 bg-black/80 p-10 md:p-12 rounded-md text-white text-center max-w-xl w-[90%] shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Make Appointment</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-pink-400 mb-6">
          Contact <span className="text-white">Us</span>
        </h3>

        {/* Contact Info */}
        <div className="text-gray-300 text-base md:text-lg space-y-4">
          <p className="flex items-center justify-center gap-2">
            <FaPhone /> +91 8148121292
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope /> care@beautylounge.in
          </p>
          <p className="flex items-center justify-center gap-2 text-center">
            <FaMapMarkerAlt />
            No: 45, 2nd floor, Orchid Plaza, Bengaluru, Karnataka
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-8">
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-3 rounded-sm text-white">
            <FaTwitter />
          </a>
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-3 rounded-sm text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-3 rounded-sm text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-3 rounded-sm text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
