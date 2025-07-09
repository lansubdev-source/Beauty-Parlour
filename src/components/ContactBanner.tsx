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
    <section className="relative min-h-[700px] flex items-center justify-center bg-pink-100 overflow-hidden">
      {/* 🔴 Background Image */}
      <div
        className="absolute w-[1000px] h-[650px] bg-cover bg-center rounded-3xl shadow-2xl"
        style={{ backgroundImage: "url('/images/spa.avif')" }}
      >
        <div className="w-full h-full bg-black/60 rounded-xl" />
      </div>

      {/* ✅ Transparent Card in Front */}
      <div className="relative z-10 w-[600px] h-[350px] bg-white/10 backdrop-blur-md text-white text-center p-8 md:p-10 rounded-xl shadow-lg flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Make Appointment</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-pink-400 mb-6">
          Contact <span className="text-white">Us</span>
        </h3>

        {/* Contact Info */}
        <div className="text-gray-200 text-base md:text-lg space-y-2 mb-4">
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
        <div className="flex justify-center gap-3 mt-2">
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-2 rounded-sm text-white">
            <FaTwitter />
          </a>
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-2 rounded-sm text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-2 rounded-sm text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="bg-pink-400 hover:bg-pink-500 p-2 rounded-sm text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
