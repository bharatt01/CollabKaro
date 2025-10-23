import { Users, Target, TrendingUp, Sparkles } from "lucide-react";
import connectionGraphic from "@/assets/connection-graphic.jpg";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "For Influencers",
      description: "Connect with premium brands that align with your values and content style. Grow your partnerships and monetize your influence.",
    },
    {
      icon: Target,
      title: "For Brands",
      description: "Access a curated network of authentic influencers. Find the perfect voice to amplify your message and reach your target audience.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Matching",
      description: "Our AI-powered platform analyzes engagement, audience demographics, and brand fit to ensure successful partnerships.",
    },
    {
      icon: Sparkles,
      title: "End-to-End Support",
      description: "From discovery to campaign execution, we provide comprehensive support to maximize your influencer marketing ROI.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            The Bridge Between{" "}
            <span className="gradient-text">Influence & Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just a platform—we're your strategic partner in creating meaningful, 
            measurable influencer collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden card-shadow">
              <img 
                src={connectionGraphic} 
                alt="Network visualization showing brands connecting with influencers"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 gradient-hero opacity-20" />
            </div>
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 glass-card p-6 rounded-2xl glow-shadow animate-float">
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl hover:card-shadow transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="gradient-primary p-3 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
