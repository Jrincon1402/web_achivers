/**
 * Sección de Valores, Misión y Visión
 */
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Eye, Target, Zap, Shield, Handshake } from "lucide-react";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const values: Value[] = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Misión",
    description: "Proporcionar soluciones innovadoras y de calidad que impulsen el éxito de nuestros clientes, superando sus expectativas en cada proyecto.",
    color: "text-blue-500"
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Visión",
    description: "Ser reconocidos como líderes en nuestro sector, siendo la primera opción para empresas que buscan excelencia y resultados excepcionales.",
    color: "text-purple-500"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Compromiso",
    description: "Estamos dedicados a construir relaciones duraderas basadas en la confianza, la transparencia y el compromiso mutuo con nuestros clientes.",
    color: "text-red-500"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Innovación",
    description: "Mantenemos un enfoque constante en la innovación, adoptando las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia.",
    color: "text-yellow-500"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Calidad",
    description: "La excelencia es nuestro estándar. Cada proyecto se desarrolla con atención meticulosa a los detalles y un compromiso inquebrantable con la calidad.",
    color: "text-green-500"
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Integridad",
    description: "Actuamos con honestidad, ética y responsabilidad en todas nuestras interacciones, construyendo relaciones basadas en la confianza mutua.",
    color: "text-indigo-500"
  },
];

export function ValuesSection() {
  return (
    <section className="mb-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">Nuestros Valores</h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Los principios que guían nuestro trabajo y definen quiénes somos como empresa
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <Card 
            key={value.title}
            className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardHeader>
              <div className={`mb-2 inline-flex rounded-lg bg-primary/10 p-3 ${value.color} transition-transform duration-300 group-hover:scale-110`}>
                {value.icon}
              </div>
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {value.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

