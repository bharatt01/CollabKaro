import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-hero animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 gradient-primary opacity-20 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 gradient-secondary opacity-20 blur-3xl rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium glow-shadow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Join 10,000+ Success Stories
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            Ready to{" "}
            <span className="gradient-text">
              Transform
            </span>
            <br />
            Your Marketing?
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a brand looking for the perfect influencer or a creator 
            ready to monetize your influence—your journey starts here.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="lg" className="text-lg px-10 py-7 gap-3 group">
              Start Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-7 gap-3 border-2 hover:border-primary">
              <Mail className="h-5 w-5" />
              Contact Sales
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
