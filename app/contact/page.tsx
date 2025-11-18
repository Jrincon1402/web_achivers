/**
 * Página de contacto
 */
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactHeader } from "./components/ContactHeader";
import { ContactInfo } from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <section className="mx-auto max-w-6xl relative z-10">
        <ContactHeader />

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
          <ContactInfo />

          {/* Formulario */}
          <Card className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300 border-2 hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                Envíanos un mensaje
              </CardTitle>
              <CardDescription className="animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
                Completa el formulario y nos pondremos en contacto contigo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        {/* Sección adicional con información */}
        <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-sm text-muted-foreground">
              Tiempo de respuesta promedio: <span className="font-semibold text-foreground">24 horas</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

