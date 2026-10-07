import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { Badge } from '@/components/ui/badge';
import { LOCAL_OPERATIONS } from '@/lib/constants';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function LocalFirst() {
  const operations = LOCAL_OPERATIONS;

  return (
    <div className="w-full">
      <PanelHeader
        kicker="local-first"
        title="Search stays local."
        description="Search should not require sending your prompt to another service. Tessera packages the entire registry directly inside the CLI package."
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
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            There is no signup, authentication token, or hosted endpoint. You run it immediately via npx.
          </p>
        </div>
        <div className="p-6 md:p-8 space-y-2 bg-[var(--surface-soft)]">
          <div className="text-xs font-bold text-[var(--ink)]">[+] Deterministic local index</div>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Every agent and developer running v0.1.0 receives the exact same lexical ranking scores and metadata.
          </p>
        </div>
        <div className="p-6 md:p-8 space-y-2 bg-[var(--surface-soft)]">
          <div className="text-xs font-bold text-[var(--ink)]">[+] Zero background telemetry</div>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Your query terms, component lookups, and project configurations are never logged or sent to any server.
          </p>
        </div>
      </div>

      {/* Operations matrix table */}
      <Table>
        <TableHeader>
          <TableRow className="bg-[var(--canvas)] text-[var(--mute)] hover:bg-transparent">
            <TableHead className="py-3 px-5 sm:px-8 md:px-10">OPERATION</TableHead>
            <TableHead className="py-3 px-4">EXECUTION CONTEXT</TableHead>
            <TableHead className="py-3 px-5 sm:px-8 md:px-10">BEHAVIOR</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[var(--canvas)]">
          {operations.map((op) => (
            <TableRow key={op.operation}>
              <TableCell className="py-3 px-5 sm:px-8 md:px-10 font-semibold text-[var(--ink)]">
                {op.operation}
              </TableCell>
              <TableCell className="py-3 px-4">
                <Badge variant={op.network === 'local' ? 'muted' : 'accent'}>
                  [{op.network}]
                </Badge>
              </TableCell>
              <TableCell className="py-3 px-5 sm:px-8 md:px-10 text-xs text-[var(--stone)]">
                {op.detail}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="border-t border-[var(--line)] px-5 sm:px-8 md:px-10 py-3 bg-[var(--surface-soft)] text-[11px] text-[var(--mute)]">
        Local operations run fully offline with no network round-trips. End-to-end wall-clock time is dominated by
        Node.js startup (about 2.5s via npx on the maintainer machine, Fedora / Node 22); no per-operation latency
        is claimed until it is measured with a pinned benchmark.
      </div>
    </div>
  );
}
