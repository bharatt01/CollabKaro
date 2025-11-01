import { Users, Target, TrendingUp, Sparkles } from "lucide-react";
import { FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FC } from "react";
import heroVideo from "../../public/Videos/optimized-network.mp4";

const About: FC = () => {
  const features = [
    { icon: Users, title: "For Influencers", description: "Connect with premium brands that align with your values and content style. Grow your partnerships and monetize your influence." },
    { icon: Target, title: "For Brands", description: "Access a curated network of authentic influencers. Find the perfect voice to amplify your message and reach your target audience." },
    { icon: TrendingUp, title: "Data-Driven Matching", description: "Our platform analyzes engagement, audience demographics, and brand fit to ensure successful partnerships." },
    { icon: Sparkles, title: "End-to-End Support", description: "From discovery to campaign execution, we provide comprehensive support to maximize your influencer marketing ROI." },
  ];

  const floatingIcons = [
    { Icon: FaInstagram, color: "#E4405F", top: "10%", left: "5%", delay: "0s" },
    { Icon: FaYoutube, color: "#FF0000", top: "20%", right: "10%", delay: "1s" },
    { Icon: FaTwitter, color: "#1DA1F2", bottom: "15%", left: "15%", delay: "2s" },
    { Icon: FaLinkedin, color: "#0077B5", bottom: "10%", right: "20%", delay: "3s" },
  ];

  return (
    <section className="relative py-24 bg-[#FAFAFA] text-gray-900 overflow-hidden">
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        {floatingIcons.map((item, index) => (
          <item.Icon
            key={index}
            className="absolute text-6xl opacity-15 animate-float-smooth"
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

      {/* Background video (optimized) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-40"
          style={{ transform: "translateZ(0)", willChange: "transform" }}
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/40 to-transparent" />
      </div>

      {/* Keyframes for smoother motion */}
      <style>
        {`
          @keyframes float-smooth {
            0%, 100% { transform: translateY(0); opacity: 0.7; }
            50% { transform: translateY(-12px); opacity: 1; }
          }
          .animate-float-smooth {
            animation: float-smooth 10s ease-in-out infinite;
          }
          @keyframes fade-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-up {
            animation: fade-up 0.8s ease forwards;
          }
        `}
      </style>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            The Bridge Between{" "}
            <span className="bg-gradient-to-r from-[#E0523D] via-[#FF6F61] to-[#FFD580] bg-clip-text text-transparent">
              Influence & Impact
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're not just a platform — we're your strategic partner in creating
            meaningful, measurable influencer collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center fade-up" style={{ animationDelay: "0.3s" }}>
          {/* Video preview */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-auto object-cover rounded-3xl"
              style={{ transform: "translateZ(0)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
            <div className="absolute top-5 -right-6 bg-[#FF6F61] p-5 rounded-3xl shadow-md max-w-[180px] text-center font-bold text-white animate-bounce-slow">
              Trusted by Top Brands
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-500 flex items-start gap-6 opacity-0 fade-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <div className="p-4 bg-gradient-to-br from-[#FF6F61] to-[#FFD580] rounded-xl text-white flex items-center justify-center">
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
