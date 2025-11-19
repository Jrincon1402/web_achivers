# web_achivers

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

Comandos útiles (rápida referencia)
- git status, git add, git commit, git push, git pull, git fetch, git checkout -b, git switch, git merge, git rebase, git log --oneline --graph, git diff, git stash, git reset --hard (usar con precaución), git tag, git cherry-pick, git revert.

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

Si quieres, yo puedo:
- (A) Generar el contenido del README en la rama propuesta para que solo revises y hagas el PR.
- (B) Revisar el contenido exacto de .github/workflows/ci.yml y deploy-netlify.yml y darte un resumen detallado con triggers, versiones de Node y secretos usados.
Dime cuál prefieres y preparo los pasos o el commit listo para aplicar.