"use client";

import clsx from "clsx";
import { useThemeData } from "./hooks/data/useThemeData";
import { useThemeHandlers } from "./hooks/handlers/useThemeHandlers";
import { ThemeIcon } from "./subcomponents/ThemeIcon";

type ButtonThemeProps = {
  className?: string; // make optional
};

export default function ButtonTheme({ className = "" }: ButtonThemeProps) {
  const { theme, setTheme, mounted } = useThemeData();
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
