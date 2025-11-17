/**
 * Página de inicio
 */
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Globe, Smartphone, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { translations } from "@/config/i18n";

export default function HomePage() {
  const t = translations.es; // En producción, usar contexto de i18n

  const services = [
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

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section con imagen */}
      <section className="relative mb-24 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 md:p-16">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 md:h-48 md:w-48">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop"
                alt="Equipo profesional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            {t.home.title}
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            {t.home.subtitle}
          </p>
          <Link href="/services">
            <Button size="lg" className="group">
              {t.home.cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        {/* Decoración de fondo */}
        <div className="absolute inset-0 -z-0 opacity-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary blur-3xl" />
        </div>
      </section>

      {/* Servicios con imágenes */}
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
    </div>
  );
}

