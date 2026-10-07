import React from 'react';
import { PanelHeader } from '@/components/layout/panel';

const FACTS = [
  {
    label: 'LOCAL SEARCH',
    body: 'Ranking runs offline against the pinned index. No prompt leaves the machine.',
  },
  {
    label: 'NO ACCOUNT',
    body: 'No signup, no tokens. Runs via npx with Node.js 20 or later.',
  },
  {
    label: 'NO TELEMETRY',
    body: 'Queries and configs are never logged or sent anywhere.',
  },
  {
    label: 'EXPLICIT RETRIEVAL',
    body: 'Only fetch touches the network, pulling upstream source you asked for.',
  },
  {
    label: 'NO EXECUTION',
    body: 'Retrieved code arrives as text. Nothing installs or runs by itself.',
  },
];

export function TrustBand() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="trust"
        title="Local by default, explicit when it matters."
        description="Search never needs the network. Retrieval does, and only when you ask."
        aside={
          <a href="/trust" className="link-sweep text-xs font-bold text-[var(--ink)]">
            trust and limits →
          </a>
        }
      />
      <dl className="grid grid-cols-1 divide-y divide-[var(--line)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
        {FACTS.map((fact) => (
          <div key={fact.label} className="space-y-1.5 border-[var(--line)] px-5 py-5 sm:border-t sm:[&:nth-child(-n+2)]:border-t-0 lg:border-t-0 lg:px-4">
            <dt className="font-mono text-xs font-bold text-[var(--ink)]">
              <span className="mr-1.5 select-none text-[var(--verified-solid)]" aria-hidden="true">[+]</span>
              {fact.label}
            </dt>
            <dd className="text-sm leading-relaxed text-[var(--body)]">{fact.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
