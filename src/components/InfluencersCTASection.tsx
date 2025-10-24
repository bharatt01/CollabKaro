import { FC } from "react";

const CTASection: FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#E0523D]/20 to-[#FFD580]/20 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900">
        Ready to Grow Your Influence?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8">
        Start collaborating with brands that match your style and audience today.
      </p>
      <a
        href="/contact/influencer"
        className="inline-block px-8 py-4 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white font-bold rounded-full shadow-lg hover:brightness-110 transition"
      >
        Join Now
      </a>
    </section>
  );
};

export default CTASection;
