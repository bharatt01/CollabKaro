import { Camera, TrendingUp, Handshake } from "lucide-react";

const WhyJoin = () => {
  const benefits = [
    {
      icon: <Camera className="w-10 h-10 text-primary" />,
      title: "Brand Collaborations",
      desc: "Work with premium brands in lifestyle, fashion, tech, beauty, and more.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Monetize Your Influence",
      desc: "Get paid campaigns tailored to your niche and audience size.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-primary" />,
      title: "Trusted Partnerships",
      desc: "We ensure transparent deals and timely payouts for all creators.",
    },
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Why <span className="gradient-text">Join CollabKaro?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl text-center space-y-4 hover:scale-105 transition-transform"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
