import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const DOC_LINKS = [
  { label: 'CLI', href: '/docs/cli' },
  { label: 'MCP', href: '/docs/mcp' },
  { label: 'Integrations', href: '/docs/integrations' },
  { label: 'Skill', href: '/docs/skill' },
  { label: 'Architecture', href: '/docs/architecture' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Trust', href: '/trust' },
  { label: 'Changelog', href: '/changelog' },
];

function External({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1"
      >
        <span className="link-sweep">{label}</span>
        <ArrowUpRight className="w-3 h-3 text-[var(--mute)] transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-[1px] motion-safe:group-hover:-translate-y-[1px]" aria-hidden="true" />
      </a>
    </li>
  );
}

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
            {siteConfig.version} · TypeScript · MIT
          </div>
        </div>

        {/* Docs Col */}
        <div className="p-6 md:p-8 space-y-3 border-b sm:border-b lg:border-b-0 lg:border-r border-[var(--line)]">
          <div className="text-[11px] font-bold text-[var(--mute)] uppercase tracking-wider">
            Docs
          </div>
          <ul className="space-y-2 text-[var(--body)]">
            {DOC_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-[var(--ink)] transition-colors">
                  <span className="link-sweep">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Col */}
        <div className="p-6 md:p-8 space-y-3 border-b sm:border-b-0 sm:border-r lg:border-r border-[var(--line)]">
          <div className="text-[11px] font-bold text-[var(--mute)] uppercase tracking-wider">
            Resources
          </div>
          <ul className="space-y-2 text-[var(--body)]">
            <External href={siteConfig.github} label="GitHub Repository" />
            <External href={siteConfig.npm} label="npm Package" />
            <External href={`${siteConfig.github}/releases`} label={`Releases (${siteConfig.version})`} />
          </ul>
        </div>

        {/* Community Col */}
        <div className="p-6 md:p-8 space-y-3 bg-[var(--surface-soft)]">
          <div className="text-[11px] font-bold text-[var(--mute)] uppercase tracking-wider">
            Community
          </div>
          <ul className="space-y-2 text-[var(--body)]">
            <External href={`${siteConfig.github}/issues`} label="Issue Tracker" />
            <External href={`${siteConfig.github}#contributing`} label="Contributing" />
            <External href={`${siteConfig.github}/blob/main/LICENSE`} label="MIT License" />
          </ul>
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
