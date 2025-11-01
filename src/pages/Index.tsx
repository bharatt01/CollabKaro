import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoDemo from "@/components/VideoDemo";
import HowItWorks from "@/components/HowItWorks";
import InfluencerShowcase from "@/components/InfluencerShowcase";
import VideoTestimonials from "@/components/VideoTestimonials";
import BehindTheScenes from "@/components/BehindTheScenes";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        {/* <VideoDemo /> */}
        <About />
        <HowItWorks />
        <StatsSection />
        {/* <InfluencerShowcase /> */}
        {/* <VideoTestimonials /> */}
        {/* <BehindTheScenes /> */}
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
