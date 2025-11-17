"use client";

import clsx from "clsx";
import { useThemeHandlers } from "./hooks/handlers/useThemeHandlers";
import { ThemeIcon } from "./subcomponents/ThemeIcon";
import { useTheme } from "@/context/ThemeContext";

type ButtonThemeProps = {
  className?: string;
};

export default function ButtonTheme({ className = "" }: ButtonThemeProps) {
  const { theme, setTheme, mounted } = useTheme();
  const { handleThemeSwitch } = useThemeHandlers(setTheme);

  const buttonClasses = `
    p-2 rounded-full bg-card-background text-foreground border border-border
    hover:bg-border transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    focus:ring-primary focus:ring-offset-background
  `;

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className={clsx(buttonClasses, className)}
        disabled
      >
        <ThemeIcon theme="root" />
      </button>
    );
  }

  return (
    <button
      onClick={handleThemeSwitch}
      aria-label="Toggle theme"
      className={clsx(buttonClasses, className)}
    >
      <ThemeIcon theme={theme} />
    </button>
  );
}
