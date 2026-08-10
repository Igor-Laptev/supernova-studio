import { AboutSection } from "./components/home/AboutSection";
import { ContactSection } from "./components/home/ContactSection";
import { HeroSection } from "./components/home/HeroSection";
import { PricingSection } from "./components/home/PricingSection";
import { ProjectsSection } from "./components/home/ProjectsSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { SiteFooter } from "./components/home/SiteFooter";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
