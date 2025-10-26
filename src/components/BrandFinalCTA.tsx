import { FC } from "react";
import { useNavigate } from "react-router-dom";

const BrandFinalCTA: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact/brand");
  };

  return (
    <section className="relative py-28 bg-gradient-to-tr from-[#E0523D]/25 via-[#FFD580]/25 to-[#E0523D]/25 overflow-hidden flex flex-col justify-center items-center text-center px-6">
      {/* Dynamic colorful blurred blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#FFD580]/40 blur-3xl animate-blob" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E0523D]/40 blur-3xl animate-blob animation-delay-3000" />
      <div className="absolute top-1/3 right-1/2 w-72 h-72 rounded-full bg-[#F9E0B7]/50 blur-2xl animate-pulse" />

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-md leading-tight">
          Ready to Launch Your Campaign?
        </h2>
        <p className="text-gray-700 mb-12 text-xl max-w-xl mx-auto leading-relaxed">
          Collaborate with the right influencers, amplify your brand, and achieve measurable results.
        </p>
        <button
          onClick={handleClick}
          className="inline-block bg-gradient-to-r from-[#E0523D] via-[#FFB347] to-[#FFD580] text-white font-extrabold px-16 py-5 rounded-full shadow-2xl hover:scale-110 hover:shadow-yellow-400/60 transition-transform duration-300"
          aria-label="Get Started with Brand Campaign"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default BrandFinalCTA;
