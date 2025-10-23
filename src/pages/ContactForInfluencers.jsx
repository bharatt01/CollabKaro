import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ContactForInfluencers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    niche: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out, we'll get back soon!");
  };

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-[#FAFAFA] min-h-screen flex flex-col items-center overflow-hidden">
        {/* --- Moving Background Vectors --- */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#E0523D]/40 to-[#FFD580]/40 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-[#FFD580]/40 to-[#E0523D]/40 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-pink-300/30 rounded-full blur-2xl"
          animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        {/* --- Main Content --- */}
        <h1 className="text-4xl font-extrabold mb-6 text-center relative z-10">
          Contact Us <br />
          <span className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] bg-clip-text text-transparent">
            for Influencers
          </span>
        </h1>

        <p className="max-w-xl text-center mb-10 text-gray-700 px-6 relative z-10">
          Have questions or want to join our network of passionate influencers?
          Fill out the form below and we’ll connect you with the best brand
          partnerships.
        </p>

        <form
          className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg relative z-10"
          onSubmit={handleSubmit}
        >
          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
              placeholder="Your full name"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
              placeholder="Your email address"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">
              Niche / Category
            </span>
            <input
              type="text"
              name="niche"
              value={formData.niche}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
              placeholder="Lifestyle, Tech, Fashion, etc."
            />
          </label>

          <label className="block mb-8">
            <span className="block text-gray-700 font-semibold mb-1">
              Message
            </span>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
              placeholder="Tell us anything you'd like"
            />
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white rounded-full w-full py-4 font-semibold text-lg hover:brightness-110 transition"
          >
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ContactForInfluencers;
