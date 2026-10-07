import React from 'react';
import { siteConfig } from '@/lib/site';

export function DocsFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--canvas)] px-4 py-6 text-xs text-[var(--mute)] sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 Tessera Maintainers. MIT.{' '}
          <a href={`${siteConfig.github}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="text-[var(--body)] link-sweep">
            License
          </a>
        </p>
        <nav aria-label="Docs" className="flex flex-wrap gap-4">
          <a href="/docs" className="text-[var(--body)] link-sweep">Docs</a>
          <a href="/catalog" className="text-[var(--body)] link-sweep">Catalog</a>
          <a href="/trust" className="text-[var(--body)] link-sweep">Trust</a>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-[var(--body)] link-sweep">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
