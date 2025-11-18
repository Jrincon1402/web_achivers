# Estructura de la Aplicación - Next.js App Router

Esta aplicación sigue una arquitectura basada en capas para mantener el código organizado y escalable, siguiendo las mejores prácticas de Next.js 13+ App Router.

## Estructura de Carpetas

```
app/            # 🔄 REEMPLAZA a 'routes'. El núcleo del App Router.
├── layout.tsx
├── page.tsx      # Página principal (reexporta desde home)
├── home/
│   ├── page.tsx  # Componente para la ruta / (home)
│   └── components/  # Componentes específicos de la página home
│       ├── HeroSection.tsx
│       └── ServicesGrid.tsx
├── login/
│   └── page.tsx  # Componente para la ruta /login
├── about/
│   ├── page.tsx  # Componente para la ruta /about
│   └── components/  # Componentes específicos de la página about
│       ├── AboutHeader.tsx
│       ├── StatsGrid.tsx
│       └── FAQs.tsx
├── contact/
│   ├── page.tsx  # Componente para la ruta /contact
│   └── components/  # Componentes específicos de la página contact
│       ├── ContactHeader.tsx
│       └── ContactInfo.tsx
└── services/
    ├── page.tsx  # Componente para la ruta /services
    └── components/  # Componentes específicos de la página services
        └── ServiceDetailsAccordion.tsx

src/
├── components/     # ✅ Componentes de Servidor y Cliente.
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── ContactForm.tsx
│   ├── ServiceCard.tsx
│   ├── ui/             # Componentes de shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── drawer.tsx
│   │   └── ...
│   └── index.ts
│
├── config/         # ✅ Configuración
│   ├── env.ts          # Variables de entorno
│   └── i18n.ts         # Configuración de internacionalización
│
├── contexts/        # ❗ REQUIERE "use client"
│   └── README.md       # Documentación de contexts
│
├── helpers/         # ✅ Funciones auxiliares
│   ├── format.ts       # Funciones de formateo
│   └── validation.ts   # Funciones de validación
│
├── hooks/           # ❗ REQUIERE "use client"
│   └── useContactForm.ts # Hook para formulario de contacto
│
├── lib/             # ✅ Librerías y utilidades (ideal para clientes de BD como Prisma)
│   └── utils.ts        # Utilidades generales (cn, sleep, etc.)
│
├── modules/         # ✅ Lógica de acceso a datos (server-only)
│   └── README.md       # Documentación de módulos del servidor
│
├── services/        # ✅ Lógica de negocio que puede llamar a `modules`
│   ├── contact.service.ts  # Servicio de contacto
│   └── services.service.ts # Servicio de servicios del negocio
│
├── theme/           # ✅ Configuración de temas
│   └── useTheme.ts      # Hook para manejo de temas (requiere "use client")
│
└── types/           # ✅ Definiciones de tipos TypeScript
    └── index.ts         # Tipos compartidos
```

## Principios de la Arquitectura

### Separación de Responsabilidades

- **app/**: Rutas de Next.js App Router. Cada carpeta representa una ruta y contiene `page.tsx` con el componente de la página directamente
- **app/[ruta]/components/**: Componentes específicos de cada página. Se agrupan aquí las partes más grandes de cada página
- **src/components/**: Componentes reutilizables de UI compartidos entre páginas (pueden ser Server o Client Components)
- **services/**: Contienen la lógica de negocio y validaciones
- **modules/**: Lógica de acceso a datos (server-only)
- **helpers/**: Funciones puras y reutilizables
- **hooks/**: Lógica de estado y efectos reutilizables (requiere "use client")
- **contexts/**: React Contexts (requiere "use client")
- **types/**: Definiciones de tipos compartidas
- **lib/**: Utilidades y clientes de base de datos (ideal para Prisma)

### Flujo de Datos

1. **Rutas de Next.js** (`app/[ruta]/page.tsx`) contienen directamente los componentes de página
2. **Componentes de página** (`app/[ruta]/page.tsx`) importan **Componentes UI** (`components/`) y **Servicios** (`services/`)
3. **Componentes** pueden usar **Hooks** (`hooks/`) para manejar estado (requiere "use client")
4. **Servicios** usan **Helpers** (`helpers/`) para validaciones y formateo
5. **Servicios** pueden llamar a **Modules** (`modules/`) para acceso a datos
6. Todo está tipado con **Types** (`types/`)

### Server vs Client Components

- **Server Components** (por defecto): No requieren "use client", se ejecutan en el servidor
- **Client Components**: Requieren "use client" al inicio del archivo
  - Componentes que usan hooks (`useState`, `useEffect`, etc.)
  - Componentes que usan eventos del navegador
  - Componentes que usan Context API
  - Todos los archivos en `hooks/` y `contexts/` deben tener "use client"

## Uso

### Agregar un nuevo componente

1. Crear el componente en `src/components/`
2. Si usa hooks o eventos, agregar `"use client"` al inicio
3. Exportarlo desde `src/components/index.ts` (opcional)
4. Usarlo en las páginas correspondientes

### Agregar un nuevo servicio

1. Crear el servicio en `src/services/`
2. Implementar la lógica de negocio
3. Usar helpers para validaciones/formateo si es necesario
4. Llamar a modules para acceso a datos si es necesario

### Agregar una nueva página

1. Crear la carpeta de la ruta en `app/[nombre]/`
2. Crear `app/[nombre]/page.tsx` con el componente principal de la página
3. Crear `app/[nombre]/components/` para componentes específicos de esa página
4. Extraer las partes más grandes de la página a componentes en `app/[nombre]/components/`
5. Importar componentes reutilizables desde `@/components/` y servicios desde `@/services/`
6. Si la página necesita interactividad, agregar `"use client"` al inicio

### Agregar un nuevo hook

1. Crear el hook en `src/hooks/`
2. **IMPORTANTE**: Agregar `"use client"` al inicio del archivo
3. Exportar el hook
4. Usarlo en componentes que tengan `"use client"`

## Ejemplo de Flujo Completo

```typescript
// 1. Definir tipos
// src/types/index.ts
export interface ContactFormData { ... }

// 2. Crear helpers
// src/helpers/validation.ts
export function isValidEmail(email: string) { ... }

// 3. Crear servicio
// src/services/contact.service.ts
export const contactService = {
  validateFormData(data: ContactFormData) { ... }
}

// 4. Crear hook (requiere "use client")
// src/hooks/useContactForm.ts
"use client";
export function useContactForm() { ... }

// 5. Crear componente (requiere "use client" si usa hooks)
// src/components/ContactForm.tsx
"use client";
export function ContactForm() {
  const { ... } = useContactForm();
  return <form>...</form>;
}

// 6. Crear componentes específicos de la página
// app/contact/components/ContactHeader.tsx
export function ContactHeader() { ... }

// app/contact/components/ContactInfo.tsx
export function ContactInfo() { ... }

// 7. Crear página directamente en app/
// app/contact/page.tsx
import { ContactForm } from "@/components/ContactForm";
import { ContactHeader } from "./components/ContactHeader";
import { ContactInfo } from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
```

## Configuración

- **tsconfig.json**: Los paths `@/*` apuntan a `src/*`
- **config/**: Variables de entorno, i18n, etc.
- **theme/**: Configuración de temas (usando `useTheme.ts`)
