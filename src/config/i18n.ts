/**
 * Configuración de internacionalización
 */
export const i18n = {
  defaultLocale: "es",
  locales: ["es", "en"],
} as const;

export type Locale = (typeof i18n.locales)[number];

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      contact: "Contacto",
    },
    home: {
      title: "Bienvenido a nuestro negocio",
      subtitle: "Impulsamos el crecimiento de tu negocio con innovación y excelencia",
      cta: "Conoce más",
    },
    about: {
      title: "Sobre Nosotros",
      description: "Somos una empresa comprometida con la excelencia y la satisfacción del cliente.",
    },
    services: {
      title: "Nuestros Servicios",
      description: "Ofrecemos una amplia gama de servicios para cubrir todas tus necesidades.",
    },
    contact: {
      title: "Contacta con Nosotros",
      description: "Estamos aquí para ayudarte. Ponte en contacto con nosotros.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar",
      },
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    home: {
      title: "Welcome to our business",
      subtitle: "We offer quality solutions for your company",
      cta: "Learn more",
    },
    about: {
      title: "About Us",
      description: "We are a company committed to excellence and customer satisfaction.",
    },
    services: {
      title: "Our Services",
      description: "We offer a wide range of services to cover all your needs.",
    },
    contact: {
      title: "Contact Us",
      description: "We are here to help. Get in touch with us.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
      },
    },
    footer: {
      rights: "All rights reserved",
    },
  },
} as const;

