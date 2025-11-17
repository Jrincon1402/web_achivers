/**
 * Servicio de contacto
 * Maneja la lógica de negocio relacionada con el contacto
 */
import type { ContactFormData } from "@/types";
import { isValidEmail, isRequired } from "@/helpers/validation";

export const contactService = {
  /**
   * Valida los datos del formulario de contacto
   */
  validateFormData(data: ContactFormData): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!isRequired(data.name)) {
      errors.push("El nombre es requerido");
    }

    if (!isRequired(data.email)) {
      errors.push("El email es requerido");
    } else if (!isValidEmail(data.email)) {
      errors.push("El email no es válido");
    }

    if (!isRequired(data.message)) {
      errors.push("El mensaje es requerido");
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  },

  /**
   * Envía el formulario de contacto
   * En producción, aquí se haría una llamada a una API
   */
  async sendContactForm(data: ContactFormData): Promise<void> {
    const validation = this.validateFormData(data);

    if (!validation.valid) {
      throw new Error(validation.errors.join(", "));
    }

    // Simulación de envío (en producción, hacer llamada a API)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Aquí iría la lógica real de envío
    console.log("Formulario enviado:", data);
  },
};

