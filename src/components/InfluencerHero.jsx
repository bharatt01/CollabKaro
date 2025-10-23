import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const influencerHero =
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1920&q=80";

export default function InfluencerHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${influencerHero})` }}
      />

      {/* Animated Pink Gradient Overlay */}
      <div
        className="absolute inset-0 gradient-hero opacity-25 animate-gradient-shift"
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Soft Black Gradient for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Optional Warm Purple-Pink Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/25 via-pink-700/15 to-transparent mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Empower Your <br />
            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              Influence with Purpose
            </span>
          </h1>

          <p className="text-lg md:text-xl text-pink-200 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Partner with top brands, share your story, and transform your online
            presence into meaningful collaborations that inspire millions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Button
              size="lg"
              className="text-lg px-10 py-6 font-medium bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              Join as Influencer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

           <Button
  variant="ghost" // use ghost to remove background override
  size="lg"
  className="text-lg px-10 py-6 font-bold text-pink-500 border border-pink-400 hover:text-pink-400 hover:bg-pink-100/10 transition-all duration-300 shadow-md"
>
  Watch How It Works
</Button>

          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="grid grid-cols-3 gap-6 mt-24 max-w-2xl mx-auto"
        >
          {[
            { number: "10K+", label: "Active Influencers" },
            { number: "500+", label: "Brand Partners" },
            { number: "2M+", label: "Campaign Reach" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow-md">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-pink-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

    
    </section>
  );
}
