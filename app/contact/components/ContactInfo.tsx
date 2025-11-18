/**
 * Información de contacto
 */
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { env } from "@/config/env";

interface ContactItem {
  icon: typeof Mail;
  label: string;
  value: string;
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: env.contactEmail,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: env.contactPhone,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "España (Trabajamos remotamente)",
  },
];

export function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de contacto</CardTitle>
        <CardDescription>
          Estamos aquí para ayudarte. Ponte en contacto con nosotros
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent"
            >
              <div className="rounded-lg bg-primary/10 p-2">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

