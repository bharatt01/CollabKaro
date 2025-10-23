import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      {/* Animated background */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-[#E0523D]/15 via-[#FFD580]/15 to-[#E0523D]/15 pointer-events-none animate-gradient-shift"
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="absolute inset-0 bg-background/90" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-[#E0523D] to-[#FFD580] opacity-20 blur-3xl rounded-full animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-[#E0523D] to-[#FFD580] opacity-20 blur-3xl rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium glow-shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0523D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E0523D]"></span>
            </span>
            Trusted by Growing Businesses Worldwide
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900">
            Empower Your{" "}
            <span className="bg-gradient-to-r from-[#E0523D] via-[#FFD580] to-[#E0523D] bg-clip-text text-transparent">
              Marketing Strategy
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
            Connect with authentic influencers to amplify your brand impact effectively and efficiently.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Button
              size="lg"
              className="text-lg px-12 py-7 gap-3 bg-gradient-to-r from-[#E0523D] to-[#FFD580] text-white hover:from-[#C44A35] hover:to-[#D4B66A] shadow-lg flex items-center"
            >
              Inquire Now
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-12 py-7 gap-3 border-2 border-[#E0523D] text-[#E0523D] hover:bg-[#E0523D]/10 rounded-full transition-all"
            >
              <Mail className="h-5 w-5" />
              Talk to Our Experts
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center items-center gap-10 text-sm text-gray-700 max-w-xl mx-auto">
            {[
              "No long-term contracts",
              "Flexible budget-friendly solutions",
              "Transparent performance tracking",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#E0523D] to-[#FFD580] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white">✓</span>
                </div>
                <div>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
