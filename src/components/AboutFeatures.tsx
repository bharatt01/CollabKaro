import { FC } from "react";
import { Users, Target, TrendingUp, Sparkles } from "lucide-react";

const AboutFeatures: FC = () => {
  const features = [
    {
      icon: Users,
      title: "Creators First",
      description:
        "We prioritize creators’ growth, providing the tools and opportunities they need to thrive.",
    },
    {
      icon: Target,
      title: "Brand Alignment",
      description:
        "Our approach ensures brands meet influencers who match their vision and values.",
    },
    {
      icon: TrendingUp,
      title: "Smart Insights",
      description:
        "We leverage data and insights to maximize impact without compromising authenticity.",
    },
    {
      icon: Sparkles,
      title: "Supportive Network",
      description:
        "From strategy to execution, our team guides every collaboration seamlessly.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          What Makes Us Different
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl shadow-md hover:scale-105 transition-transform cursor-default"
            >
              <feature.icon className="h-10 w-10 text-[#E0523D] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
