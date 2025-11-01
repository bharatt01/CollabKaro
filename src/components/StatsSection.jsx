import { useEffect, useState } from "react";
import { Users, Building2, Globe2, Sparkles } from "lucide-react";

const stats = [
  { icon: <Users className="w-6 h-6 text-white" />, label: "Influencers", value: 50 },
  { icon: <Building2 className="w-6 h-6 text-white" />, label: "Brands", value: 20 },
  { icon: <Globe2 className="w-6 h-6 text-white" />, label: "Campaigns", value: 100 },
  { icon: <Sparkles className="w-6 h-6 text-white" />, label: "Reach (K+)", value: 1000 },
];

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((s, i) => {
      let start = 0;
      const end = s.value;
      const duration = 1800;
      const step = 15;
      const inc = end / (duration / step);
      const counter = setInterval(() => {
        start += inc;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounters((p) => {
          const u = [...p];
          u[i] = Math.floor(start);
          return u;
        });
      }, step);
    });
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#fff8f5] via-[#fff] to-[#ffe6de] text-center overflow-hidden">
      {/* Background lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffe6de_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#fff2eb_0%,transparent_60%)]"></div>

      <h2 className="text-5xl font-extrabold text-gray-900 mb-16 relative z-10">
        Our <span className="text-[#FF6F61]">Impact</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-md p-8 w-56 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Tight circular gradient background */}
            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF6F61] to-[#FFD580] shadow-sm">
              {s.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{counters[i]}+</h3>
            <p className="text-gray-700 mt-1 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
