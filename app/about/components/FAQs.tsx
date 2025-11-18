/**
 * Componente de FAQs para la página About
 */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
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

export function FAQs() {
  return (
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
  );
}

