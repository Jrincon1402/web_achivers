/**
 * Header de la página About
 */
import Image from "next/image";
import { translations } from "@/config/i18n";

export function AboutHeader() {
  const t = translations.es;

  return (
    <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <h1 className="mb-6 text-4xl font-bold">{t.about.title}</h1>
        <p className="mb-4 text-lg text-muted-foreground">
          {t.about.description}
        </p>
        <p className="text-lg text-muted-foreground">
          Con años de experiencia en el sector, nos especializamos en ofrecer
          soluciones innovadoras que ayudan a nuestros clientes a alcanzar sus
          objetivos. Nuestro equipo está formado por profesionales altamente
          cualificados comprometidos con la excelencia.
        </p>
      </div>
      <div className="relative h-80 w-full overflow-hidden rounded-2xl md:h-96">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
          alt="Equipo trabajando"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

