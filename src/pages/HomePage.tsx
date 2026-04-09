import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import StatsSection from "@/components/landing/StatsSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";
import ParticlesBackground from "@/components/landing/ParticlesBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
