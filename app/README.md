# Estructura Layered-Based de la Aplicación

Esta aplicación sigue una arquitectura layered-based (por capas) para mantener el código organizado y escalable.

## Estructura de Carpetas

```
app/
├── components/          # Componentes reutilizables de UI
│   ├── Header.tsx      # Header de la aplicación
│   ├── Footer.tsx      # Footer de la aplicación
│   ├── Button.tsx      # Botón reutilizable
│   ├── ContactForm.tsx # Formulario de contacto
│   ├── ServiceCard.tsx # Tarjeta de servicio
│   ├── ui/             # Componentes de shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── drawer.tsx
│   │   └── ...
│   └── index.ts        # Barrel export
│
├── pages/               # Componentes de páginas específicas
│   ├── HomePage.tsx    # Página de inicio
│   ├── AboutPage.tsx   # Página sobre nosotros
│   ├── ServicesPage.tsx # Página de servicios
│   └── ContactPage.tsx # Página de contacto
│
├── routes/              # Rutas de la aplicación
│   ├── home.route.tsx  # Ruta de inicio
│   ├── about.route.tsx # Ruta sobre nosotros
│   ├── services.route.tsx # Ruta de servicios
│   └── contact.route.tsx # Ruta de contacto
│
├── config/             # Configuración
│   ├── env.ts          # Variables de entorno
│   └── i18n.ts         # Configuración de internacionalización
│
├── contexts/            # React Contexts (vacío actualmente)
│   └── README.md       # Documentación de contexts
│
├── helpers/             # Funciones auxiliares
│   ├── format.ts       # Funciones de formateo
│   └── validation.ts   # Funciones de validación
│
├── hooks/               # Custom React hooks
│   └── useContactForm.ts # Hook para formulario de contacto
│
├── lib/                 # Librerías y utilidades
│   └── utils.ts        # Utilidades generales (cn, sleep, etc.)
│
├── modules/             # Módulos del servidor (.server.ts)
│   └── README.md       # Documentación de módulos del servidor
│
├── routes/              # Rutas (reservado para Remix si se migra)
│   └── README.md       # Documentación de rutas
│
├── services/            # Lógica de negocio y servicios
│   ├── contact.service.ts  # Servicio de contacto
│   └── services.service.ts # Servicio de servicios del negocio
│
├── types/               # Definiciones de tipos TypeScript
│   └── index.ts        # Tipos compartidos
│
└── theme/               # Configuración de temas
    └── useTheme.ts     # Hook para manejo de temas
```

## Principios de la Arquitectura

### Separación de Responsabilidades

- **Components**: Componentes reutilizables de UI y componentes de página completos
- **Services**: Contienen la lógica de negocio y validaciones
- **Helpers**: Funciones puras y reutilizables
- **Hooks**: Lógica de estado y efectos reutilizables
- **Types**: Definiciones de tipos compartidas

### Flujo de Datos

1. **Rutas de Next.js** (`app/[ruta]/page.tsx`) importan desde **Routes** (`routes/`)
2. **Routes** (`routes/*.route.tsx`) exportan **Componentes de página** (`pages/`)
3. **Componentes de página** (`pages/*Page.tsx`) importan **Componentes UI** (`components/`) y **Servicios** (`services/`)
4. **Componentes** pueden usar **Hooks** (`hooks/`) para manejar estado
5. **Servicios** usan **Helpers** (`helpers/`) para validaciones y formateo
6. Todo está tipado con **Types** (`types/`)

### Configuración

- **config/**: Variables de entorno, i18n, etc.
- **theme/**: Configuración de temas (usando `useTheme.ts`)

## Uso

### Agregar un nuevo componente

1. Crear el componente en `components/`
2. Exportarlo desde `components/index.ts`
3. Usarlo en las páginas correspondientes

### Agregar un nuevo servicio

1. Crear el servicio en `services/`
2. Implementar la lógica de negocio
3. Usar helpers para validaciones/formateo si es necesario

### Agregar una nueva página

1. Crear el componente de página en `pages/` (ej: `ContactPage.tsx`)
2. Crear la ruta en `routes/` (ej: `contact.route.tsx`) que exporte el componente de página
3. Crear la ruta de Next.js en `app/[nombre]/page.tsx` que importe desde `@/routes/[nombre].route`

## Ejemplo de Flujo Completo

```typescript
// 1. Definir tipos
// types/index.ts
export interface ContactFormData { ... }

// 2. Crear helpers
// helpers/validation.ts
export function isValidEmail(email: string) { ... }

// 3. Crear servicio
// services/contact.service.ts
export const contactService = {
  validateFormData(data: ContactFormData) { ... }
}

// 4. Crear hook
// hooks/useContactForm.ts
export function useContactForm() { ... }

// 5. Crear componente
// components/ContactForm.tsx
export function ContactForm() {
  const { ... } = useContactForm();
  return <form>...</form>;
}

// 6. Crear componente de página
// components/ContactPage.tsx
export function ContactPage() {
  return <ContactForm />;
}

// 7. Exportar desde components/index.ts
export { ContactPage } from "./ContactPage";

// 8. Crear ruta
// app/contact/page.tsx
import { ContactPage } from "@/components/ContactPage";
export default function Contact() {
  return <ContactPage />;
}
```

