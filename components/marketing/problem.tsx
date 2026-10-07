import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { TOTAL_COMPONENTS } from '@/lib/constants';

const WITHOUT = [
  'prompt',
  'agent invents component from memory',
  'generic, half-tested implementation',
  'yet another component to maintain forever',
];

const WITH = [
  'prompt',
  `search ${TOTAL_COMPONENTS} pinned components locally`,
  'inspect ranking factors, dependencies and license',
  'retrieve canonical upstream source',
  'adapt composition into your design tokens',
];

function Flow({ steps, accent }: { steps: string[]; accent: 'danger' | 'success' }) {
  return (
    <div className="space-y-3 border-l-2 pl-3 font-mono text-xs md:text-sm" style={{ borderColor: `var(--${accent === 'danger' ? 'danger-border' : 'verified-border'})` }}>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          {i > 0 && (
            <div className="select-none text-[var(--mute)]" aria-hidden="true">↓</div>
          )}
          <div
            className={
              i === steps.length - 1
                ? `font-semibold text-[var(--${accent === 'danger' ? 'danger-solid' : 'verified-solid'})]`
                : i === 0
                  ? 'text-[var(--stone)]'
                  : 'text-[var(--body)]'
            }
          >
            {step}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export function Problem() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="thesis"
        title="The UI probably already exists."
        description="Agents lack a structured way to find and evaluate it before generating code from nothing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6 border-b border-[var(--line)] bg-[var(--surface-soft)] px-5 py-6 sm:px-8 sm:py-8 md:border-b-0 md:border-r md:px-10">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-[var(--mute)]">WITHOUT TESSERA</span>
            <span className="text-[var(--danger-solid)]">[generate from memory]</span>
          </div>
          <Flow steps={WITHOUT} accent="danger" />
        </div>

        <div className="space-y-6 bg-[var(--verified-soft)] px-5 py-6 sm:px-8 sm:py-8 md:px-10">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-[var(--ink)]">WITH TESSERA</span>
            <span className="text-[var(--verified-solid)]">[search, then adapt]</span>
          </div>
          <Flow steps={WITH} accent="success" />
        </div>
      </div>
    </div>
  );
}
