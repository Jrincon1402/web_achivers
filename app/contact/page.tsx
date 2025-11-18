/**
 * Página de contacto
 */
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactHeader } from "./components/ContactHeader";
import { ContactInfo } from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mx-auto max-w-5xl">
        <ContactHeader />

        <div className="grid gap-8 md:grid-cols-2">
          <ContactInfo />

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

