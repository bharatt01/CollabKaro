"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import heroImage from "../assets/hero-image.jpg"; // replace with your image path

export const AboutHero: FC = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden rounded-b-3xl">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Stronger Gradient Overlay */}
      <div className="absolute w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* Subtle animated blobs for depth */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD580]/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF7043]/20 rounded-full filter blur-3xl animate-blob animation-delay-3000" />

      {/* Content with motion/parallax effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          We Bring{" "}
          <span className="bg-gradient-to-r from-[#FF7043] to-[#FFD580] text-transparent bg-clip-text">
            Brands & Creators
          </span>{" "}
          Together
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          CollabKaro is where creativity meets purpose. We help creators share
          their story while empowering brands to connect authentically—no noise,
          just real influence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.06 }}
            href="/for-influencers"
            className="px-8 py-4 bg-gradient-to-r from-[#FF7043] to-[#FFD580] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            For Influencers
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.06 }}
            href="/for-brands"
            className="px-8 py-4 bg-white/90 backdrop-blur-md text-black font-semibold rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all"
          >
            For Brands
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
