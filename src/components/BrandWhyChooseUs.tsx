import { FC } from "react";
import { Target, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Precision Matching",
    desc: "Connect with influencers whose audience perfectly aligns with your brand goals.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    desc: "Track campaigns with real-time analytics and optimize performance effortlessly.",
  },
  {
    icon: Users,
    title: "Trusted Influencers",
    desc: "Collaborate only with verified influencers who maintain authenticity and engagement.",
  },
];

const BrandWhyChooseUs: FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-tr from-[#FFF5E6] via-[#FFEBCD] to-[#FFF9F2] px-6 md:px-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#E0523D] drop-shadow-sm">
        Why Brands Trust CollabKaro
      </h2>
      <div className="grid md:grid-cols-3 gap-14 max-w-7xl mx-auto">
        {reasons.map((r, idx) => (
          <div
            key={idx}
            className="relative bg-white p-12 rounded-3xl shadow-lg hover:shadow-[0_10px_25px_rgba(224,82,61,0.4)] transform hover:-translate-y-3 transition-all cursor-pointer group"
          >
            <div className="p-6 rounded-full bg-gradient-to-br from-[#E0523D] to-[#FFD580] inline-flex text-white mb-8 drop-shadow-lg group-hover:scale-110 transition-transform">
              <r.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-[#E0523D] transition-colors">
              {r.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{r.desc}</p>
            {/* Floating accent shape */}
            <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tr from-[#FFD580]/50 to-[#E0523D]/40 blur-2xl animate-blob animation-delay-${(idx + 1) * 1500}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandWhyChooseUs;
