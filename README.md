This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

> Nota: Este repositorio forma parte de un curso de GitHub (prácticas y ejemplos para aprender flujo de trabajo con ramas, PRs y CI/CD).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for V[...]  

## Flujo recomendado de Git (resumen para desarrolladores)

1. Actualizar main:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Crear rama para tu trabajo:
   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```

3. Hacer commits pequeños y descriptivos:
   ```bash
   git add .
   git commit -m "feat: agregar componente X"
   ```

4. Mantener tu rama actualizada (opciones):
   - Rebase:
     ```bash
     git fetch origin
     git rebase origin/main
     ```
   - O merge:
     ```bash
     git fetch origin
     git merge origin/main
     ```

5. Subir y abrir PR:
   ```bash
   git push -u origin feature/mi-nueva-funcionalidad
   # Abrir Pull Request desde GitHub
   ```

6. Si necesitas guardar trabajo temporalmente:
   ```bash
   git stash
   git stash pop
   ```

## Comandos git más utilizados (referencia rápida)

A continuación encontrarás una lista con los comandos Git que se usan con más frecuencia en el flujo de desarrollo, con ejemplos y notas.

- git status
  - Qué hace: muestra el estado actual del working tree (archivos modificados, staged, sin trackear).
  - Ejemplo: git status

- git add <archivo>
  - Qué hace: prepara (stage) uno o varios archivos para el próximo commit.
  - Ejemplo: git add src/components/MyComponent.tsx

- git commit -m "mensaje"
  - Qué hace: crea un commit con los cambios staged.
  - Ejemplo: git commit -m "fix: corregir validación del formulario"

- git commit -am "mensaje"
  - Qué hace: añade y commitea cambios en archivos ya trackeados (no añade archivos nuevos no trackeados).
  - Ejemplo: git commit -am "chore: actualizar dependencias"

- git push
  - Qué hace: sube tus commits a la rama remota.
  - Ejemplo: git push origin feature/mi-nueva-funcionalidad

- git pull
  - Qué hace: trae cambios del remoto y los fusiona en la rama actual.
  - Ejemplo: git pull origin main

- git fetch
  - Qué hace: trae referencias y commits del remoto sin mezclarlos en la rama actual.
  - Ejemplo: git fetch origin

- git checkout -b <rama>
  - Qué hace: crear y cambiar a una nueva rama.
  - Ejemplo: git checkout -b feature/nueva

- git switch <rama>
  - Qué hace: cambiar de rama (alternativa moderna a checkout).
  - Ejemplo: git switch main

- git merge <rama>
  - Qué hace: fusiona otra rama en la actual.
  - Ejemplo: git merge feature/ajustes-ui

- git rebase <rama>
  - Qué hace: reaplica commits sobre otra base (mantiene un historial más lineal).
  - Nota: usar con cuidado y preferir rebase en ramas de trabajo locales.
  - Ejemplo: git rebase origin/main

- git log --oneline --graph --all
  - Qué hace: ver el historial de commits en forma compacta y gráfica.

- git diff
  - Qué hace: muestra diferencias entre working tree y staged o entre commits.

- git stash
  - Qué hace: guarda cambios temporales sueltos y limpia el working tree.
  - Ejemplo: git stash push -m "wip: idea prueba"

- git stash pop
  - Qué hace: aplica y elimina el último stash.

- git reset --soft <commit>
  - Qué hace: mueve HEAD a <commit>, preservando los cambios en staged.

- git reset --hard <commit>
  - Qué hace: mueve HEAD a <commit> y descarta cambios locales (¡peligroso!).

- git tag -a v1.0 -m "release 1.0"
  - Qué hace: crear una etiqueta anotada para versiones.

- git cherry-pick <commit>
  - Qué hace: aplica un commit puntual a la rama actual.

- git revert <commit>
  - Qué hace: crea un commit que revierte los cambios de otro commit (seguro para usar en main).

## GitHub Actions (CI / CD)

En este repositorio hay una carpeta .github/workflows con dos flujos principales:

1. ci.yml
   - Propósito: Validación continua (CI) en PRs/pushes.
   - Qué suele ejecutar: instalación de dependencias, lint (eslint), verificación de tipos (tsc), build (next build). Estos pasos usan los scripts definidos en package.json (`lint`, `type-check`, `build`, `test`).
   - Beneficio: evitar merges que rompan el build o introduzcan errores de tipado/lint.

2. deploy-netlify.yml
   - Propósito: Desplegar la aplicación a Netlify cuando se hace push/merge en main (o según el trigger configurado).
   - Qué puede requerir: secrets en GitHub (por ejemplo NETLIFY_AUTH_TOKEN y NETLIFY_SITE_ID) para autenticar y apuntar al sitio Netlify correcto.
   - Beneficio: desplegar automáticamente la versión estable en main sin intervención manual.

---

Si quieres que también adapte el README en español completo o que cree el Pull Request automáticamente, lo hago ahora.