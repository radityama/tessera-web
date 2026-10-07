'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { siteConfig } from '@/lib/site';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { label: 'Why', href: '/#why', section: 'why' },
  { label: 'Workflow', href: '/#workflow', section: 'workflow' },
  { label: 'Sources', href: '/#sources', section: 'sources' },
  { label: 'Docs', href: '/docs', section: null },
  { label: 'Catalog', href: '/catalog', section: null },
  { label: 'Trust', href: '/trust', section: null },
];

const SPY_SECTIONS = ['why', 'workflow', 'composition', 'sources', 'use-it', 'compatibility', 'trust', 'install', 'faq'];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const onHome = pathname === '/';

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    for (const id of SPY_SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [onHome]);

  const isActive = (link: (typeof NAV_LINKS)[number]) => {
    if (onHome) {
      if (link.section) return activeSection === link.section;
      return false;
    }
    if (link.href === '/docs') return pathname.startsWith('/docs');
    return pathname === link.href;
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(t) &&
        toggleRef.current &&
        !toggleRef.current.contains(t)
      ) {
        setMobileMenuOpen(false);
      }
    };
    const onHash = () => setMobileMenuOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('hashchange', onHash);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('hashchange', onHash);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (wasOpen.current && !mobileMenuOpen) toggleRef.current?.focus({ preventScroll: true });
    wasOpen.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--canvas)]">
      <div className="panel-frame h-14 flex items-center justify-between px-4 sm:px-6 screen-line-bottom">
        {/* Brand Zone */}
        <a
          href="/"
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link) ? 'true' : undefined}
              className={`transition-colors link-sweep ${
                isActive(link) ? 'text-[var(--ink)] [background-size:100%_1px]' : 'hover:text-[var(--ink)]'
              }`}
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
            className="hidden md:inline-flex gap-1 border-[var(--line)] text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--surface-soft)] group"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[var(--mute)] transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-[1px] motion-safe:group-hover:-translate-y-[1px]" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="primary"
            size="sm"
            className="px-3 py-1.5 font-medium"
          >
            <a href="/#install">Get started</a>
          </Button>
          <Button
            ref={toggleRef}
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
            ref={drawerRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden panel-frame border-b border-[var(--line)] bg-[var(--canvas)] overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <nav className="flex flex-col space-y-3 text-xs text-[var(--body)]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 border-b border-[var(--line)] hover:text-[var(--ink)]"
                  >
                    <span className="link-sweep">{link.label}</span>
                  </a>
                ))}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1 hover:text-[var(--ink)] text-[var(--mute)] inline-flex items-center gap-1"
                >
                  <span className="link-sweep">GitHub repository</span>
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
