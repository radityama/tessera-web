import React from 'react';
import { PanelHeader } from '@/components/layout/panel';

export function LocalFirst() {
  const operations = [
    {
      operation: 'tessera search',
      network: 'local',
      latency: '< 4ms',
      detail: 'Indexed metadata is compiled directly into the CLI package. Queries evaluate offline with zero outbound packets.',
    },
    {
      operation: 'tessera inspect',
      network: 'local',
      latency: '< 2ms',
      detail: 'Resolves dependency graph, ranking criteria, and license attributes from the embedded index.',
    },
    {
      operation: 'tessera similar',
      network: 'local',
      latency: '< 3ms',
      detail: 'Computes nearest component neighbors across alternate sources using deterministic lexical scoring.',
    },
    {
      operation: 'tessera fetch',
      network: 'network (explicit)',
      latency: '~ 150ms',
      detail: 'Transfers upstream code files directly from shadcn registry hosts or npm. Occurs only when explicitly called.',
    },
    {
      operation: 'tessera add --dry-run',
      network: 'local',
      latency: '< 5ms',
      detail: 'Simulates package installation and output directory writes without touching disks or executing scripts.',
    },
  ];

  return (
    <div className="w-full">
      <PanelHeader
        kicker="local-first"
        title="Search stays local."
        description="Search should not require sending your prompt to another service. Tessera packages the entire registry directly inside the CLI binary."
        aside={
          <div className="text-xs text-[var(--mute)]">
            <span>zero telemetry · zero accounts</span>
          </div>
        }
      />

      {/* Grid of guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-[var(--hairline)]">
        <div className="p-6 md:p-8 space-y-2 bg-[var(--surface-soft)]">
          <div className="text-xs font-bold text-[var(--ink)]">[+] No account or API keys</div>
          <p className="text-xs text-[var(--body)] leading-relaxed">
            There is no signup, authentication token, or hosted endpoint. You run it immediately via npx.
          </p>
        </div>
        <div className="p-6 md:p-8 space-y-2 bg-[var(--surface-soft)]">
          <div className="text-xs font-bold text-[var(--ink)]">[+] Deterministic local index</div>
          <p className="text-xs text-[var(--body)] leading-relaxed">
            Every agent and developer running v0.1.0 receives the exact same lexical ranking scores and metadata.
          </p>
        </div>
        <div className="p-6 md:p-8 space-y-2 bg-[var(--surface-soft)]">
          <div className="text-xs font-bold text-[var(--ink)]">[+] Zero background telemetry</div>
          <p className="text-xs text-[var(--body)] leading-relaxed">
            Your query terms, component lookups, and project configurations are never logged or sent to any server.
          </p>
        </div>
      </div>

      {/* Operations matrix table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="border-b border-[var(--hairline)] bg-[var(--canvas)] text-[var(--mute)]">
              <th className="py-3 px-6 md:px-8 font-medium">OPERATION</th>
              <th className="py-3 px-4 font-medium">EXECUTION CONTEXT</th>
              <th className="py-3 px-4 font-medium">LOCAL LATENCY</th>
              <th className="py-3 px-6 md:px-8 font-medium">BEHAVIOR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
            {operations.map((op) => (
              <tr key={op.operation} className="hover:bg-[var(--surface-soft)] transition-colors">
                <td className="py-3 px-6 md:px-8 font-semibold text-[var(--ink)]">
                  {op.operation}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-block border px-2 py-0.5 rounded-[4px] text-[11px] ${
                      op.network === 'local'
                        ? 'text-[var(--ink)] bg-[var(--surface-soft)] border-[var(--hairline)]'
                        : 'text-[var(--accent)] bg-[#ebf5ff] border-[var(--accent)]'
                    }`}
                  >
                    [{op.network}]
                  </span>
                </td>
                <td className="py-3 px-4 tabular-nums text-[var(--mute)]">
                  {op.latency}
                </td>
                <td className="py-3 px-6 md:px-8 text-xs text-[var(--stone)]">
                  {op.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
