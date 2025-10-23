import { Award, DollarSign, Zap, Globe } from "lucide-react";
import analyticsVisual from "@/assets/analytics-visual.jpg";

const Stats = () => {
  const stats = [
    {
      icon: Award,
      value: "250+",
      label: "Successful Campaigns",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Revenue Generated",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      value: "15x",
      label: "Average ROI",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries Reached",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Results That <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform delivers measurable impact for brands and influencers alike
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-3xl hover:card-shadow transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Analytics visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden card-shadow">
              <img 
                src={analyticsVisual}
                alt="Analytics dashboard showing social media metrics and performance data"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating metric cards */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl glow-shadow animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 glass-card p-6 rounded-2xl glow-shadow animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100M+</div>
                  <div className="text-sm text-muted-foreground">Total Reach</div>
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
