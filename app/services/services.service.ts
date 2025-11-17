/**
 * Servicio de servicios del negocio
 * Maneja la lógica de negocio relacionada con los servicios
 */
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
import type { Service } from "@/types";

export const servicesService = {
  /**
   * Obtiene todos los servicios disponibles
   */
  async getServices(): Promise<Service[]> {
    // En producción, esto vendría de una API o base de datos
    return [
      {
        id: "1",
        title: "Consultoría",
        description: "Asesoramiento profesional para tu negocio",
        icon: "briefcase",
      },
      {
        id: "2",
        title: "Desarrollo Web",
        description: "Creación de sitios web modernos y responsivos",
        icon: "globe",
      },
      {
        id: "3",
        title: "Marketing Digital",
        description: "Estrategias de marketing para aumentar tu presencia online",
        icon: "mobile",
      },
      {
        id: "4",
        title: "Soporte Técnico",
        description: "Asistencia técnica especializada cuando la necesites",
        icon: "tools",
      },
    ];
  },

  /**
   * Obtiene el componente de icono por nombre
   */
  getIconComponent(iconName: string) {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      briefcase: FaBriefcase,
      globe: FaGlobe,
      mobile: FaMobileAlt,
      tools: FaTools,
      react: FaReact,
      nodejs: FaNodeJs,
      python: FaPython,
      java: FaJava,
    };
    return icons[iconName] || FaBriefcase;
  },

  /**
   * Obtiene un servicio por ID
   */
  async getServiceById(id: string): Promise<Service | null> {
    const services = await this.getServices();
    return services.find((service) => service.id === id) || null;
  },
};

