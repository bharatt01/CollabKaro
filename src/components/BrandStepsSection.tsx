import { FC } from "react";
import { Target, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  { icon: <Target className="w-16 h-16 text-white drop-shadow-lg" />, title: "Define Campaign", desc: "Set goals, audience, and budget." },
  { icon: <Sparkles className="w-16 h-16 text-white drop-shadow-lg" />, title: "Get Matched", desc: "We connect you with verified influencers." },
  { icon: <ArrowRight className="w-16 h-16 text-white drop-shadow-lg" />, title: "Launch & Track", desc: "Monitor results with live analytics." },
];

const BrandSteps: FC = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#FFF7ED] via-[#FFD580]/50 to-[#E0523D]/10 px-6 md:px-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-24 text-[#E0523D] drop-shadow-lg">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-16 relative">
        {steps.map((s, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center text-center relative group z-10">
            <div className="bg-gradient-to-br from-[#E0523D] to-[#FFD580] p-8 rounded-full mb-8 shadow-2xl group-hover:scale-105 transition-transform duration-300 border-4 border-white animate-[pulse_2s_ease-in-out_infinite]">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#E0523D] transition-colors">
              {s.title}
            </h3>
            <p className="text-gray-700 max-w-xs">{s.desc}</p>
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-[-7rem] w-36 h-2 bg-gradient-to-r from-[#FFD580] to-[#E0523D] rounded-full z-0" />
            )}
            {/* Animated accent blob */}
            <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#FFD580]/30 blur-2xl animate-blob animation-delay-${(idx + 1) * 1200}`}></div>
          </div>
        ))}
      </div>

      {/* Decorative background blobs */}
      <div className="hidden md:block absolute top-12 left-10 w-40 h-40 rounded-full bg-[#FFD580]/30 blur-3xl animate-blob" />
      <div className="hidden md:block absolute bottom-20 right-14 w-52 h-52 rounded-full bg-[#E0523D]/25 blur-3xl animate-blob animation-delay-2400" />
      <div className="absolute inset-0 pointer-events-none z-0"></div>
    </section>
  );
};

export default BrandSteps;
