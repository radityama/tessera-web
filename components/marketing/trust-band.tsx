import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { SAFETY_PRINCIPLES, LIMITATIONS } from '@/lib/constants';

const GUARANTEES = [
  {
    title: 'No account or API keys',
    body: 'No signup, no tokens, no hosted endpoint. Runs via npx.',
  },
  {
    title: 'Deterministic local index',
    body: 'Every install resolves the same ranking scores and metadata.',
  },
  {
    title: 'Zero background telemetry',
    body: 'Queries and configs never leave the machine.',
  },
];

export function TrustBand() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="trust"
        title="v0.1 means v0.1."
        description="What is guaranteed, what is governed, and where the boundaries are. The full record lives on one page."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
        <div className="p-6 md:p-8 space-y-3">
          <div className="text-xs font-bold text-[var(--mute)]">[+] guarantees</div>
          {GUARANTEES.map((g) => (
            <div key={g.title} className="space-y-1">
              <div className="text-xs font-bold text-[var(--ink)]">{g.title}</div>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>
        <div className="p-6 md:p-8 space-y-3">
          <div className="text-xs font-bold text-[var(--mute)]">[+] governance</div>
          {SAFETY_PRINCIPLES.slice(0, 3).map((g) => (
            <div key={g.title} className="space-y-1">
              <div className="text-xs font-bold text-[var(--ink)]">{g.title}</div>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
        <div className="p-6 md:p-8 space-y-3">
          <div className="text-xs font-bold text-[var(--mute)]">[-] boundaries</div>
          {LIMITATIONS.slice(0, 3).map((g) => (
            <div key={g.title} className="space-y-1">
              <div className="text-xs font-bold text-[var(--ink)]">{g.title}</div>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 sm:px-8 md:px-10 py-3 bg-[var(--surface-soft)] border-t border-[var(--line)] text-xs">
        <a href="/trust" className="link-sweep font-bold text-[var(--ink)]">
          trust and limits →
        </a>
      </div>
    </div>
  );
}
