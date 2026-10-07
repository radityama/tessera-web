'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/theme-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label="Toggle visual theme between light and dark"
      title="Toggle theme (light / dark)"
      className={cn('gap-1.5', className)}
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
    </Button>
  );
}
