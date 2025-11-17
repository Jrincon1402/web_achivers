/**
 * Página de contacto (usando shadcn/ui)
 */
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { env } from "@/config/env";
import { translations } from "@/config/i18n";

export default function ContactPage() {
  const t = translations.es; // En producción, usar contexto de i18n

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mx-auto max-w-5xl">
        {/* Header con imagen */}
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

        <div className="grid gap-8 md:grid-cols-2">
          {/* Información de contacto */}
          <Card>
            <CardHeader>
              <CardTitle>Información de contacto</CardTitle>
              <CardDescription>
                Estamos aquí para ayudarte. Ponte en contacto con nosotros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">{env.contactEmail}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-sm text-muted-foreground">{env.contactPhone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent">
                <div className="rounded-lg bg-primary/10 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-sm text-muted-foreground">España (Trabajamos remotamente)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulario */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

