/**
 * Acordeón de detalles de servicios
 */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Variantes para los items de la lista
const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.3,
    },
  }),
};

export function ServiceDetailsAccordion({ services }: ServiceDetailsAccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="mt-12 overflow-hidden border-2 transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle className="text-2xl">Detalles de nuestros servicios</CardTitle>
            <CardDescription className="mt-2 text-base">
              Descubre más información sobre cada uno de nuestros servicios
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            value={openItem || undefined}
            onValueChange={(value) => setOpenItem(value)}
          >
            {services.map((service, index) => {
              const details = serviceDetails[service.id as keyof typeof serviceDetails];
              if (!details) return null;

              const isOpen = openItem === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <AccordionItem 
                    value={service.id}
                    className="border-l-4 border-l-transparent transition-colors duration-300 hover:border-l-primary data-[state=open]:border-l-primary"
                  >
                    <AccordionTrigger className="text-left font-semibold transition-all duration-300 hover:text-primary">
                      {service.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 text-muted-foreground"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                                <motion.span
                                  className="inline-block h-1 w-1 rounded-full bg-primary"
                                  animate={{ scale: [1, 1.5, 1] }}
                                  transition={{ repeat: Infinity, duration: 2 }}
                                />
                                Características principales:
                              </h4>
                              <ul className="ml-4 space-y-2">
                                {details.features.map((feature, idx) => (
                                  <motion.li
                                    key={idx}
                                    custom={idx}
                                    initial="hidden"
                                    animate="visible"
                                    variants={listItemVariants}
                                    className="relative pl-2 before:absolute before:left-[-16px] before:content-['✓'] before:text-primary"
                                  >
                                    {feature}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                                <motion.span
                                  className="inline-block h-1 w-1 rounded-full bg-primary"
                                  animate={{ scale: [1, 1.5, 1] }}
                                  transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                                />
                                Beneficios:
                              </h4>
                              <ul className="ml-4 space-y-2">
                                {details.benefits.map((benefit, idx) => (
                                  <motion.li
                                    key={idx}
                                    custom={idx + details.features.length}
                                    initial="hidden"
                                    animate="visible"
                                    variants={listItemVariants}
                                    className="relative pl-2 before:absolute before:left-[-16px] before:content-['★'] before:text-primary"
                                  >
                                    {benefit}
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
}

