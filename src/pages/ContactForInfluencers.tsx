import { useState, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const ContactForInfluencers = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");

    if (!formRef.current) return;

    const form = formRef.current;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      instagram: (form.elements.namedItem("instagram") as HTMLInputElement).value,
      followers: (form.elements.namedItem("followers") as HTMLSelectElement).value,
      niche: (form.elements.namedItem("niche") as HTMLSelectElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      contract: (form.elements.namedItem("contract") as HTMLSelectElement).value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbydsPIcAlMoROp-SswDmhnMSOCzB342QIhXgaewdsER0dVcSDTS1XAp84IUHVu-C-WIzQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setStatus("✅ Form submitted successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Error submitting form.");
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-[#FAFAFA] min-h-screen flex flex-col items-center overflow-hidden">
        {/* Moving Background Vectors */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#E0523D]/40 to-[#FFD580]/40 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-[#FFD580]/40 to-[#E0523D]/40 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-60 h-60 bg-pink-300/30 rounded-full blur-2xl"
          animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Content */}
        <h1 className="text-4xl font-extrabold mb-6 text-center relative z-10">
          Contact Us <br />
          <span className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] bg-clip-text text-transparent">
            for Influencers
          </span>
        </h1>

        <p className="max-w-xl text-center mb-10 text-gray-700 px-6 relative z-10">
          Join our network of passionate influencers. Fill out the form below to collaborate with top brands.
        </p>

        <form
          ref={formRef}
          className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg relative z-10"
          onSubmit={handleSubmit}
        >
          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Instagram Handle</span>
            <input
              type="text"
              name="instagram"
              required
              placeholder="@username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
            />
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Followers</span>
            <select
              name="followers"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
            >
              <option value="" disabled selected>Select followers range</option>
              <option value="1k-5k">Below 5k</option>
              <option value="5k-10k">5k-25k</option>
              <option value="10k-50k">25k-50k</option>
              <option value="50k-100k">50k-100k</option>
              <option value="100k+">100k+</option>
            </select>
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Niche</span>
            <select
              name="niche"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
            >
              <option value="" disabled selected>Select niche</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Tech">Tech</option>
              <option value="Fashion">Fashion</option>
              <option value="Fitness">Fitness</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="block mb-5">
            <span className="block text-gray-700 font-semibold mb-1">Contact No</span>
            <input
              type="text"
              name="contact"
              required
              placeholder="Phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
            />
          </label>

          <label className="block mb-8">
            <span className="block text-gray-700 font-semibold mb-1">Currently in contract with another agency?</span>
            <select
              name="contract"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#E0523D] focus:outline-none"
            >
              <option value="" disabled selected>Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white rounded-full w-full py-4 font-semibold text-lg hover:brightness-110 transition"
          >
            Submit
          </button>

          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
      </section>
      <Footer />
    </>
  );
};

export default ContactForInfluencers;
