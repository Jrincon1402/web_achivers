/**
 * Tipos TypeScript compartidos
 */

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

