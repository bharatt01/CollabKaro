import { FC } from "react";
import { useNavigate } from "react-router-dom";
import influencerVideo from "../../public/Videos/influencers-hero.mp4"; // replace with your video path

const HeroSection: FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden rounded-b-3xl">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src={influencerVideo}
      />

      {/* Semi-transparent overlay to make text readable */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative Floating Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFD580]/30 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#E0523D]/30 rounded-full filter blur-3xl animate-blob animation-delay-3000" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-2xl">
          Unlock Your{" "}
          <span className="bg-gradient-to-r from-[#E0523D] via-[#FFD580] to-[#E0523D] bg-clip-text text-transparent">
            Influencer Potential
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Join CollabKaro to collaborate with top brands, grow your audience, and monetize your influence.
        </p>

        <button
          onClick={() => navigate("/contact/influencer")}
          className="mt-10 px-8 py-4 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
