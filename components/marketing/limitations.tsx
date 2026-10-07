import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { LIMITATIONS } from '@/lib/constants';

export function Limitations() {
  const limitations = LIMITATIONS;

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
