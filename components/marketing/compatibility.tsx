import React from 'react';
import { ShieldCheck, FileCode, Cpu } from 'lucide-react';
import { AGENT_HARNESSES, VerificationStatus } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function Compatibility({ limit }: { limit?: number }) {
  const rows = limit ? AGENT_HARNESSES.slice(0, limit) : AGENT_HARNESSES;
  const getBadgeVariant = (status: VerificationStatus) => {
    switch (status) {
      case 'runtime verified':
        return 'success';
      case 'config verified':
        return 'muted';
      case 'protocol verified':
        return 'accent';
    }
  };

  const getBadgeIcon = (status: VerificationStatus) => {
    switch (status) {
      case 'runtime verified':
        return <ShieldCheck className="w-3 h-3 text-[var(--success-text)] shrink-0" aria-hidden="true" />;
      case 'config verified':
        return <FileCode className="w-3 h-3 text-[var(--mute)] shrink-0" aria-hidden="true" />;
      case 'protocol verified':
        return <Cpu className="w-3 h-3 text-[var(--accent-text)] shrink-0" aria-hidden="true" />;
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
            <span className="text-[var(--success-text)] font-medium">
              {AGENT_HARNESSES.filter((h) => h.status === 'runtime verified').length} runtime
            </span>{' '}
            ·{' '}
            <span className="text-[var(--stone)]">
              {AGENT_HARNESSES.filter((h) => h.status === 'config verified').length} config
            </span>{' '}
            ·{' '}
            <span className="text-[var(--accent-text)]">
              {AGENT_HARNESSES.filter((h) => h.status === 'protocol verified').length} protocol
            </span>
          </div>
        }
      />

      <Table>
        <TableCaption className="sr-only">Agent harnesses with verification level and evidence notes</TableCaption>
        <TableHeader>
          <TableRow className="bg-[var(--canvas)] text-[var(--mute)] hover:bg-transparent">
            <TableHead className="py-3 px-5 sm:px-8 md:px-10">HARNESS / ENVIRONMENT</TableHead>
            <TableHead className="py-3 px-4">VERIFICATION LEVEL</TableHead>
            <TableHead className="py-3 px-5 sm:px-8 md:px-10">VERIFICATION EVIDENCE & NOTES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[var(--canvas)]">
          {rows.map((harness) => (
            <TableRow key={harness.name}>
              <TableCell className="py-3.5 px-5 sm:px-8 md:px-10 font-semibold">
                {harness.name}
              </TableCell>
              <TableCell className="py-3.5 px-4 whitespace-nowrap">
                <Badge
                  variant={getBadgeVariant(harness.status)}
                  className={
                    harness.status === 'config verified'
                      ? 'border-[var(--hairline-strong)]'
                      : undefined
                  }
                >
                  {getBadgeIcon(harness.status)}
                  <span>[{harness.status}]</span>
                </Badge>
              </TableCell>
              <TableCell className="py-3.5 px-5 sm:px-8 md:px-10 text-xs text-[var(--stone)]">
                {harness.notes}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="p-4 md:px-8 border-t border-[var(--hairline)] bg-[var(--surface-soft)] text-xs text-[var(--stone)]">
        <strong>Verification criteria:</strong> <em>Runtime verified</em> means live agent execution and test task completion were validated. <em>Config verified</em> means tool configurations and MCP definitions match vendor guidelines. <em>Protocol verified</em> means the server passes Model Context Protocol JSON-RPC specification tests.
        {limit && AGENT_HARNESSES.length > limit ? (
          <span>
            {' '}
            <a href="/docs/integrations" className="link-sweep font-bold text-[var(--ink)]">
              all {AGENT_HARNESSES.length} harnesses →
            </a>
          </span>
        ) : null}
      </div>
    </div>
  );
}
