import { Award, DollarSign, Zap, Globe } from "lucide-react";
import analyticsVisual from "@/assets/analytics-visual.jpg";

const Stats = () => {
  const stats = [
    {
      icon: Award,
      label: "Successful Campaigns and Collaborations",
      color: "from-[#FF6F61] to-[#FFD580]",
    },
    {
      icon: DollarSign,
      label: "Significant Revenue Growth",
      color: "from-[#FF6F61] to-[#FFD580]",
    },
    {
      icon: Zap,
      label: "Outstanding Average ROI",
      color: "from-[#FF6F61] to-[#FFD580]",
    },
    {
      icon: Globe,
      label: "Extensive Global Reach",
      color: "from-[#FF6F61] to-[#FFD580]",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F61]/10 via-[#FFD580]/10 to-[#FF6F61]/10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            Results That <span className="bg-gradient-to-r from-[#FF6F61] via-[#FFD580] to-[#FF6F61] bg-clip-text text-transparent">Speak Volumes</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our platform delivers measurable impact for brands and influencers alike
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in max-w-xl mx-auto lg:max-w-none lg:mx-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-3xl hover:card-shadow transition-all duration-300 hover:scale-105 group flex flex-col items-center text-center space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-lg text-gray-900 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Analytics visual */}
          <div className="relative animate-slide-in-right rounded-3xl overflow-hidden shadow-lg">
            <img
              src={analyticsVisual}
              alt="Analytics dashboard showing social media metrics and performance data"
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-3xl" />

            {/* Floating metric cards */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl glow-shadow animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6F61] to-[#FFD580] rounded-full flex items-center justify-center shadow-md">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Amazing Client Feedback</div>
                  <div className="text-sm text-gray-700">Satisfaction Rating</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-6 -right-6 glass-card p-6 rounded-2xl glow-shadow animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#9AC531] to-[#FFD580] rounded-full flex items-center justify-center shadow-md">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Expanding Network</div>
                  <div className="text-sm text-gray-700">Global Influence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
  