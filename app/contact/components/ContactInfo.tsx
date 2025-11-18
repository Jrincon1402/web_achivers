/**
 * Información de contacto
 */
"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { env } from "@/config/env";

interface ContactItem {
  icon: typeof Mail;
  label: string;
  value: string;
  delay: number;
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: env.contactEmail,
    delay: 200,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: env.contactPhone,
    delay: 400,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "España (Trabajamos remotamente)",
    delay: 600,
  },
];

export function ContactInfo() {
  return (
    <Card className="animate-in fade-in slide-in-from-left-8 duration-700 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl animate-in fade-in slide-in-from-top-4 duration-500">
          Información de contacto
        </CardTitle>
        <CardDescription className="animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="group flex items-start gap-4 rounded-xl border-2 p-5 transition-all duration-300 hover:bg-accent/50 hover:shadow-lg hover:scale-[1.02] hover:border-primary/30 animate-in fade-in slide-in-from-left-8"
              style={{
                animationDelay: `${item.delay}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="relative rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-semibold text-base transition-colors duration-300 group-hover:text-primary">
                  {item.label}
                </p>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {item.value}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

