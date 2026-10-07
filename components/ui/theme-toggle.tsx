'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/theme-context';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label="Toggle visual theme between light and dark"
      title="Toggle theme (light / dark)"
      className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-[4px] border border-[var(--hairline-strong)] text-[var(--ink)] hover:bg-[var(--surface-card)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--ink)] cursor-pointer select-none ${className}`}
    >
      <span suppressHydrationWarning className="inline-flex items-center">
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-[var(--ink)]" strokeWidth={1.75} />
        ) : (
          <Sun className="w-3 h-3 text-[var(--ink)]" strokeWidth={1.75} />
        )}
      </span>
      <span className="text-[var(--mute)]">theme:</span>
      <span suppressHydrationWarning className="font-semibold">{theme}</span>
    </button>
  );
}
