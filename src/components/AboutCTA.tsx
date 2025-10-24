import { FC } from "react";

export const AboutCTA: FC = () => (
  <section className="py-20 px-6 md:px-16 text-center">
    <h2 className="text-4xl font-extrabold mb-6 text-[#E0523D]">Join The CollabKaro Movement</h2>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
      Whether you’re a brand or an influencer, it’s time to collaborate smarter. Build authentic partnerships that deliver real results.
    </p>
    <a
      href="/contact/brand"
      className="inline-block bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white font-bold px-16 py-5 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      Get Started Now
    </a>
  </section>
);
