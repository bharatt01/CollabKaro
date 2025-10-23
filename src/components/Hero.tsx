import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0F] text-white">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#FF6F61]/30 via-transparent to-[#FFD580]/20"
      />

      {/* Background image with controlled opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-sm tracking-wide shadow-md">
            <span className="flex h-3 w-3 rounded-full bg-[#FF6F61]" />
            Connecting Brands with Influencers
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-6xl font-extrabold tracking-wide leading-tight">
            Elevate Your Brand with{" "}
            <span className="bg-gradient-to-r from-[#FF6F61] via-[#FFD580] to-[#FF6F61] bg-clip-text text-transparent">
              Authentic Influence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            We help brands grow by connecting them with the right creators —
            building meaningful partnerships that deliver real engagement and trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-base px-10 py-6 bg-[#FF6F61] hover:bg-[#e7544b] text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-[#FF6F61]/60"
            >
              Get Started
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-10 py-6 border-white/30 bg-transparent text-white hover:bg-white/10 rounded-full transition-all font-semibold"
            >
              {/* <Play className="mr-3 h-6 w-6" /> */}
              Connect with Us
            </Button>
          </div>

          {/* Stats */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
