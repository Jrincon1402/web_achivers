# Modules

Esta carpeta contiene módulos del servidor (archivos .server.ts).

En Next.js, los archivos con extensión .server.ts solo se ejecutan en el servidor,
lo que es útil para operaciones que requieren acceso a APIs privadas, bases de datos, etc.

Ejemplo de uso:
- `modules/api.server.ts` - Llamadas a APIs privadas
- `modules/db.server.ts` - Acceso a base de datos
- `modules/auth.server.ts` - Lógica de autenticación del servidor

