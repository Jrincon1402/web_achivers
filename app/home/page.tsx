/**
 * Página de inicio
 */
import { HeroSection } from "./components/HeroSection";
import { ServicesGrid } from "./components/ServicesGrid";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <HeroSection />
      <ServicesGrid />
    </div>
  );
}

