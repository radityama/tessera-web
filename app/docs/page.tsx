import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { PanelHeader } from '@/components/layout/panel';
import { DocsPager } from '@/components/layout/docs-pager';
import { CopyButton } from '@/components/ui/copy-button';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Tessera documentation: CLI reference, MCP server, harness integrations, agent skill, and architecture.',
  alternates: { canonical: `${siteConfig.url}/docs` },
};

const CARDS = [
  {
    href: '/docs/cli',
    index: '[01]',
    title: 'CLI',
    body: 'search, inspect, similar, add, fetch, doctor. Every flag, exit codes, --json shapes.',
  },
  {
    href: '/docs/mcp',
    index: '[02]',
    title: 'MCP',
    body: 'Stdio server setup and the 6 tools with input schemas and sample responses.',
  },
  {
    href: '/docs/integrations',
    index: '[03]',
    title: 'Integrations',
    body: 'Copy-paste configs for 12 harnesses, each with its verification level and date.',
  },
  {
    href: '/docs/skill',
    index: '[04]',
    title: 'Skill',
    body: 'What the agent skill does, where it lives, how to install it, and the decision pipeline.',
  },
  {
    href: '/docs/architecture',
    index: '[05]',
    title: 'Architecture',
    body: 'One retrieval core, five adapters. A paragraph per layer around Fig. 01.',
  },
];

export default function DocsPage() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="docs"
        title="Tessera documentation."
        description="Reference material for the CLI, the MCP server, harness setups, the agent skill, and the system behind them. The pitch stays on the homepage; the facts live here."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:[&>*:nth-child(odd)]:border-r divide-[var(--line)] border-b border-[var(--line)]">
        {CARDS.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="block p-6 md:p-8 space-y-2 bg-[var(--canvas)] hover:bg-[var(--surface-soft)] transition-colors"
          >
            <div className="text-xs font-bold text-[var(--mute)]">{card.index}</div>
            <div className="text-sm font-bold text-[var(--ink)]">
              <span className="link-sweep">{card.title} →</span>
            </div>
            <p className="text-xs text-[var(--body)] leading-relaxed">{card.body}</p>
          </a>
        ))}
      </div>
      <div className="px-5 sm:px-8 py-6 space-y-3">
        <div className="text-xs font-bold text-[var(--mute)]">[install]</div>
        <div className="flex items-center justify-between gap-3 bg-[var(--surface-soft)] border border-[var(--line)] rounded-[4px] px-3 py-2 text-xs max-w-full overflow-hidden">
          <code className="text-[var(--ink)] whitespace-nowrap overflow-x-auto">
            {siteConfig.defaultCommand}
          </code>
          <CopyButton text={siteConfig.defaultCommand} label="copy" className="shrink-0" />
        </div>
        <p className="text-xs text-[var(--mute)] leading-relaxed">
          Node.js {siteConfig.minNode}. No accounts, no API keys, no telemetry.
        </p>
      </div>
      <DocsPager />
    </div>
  );
}
