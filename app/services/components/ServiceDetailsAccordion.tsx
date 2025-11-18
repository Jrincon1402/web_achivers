/**
 * Acordeón de detalles de servicios
 */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Service } from "@/types";

interface ServiceDetails {
  [key: string]: {
    features: string[];
    benefits: string[];
  };
}

const serviceDetails: ServiceDetails = {
  "1": {
    features: [
      "Análisis de procesos empresariales",
      "Estrategias de optimización",
      "Consultoría en transformación digital",
      "Asesoramiento en gestión de proyectos",
    ],
    benefits: [
      "Aumento de la eficiencia operativa",
      "Reducción de costos",
      "Mejora en la toma de decisiones",
    ],
  },
  "2": {
    features: [
      "Desarrollo de aplicaciones web modernas",
      "Diseño responsive y accesible",
      "Optimización de rendimiento",
      "Integración con APIs y servicios",
    ],
    benefits: [
      "Mayor presencia online",
      "Mejora en la experiencia del usuario",
      "Escalabilidad y mantenibilidad",
    ],
  },
  "3": {
    features: [
      "Estrategias de SEO y SEM",
      "Gestión de redes sociales",
      "Marketing de contenidos",
      "Análisis y métricas",
    ],
    benefits: [
      "Mayor visibilidad online",
      "Aumento de leads y conversiones",
      "Mejora del ROI en marketing",
    ],
  },
  "4": {
    features: [
      "Soporte técnico 24/7",
      "Mantenimiento preventivo",
      "Resolución de incidencias",
      "Actualizaciones y parches",
    ],
    benefits: [
      "Máxima disponibilidad del sistema",
      "Reducción de tiempos de inactividad",
      "Tranquilidad y confianza",
    ],
  },
};

interface ServiceDetailsAccordionProps {
  services: Service[];
}

export function ServiceDetailsAccordion({ services }: ServiceDetailsAccordionProps) {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Detalles de nuestros servicios</CardTitle>
        <CardDescription>
          Descubre más información sobre cada uno de nuestros servicios
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {services.map((service) => {
            const details = serviceDetails[service.id as keyof typeof serviceDetails];
            if (!details) return null;

            return (
              <AccordionItem key={service.id} value={service.id}>
                <AccordionTrigger>{service.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">
                        Características principales:
                      </h4>
                      <ul className="ml-4 list-disc space-y-1">
                        {details.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-foreground">
                        Beneficios:
                      </h4>
                      <ul className="ml-4 list-disc space-y-1">
                        {details.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}

