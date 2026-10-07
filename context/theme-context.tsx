'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [, startTransition] = useTransition();

  useEffect(() => {
    try {
      const stored = localStorage.getItem('tessera-theme') as Theme | null;
      if (stored === 'light' || stored === 'dark') {
        startTransition(() => {
          setThemeState(stored);
        });
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        startTransition(() => {
          setThemeState('dark');
        });
      }
    } catch {}
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    try {
      localStorage.setItem('tessera-theme', nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    } catch {}
  };

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
