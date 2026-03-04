"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/ThemeProvider";

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle-btn w-10 h-10 radius-notion-md flex items-center justify-center transition-colors-theme bg-[var(--bg-tertiary)] border border-[var(--border-color)]"
      aria-label="Toggle theme"
    >
      <Sun className="theme-icon w-5 h-5 text-[var(--text-primary)] dark:hidden" />
      <Moon className="theme-icon hidden w-5 h-5 dark:block text-[var(--text-primary)]" />
    </button>
  );
}
