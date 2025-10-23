import { Instagram, Youtube, Twitter } from "lucide-react";
import influencer1 from "@/assets/influencer-1.jpg";
import influencer2 from "@/assets/influencer-2.jpg";
import influencer3 from "@/assets/influencer-3.jpg";
import influencer4 from "@/assets/influencer-4.jpg";

const InfluencerShowcase = () => {
  const influencers = [
    {
      image: influencer1,
      name: "Sarah Chen",
      category: "Lifestyle & Fashion",
      followers: "850K",
      platforms: [Instagram, Youtube],
      engagement: "8.5%",
    },
    {
      image: influencer2,
      name: "Alex Rivera",
      category: "Tech & Gaming",
      followers: "1.2M",
      platforms: [Youtube, Twitter],
      engagement: "12.3%",
    },
    {
      image: influencer3,
      name: "Maya Johnson",
      category: "Beauty & Wellness",
      followers: "620K",
      platforms: [Instagram, Youtube],
      engagement: "9.8%",
    },
    {
      image: influencer4,
      name: "David Kim",
      category: "Travel & Lifestyle",
      followers: "945K",
      platforms: [Instagram, Twitter],
      engagement: "7.2%",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 gradient-primary opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 gradient-secondary opacity-10 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Influencers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet some of the talented creators ready to amplify your brand message
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {influencers.map((influencer, index) => (
            <div 
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:card-shadow transition-all duration-500 hover:-translate-y-4">
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={influencer.image}
                    alt={`${influencer.name} - ${influencer.category} influencer`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md">
                    {influencer.engagement} Engagement
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{influencer.name}</h3>
                    <p className="text-sm text-muted-foreground">{influencer.category}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold gradient-text">{influencer.followers}</div>
                      <div className="text-xs text-muted-foreground">Total Reach</div>
                    </div>
                    
                    <div className="flex gap-2">
                      {influencer.platforms.map((Platform, i) => (
                        <div 
                          key={i}
                          className="w-8 h-8 rounded-full gradient-secondary flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Platform className="h-4 w-4 text-white" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full gradient-primary text-white py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:gradient-primary hover:text-white hover:scale-105 transition-all duration-300">
            Explore All Influencers
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfluencerShowcase;
