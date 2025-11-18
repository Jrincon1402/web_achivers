/**
 * Componente ContactForm reutilizable (usando shadcn/ui)
 */
"use client";

import { CheckCircle2, AlertCircle, Send } from "lucide-react";
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
      <div className="space-y-2 animate-in fade-in slide-in-from-right-8 duration-500 delay-200">
        <Label htmlFor="name" className="text-sm font-medium">
          {t.contact.form.name}
        </Label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          required
          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Tu nombre completo"
        />
      </div>

      <div className="space-y-2 animate-in fade-in slide-in-from-right-8 duration-500 delay-300">
        <Label htmlFor="email" className="text-sm font-medium">
          {t.contact.form.email}
        </Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          required
          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="tu@email.com"
        />
      </div>

      <div className="space-y-2 animate-in fade-in slide-in-from-right-8 duration-500 delay-400">
        <Label htmlFor="message" className="text-sm font-medium">
          {t.contact.form.message}
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          required
          className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>

      {error && (
        <Alert 
          variant="destructive" 
          className="animate-in fade-in slide-in-from-top-4 duration-500 border-2"
        >
          <AlertCircle className="h-4 w-4 animate-pulse" />
          <AlertDescription className="font-medium">{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="animate-in fade-in slide-in-from-top-4 duration-500 border-2 border-green-500 bg-green-50 dark:bg-green-950">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 animate-in zoom-in duration-300" />
          <AlertDescription className="font-medium text-green-800 dark:text-green-200">
            ¡Mensaje enviado correctamente!
          </AlertDescription>
        </Alert>
      )}

      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:hover:scale-100"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              {t.contact.form.send}
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </Button>
    </form>
  );
}

