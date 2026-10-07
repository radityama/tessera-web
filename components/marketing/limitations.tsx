import React from 'react';
import { PanelHeader } from '@/components/layout/panel';

export function Limitations() {
  const limitations = [
    {
      marker: '[-]',
      title: 'Five sources indexed',
      description:
        'v0.1 indexes 73 components across Aceternity UI, beUI, Efferd, Magic UI, and HeroUI. It is not an exhaustive index of all open-source frontend code.',
    },
    {
      marker: '[-]',
      title: 'React-focused ecosystem',
      description:
        'All current indexed components target modern React. Vue, Svelte, and vanilla web components are architecturally planned but not present in the v0.1 index.',
    },
    {
      marker: '[-]',
      title: 'Lexical ranking, not vector embeddings',
      description:
        'Tessera uses deterministic lexical keyword matching (BM25-style) with category and aesthetic weighting. It does not run opaque local embedding models.',
    },
    {
      marker: '[-]',
      title: 'add command is dry-run only',
      description:
        'tessera add simulates component installation and dependency manifests. To actually write files to disk, developers or agents use tessera fetch with explicit targets.',
    },
    {
      marker: '[-]',
      title: 'No recursive dependency tree fetching',
      description:
        'If a retrieved component references another internal component, fetch does not automatically spider upstream URLs. Dependencies are displayed in metadata for explicit retrieval.',
    },
    {
      marker: '[-]',
      title: 'Most harness integrations are config-verified',
      description:
        'Claude Code has undergone full runtime test suites. Other agent integrations (Cursor, Windsurf, Zed, etc.) are currently verified against standard config schemas.',
    },
  ];

  return (
    <div className="w-full">
      <PanelHeader
        kicker="boundaries"
        title="v0.1 means v0.1."
        description="Developer tools earn trust by being honest about what they do and do not do. These are the current technical boundaries of Tessera."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
        {/* Left column */}
        <div className="divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
          {limitations.slice(0, 3).map((item) => (
            <div key={item.title} className="p-6 md:p-8 space-y-2 hover:bg-[var(--surface-soft)] transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[var(--stone)] select-none">
                  {item.marker}
                </span>
                <h3 className="text-xs md:text-sm font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[var(--body)] leading-relaxed pl-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
          {limitations.slice(3, 6).map((item) => (
            <div key={item.title} className="p-6 md:p-8 space-y-2 hover:bg-[var(--surface-soft)] transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[var(--stone)] select-none">
                  {item.marker}
                </span>
                <h3 className="text-xs md:text-sm font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[var(--body)] leading-relaxed pl-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
