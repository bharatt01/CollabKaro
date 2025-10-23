import { Play, Quote, User } from "lucide-react";

const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "Krishna Sikka",
      role: "Marketing Director, TechCorp",
      quote: "InfluenceHub transformed our influencer marketing strategy completely",

    },
    {
      name: "Riyan Sharma",
      role: "Content Creator, 1M+ Followers",
      quote: "I found my dream brand partnerships within weeks of joining",
      
    },
    {
      name: "Jay",
      role: "Brand Manager, Fashion Forward",
      quote: "The ROI we achieved exceeded all our expectations",
  
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFAFA]">
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
            Hear From Our <span className="bg-gradient-to-r from-[#FF6F61] via-[#FFD580] to-[#FF6F61] bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <div className="glass-card rounded-3xl p-8 flex flex-col items-center gap-6 hover:card-shadow transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Icon representing anonymous user */}
                <div className="bg-gradient-to-br from-[#FF6F61] to-[#FFD580] w-36 h-36 rounded-full flex items-center justify-center shadow-lg">
                  <User className="h-20 w-20 text-white" />
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="h-8 w-8 mb-4 opacity-60 mx-auto" />
                  <p className="font-medium text-lg leading-relaxed max-w-xs mx-auto">{testimonial.quote}</p>
                </div>

                {/* Duration & views */}
                <div className="flex justify-center gap-4 text-sm font-semibold text-gray-700">
                  <div className="glass-card px-3 py-1 rounded backdrop-blur-md">
                    {testimonial.duration}
                  </div>
                  <div className="glass-card px-3 py-1 rounded backdrop-blur-md">
                    {testimonial.views} views
                  </div>
                </div>

                {/* Info section */}
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-gray-700 mb-4">Join thousands of success stories</p>
        <button className="bg-gradient-to-r from-[#FF6F61] to-[#FFD580] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 glow-shadow">
  Share Your Story
</button>

        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
