/**
 * Componente de FAQs para la página About - Rediseñado
 */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "¿Cuántos años de experiencia tienen?",
    answer: "Contamos con más de 10 años de experiencia en el sector, trabajando con empresas de todos los tamaños para ofrecer soluciones personalizadas y de calidad. Nuestro equipo ha acumulado conocimientos profundos y experiencia práctica en diversas industrias.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Trabajamos de forma remota con clientes en toda España y también ofrecemos servicios presenciales cuando es necesario. Nuestro equipo está distribuido estratégicamente para brindar el mejor servicio, permitiéndonos estar cerca de nuestros clientes cuando lo necesiten.",
  },
  {
    question: "¿Qué tipo de empresas trabajan con ustedes?",
    answer: "Trabajamos con startups, pequeñas y medianas empresas, así como grandes corporaciones. Adaptamos nuestros servicios a las necesidades específicas de cada cliente, sin importar su tamaño o industria. Cada proyecto es único y merece una solución personalizada.",
  },
  {
    question: "¿Ofrecen soporte después de la implementación?",
    answer: "Sí, ofrecemos soporte continuo y mantenimiento para todos nuestros proyectos. Estamos comprometidos con el éxito a largo plazo de nuestros clientes y proporcionamos asistencia técnica, actualizaciones y mejoras continuas para asegurar que nuestros clientes obtengan el máximo valor de nuestras soluciones.",
  },
  {
    question: "¿Cómo garantizan la calidad de sus servicios?",
    answer: "Implementamos rigurosos procesos de control de calidad en cada etapa del proyecto. Utilizamos metodologías probadas, realizamos pruebas exhaustivas y mantenemos estándares altos de excelencia. Además, nuestro equipo se mantiene actualizado con las mejores prácticas de la industria.",
  },
  {
    question: "¿Cuál es su proceso de trabajo?",
    answer: "Nuestro proceso comienza con una consulta inicial para entender tus necesidades específicas. Luego desarrollamos un plan personalizado, ejecutamos el proyecto con comunicación constante y finalmente proporcionamos soporte continuo. Mantenemos a nuestros clientes informados en cada paso del camino.",
  },
];

export function FAQs() {
  return (
    <section className="mb-20">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">FAQ</span>
        </div>
        <h2 className="mb-4 text-4xl font-bold">Preguntas Frecuentes</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Encuentra respuestas a las preguntas más comunes sobre nosotros y nuestros servicios
        </p>
      </div>
      <Card className="border-2">
        <CardContent className="p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b last:border-b-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}

