/**
 * Grid de servicios para la página de inicio - Versión mejorada y más llamativa
 */
"use client";

import Image from "next/image";
import { Briefcase, Globe, Smartphone, Wrench, LucideIcon, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/config/i18n";
import { useState } from "react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Briefcase,
    title: "Consultoría",
    description: "Asesoramiento profesional para tu negocio",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Creación de sitios web modernos y responsivos",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Smartphone,
    title: "Marketing Digital",
    description: "Estrategias de marketing para aumentar tu presencia online",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Wrench,
    title: "Soporte Técnico",
    description: "Asistencia técnica especializada cuando la necesites",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

export function ServicesGrid() {
  const t = translations.es;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative mt-32 overflow-hidden py-16">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Encabezado mejorado */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Nuestros Servicios
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {t.services.title || "Soluciones que Impulsan tu Negocio"}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos con nuestras soluciones profesionales
          </p>
        </div>

        {/* Grid de servicios mejorado */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* Efecto de brillo animado */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Imagen con overlay mejorado */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-125"
                  />
                  {/* Overlay con gradiente animado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                  
                  {/* Icono flotante */}
                  <div className="absolute bottom-6 left-6">
                    <div className="relative">
                      <div className="absolute inset-0 animate-pulse rounded-xl bg-primary/30 blur-xl" />
                      <div className="relative rounded-xl bg-gradient-to-br from-primary to-primary/80 p-4 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Efecto de partículas en hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute left-1/4 top-1/4 h-2 w-2 animate-ping rounded-full bg-primary" />
                    <div className="absolute right-1/4 top-1/3 h-1.5 w-1.5 animate-ping rounded-full bg-primary delay-150" />
                    <div className="absolute bottom-1/4 right-1/3 h-1 w-1 animate-ping rounded-full bg-primary delay-300" />
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-3">
                  <CardTitle className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="mb-4 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Botón de acción */}
                  <div className="flex items-center text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Saber más</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </CardContent>

                {/* Borde brillante en hover */}
                <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              </Card>
            );
          })}
        </div>

        {/* Call to action adicional */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-muted-foreground">
            ¿Necesitas algo más específico?
          </p>
          <button className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10">Contactar con nosotros</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
}

