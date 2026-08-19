import { HeroSection } from "./components/HeroParts";
import { AboutSection } from "./components/AboutSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ServicesSection } from "./components/ServicesSection";
import { BackedBySection } from "./components/BackedBySection";
import { UseCasesSection } from "./components/UseCasesSection";
import { PricingSection } from "./components/PricingSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialCarousel } from "./components/TestimonialCarousel";
import { ProjectsSection } from "./components/ProjectsSection";
import { PartnerSection } from "./components/PartnerSection";
import { Footer } from "./components/Footer";
import { CopyrightBar } from "./components/CopyrightBar";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <ServicesSection />
      <BackedBySection />
      <UseCasesSection />
      <PricingSection />
      <FeaturesSection />
      <GallerySection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
