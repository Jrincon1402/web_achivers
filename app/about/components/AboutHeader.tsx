/**
 * Header de la página About - Rediseñado
 */
import Image from "next/image";
import { translations } from "@/config/i18n";
import { Sparkles, Target, Users } from "lucide-react";

export function AboutHeader() {
  const t = translations.es;

  return (
    <div className="mb-20">
      {/* Hero Section */}
      <div className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-16">
        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Tu socio de confianza</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              {t.about.title}
            </h1>
            <p className="mb-6 text-xl text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Con años de experiencia en el sector, nos especializamos en ofrecer
              soluciones innovadoras que ayudan a nuestros clientes a alcanzar sus
              objetivos. Nuestro equipo está formado por profesionales altamente
              cualificados comprometidos con la excelencia.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Equipo profesional</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="h-5 w-5 text-primary" />
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-2xl md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Equipo trabajando"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute inset-0 -z-0 opacity-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary blur-3xl" />
        </div>
      </div>
    </div>
  );
}

