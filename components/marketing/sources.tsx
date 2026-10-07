import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SOURCES, TOTAL_COMPONENTS, TOTAL_SOURCES } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function Sources() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="sources"
        title="One index. Multiple libraries."
        description={`Tessera indexes ${TOTAL_COMPONENTS} production-grade components across ${TOTAL_SOURCES} open-source libraries. Components are indexed with verified licensing metadata and upstream retrieval descriptors.`}
        aside={
          <div className="text-xs text-[var(--mute)]">
            <span className="font-semibold text-[var(--ink)]">{TOTAL_COMPONENTS}</span> components indexed
          </div>
        }
      />

      {/* ASCII mini routing visual */}
      <div className="p-6 md:p-8 bg-[var(--surface-soft)] border-b border-[var(--line)] overflow-x-auto">
        <div className="font-mono text-xs text-[var(--body)] whitespace-pre leading-relaxed">
{`aceternity ui ──┐
beui ───────────┤
efferd ─────────┼──> tessera local index ──> coding agent
magic ui ───────┤     (${TOTAL_COMPONENTS} components)
heroui ─────────┘`}
        </div>
      </div>

      {/* Semantic Table of Supported Sources */}
      <Table className="text-xs md:text-sm">
        <TableCaption className="sr-only">Indexed sources with component counts, retrieval method, and focus</TableCaption>
        <TableHeader>
          <TableRow className="border-[var(--line)] bg-[var(--canvas)] text-[var(--mute)] hover:bg-transparent">
            <TableHead className="py-3 px-5 sm:px-8 md:px-10">SOURCE</TableHead>
            <TableHead className="py-3 px-4 text-right">COMPONENTS</TableHead>
            <TableHead className="py-3 px-4">RETRIEVAL METHOD</TableHead>
            <TableHead className="py-3 px-5 sm:px-8 md:px-10 hidden sm:table-cell">
              FOCUS / CHARACTER
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[var(--canvas)]">
          {SOURCES.map((source) => (
            <TableRow
              key={source.name}
              className="border-[var(--line)] text-[var(--ink)]"
            >
              <TableCell className="py-3.5 px-5 sm:px-8 md:px-10 font-semibold">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 group"
                >
                  <span className="link-sweep">{source.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-[var(--mute)] transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-[1px] motion-safe:group-hover:-translate-y-[1px]" aria-hidden="true" />
                </a>
              </TableCell>
              <TableCell className="py-3.5 px-4 text-right tabular-nums font-semibold text-[var(--ink)]">
                {source.components}
              </TableCell>
              <TableCell className="py-3.5 px-4 text-[var(--mute)]">
                <Badge
                  variant="muted"
                  className="border-[var(--line)] text-[var(--body)] text-xs"
                >
                  {source.retrieval}
                </Badge>
              </TableCell>
              <TableCell className="py-3.5 px-5 sm:px-8 md:px-10 text-xs text-[var(--stone)] hidden sm:table-cell">
                {source.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="border-[var(--line-strong)] bg-[var(--surface-soft)] font-bold text-[var(--ink)]">
          <TableRow className="border-[var(--line-strong)] hover:bg-transparent">
            <TableCell className="py-3.5 px-5 sm:px-8 md:px-10">TOTAL INDEXED</TableCell>
            <TableCell className="py-3.5 px-4 text-right tabular-nums text-sm">
              {TOTAL_COMPONENTS}
            </TableCell>
            <TableCell className="py-3.5 px-4 text-xs text-[var(--mute)]" colSpan={2}>
              across {TOTAL_SOURCES} libraries
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Mandatory legal and non-affiliation notice */}
      <div className="p-4 md:px-8 border-t border-[var(--line)] bg-[var(--surface-soft)] text-xs">
        <a href="/catalog" className="link-sweep font-bold text-[var(--ink)]">
          Browse all {TOTAL_COMPONENTS} →
        </a>
      </div>
      <div className="p-4 md:px-8 border-t border-[var(--line)] bg-[var(--canvas)] text-xs text-[var(--stone)]">
        <strong>Notice:</strong> Tessera indexes metadata and retrieval mechanisms. Tessera is an independent open-source project and is not affiliated with, sponsored by, or endorsed by Aceternity UI, beUI, Efferd, Magic UI, or HeroUI.
      </div>
    </div>
  );
}
