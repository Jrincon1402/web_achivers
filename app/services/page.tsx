/**
 * Página de servicios
 */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { servicesService } from "@/services/services.service";
import type { Service } from "@/types";
import { translations } from "@/config/i18n";
import { ServiceDetailsAccordion } from "./components/ServiceDetailsAccordion";

// Variantes de animación para el contenedor
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Variantes para las tarjetas de servicios
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
  hover: {
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
};

// Variantes para el header
const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

// Skeleton de carga
function LoadingSkeleton() {
  return (
    <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <div className="mb-4 h-12 w-12 animate-pulse rounded-lg bg-muted" />
          <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-muted" />
          <div className="h-4 w-full animate-pulse rounded bg-muted" />
          <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-muted" />
        </motion.div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  const t = translations.es; // En producción, usar contexto de i18n
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await servicesService.getServices();
        // Simular un pequeño delay para mostrar la animación de carga
        await new Promise((resolve) => setTimeout(resolve, 800));
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
    <motion.div 
      className="container mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section>
        <motion.div variants={headerVariants}>
          <motion.h1 
            className="mb-4 text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.services.title}
          </motion.h1>
          <motion.p 
            className="mb-12 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.services.description}
          </motion.p>
        </motion.div>

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <motion.div 
              className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ServiceDetailsAccordion services={services} />
            </motion.div>
          </>
        )}
      </section>
    </motion.div>
  );
}

