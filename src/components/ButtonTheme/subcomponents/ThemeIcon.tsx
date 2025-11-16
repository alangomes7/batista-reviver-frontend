"use client";

import { MoonIcon, SunIcon, PaletteIcon } from "lucide-react";
import { Theme } from "../types";

export interface ThemeIconProps {
  /** Current theme used to decide which icon to show */
  theme: Theme;
}

/**
 * Displays an icon corresponding to the current theme:
 * - 'root' (default colored theme): SunIcon
 * - 'light' (black & white light theme): MoonIcon
 * - 'dark' (brand-tinted dark theme): PaletteIcon
 */
export function ThemeIcon({ theme }: ThemeIconProps) {
  if (theme === "light") {
    return <MoonIcon className="h-5 w-5" />;
  }

  if (theme === "dark") {
    return <PaletteIcon className="h-5 w-5" />;
  }

  // Default to 'root' (colored) icon
  return <SunIcon className="h-5 w-5" />;
}
