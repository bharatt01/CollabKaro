import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-20 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
      
      {/* Hero image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Connecting Brands with Influencers
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            Amplify Your Brand with{" "}
            <span className="gradient-text animate-pulse-glow">
              Influencer Power
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between influential content creators and forward-thinking brands. 
            Discover authentic partnerships that drive real results.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 gap-2">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 group">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground">Influencers</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text">2M+</div>
              <div className="text-sm text-muted-foreground">Reach</div>
            </div>
          </div>
        </div>
      </div>

    {/* Scroll indicator (moved to right side) */}
<div className="absolute bottom-8 right-8 animate-bounce">
  <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
    <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
  </div>
      </div>
    </section>
  );
};

export default Hero;
