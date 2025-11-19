/**
 * Grid de estadísticas para la página About - Rediseñado
 */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Briefcase } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const stats: Stat[] = [
  { 
    value: "10+", 
    label: "Años de experiencia", 
    icon: <Award className="h-8 w-8" />,
    color: "text-blue-500"
  },
  { 
    value: "500+", 
    label: "Clientes satisfechos", 
    icon: <Users className="h-8 w-8" />,
    color: "text-green-500"
  },
  { 
    value: "1000+", 
    label: "Proyectos completados", 
    icon: <Briefcase className="h-8 w-8" />,
    color: "text-purple-500"
  },
];

export function StatsGrid() {
  return (
    <div className="mb-20 grid gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <Card 
          key={stat.label} 
          className="group relative overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <CardContent className="p-8 text-center">
            <div className={`mb-4 flex justify-center ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
              {stat.icon}
            </div>
            <div className="mb-2 text-5xl font-bold text-primary transition-colors duration-300 group-hover:text-primary/80">
              {stat.value}
            </div>
            <p className="text-lg font-medium text-muted-foreground">
              {stat.label}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

