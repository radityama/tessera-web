'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '@/lib/site';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Why', href: '#why' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Sources', href: '#sources' },
    { label: 'CLI', href: '#cli' },
    { label: 'MCP', href: '#mcp' },
    { label: 'Compatibility', href: '#compatibility' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--canvas)]">
      <div className="panel-frame h-14 flex items-center justify-between px-4 sm:px-6 screen-line-bottom">
        {/* Brand Zone */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold tracking-tight text-[var(--ink)] text-sm md:text-base hover:opacity-80 transition-opacity"
        >
          {/* Missing-piece geometric mark: 3 solid tiles with 1 cut-out tile forming an open tessera */}
          <span className="inline-grid grid-cols-2 gap-0.5 w-4 h-4 p-0.5 border border-[var(--ink)] shrink-0" aria-hidden="true">
            <span className="bg-[var(--ink)] w-1 h-1 block"></span>
            <span className="bg-[var(--ink)] w-1 h-1 block"></span>
            <span className="bg-[var(--ink)] w-1 h-1 block"></span>
            <span className="border border-[var(--line-strong)] w-1 h-1 block"></span>
          </span>
          <span>tessera</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs text-[var(--mute)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--ink)] hover:underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="hidden md:inline-flex gap-1 border-[var(--line)] text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--surface-soft)]"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="primary"
            size="sm"
            className="px-3 py-1.5 font-medium"
          >
            <a href="#install">Get started</a>
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 border-[var(--line)] text-[var(--body)] hover:text-[var(--ink)] hover:bg-transparent"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            ) : (
              <Menu className="w-3.5 h-3.5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden panel-frame border-b border-[var(--line)] bg-[var(--canvas)] overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <nav className="flex flex-col space-y-3 text-xs text-[var(--body)]">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 border-b border-[var(--line)] hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:text-[var(--ink)] text-[var(--mute)] inline-flex items-center gap-1"
                >
                  <span>GitHub repository</span>
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </nav>

              <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs">
                <span className="text-[var(--mute)]">Appearance</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
