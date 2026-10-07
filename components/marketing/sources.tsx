import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SOURCES, TOTAL_COMPONENTS, TOTAL_SOURCES } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';

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
magic ui ───────┤     (73 components)
heroui ─────────┘`}
        </div>
      </div>

      {/* Semantic Table of Supported Sources */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs md:text-sm font-mono">
          <thead>
            <tr className="border-b border-[var(--line)] bg-[var(--canvas)] text-[var(--mute)]">
              <th className="py-3 px-6 md:px-8 font-medium">SOURCE</th>
              <th className="py-3 px-4 font-medium text-right">COMPONENTS</th>
              <th className="py-3 px-4 font-medium">RETRIEVAL METHOD</th>
              <th className="py-3 px-6 md:px-8 font-medium hidden sm:table-cell">FOCUS / CHARACTER</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--line)] bg-[var(--canvas)]">
            {SOURCES.map((source) => (
              <tr
                key={source.name}
                className="hover:bg-[var(--surface-soft)] transition-colors text-[var(--ink)]"
              >
                <td className="py-3.5 px-6 md:px-8 font-semibold">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>{source.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" aria-hidden="true" />
                  </a>
                </td>
                <td className="py-3.5 px-4 text-right tabular-nums font-semibold text-[var(--ink)]">
                  {source.components}
                </td>
                <td className="py-3.5 px-4 text-[var(--mute)]">
                  <span className="inline-block border border-[var(--line)] px-2 py-0.5 rounded-[4px] bg-[var(--surface-soft)] text-xs text-[var(--body)]">
                    {source.retrieval}
                  </span>
                </td>
                <td className="py-3.5 px-6 md:px-8 text-xs text-[var(--stone)] hidden sm:table-cell">
                  {source.description}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-[var(--line-strong)] bg-[var(--surface-soft)] font-bold text-[var(--ink)]">
              <td className="py-3.5 px-6 md:px-8">TOTAL INDEXED</td>
              <td className="py-3.5 px-4 text-right tabular-nums text-sm">
                {TOTAL_COMPONENTS}
              </td>
              <td className="py-3.5 px-4 text-xs text-[var(--mute)]" colSpan={2}>
                across {TOTAL_SOURCES} libraries
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Mandatory legal and non-affiliation notice */}
      <div className="p-4 md:px-8 border-t border-[var(--line)] bg-[var(--canvas)] text-[11px] text-[var(--stone)]">
        <strong>Notice:</strong> Tessera indexes metadata and retrieval mechanisms. Tessera is an independent open-source project and is not affiliated with, sponsored by, or endorsed by Aceternity UI, beUI, Efferd, Magic UI, or HeroUI.
      </div>
    </div>
  );
}
