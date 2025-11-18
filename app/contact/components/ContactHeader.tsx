/**
 * Header de la página Contact
 */
import Image from "next/image";
import { translations } from "@/config/i18n";

export function ContactHeader() {
  const t = translations.es;

  return (
    <div className="mb-12 text-center">
      <div className="relative mx-auto mb-6 h-64 w-full max-w-2xl overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=600&fit=crop"
          alt="Contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white">
          <h1 className="mb-2 text-4xl font-bold">{t.contact.title}</h1>
          <p className="text-lg opacity-90">{t.contact.description}</p>
        </div>
      </div>
    </div>
  );
}

