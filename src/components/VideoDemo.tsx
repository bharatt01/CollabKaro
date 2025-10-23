import { Play, Volume2, Maximize2 } from "lucide-react";
import { useState } from "react";
import demoVideoThumb from "@/assets/demo-video-thumb.jpg";

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            See Our Platform in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how brands and influencers connect seamlessly on CollabKaro
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden card-shadow group cursor-pointer animate-scale-in"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {/* Video thumbnail */}
            <div className="relative aspect-video">
              <img 
                src={demoVideoThumb}
                alt="Platform demo video showing dashboard and features"
                className="w-full h-full object-cover"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              
              {/* Play button */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-shadow">
                    <Play className="h-12 w-12 text-white ml-1" fill="white" />
                  </div>
                </div>
              )}

              {/* Video duration badge */}
              <div className="absolute bottom-4 left-4 glass-card px-3 py-1 rounded-lg text-sm font-semibold">
                3:45
              </div>

              {/* Video controls (appear on hover) */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  className="glass-card p-2 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Volume"
                >
                  <Volume2 className="h-5 w-5" />
                </button>
                <button 
                  className="glass-card p-2 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Video title overlay */}
            <div className="absolute top-4 left-4 right-4">
              <div className="glass-card p-4 rounded-2xl backdrop-blur-md">
                <h3 className="font-bold text-lg mb-1">Platform Walkthrough</h3>
                <p className="text-sm text-muted-foreground">Discover how easy it is to connect and collaborate</p>
              </div>
            </div>
          </div>

          {/* Video highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { time: "0:30", title: "Dashboard Overview", description: "Navigate your campaigns" },
              { time: "1:45", title: "Match Algorithm", description: "Find perfect partnerships" },
              { time: "2:50", title: "Analytics Deep Dive", description: "Track real-time metrics" },
            ].map((highlight, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-2xl hover:card-shadow transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gradient-primary text-white font-bold px-3 py-1 rounded-lg inline-block text-sm mb-3">
                  {highlight.time}
                </div>
                <h4 className="font-bold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
