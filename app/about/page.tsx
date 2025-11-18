/**
 * Página sobre nosotros
 */
import { AboutHeader } from "./components/AboutHeader";
import { StatsGrid } from "./components/StatsGrid";
import { FAQs } from "./components/FAQs";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mx-auto max-w-5xl">
        <AboutHeader />
        <StatsGrid />
        <FAQs />
      </section>
    </div>
  );
}

