import { Theme } from "../../types";

export interface ThemeHandlers {
  /** Toggles between 'root', 'light', and 'dark' themes */
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
      if (prev === "root") return "light";
      if (prev === "light") return "dark";
      if (prev === "dark") return "root";

      // Fallback in case of an unexpected state
      return "root";
    });
  };

  return { handleThemeSwitch };
}
