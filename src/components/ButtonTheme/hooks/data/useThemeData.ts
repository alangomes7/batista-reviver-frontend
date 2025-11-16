"use client";

import { useState, useEffect } from "react";
import { Theme } from "../../types";

export interface UseThemeReturn {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  mounted: boolean;
}

/**
 * Hook to manage theme state. It persists the theme to localStorage
 * and applies the correct class to the document root.
 *
 * On first load, it defaults to the user's system preference.
 * On subsequent loads, it uses the theme from localStorage.
 */
export function useThemeData(): UseThemeReturn {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("root");

  useEffect(() => {
    setMounted(true);

    // 1. Check for a theme in localStorage
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme && ["root", "light", "dark"].includes(storedTheme)) {
      // 2. Use stored theme if valid
      setTheme(storedTheme);
    } else {
      // 3. On first load (no valid stored theme), use device theme
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "root";
      setTheme(defaultTheme);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // This effect runs *after* mount and whenever the theme state changes
    if (!mounted) return;

    const root = window.document.documentElement;

    // 1. Remove all theme classes
    root.classList.remove("dark", "colored");

    // 2. Add the active theme class (if not 'root')
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "colored") {
      root.classList.add("colored");
    }
    // 'root' theme is the default (no class)

    // 3. Persist to localStorage
    localStorage.setItem("theme", theme);
  }, [theme, mounted]); // Re-runs when theme or mounted status changes

  return { theme, setTheme, mounted };
}
