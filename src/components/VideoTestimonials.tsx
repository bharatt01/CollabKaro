import { Play, Quote } from "lucide-react";
import testimonialVideo1 from "@/assets/testimonial-video-1.jpg";
import testimonialVideo2 from "@/assets/testimonial-video-2.jpg";
import testimonialVideo3 from "@/assets/testimonial-video-3.jpg";

const VideoTestimonials = () => {
  const testimonials = [
    {
      thumbnail: testimonialVideo1,
      name: "Krishna Sikka",
      role: "Marketing Director, TechCorp",
      quote: "InfluenceHub transformed our influencer marketing strategy completely",
      duration: "2:15",
      views: "12K",
    },
    {
      thumbnail: testimonialVideo2,
      name: "Riyan Sharma",
      role: "Content Creator, 850K Followers",
      quote: "I found my dream brand partnerships within weeks of joining",
      duration: "1:45",
      views: "8.5K",
    },
    {
      thumbnail: testimonialVideo3,
      name: "Jay Z900",
      role: "Brand Manager, Fashion Forward",
      quote: "The ROI we achieved exceeded all our expectations",
      duration: "2:30",
      views: "15K",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 gradient-secondary opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 gradient-primary opacity-10 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Quote className="h-4 w-4" />
            Real Stories, Real Results
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Hear From Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how brands and influencers are achieving success with InfluenceHub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass-card rounded-3xl overflow-hidden hover:card-shadow transition-all duration-500 hover:-translate-y-2">
                {/* Video thumbnail */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={testimonial.thumbnail}
                    alt={`${testimonial.name} video testimonial`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center glow-shadow">
                      <Play className="h-8 w-8 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Duration & views */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="glass-card px-2 py-1 rounded text-xs font-semibold backdrop-blur-md">
                      {testimonial.duration}
                    </div>
                    <div className="glass-card px-2 py-1 rounded text-xs font-semibold backdrop-blur-md">
                      {testimonial.views} views
                    </div>
                  </div>

                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Quote className="h-6 w-6 mb-2 opacity-60" />
                    <p className="font-medium text-sm leading-relaxed">{testimonial.quote}</p>
                  </div>
                </div>

                {/* Info section */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-4">Join thousands of success stories</p>
          <button className="gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 glow-shadow">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
