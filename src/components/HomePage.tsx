import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessOptimizationSection } from "@/components/ProcessOptimizationSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessOptimizationSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};
