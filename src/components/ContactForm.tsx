/**
 * Componente ContactForm reutilizable (usando shadcn/ui)
 */
"use client";

import { CheckCircle2, AlertCircle } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "./Button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";
import { translations } from "@/config/i18n";

export function ContactForm() {
  const t = translations.es; // En producción, usar contexto de i18n
  const { formData, isLoading, error, success, handleChange, handleSubmit } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{t.contact.form.name}</Label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t.contact.form.email}</Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.contact.form.message}</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          required
        />
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>¡Mensaje enviado correctamente!</AlertDescription>
        </Alert>
      )}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando..." : t.contact.form.send}
      </Button>
    </form>
  );
}

