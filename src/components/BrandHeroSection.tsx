import { FC } from "react";
import { LucideSparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import brandVideo from "../../public/Videos/brand-hero.mp4"; // replace with your video path

const BrandHeroSection: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden rounded-b-3xl">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={brandVideo}
      />

      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Animated decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD580]/30 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E0523D]/30 rounded-full filter blur-3xl animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 h-40 bg-gradient-to-l from-[#FFD580]/50 to-[#E0523D]/10 blur-3xl opacity-70 animate-pulse"></div>

      {/* Sparkles Icon */}
      <span className="mb-4 inline-flex items-center justify-center rounded-full bg-[#E0523D]/20 p-6 shadow-lg animate-fade-in">
        <LucideSparkles className="w-10 h-10 text-[#E0523D]" />
      </span>

      {/* Heading & Subheading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-2xl max-w-4xl">
        Unlock{" "}
        <span className="bg-gradient-to-r from-[#E0523D] via-[#FFD580] to-[#E0523D] bg-clip-text text-transparent">
          the Power
        </span>{" "}
        of Influencer Marketing
      </h1>
      <p className="text-lg md:text-2xl text-white max-w-2xl mb-8 drop-shadow-md animate-fade-in delay-500">
        Collaborate with authentic influencers, boost brand visibility, and drive measurable results—all in one platform.
      </p>

      {/* Call-to-action Button */}
      <button
        onClick={() => navigate("/contact/brand")}
        className="relative inline-flex items-center gap-2 px-10 py-5 font-bold text-white bg-gradient-to-r from-[#E0523D] via-[#FFD580] to-[#E0523D] rounded-xl shadow-2xl hover:scale-105 transition-transform hover:shadow-yellow-200/40 animate-float"
      >
        <span className="relative z-10">Start Your Campaign</span>
        <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full border-2 border-[#FFD580] animate-bounce"></span>
      </button>

      {/* Decorative Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-28 fill-[#FFD580]/40"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,176C672,203,768,277,864,282.7C960,288,1056,224,1152,181.3C1248,139,1344,117,1392,106.7L1440,96V320H0Z"></path>
      </svg>
    </section>
  );
};

export default BrandHeroSection;
