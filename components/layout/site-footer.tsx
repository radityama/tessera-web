import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="panel-frame bg-[var(--canvas)] font-mono text-xs screen-line-bottom">
      {/* Top Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[var(--line)]">
        {/* Brand Col */}
        <div className="p-6 md:p-8 space-y-3 border-b sm:border-b sm:border-r lg:border-b-0 lg:border-r border-[var(--line)]">
          <div className="flex items-center gap-2 font-bold text-[var(--ink)]">
            <span className="inline-grid grid-cols-2 gap-0.5 w-3.5 h-3.5 p-0.5 border border-[var(--ink)]" aria-hidden="true">
              <span className="bg-[var(--ink)] w-1 h-1 block"></span>
              <span className="bg-[var(--ink)] w-1 h-1 block"></span>
              <span className="bg-[var(--ink)] w-1 h-1 block"></span>
              <span className="border border-[var(--line-strong)] w-1 h-1 block"></span>
            </span>
            <span>tessera</span>
          </div>
          <p className="text-[11px] text-[var(--stone)] leading-relaxed">
            UI retrieval for coding agents. Reuse composition, not identity.
          </p>
          <div className="text-[11px] text-[var(--mute)]">
            v0.1.0 · TypeScript · MIT
          </div>
        </div>

        {/* Resources Col */}
        <div className="p-6 md:p-8 space-y-3 border-b sm:border-b lg:border-b-0 lg:border-r border-[var(--line)]">
          <div className="text-[11px] font-bold text-[var(--mute)] uppercase tracking-wider">
            Resources
          </div>
          <ul className="space-y-2 text-[var(--body)]">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] hover:underline inline-flex items-center gap-1"
              >
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.npm}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] hover:underline inline-flex items-center gap-1"
              >
                <span>npm Package</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`${siteConfig.github}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] hover:underline inline-flex items-center gap-1"
              >
                <span>Releases (v0.1.0)</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        {/* Development Col */}
        <div className="p-6 md:p-8 space-y-3 border-b sm:border-b-0 sm:border-r lg:border-r border-[var(--line)]">
          <div className="text-[11px] font-bold text-[var(--mute)] uppercase tracking-wider">
            Community
          </div>
          <ul className="space-y-2 text-[var(--body)]">
            <li>
              <a
                href={`${siteConfig.github}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] hover:underline inline-flex items-center gap-1"
              >
                <span>Issue Tracker</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`${siteConfig.github}#contributing`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] hover:underline inline-flex items-center gap-1"
              >
                <span>Contributing</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`${siteConfig.github}/blob/main/LICENSE`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--ink)] hover:underline inline-flex items-center gap-1"
              >
                <span>MIT License</span>
                <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        {/* Execution Col */}
        <div className="p-6 md:p-8 space-y-3 bg-[var(--surface-soft)]">
          <div className="text-[11px] font-bold text-[var(--mute)] uppercase tracking-wider">
            Quick Command
          </div>
          <code className="block text-[11px] text-[var(--ink)] bg-[var(--canvas)] p-2 rounded-[4px] border border-[var(--line)] overflow-x-auto">
            npx @tessera-dev/cli
          </code>
          <div className="text-[11px] text-[var(--stone)]">
            Offline index · Zero telemetry
          </div>
        </div>
      </div>

      {/* Mandatory legal and non-affiliation disclaimer */}
      <div className="p-6 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[var(--stone)]">
        <div>
          © 2026 Tessera Maintainers. Released under the MIT License.
        </div>
        <div className="text-[10px] sm:text-[11px] text-[var(--mute)] max-w-md">
          Tessera is an independent open-source tool and is not affiliated with, sponsored by, or endorsed by the component libraries it indexes.
        </div>
      </div>
    </footer>
  );
}
