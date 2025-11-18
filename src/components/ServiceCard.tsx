/**
 * Componente ServiceCard reutilizable (usando shadcn/ui y react-icons)
 */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { servicesService } from "@/services/services.service";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon 
    ? servicesService.getIconComponent(service.icon)
    : null;

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        {IconComponent && (
          <div className="mb-2">
            <IconComponent className="h-10 w-10 text-primary" />
          </div>
        )}
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

