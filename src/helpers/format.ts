/**
 * Funciones auxiliares de formateo
 */

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");
}

export function formatEmail(email: string): string {
  return email.toLowerCase().trim();
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

