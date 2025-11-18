/**
 * Grid de servicios para la página de inicio
 */
import Image from "next/image";
import { Briefcase, Globe, Smartphone, Wrench, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/config/i18n";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Briefcase,
    title: "Consultoría",
    description: "Asesoramiento profesional para tu negocio",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Creación de sitios web modernos y responsivos",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Marketing Digital",
    description: "Estrategias de marketing para aumentar tu presencia online",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    icon: Wrench,
    title: "Soporte Técnico",
    description: "Asistencia técnica especializada cuando la necesites",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
  },
];

export function ServicesGrid() {
  const t = translations.es;

  return (
    <section className="mt-24">
      <h2 className="mb-8 text-center text-3xl font-semibold">
        {t.services.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="mb-2 rounded-lg bg-primary/90 p-2 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

