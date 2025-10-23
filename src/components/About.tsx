import { Users, Target, TrendingUp, Sparkles } from "lucide-react";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import connectionGraphic from "@/assets/about.png";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "For Influencers",
      description:
        "Connect with premium brands that align with your values and content style. Grow your partnerships and monetize your influence.",
    },
    {
      icon: Target,
      title: "For Brands",
      description:
        "Access a curated network of authentic influencers. Find the perfect voice to amplify your message and reach your target audience.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Matching",
      description:
        "Our platform analyzes engagement, audience demographics, and brand fit to ensure successful partnerships.",
    },
    {
      icon: Sparkles,
      title: "End-to-End Support",
      description:
        "From discovery to campaign execution, we provide comprehensive support to maximize your influencer marketing ROI.",
    },
  ];

  const floatingIcons = [
    { Icon: FaInstagram, color: "#E4405F", top: "10%", left: "5%", delay: "0s" },
    { Icon: FaYoutube, color: "#FF0000", top: "20%", right: "10%", delay: "1s" },
    { Icon: FaTwitter, color: "#1DA1F2", bottom: "15%", left: "15%", delay: "2s" },
    { Icon: FaLinkedin, color: "#0077B5", bottom: "10%", right: "20%", delay: "3s" },
  ];

  return (
    <section className="relative py-24 bg-[#FAFAFA] text-gray-900 overflow-hidden">
      {/* Floating Social Media Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <item.Icon
            key={index}
            className="absolute text-6xl opacity-20 animate-float-slow"
            style={{
              color: item.color,
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
            }}
          />
        ))}
      </div>

      {/* Floating animation styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            The Bridge Between{" "}
            <span className="bg-gradient-to-r from-[#FF6F61] via-[#FFD580] to-[#FF6F61] bg-clip-text text-transparent">
              Influence & Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're not just a platform—we're your strategic partner in creating
            meaningful, measurable influencer collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image with floating label */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src={connectionGraphic}
              alt="Network visualization showing brands connecting with influencers"
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
            <div className="absolute top-4 -right-6 bg-[#FF6F61] p-5 rounded-3xl shadow-lg max-w-[180px] text-center font-bold text-white z-10 float-anim">
              Trusted by Top Brands
            </div>
          </div>

          {/* Feature list */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow flex items-start gap-6 cursor-default"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-4 bg-gradient-to-br from-[#FF6F61] to-[#FFD580] rounded-xl text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
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
