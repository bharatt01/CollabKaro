import { Users, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "1. Sign Up",
      desc: "Create your influencer profile in minutes. Showcase your niche and stats.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "2. Get Matched",
      desc: "Our smart system connects you with relevant brand campaigns.",
    },
    {
      icon: <ArrowRight className="w-10 h-10 text-primary" />,
      title: "3. Collaborate & Earn",
      desc: "Create authentic content, share it, and get paid for your influence.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          How It <span className="gradient-text">Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-8 glass-card rounded-2xl space-y-4 hover:shadow-lg transition-all"
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-16">
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
