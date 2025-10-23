import { Play, Camera, Users, Lightbulb } from "lucide-react";
import btsVideoThumb from "@/assets/bts-video-thumb.jpg";
import successVideoThumb from "@/assets/success-video-thumb.jpg";

const BehindTheScenes = () => {
  const videos = [
    {
      thumbnail: btsVideoThumb,
      icon: Camera,
      title: "Behind the Scenes",
      description: "See how content creators work with brands",
      duration: "4:20",
      category: "Documentary",
    },
    {
      thumbnail: successVideoThumb,
      icon: Lightbulb,
      title: "Success Stories",
      description: "Real campaigns, real results, real impact",
      duration: "5:15",
      category: "Case Study",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Go <span className="gradient-text">Behind the Scenes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exclusive content showing the magic of influencer collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:card-shadow transition-all duration-500 hover:-translate-y-2">
                {/* Video section */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={`${video.title} video thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-shadow">
                      <Play className="h-10 w-10 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <div className="glass-card px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md flex items-center gap-2">
                      <video.icon className="h-4 w-4" />
                      {video.category}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4">
                    <div className="glass-card px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-md">
                      {video.duration}
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">25K+ views</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-muted-foreground">Trending</span>
                    </div>
                  </div>

                  {/* Watch now button */}
                  <button className="w-full gradient-secondary text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Play className="h-5 w-5" />
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video library CTA */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="glass-card inline-block p-8 rounded-3xl max-w-2xl">
            <Camera className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-3">Explore Our Video Library</h3>
            <p className="text-muted-foreground mb-6">
              Access exclusive tutorials, case studies, and behind-the-scenes content
            </p>
            <button className="gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              Browse All Videos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
