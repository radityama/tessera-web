import React from 'react';
import { PanelHeader } from '@/components/layout/panel';

export function Problem() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="thesis"
        title="The UI probably already exists."
        description="The frontend ecosystem does not lack good components. Coding agents lack a structured, deterministic way to discover, evaluate, and adapt them before generating code from nothing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Without Tessera */}
        <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-[var(--line)] bg-[var(--surface-soft)] space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--mute)]">
            <span>WITHOUT TESSERA</span>
            <span className="text-[var(--danger)]">[hallucinated generation]</span>
          </div>

          <div className="font-mono text-xs md:text-sm text-[var(--body)] space-y-3 pl-2 border-l border-[var(--line)]">
            <div className="text-[var(--stone)]">prompt</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--danger)]">agent invents component from memory</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--body)]">generic, half-tested implementation</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--mute)]">subtle accessibility bugs & brittle CSS</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--danger)] font-medium">yet another component to maintain forever</div>
          </div>

          <p className="text-xs text-[var(--stone)] leading-relaxed pt-2">
            LLMs default to rewriting primitives from scratch. Every prompt creates a divergent version of tables, dialogs, and sliders, ignoring years of battle-tested open-source engineering.
          </p>
        </div>

        {/* With Tessera */}
        <div className="p-6 md:p-10 bg-[var(--canvas)] space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--ink)]">
            <span>WITH TESSERA</span>
            <span className="text-[var(--success)]">[structured retrieval]</span>
          </div>

          <div className="font-mono text-xs md:text-sm text-[var(--ink)] space-y-3 pl-2 border-l-2 border-[var(--ink)]">
            <div className="text-[var(--body)]">prompt</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--ink)] font-semibold">search 73 pinned components locally</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--body)]">inspect ranking factors, dependencies & license</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--body)]">retrieve canonical upstream source code</div>
            <div className="text-[var(--mute)] select-none">↓</div>
            <div className="text-[var(--success)] font-semibold">adapt composition into your design tokens</div>
          </div>

          <p className="text-xs text-[var(--body)] leading-relaxed pt-2">
            Agents reuse existing composition, interaction models, and keyboard accessibility, then adapt styling to your application&apos;s exact aesthetic rules.
          </p>
        </div>
      </div>
    </div>
  );
}
