import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroParts";
import { InfoSection } from "./components/InfoSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { GallerySection } from "./components/GallerySection";
import { ServicesSection } from "./components/ServicesSection";
import { BackedBySection } from "./components/BackedBySection";
import { UseCasesSection } from "./components/UseCasesSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ProjectsSection } from "./components/ProjectsSection";
import { PartnerSection } from "./components/PartnerSection";
import { Footer } from "./components/Footer";
import { CopyrightBar } from "./components/CopyrightBar";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <GallerySection />
      <ServicesSection />
      <BackedBySection />
      <UseCasesSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
