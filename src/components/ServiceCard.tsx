/**
 * Componente ServiceCard reutilizable (usando shadcn/ui y react-icons)
 */
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import type { Service } from "@/types";
import { 
  FaBriefcase, 
  FaGlobe, 
  FaMobileAlt, 
  FaTools,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface ServiceCardProps {
  service: Service;
}

// Mapeo estático de iconos (declarado fuera del render)
const iconMap: Record<string, IconType> = {
  briefcase: FaBriefcase,
  globe: FaGlobe,
  mobile: FaMobileAlt,
  tools: FaTools,
  react: FaReact,
  nodejs: FaNodeJs,
  python: FaPython,
  java: FaJava,
};

// Componente helper para renderizar iconos (declarado fuera del render)
function ServiceIcon({ iconName, className }: { iconName: string; className?: string }) {
  const IconComponent = iconMap[iconName] || FaBriefcase;
  return <IconComponent className={className} />;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      {/* Efecto de brillo en hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
            "radial-gradient(circle at 100% 100%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 70%)",
          ],
        }}
        transition={{ duration: 0.6 }}
      />
      
      <CardHeader>
        {service.icon && (
          <motion.div 
            className="mb-2"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ServiceIcon 
                iconName={service.icon} 
                className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary/80" 
              />
            </motion.div>
          </motion.div>
        )}
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CardTitle className="transition-colors duration-300 group-hover:text-primary">
            {service.title}
          </CardTitle>
        </motion.div>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        </motion.div>
      </CardContent>
      
      {/* Borde animado en hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Card>
  );
}

