import React from 'react';
import { ShieldCheck, FileCode, Cpu } from 'lucide-react';
import { INTEGRATIONS } from '@/lib/integrations';
import { PanelHeader } from '@/components/layout/panel';

const STATUS_STYLE = {
  'runtime verified': {
    label: 'runtime verified',
    chip: 'border-[var(--verified-border)] bg-[var(--verified-soft)] text-[var(--verified-solid)]',
    rule: 'bg-[var(--verified-border)]',
    icon: <ShieldCheck className="h-3 w-3 shrink-0" aria-hidden="true" />,
  },
  'config verified': {
    label: 'config verified',
    chip: 'border-[var(--caution-border)] bg-[var(--caution-soft)] text-[var(--caution-solid)]',
    rule: 'bg-[var(--caution-border)]',
    icon: <FileCode className="h-3 w-3 shrink-0" aria-hidden="true" />,
  },
  'protocol verified': {
    label: 'protocol verified',
    chip: 'border-[var(--primary-border)] bg-[var(--primary-soft)] text-[var(--primary-solid)]',
    rule: 'bg-[var(--primary-border)]',
    icon: <Cpu className="h-3 w-3 shrink-0" aria-hidden="true" />,
  },
} as const;

export function Compatibility() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="compatibility"
        title="Use Tessera where your agent already works."
        description="One runtime-verified harness, ten config-verified, one protocol-verified. The levels are not equivalent."
        aside={
          <a href="/docs/integrations" className="link-sweep text-xs font-bold text-[var(--ink)]">
            all harnesses →
          </a>
        }
      />

      <ul className="grid grid-cols-1 gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
        {INTEGRATIONS.map((integration) => {
          const style = STATUS_STYLE[integration.status];
          return (
            <li key={integration.slug} className="bg-[var(--canvas)]">
              <span className={`block h-0.5 w-full ${style.rule}`} aria-hidden="true" />
              <div className="space-y-2 px-4 py-3.5">
                <div className="font-mono text-xs font-bold text-[var(--ink)]">
                  {integration.name}
                </div>
                <span className={`inline-flex items-center gap-1.5 rounded-[4px] border px-2 py-0.5 font-mono text-xs font-medium ${style.chip}`}>
                  {style.icon}
                  <span>[{style.label}]</span>
                </span>
                <p className="text-xs leading-relaxed text-[var(--stone)]">
                  {integration.note ?? integration.configPath}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 text-xs text-[var(--stone)] sm:px-8 md:px-10">
        Runtime verified means live execution was observed. Config verified
        means the setup matches vendor docs but was not run here.{' '}
        <a href="/docs/integrations" className="link-sweep font-bold text-[var(--ink)]">
          verification detail →
        </a>
      </div>
    </div>
  );
}
