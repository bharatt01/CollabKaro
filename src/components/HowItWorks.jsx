import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Sparkles, ArrowRight, Target } from "lucide-react";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("influencer");
  const navigate = useNavigate();

  const stepsData = {
    influencer: [
      {
        icon: <Users className="w-12 h-12 text-white" />,
        title: "Sign Up",
        desc: "Create your influencer profile and showcase your niche, engagement, and audience.",
      },
      {
        icon: <Sparkles className="w-12 h-12 text-white" />,
        title: "Get Matched",
        desc: "We connect you with brands and campaigns that match your style and audience.",
      },
      {
        icon: <ArrowRight className="w-12 h-12 text-white" />,
        title: "Collaborate & Earn",
        desc: "Deliver authentic content, participate in campaigns, and earn for your influence.",
      },
    ],
    brand: [
      {
        icon: <Target className="w-12 h-12 text-white" />,
        title: "Create Campaign",
        desc: "Describe your brand and campaign goals to find the right influencers.",
      },
      {
        icon: <Sparkles className="w-12 h-12 text-white" />,
        title: "Get Matched",
        desc: "We provide a curated list of influencers that align with your brand values.",
      },
      {
        icon: <ArrowRight className="w-12 h-12 text-white" />,
        title: "Launch & Track",
        desc: "Execute campaigns efficiently and track performance in real-time.",
      },
    ],
  };

  const steps = stepsData[activeTab];

  // Floating social media icons config
  const floatingIcons = [
    { Icon: FaInstagram, color: "#E4405F", top: "12%", left: "8%", delay: "0s" },
    { Icon: FaYoutube, color: "#FF0000", top: "20%", right: "12%", delay: "1s" },
    { Icon: FaTwitter, color: "#1DA1F2", bottom: "18%", left: "10%", delay: "2s" },
    { Icon: FaLinkedin, color: "#0077B5", bottom: "8%", right: "18%", delay: "3s" },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#FAFAFA]">
      {/* Animated floating social media icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map((item, i) => (
          <item.Icon
            key={i}
            className="absolute text-6xl opacity-20 animate-float-slow"
            style={{
              color: item.color,
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              animationDelay: item.delay,
            }}
          />
        ))}
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background accent layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6F61]/10 via-[#FFD580]/10 to-[#FF6F61]/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          How It <span className="text-[#FF6F61]">Works</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-14">
          Whether you’re an influencer or a brand, our platform makes collaborations seamless and rewarding.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-14">
          <button
            onClick={() => setActiveTab("influencer")}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              activeTab === "influencer"
                ? "bg-gradient-to-r from-[#FF6F61] to-[#FFD580] text-white shadow-2xl scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Influencers
          </button>
          <button
            onClick={() => setActiveTab("brand")}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              activeTab === "brand"
                ? "bg-gradient-to-r from-[#FF6F61] to-[#FFD580] text-white shadow-2xl scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Brands
          </button>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#f9f9f8] rounded-3xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center text-center space-y-4"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="bg-gradient-to-br from-[#FF6F61] to-[#FFD580] p-4 rounded-full flex items-center justify-center shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-16">
          <Button
            size="lg"
            className="text-lg px-10 py-6 bg-gradient-to-r from-[#FF6F61] to-[#FFD580] hover:from-[#E055B8] hover:to-[#D4B66A] text-white shadow-lg"
            onClick={() =>
              navigate(activeTab === "influencer" ? "/contact/influencer" : "/contact/brand")
            }
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
