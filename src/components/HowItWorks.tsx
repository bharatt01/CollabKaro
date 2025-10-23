import { Search, Handshake, Rocket, BarChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description: "Browse our curated database of verified influencers or brands. Use advanced filters to find your perfect match.",
    },
    {
      icon: Handshake,
      number: "02",
      title: "Connect",
      description: "Reach out directly through our platform. Start conversations, share ideas, and negotiate terms seamlessly.",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Collaborate",
      description: "Launch your campaign with confidence. Access our toolkit for content approval, scheduling, and management.",
    },
    {
      icon: BarChart,
      number: "04",
      title: "Measure",
      description: "Track performance in real-time. Get detailed analytics on reach, engagement, conversions, and ROI.",
    },
  ];

  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-secondary opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your influencer marketing strategy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connecting line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-accent opacity-30" />
              )}

              <div className="glass-card p-8 rounded-2xl hover:card-shadow transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm glow-shadow">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="gradient-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">Ready to get started?</p>
          <button className="gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 glow-shadow">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
