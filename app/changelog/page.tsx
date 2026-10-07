import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { SiteHeader } from '@/components/layout/site-header';
import { Announcement } from '@/components/layout/announcement';
import { SiteFooter } from '@/components/layout/site-footer';
import { SectionSeparator } from '@/components/layout/section-separator';
import { Panel, PanelHeader } from '@/components/layout/panel';

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'Tessera release notes. v0.1.0 is the first release; later versions append here.',
  alternates: { canonical: `${siteConfig.url}/changelog` },
};

const ADDED = [
  'Canonical component registry (schema v2) with retrieval provenance and license evidence.',
  'Verified sources: Aceternity UI, beUI, Efferd, HeroUI, Magic UI — 73 components from provider registries.',
  'Deterministic lexical search with per-result score explanations, filters, similar lookup, pattern search.',
  'Artifact retrieval with origin allowlist, bounded redirects, timeouts, size caps, payload validation.',
  'CLI: search, inspect, similar, add --dry-run, fetch, doctor, mcp.',
  'MCP server over stdio with six tools.',
  'Agent skill: decomposition, design-language first, retrieval, adaptation, cohesion pass.',
  'Bundled registry — installed Tessera works without a cloned repository.',
  'Harness integration docs for 11 coding agents, each checked against official docs.',
];

const KNOWN_LIMITS = [
  'fetch returns a component\u2019s own files and does not resolve its registry dependencies.',
  'Provider-declared dependencies can under-report real imports (magicui/terminal imports motion, unlisted).',
  'Five sources, React only. Ranking is lexical and does not weigh multi-intent queries.',
  'add is dry-run only. Ten of eleven harness integrations are config-verified, not runtime-tested.',
];

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      <SiteHeader />
      <Announcement />
      <main id="main" className="flex-1 w-full">
        <Panel id="changelog" hasTopLine={false} hasBottomLine={true}>
          <PanelHeader
        heading="h1"
            kicker="changelog"
            title="Release notes."
            description="Summarised from the main repository CHANGELOG. Later versions append below v0.1.0 in the same shape."
          />
          <div className="px-5 sm:px-8 md:px-10 py-6 md:py-8 space-y-6 max-w-3xl">
            <section className="space-y-3">
              <h2 className="text-sm font-bold text-[var(--ink)]">[v0.1.0] — 2026-10-06</h2>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
                First release. The local retrieval loop works end to end: search real UI libraries,
                retrieve a real component, understand its dependencies and license, and adapt it
                into a project.
              </p>
              <h3 className="text-xs font-bold text-[var(--mute)]">[added]</h3>
              <ul className="space-y-1.5">
                {ADDED.map((item) => (
                  <li key={item} className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed flex gap-2">
                    <span aria-hidden="true" className="text-[var(--mute)]">+</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xs font-bold text-[var(--mute)]">[known limitations]</h3>
              <ul className="space-y-1.5">
                {KNOWN_LIMITS.map((item) => (
                  <li key={item} className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed flex gap-2">
                    <span aria-hidden="true" className="text-[var(--mute)]">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--mute)] leading-relaxed">
                Full text:{' '}
                <a
                  href={`${siteConfig.github}/blob/main/CHANGELOG.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-sweep text-[var(--body)]"
                >
                  CHANGELOG.md in the main repo →
                </a>
              </p>
            </section>
          </div>
        </Panel>
        <SectionSeparator />
      </main>
      <SiteFooter />
    </div>
  );
}
