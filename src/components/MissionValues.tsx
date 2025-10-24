import { FC } from "react";
import { Eye, HeartHandshake, TrendingUp } from "lucide-react";

export const MissionValues: FC = () => (
  <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-10 text-[#E0523D]">Our Mission & Vission</h2>
    <div className="grid md:grid-cols-3 gap-12">
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-[#E0523D] to-[#FFD580] p-5 rounded-full mb-6 drop-shadow-md">
          <Eye className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Transparency</h3>
        <p className="text-gray-700 leading-relaxed">We believe in clear partnerships and honest campaigns—no hidden surprises.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-[#FFD580] to-[#E0523D] p-5 rounded-full mb-6 drop-shadow-md">
          <HeartHandshake className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Authenticity</h3>
        <p className="text-gray-700 leading-relaxed">Our platform promotes genuine connections with influencers who truly align with your brand.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-[#E0523D] to-[#FFD580] p-5 rounded-full mb-6 drop-shadow-md">
          <TrendingUp className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Empowerment</h3>
        <p className="text-gray-700 leading-relaxed">We help creators and brands grow together through smart, collaborative strategies.</p>
      </div>
    </div>
  </section>
);
