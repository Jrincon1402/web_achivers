/**
 * Configuración de variables de entorno
 */
export const env = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Mi Negocio",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@minegocio.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+34 123 456 789",
} as const;

