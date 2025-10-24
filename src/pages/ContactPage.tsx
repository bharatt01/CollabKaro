"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const contactVideo =
  "/Videos/contact.mp4"; // replace with your video URL or local path

const ContactPage: FC = () => {
  return (
    <>
    <Navbar />
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={contactVideo}
        autoPlay
        muted
        loop
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      {/* Decorative floating blobs */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#FFD580]/30 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E0523D]/20 rounded-full filter blur-3xl animate-blob animation-delay-3000" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl w-full mx-auto px-6 py-32 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8 drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-gray-200 text-center mb-12 leading-relaxed">
          Have questions or want to start your journey with CollabKaro? Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#FFD580] transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#FFD580] transition"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#FFD580] transition md:col-span-2"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#FFD580] transition md:col-span-2"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="md:col-span-2 px-10 py-4 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition"
          >
            Send Message
          </motion.button>
        </form>

        {/* Optional Social Links */}
        <div className="flex justify-center gap-6 mt-12 text-white text-2xl">
          <a href="#" className="hover:text-[#FFD580] transition">Instagram</a>
          <a href="#" className="hover:text-[#FFD580] transition">Twitter</a>
          <a href="#" className="hover:text-[#FFD580] transition">LinkedIn</a>
        </div>
      </motion.div>
    </section>
    <Footer />
    </>
  );
};

export default ContactPage;
