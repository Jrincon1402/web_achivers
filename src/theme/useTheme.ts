/**
 * Hook para manejo de temas
 * Basado en las preferencias del sistema y almacenamiento local
 */
"use client";

import { useEffect, useState, useCallback, useMemo, useSyncExternalStore } from "react";

export type Theme = "light" | "dark" | "system";

function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      return stored;
    }
  }
  return "system";
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

function getResolvedTheme(theme: Theme, systemTheme: "light" | "dark"): "light" | "dark" {
  if (theme === "system") {
    return systemTheme;
  }
  return theme;
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  
  // Usar useSyncExternalStore para sincronizar con el tema del sistema
  const systemTheme = useSyncExternalStore<"light" | "dark">(
    (onStoreChange) => {
      if (typeof window === "undefined") {
        return () => {};
      }
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", onStoreChange);
      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () => getSystemTheme(),
    () => "light" as const // valor del servidor
  );

  // Calcular el tema resuelto de forma derivada (sin setState en useEffect)
  const resolvedTheme = useMemo((): "light" | "dark" => {
    return getResolvedTheme(theme, systemTheme);
  }, [theme, systemTheme]);

  // Aplicar el tema al DOM (solo actualiza el DOM, no el estado)
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
  }, [resolvedTheme]);

  const setThemeValue = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  }, []);

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeValue,
  };
}
