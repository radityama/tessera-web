'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DOC_NAV } from '@/lib/docs';

export function DocsNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(t) &&
        toggleRef.current &&
        !toggleRef.current.contains(t)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open ]);

  const current = DOC_NAV.find((d) => d.href === pathname);
  const list = (
    <nav aria-label="Documentation" className="flex flex-col">
      {DOC_NAV.map((item) => {
        const active = pathname === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            onClick={() => setOpen(false)}
            className={`flex items-baseline gap-2 px-4 py-2.5 border-b border-[var(--line)] text-xs transition-colors ${
              active
                ? 'bg-[var(--ink)] text-[var(--canvas)]'
                : 'text-[var(--body)] hover:text-[var(--ink)] hover:bg-[var(--surface-soft)]'
            }`}
          >
            <span aria-hidden="true" className="shrink-0">
              {active ? '[x]' : '[ ]'}
            </span>
            <span>
              <span className="font-bold block">{item.label}</span>
              <span className={`block text-[11px] ${active ? 'opacity-80' : 'text-[var(--mute)]'}`}>
                {item.description}
              </span>
            </span>
          </a>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden border-b border-[var(--line)] px-4 py-2 flex items-center justify-between bg-[var(--canvas)]">
        <span className="text-xs text-[var(--mute)]">docs / {current?.label ?? 'overview'}</span>
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle docs navigation"
          className="inline-flex items-center gap-1.5 text-xs border border-[var(--line)] rounded-[4px] px-2.5 py-1 text-[var(--body)] hover:text-[var(--ink)] cursor-pointer motion-safe:active:scale-[0.97]"
        >
          {open ? <X className="w-3.5 h-3.5" aria-hidden="true" /> : <Menu className="w-3.5 h-3.5" aria-hidden="true" />}
          <span>index</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={drawerRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden border-b border-[var(--line)] bg-[var(--canvas)]"
          >
            {list}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-60 shrink-0 border-r border-[var(--line)] bg-[var(--canvas)]">
        <div className="sticky top-14">{list}</div>
      </div>
    </>
  );
}
