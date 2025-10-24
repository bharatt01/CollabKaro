import { FC } from "react";
import { Users, BarChart2, Award } from "lucide-react";

const features = [
  { icon: Users, title: "Verified Influencers", desc: "Only work with trusted creators for authentic reach." },
  { icon: BarChart2, title: "Advanced Analytics", desc: "Track ROI, engagement, and growth effortlessly." },
  { icon: Award, title: "Quality & Trust", desc: "Every campaign maintains brand integrity and authenticity." },
];

const BrandFeatures: FC = () => {
  return (
    <section className="relative py-28 bg-gradient-to-tr from-[#FFF7ED] via-[#FFD580]/40 to-[#E0523D]/10 px-6 md:px-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-24 text-[#E0523D] drop-shadow-md">
        Platform Features for Brands
      </h2>
      <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto relative z-10">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="relative bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-5 transition-all cursor-pointer group"
          >
            <div className="p-7 rounded-full bg-gradient-to-br from-[#E0523D] to-[#FFD580] text-white mb-8 inline-flex drop-shadow-xl group-hover:scale-110 transition-transform">
              <f.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-[#E0523D] transition-colors">
              {f.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{f.desc}</p>
            <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#FFD580]/30 blur-3xl animate-blob animation-delay-${(idx + 1) * 1500}`}></div>
          </div>
        ))}
      </div>

      {/* Decorative blurred blobs */}
      <div className="hidden md:block absolute top-10 left-12 w-48 h-48 rounded-full bg-[#FFD580]/30 blur-3xl animate-blob" />
      <div className="hidden md:block absolute bottom-20 right-20 w-56 h-56 rounded-full bg-[#E0523D]/25 blur-3xl animate-blob animation-delay-3000" />
    </section>
  );
};

export default BrandFeatures;
