import { FC } from "react";

export const SocialProof: FC = () => (
  <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto bg-gradient-to-r from-[#FFF7ED] via-[#FFD580]/30 to-[#fff] rounded-3xl shadow-lg text-center">
    <h2 className="text-4xl font-bold mb-8 text-[#E0523D]">Trusted By Industry Leaders</h2>
    <p className="text-gray-700 max-w-xl mx-auto mb-6">
      CollabKaro has enabled hundreds of campaigns with top brands and creators, earning a reputation for transparency and innovation.
    </p>
    <div className="flex justify-center gap-12 flex-wrap items-center">
      <img src="/logos/brand1.svg" alt="Brand 1" className="h-12 grayscale opacity-70 hover:opacity-100 transition-opacity" />
      <img src="/logos/brand2.svg" alt="Brand 2" className="h-12 grayscale opacity-70 hover:opacity-100 transition-opacity" />
      <img src="/logos/brand3.svg" alt="Brand 3" className="h-12 grayscale opacity-70 hover:opacity-100 transition-opacity" />
      <img src="/logos/brand4.svg" alt="Brand 4" className="h-12 grayscale opacity-70 hover:opacity-100 transition-opacity" />
    </div>
  </section>
);
