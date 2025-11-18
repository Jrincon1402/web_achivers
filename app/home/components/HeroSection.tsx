/**
 * Hero Section para la página de inicio
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { translations } from "@/config/i18n";

export function HeroSection() {
  const t = translations.es;

  return (
    <section className="relative mb-24 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-16">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 md:h-48 md:w-48">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop"
              alt="Equipo profesional"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          {t.home.title}
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          {t.home.subtitle}
        </p>
        <Link href="/services">
          <Button size="lg" className="group">
            {t.home.cta}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
      {/* Decoración de fondo */}
      <div className="absolute inset-0 -z-0 opacity-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary blur-3xl" />
      </div>
    </section>
  );
}

