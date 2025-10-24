import BrandFeaturesSection from '@/components/BrandFeaturesSection';
import BrandHeroSection from '@/components/BrandHeroSection';
import BrandSteps from '@/components/BrandStepsSection';
import BrandWhyChooseUs from '@/components/BrandWhyChooseUs';
import BrandFinalCTA from '@/components/BrandFinalCTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

function Brands() {
  return (
    <>
    <Navbar />
    <div style={{ height: '5rem' }} aria-hidden="true" />
    <BrandHeroSection />
    <BrandWhyChooseUs />
    <BrandSteps/>
    <BrandFeaturesSection />
    <BrandFinalCTA />
    <Footer />
    </>
  )
}

export default Brands