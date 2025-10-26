import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundVideo from "../../public/Videos/home-hero.mp4";

const Hero = () => {
  const navigate = useNavigate();

  // Function to call when Get Started is clicked
  const handleCall = () => {
   
      window.location.href = "tel:+9196432424844";

    // Then navigate to your desired route
    // navigate("/get-started");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />

      {/* Floating Accent Blobs */}
      <div className="absolute -top-32 -left-20 w-[30rem] h-[30rem] bg-[#FF6F61]/40 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-[#FFD580]/40 blur-[140px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl space-y-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md shadow-lg">
          <span className="flex h-3 w-3 rounded-full bg-[#FF6F61]" />
          The Future of Creator Collaboration
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Where{" "}
          <span className="bg-gradient-to-r from-[#FF6F61] via-[#FFD580] to-[#FF6F61] bg-clip-text text-transparent">
            Brands & Creators
          </span>{" "}
          Grow Together
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We build meaningful partnerships between companies and creators — rooted in authenticity, performance, and trust.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
          <Button
            size="lg"
            className="text-base px-10 py-6 bg-[#FF6F61] hover:bg-[#e7544b] text-white font-semibold rounded-full shadow-lg hover:shadow-[#FF6F61]/50 transition-all"
            onClick={handleCall} // Call the function here
          >
            Get Started <ArrowRight className="ml-3 h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="text-base px-10 py-6 border-white/80 text-black bg-white/70 hover:bg-white/90 hover:text-black rounded-full font-semibold transition-all backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45)]"
            onClick={() => navigate("/contact")}
          >
            Connect With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
