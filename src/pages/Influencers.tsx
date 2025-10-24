import { Button } from "@/components/ui/button";
import { Sparkles, Users, Camera, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import HeroSection from "@/components/InfluencersHeroSection";
import FeaturesSection from "@/components/InfluencersFeaturesSection";
import StepsSection from "@/components/InfluencersStepsSection";
// import CTASection from "@/components/InfluencersCTASection";
import InfluencerCTA from "@/components/InfluencerCTA";



export default function InfluencersPage() {
  return (
    <>
    <Navbar />
      <div style={{ height: '5rem' }} aria-hidden="true" /> 
<HeroSection />
<FeaturesSection />
<StepsSection />
< InfluencerCTA />   

    <Footer />
    </>
  );
}
