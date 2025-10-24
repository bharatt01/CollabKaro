import { FC } from "react";

const InfluencerCTA: FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-tr from-[#E0523D]/20 via-[#FFD580]/20 to-[#E0523D]/20 overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#FFD580]/30 blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#E0523D]/30 blur-3xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto text-center relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
          Ready to Collaborate & Grow?
        </h2>
        <p className="text-gray-700 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
          Join CollabKaro today and start working with brands that match your style and influence.
        </p>
        <a
          href="/contact/influencer"
          className="inline-block px-10 py-5 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default InfluencerCTA;
