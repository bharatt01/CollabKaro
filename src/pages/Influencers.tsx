import { Button } from "@/components/ui/button";
import { Sparkles, Users, Camera, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import InfluencerHero from "../components/InfluencerHero";
import Footer from "../components/Footer";
import WhyJoin from "../components/WhyJoin";
import HowItWorks from "../components/HowItWorks";
import InfluencerCTA from "../components/InfluencerCTA";
// import influencerHero from "@/assets/influencer-hero.jpg";


export default function InfluencersPage() {
  return (
    <>
    <Navbar />
      <div style={{ height: '5rem' }} aria-hidden="true" /> 
    <InfluencerHero />
    <WhyJoin />
    <HowItWorks />
    {/* <InfluencerCTA /> */}
    <Footer />
    </>
  );
}
