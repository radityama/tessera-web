import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { PanelHeader } from '@/components/layout/panel';
import { DocsPager } from '@/components/layout/docs-pager';
import { CopyButton } from '@/components/ui/copy-button';
import { INTEGRATIONS } from '@/lib/integrations';

export const metadata: Metadata = {
  title: 'Integrations',
  description:
    'Tessera harness setups: copy-paste MCP configs for 12 coding-agent environments, each with verification level and date.',
  alternates: { canonical: `${siteConfig.url}/docs/integrations` },
};

export default function IntegrationsPage() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="docs / integrations"
        title="Twelve harnesses, one server."
        description="Copy-paste configs below. Configs follow each harness's official docs as checked in the main repo (last verified 2026-10-06). Only Claude Code is runtime-verified; the rest are config-verified against vendor schemas."
      />
      <div className="px-5 sm:px-8 py-4 border-b border-[var(--line)] bg-[var(--surface-soft)]">
        <div className="text-[11px] text-[var(--mute)] mb-2">[jump to]</div>
        <div className="flex flex-wrap gap-1.5">
          {INTEGRATIONS.map((h) => (
            <a
              key={h.slug}
              href={`#${h.slug}`}
              className="text-[11px] px-2 py-0.5 border border-[var(--line)] rounded-[4px] text-[var(--body)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            >
              {h.name}
            </a>
          ))}
        </div>
      </div>

      <div className="divide-y divide-[var(--line)]">
        {INTEGRATIONS.map((h, i) => (
          <section key={h.slug} id={h.slug} className="scroll-target px-5 sm:px-8 py-6 space-y-3">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-sm font-bold text-[var(--ink)]">
                [{String(i + 1).padStart(2, '0')}] {h.name}
              </h2>
              <span className="text-[11px] px-1.5 py-0.5 border border-[var(--line)] rounded-[4px] text-[var(--body)]">
                [{h.status}]{h.lastVerified ? ` · ${h.lastVerified}` : ' · date unrecorded'}
              </span>
              {!h.snippetVerified ? (
                <span className="text-[11px] px-1.5 py-0.5 border border-[var(--danger-text)] rounded-[4px] text-[var(--danger-text)]">
                  [unverified — check vendor docs]
                </span>
              ) : null}
            </div>
            <div className="text-[11px] text-[var(--mute)]">
              config: <code className="text-[var(--body)]">{h.configPath}</code>
            </div>
            <div className="border border-[var(--line)] rounded-[4px] overflow-hidden">
              <div className="flex items-center justify-between gap-3 px-3 py-1.5 bg-[var(--surface-soft)] border-b border-[var(--line)]">
                <span className="text-[11px] text-[var(--mute)]">{h.configPath}</span>
                <CopyButton text={h.snippet} label="copy" className="shrink-0" />
              </div>
              <pre className="px-3 py-3 text-[11px] md:text-xs leading-relaxed text-[var(--body)] overflow-x-auto whitespace-pre">
                {h.snippet}
              </pre>
            </div>
            {h.verifyCommand ? (
              <div className="text-[11px] text-[var(--mute)]">
                verify: <code className="text-[var(--body)]">{h.verifyCommand}</code>
              </div>
            ) : null}
            {h.note ? <p className="text-[11px] text-[var(--mute)] leading-relaxed">{h.note}</p> : null}
            <div className="text-[11px] text-[var(--mute)]">
              official docs:{' '}
              {h.officialDocs.map((url) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="link-sweep text-[var(--body)]">
                  {url.replace('https://', '')}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
      <DocsPager />
    </div>
  );
}
