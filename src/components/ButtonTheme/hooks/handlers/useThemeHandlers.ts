import { Theme } from "@/components/ButtonTheme/types";

export interface ThemeHandlers {
  /** Toggles between 'root', 'dark', and 'colored' themes */
  handleThemeSwitch: () => void;
}

/**
 * Provides handler functions for theme-related actions.
 */
export function useThemeHandlers(
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
): ThemeHandlers {
  const handleThemeSwitch = (): void => {
    setTheme((prev) => {
      if (prev === "root") return "dark";
      if (prev === "dark") return "colored";
      if (prev === "colored") return "root";

      // Fallback in case of an unexpected state
      return "root";
    });
  };

  return { handleThemeSwitch };
}
