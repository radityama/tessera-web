import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
      <Table>
        <TableHeader>
          <TableRow className="bg-[var(--canvas)] text-[var(--mute)] hover:bg-transparent">
            <TableHead className="py-3 px-6 md:px-8">OPERATION</TableHead>
            <TableHead className="py-3 px-4">EXECUTION CONTEXT</TableHead>
            <TableHead className="py-3 px-4">LOCAL LATENCY</TableHead>
            <TableHead className="py-3 px-6 md:px-8">BEHAVIOR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[var(--canvas)]">
          {operations.map((op) => (
            <TableRow key={op.operation}>
              <TableCell className="py-3 px-6 md:px-8 font-semibold text-[var(--ink)]">
                {op.operation}
              </TableCell>
              <TableCell className="py-3 px-4">
                <Badge variant={op.network === 'local' ? 'muted' : 'accent'}>
                  [{op.network}]
                </Badge>
              </TableCell>
              <TableCell className="py-3 px-4 tabular-nums text-[var(--mute)]">
                {op.latency}
              </TableCell>
              <TableCell className="py-3 px-6 md:px-8 text-xs text-[var(--stone)]">
                {op.detail}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
