/**
 * Página de servicios (usando shadcn/ui Accordion)
 */
"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesService } from "@/services/services.service";
import type { Service } from "@/types";
import { translations } from "@/config/i18n";

export default function ServicesPage() {
  const t = translations.es; // En producción, usar contexto de i18n
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await servicesService.getServices();
        setServices(data);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, []);

  const serviceDetails = {
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

  return (
    <div className="container mx-auto px-4 py-16">
      <section>
        <h1 className="mb-4 text-4xl font-bold">{t.services.title}</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          {t.services.description}
        </p>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Cargando servicios...</div>
        ) : (
          <>
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

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
          </>
        )}
      </section>
    </div>
  );
}

