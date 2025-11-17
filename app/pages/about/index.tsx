/**
 * Página sobre nosotros (usando shadcn/ui Accordion)
 */
"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/config/i18n";

export default function AboutPage() {
  const t = translations.es; // En producción, usar contexto de i18n

  const faqs = [
    {
      question: "¿Cuántos años de experiencia tienen?",
      answer: "Contamos con más de 10 años de experiencia en el sector, trabajando con empresas de todos los tamaños para ofrecer soluciones personalizadas y de calidad.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer: "Trabajamos de forma remota con clientes en toda España y también ofrecemos servicios presenciales cuando es necesario. Nuestro equipo está distribuido estratégicamente para brindar el mejor servicio.",
    },
    {
      question: "¿Qué tipo de empresas trabajan con ustedes?",
      answer: "Trabajamos con startups, pequeñas y medianas empresas, así como grandes corporaciones. Adaptamos nuestros servicios a las necesidades específicas de cada cliente.",
    },
    {
      question: "¿Ofrecen soporte después de la implementación?",
      answer: "Sí, ofrecemos soporte continuo y mantenimiento para todos nuestros proyectos. Estamos comprometidos con el éxito a largo plazo de nuestros clientes.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mx-auto max-w-5xl">
        {/* Header con imagen */}
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

        {/* Estadísticas */}
        <div className="mb-12 grid gap-4 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">10+</CardTitle>
              <CardDescription className="text-base">Años de experiencia</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">500+</CardTitle>
              <CardDescription className="text-base">Clientes satisfechos</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">1000+</CardTitle>
              <CardDescription className="text-base">Proyectos completados</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* FAQs */}
        <Card>
          <CardHeader>
            <CardTitle>Preguntas Frecuentes</CardTitle>
            <CardDescription>
              Conoce más sobre nosotros y nuestros servicios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

