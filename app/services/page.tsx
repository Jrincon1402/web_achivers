/**
 * Página de servicios
 */
"use client";

import { useEffect, useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesService } from "@/services/services.service";
import type { Service } from "@/types";
import { translations } from "@/config/i18n";
import { ServiceDetailsAccordion } from "./components/ServiceDetailsAccordion";

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

            <ServiceDetailsAccordion services={services} />
          </>
        )}
      </section>
    </div>
  );
}

