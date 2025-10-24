import { FC } from "react";
import { Users, Sparkles, TrendingUp, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Connect with Top Brands",
    description:
      "Collaborate with premium brands that align with your style and audience, growing your partnerships and revenue.",
    color: "from-[#E0523D] to-[#FFD580]",
  },
  {
    icon: Sparkles,
    title: "Monetize Your Influence",
    description: "Earn from campaigns and collaborations while building your personal brand sustainably.",
    color: "from-[#FFD580] to-[#E0523D]",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Network",
    description: "Expand your audience and influence with data-driven opportunities and platform insights.",
    color: "from-[#E0523D]/80 to-[#FFD580]/80",
  },
  {
    icon: Target,
    title: "Analytics & Insights",
    description: "Track your campaign performance and engagement metrics to optimize your influence strategy.",
    color: "from-[#FFD580]/70 to-[#E0523D]/70",
  },
];

const FeaturesSection: FC = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-16 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FFD580]/10 blur-3xl" />
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">
        Why Join CollabKaro?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-3 relative group bg-[#FAFAFA]"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${feature.color} text-white group-hover:scale-110 transition-transform absolute -top-8 left-1/2 -translate-x-1/2 shadow-xl`}
            >
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-12 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
