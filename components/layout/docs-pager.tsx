'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { docPrevNext } from '@/lib/docs';

export function DocsPager() {
  const pathname = usePathname();
  const { prev, next } = docPrevNext(pathname);
  if (!prev && !next) return null;
  return (
    <div className="border-t border-[var(--line)] grid grid-cols-1 sm:grid-cols-2 bg-[var(--surface-soft)]">
      <div className="px-5 sm:px-8 py-4">
        {prev ? (
          <a href={prev.href} className="block group">
            <span className="block text-xs text-[var(--mute)]">← prev</span>
            <span className="block text-xs font-bold text-[var(--ink)] link-sweep w-fit">
              {prev.label}
            </span>
          </a>
        ) : null}
      </div>
      <div className="px-5 sm:px-8 py-4 sm:text-right border-t sm:border-t-0 sm:border-l border-[var(--line)]">
        {next ? (
          <a href={next.href} className="block group sm:ml-auto">
            <span className="block text-xs text-[var(--mute)]">next →</span>
            <span className="block text-xs font-bold text-[var(--ink)] link-sweep w-fit sm:ml-auto">
              {next.label}
            </span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
