import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { AGENT_SKILL_STEPS } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { DocsPager } from '@/components/layout/docs-pager';
import { CopyButton } from '@/components/ui/copy-button';

export const metadata: Metadata = {
  title: 'Agent skill',
  description:
    'The Tessera agent skill: what it teaches, where it lives, how to install it, and the decision pipeline.',
  alternates: { canonical: `${siteConfig.url}/docs/skill` },
};

const SKILL_DIRS = [
  ['Claude Code', '.claude/skills/tessera/'],
  ['Cursor', '.cursor/skills/tessera/ or .agents/skills/tessera/'],
  ['Codex', '.codex/skills/tessera/'],
  ['OpenCode', '.opencode/skills/tessera/'],
  ['Zed / global', '.agents/skills/tessera/ or ~/.agents/skills/tessera/'],
];

export default function SkillDocsPage() {
  const installCmd = 'mkdir -p .claude/skills/tessera && cp SKILL.md .claude/skills/tessera/SKILL.md';
  return (
    <div className="w-full">
      <PanelHeader
        kicker="docs / skill"
        title="The agent skill."
        description="Retrieval alone does not guarantee a good UI. The skill teaches coding models when to search, how to evaluate ranking reasons, when to reject matches, and how to adapt components into one coherent page."
      />
      <div className="px-5 sm:px-8 py-6 space-y-8">
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[what it does]</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            The skill (<code className="text-[var(--ink)]">skills/tessera/SKILL.md</code> in the main
            repository, v0.1.0) sets the design language first, then searches one targeted query per
            page section, inspects license / retrievability / dependencies / framework fit, retrieves
            the real source, adapts it to project tokens, and finishes with a cohesion pass. Rank is
            a starting point, not a decision — its worked example rejects the top-ranked candidate on
            licensing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[install]</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            The skill is not bundled in the CLI package. Copy{' '}
            <code className="text-[var(--ink)]">SKILL.md</code> from{' '}
            <a
              href={`${siteConfig.github}/blob/main/skills/tessera/SKILL.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep font-bold text-[var(--ink)]"
            >
              skills/tessera/SKILL.md
            </a>{' '}
            into your harness&apos;s skill directory as <code className="text-[var(--ink)]">tessera/SKILL.md</code>:
          </p>
          <div className="flex items-center justify-between gap-3 bg-[var(--surface-soft)] border border-[var(--line)] rounded-[4px] px-3 py-2 text-xs max-w-full overflow-hidden">
            <code className="text-[var(--ink)] whitespace-nowrap overflow-x-auto">{installCmd}</code>
            <CopyButton text={installCmd} label="copy" className="shrink-0" />
          </div>
          <div className="border border-[var(--line)] rounded-[4px] overflow-hidden">
            {SKILL_DIRS.map(([harness, dir], i) => (
              <div
                key={harness}
                className={`grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 px-3 py-2 text-xs md:text-xs ${
                  i > 0 ? 'border-t border-[var(--line)]' : ''
                }`}
              >
                <span className="text-[var(--ink)] font-bold">{harness}</span>
                <code className="text-[var(--body)]">{dir}</code>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[decision pipeline]</h2>
          <div className="border border-[var(--line)] rounded-[4px] overflow-hidden divide-y divide-[var(--line)]">
            {AGENT_SKILL_STEPS.map((s) => (
              <div key={s.step} className="px-3 py-3 space-y-1">
                <div className="text-xs font-bold text-[var(--mute)]">[{s.step}] {s.title}</div>
                <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <DocsPager />
    </div>
  );
}
