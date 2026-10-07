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
  const { toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle visual theme between light and dark"
      title="Toggle theme (light / dark)"
      className={cn('gap-1.5 group', className)}
    >
      <span className="inline-flex items-center">
        <Sun
          className="w-3 h-3 text-[var(--ink)] transition-transform duration-200 ease-out motion-safe:group-hover:rotate-45 dark:hidden"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <Moon
          className="hidden w-3 h-3 text-[var(--ink)] transition-transform duration-200 ease-out motion-safe:group-hover:-rotate-12 dark:inline-flex"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </span>
      <span className="text-[var(--mute)]">theme:</span>
      <span className="font-semibold dark:hidden">light</span>
      <span className="hidden font-semibold dark:inline">dark</span>
    </Button>
  );
}
