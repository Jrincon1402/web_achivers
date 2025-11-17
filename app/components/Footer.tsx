/**
 * Componente Footer reutilizable (usando shadcn/ui)
 */
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { env } from "@/config/env";
import { translations } from "@/config/i18n";

export function Footer() {
  const t = translations.es; // En producción, usar contexto de i18n

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{env.siteName}</h3>
            <p className="text-sm text-muted-foreground">
              Soluciones de calidad para tu negocio
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {env.contactEmail}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {env.contactPhone}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {env.siteName}. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}

