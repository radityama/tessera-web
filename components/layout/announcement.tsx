import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function Announcement() {
  return (
    <aside
      aria-label="Release Announcement"
      className="panel-frame screen-line-bottom bg-[var(--surface-soft)] px-4 py-2.5 text-xs text-[var(--body)] flex items-center justify-between"
    >
      <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
        <span className="text-[var(--mute)] shrink-0">[release]</span>
        <a href="/changelog" className="text-[var(--ink)] font-medium link-sweep">
          Tessera {siteConfig.version} is available on npm
        </a>
      </div>
      <a
        href={siteConfig.npm}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-[var(--mute)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1 ml-4 group"
      >
        <span className="link-sweep">npm registry</span>
        <ArrowUpRight className="w-3 h-3 transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-[1px] motion-safe:group-hover:-translate-y-[1px]" aria-hidden="true" />
      </a>
    </aside>
  );
}
