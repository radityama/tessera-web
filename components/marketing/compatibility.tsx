import React from 'react';
import { ShieldCheck, FileCode, Cpu } from 'lucide-react';
import { AGENT_HARNESSES, VerificationStatus } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';

export function Compatibility() {
  const getBadgeStyle = (status: VerificationStatus) => {
    switch (status) {
      case 'runtime verified':
        return 'text-[var(--success)] border-[var(--success)] bg-[#eafaf1]';
      case 'config verified':
        return 'text-[var(--ink)] border-[var(--hairline-strong)] bg-[var(--surface-soft)]';
      case 'protocol verified':
        return 'text-[var(--accent)] border-[var(--accent)] bg-[#ebf5ff]';
    }
  };

  const getBadgeIcon = (status: VerificationStatus) => {
    switch (status) {
      case 'runtime verified':
        return <ShieldCheck className="w-3 h-3 text-[var(--success)] shrink-0" aria-hidden="true" />;
      case 'config verified':
        return <FileCode className="w-3 h-3 text-[var(--mute)] shrink-0" aria-hidden="true" />;
      case 'protocol verified':
        return <Cpu className="w-3 h-3 text-[var(--accent)] shrink-0" aria-hidden="true" />;
    }
  };

  return (
    <div className="w-full">
      <PanelHeader
        kicker="compatibility"
        title="Built around the tools agents already use."
        description="We differentiate between runtime verification and configuration verification. We do not claim an integration has passed end-to-end execution until it has been tested under real workload harnesses."
        aside={
          <div className="text-xs text-[var(--mute)]">
            <span>status transparency: </span>
            <span className="text-[var(--success)] font-medium">1 runtime</span> ·{' '}
            <span className="text-[var(--stone)]">10 config</span> ·{' '}
            <span className="text-[var(--accent)]">1 protocol</span>
          </div>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-mono">
          <thead>
            <tr className="border-b border-[var(--hairline)] bg-[var(--canvas)] text-[var(--mute)]">
              <th className="py-3 px-6 md:px-8 font-medium">HARNESS / ENVIRONMENT</th>
              <th className="py-3 px-4 font-medium">VERIFICATION LEVEL</th>
              <th className="py-3 px-6 md:px-8 font-medium">VERIFICATION EVIDENCE & NOTES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
            {AGENT_HARNESSES.map((harness) => (
              <tr
                key={harness.name}
                className="hover:bg-[var(--surface-soft)] transition-colors text-[var(--ink)]"
              >
                <td className="py-3.5 px-6 md:px-8 font-semibold">
                  {harness.name}
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center gap-1.5 border px-2 py-0.5 rounded-[4px] text-[11px] font-medium ${getBadgeStyle(
                      harness.status
                    )}`}
                  >
                    {getBadgeIcon(harness.status)}
                    <span>[{harness.status}]</span>
                  </span>
                </td>
                <td className="py-3.5 px-6 md:px-8 text-xs text-[var(--stone)]">
                  {harness.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 md:px-8 border-t border-[var(--hairline)] bg-[var(--surface-soft)] text-[11px] text-[var(--stone)]">
        <strong>Verification criteria:</strong> <em>Runtime verified</em> means live agent execution and test task completion were validated. <em>Config verified</em> means tool configurations and MCP definitions match vendor guidelines. <em>Protocol verified</em> means the server passes Model Context Protocol JSON-RPC specification tests.
      </div>
    </div>
  );
}
