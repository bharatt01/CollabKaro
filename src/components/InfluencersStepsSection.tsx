import { FC } from "react";
import { Users, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  { icon: Users, title: "Sign Up", description: "Create your influencer profile and showcase your niche, engagement, and audience." },
  { icon: Sparkles, title: "Get Matched", description: "We connect you with brands and campaigns that match your style and audience." },
  { icon: TrendingUp, title: "Collaborate & Earn", description: "Deliver authentic content, participate in campaigns, and earn for your influence." },
];

const StepsSection: FC = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] px-6 md:px-16 relative">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">
        How It Works
      </h2>
      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:w-1/2 relative">
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#E0523D]/20 to-[#FFD580]/20 rounded-full blur-3xl animate-blob" />
              <div className="bg-gradient-to-br from-[#E0523D] to-[#FFD580] w-20 h-20 rounded-full flex items-center justify-center shadow-xl relative z-10">
                <step.icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
