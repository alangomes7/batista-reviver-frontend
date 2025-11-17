"use client";

import { createContext, useContext, ReactNode } from "react";
import {
  useThemeData,
  UseThemeReturn,
} from "../components/ButtonTheme/hooks/data/useThemeData";

// Create the context with a default value (it will be overridden by the provider)
const ThemeContext = createContext<UseThemeReturn | undefined>(undefined);

// Create the provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeData = useThemeData();

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
}

// Create a custom hook for easy consumption
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
