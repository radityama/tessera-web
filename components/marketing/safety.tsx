import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { SAFETY_PRINCIPLES } from '@/lib/constants';

export function Safety() {
  const safetyPrinciples = SAFETY_PRINCIPLES;

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
            <div key={item.title} className="p-6 md:p-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[var(--success-text)] select-none">
                  {item.marker}
                </span>
                <h3 className="text-xs md:text-sm font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed pl-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
          {safetyPrinciples.slice(3, 6).map((item) => (
            <div key={item.title} className="p-6 md:p-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[var(--success-text)] select-none">
                  {item.marker}
                </span>
                <h3 className="text-xs md:text-sm font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed pl-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
