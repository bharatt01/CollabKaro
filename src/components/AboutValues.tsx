"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { LucideStar, LucideEdit3, LucideUsers, LucideTarget } from "lucide-react";

const AboutValues: FC = () => {
  const values = [
    {
      icon: LucideStar,
      title: "Integrity",
      description: "We value honesty and transparency in every collaboration.",
      color: "from-[#FFD580] to-[#E0523D]"
    },
    {
      icon: LucideEdit3,
      title: "Creativity",
      description: "We encourage unique ideas and innovative approaches.",
      color: "from-[#FFB86C] to-[#FF6F61]"
    },
    {
      icon: LucideUsers,
      title: "Collaboration",
      description: "We grow together with creators and brands.",
      color: "from-[#6DD5FA] to-[#2980B9]"
    },
    {
      icon: LucideTarget,
      title: "Impact",
      description: "We strive to make every connection meaningful.",
      color: "from-[#9B51E0] to-[#6F1AB1]"
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#FFF5E5] to-[#FFE4D9] overflow-hidden">
      {/* Floating decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD580]/20 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E0523D]/20 rounded-full filter blur-3xl animate-blob animation-delay-3000" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-16 text-gray-900 drop-shadow-lg">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center cursor-default overflow-hidden"
            >
              {/* Gradient Icon Circle */}
              <div className={`w-20 h-20 mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white text-3xl shadow-lg`}>
                <value.icon className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold mb-4 text-gray-900">{value.title}</h3>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>

              {/* Subtle hover shine */}
              <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
