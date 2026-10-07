import React from 'react';
import { PanelHeader } from '@/components/layout/panel';

export function Safety() {
  const safetyPrinciples = [
    {
      marker: '[+]',
      title: 'License evidence when known',
      description:
        'When an upstream repository provides an explicit LICENSE file (e.g. MIT, Apache-2.0), Tessera records the license identifier and the evidence path.',
    },
    {
      marker: '[+]',
      title: 'Unknown stays unknown',
      description:
        'If a component’s licensing cannot be definitively verified, Tessera marks it as unknown. It never guesses or defaults to permissive licenses.',
    },
    {
      marker: '[+]',
      title: 'Restricted redistribution surfaced',
      description:
        'Components with non-commercial, attribution-only, or proprietary caveats are prominently flagged so agents do not accidentally commit non-compliant code.',
    },
    {
      marker: '[+]',
      title: 'Upstream source is never executed',
      description:
        'Tessera treats retrieved source code as plain text. It never executes npm lifecycle scripts, pre/postinstall hooks, or arbitrary code from remote registries.',
    },
    {
      marker: '[+]',
      title: 'No silent file overwriting',
      description:
        'The CLI requires explicit output directories or outputs directly to stdout. It will never overwrite existing codebase files without developer consent.',
    },
    {
      marker: '[+]',
      title: 'Pinned retrieval hosts',
      description:
        'Retrieval requests are constrained strictly to verified upstream registries and canonical npm package mirrors pinned in the metadata manifest.',
    },
  ];

  return (
    <div className="w-full">
      <PanelHeader
        kicker="governance"
        title="Retrieval without pretending licensing does not exist."
        description="Coding agents often scrape code without regard for provenance, terms, or execution risks. Tessera treats licensing and retrieval boundaries as first-class constraints."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
        {/* Left column */}
        <div className="divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
          {safetyPrinciples.slice(0, 3).map((item) => (
            <div key={item.title} className="p-6 md:p-8 space-y-2 hover:bg-[var(--surface-soft)] transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[var(--success-text)] select-none">
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
          {safetyPrinciples.slice(3, 6).map((item) => (
            <div key={item.title} className="p-6 md:p-8 space-y-2 hover:bg-[var(--surface-soft)] transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[var(--success-text)] select-none">
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
