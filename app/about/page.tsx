/**
 * Página sobre nosotros - Rediseñada
 */
import { AboutHeader } from "./components/AboutHeader";
import { StatsGrid } from "./components/StatsGrid";
import { ValuesSection } from "./components/ValuesSection";
import { FAQs } from "./components/FAQs";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="mx-auto max-w-7xl">
        <AboutHeader />
        <StatsGrid />
        <ValuesSection />
        <FAQs />
      </section>
    </div>
  );
}

