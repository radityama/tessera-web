import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { TOTAL_COMPONENTS } from '@/lib/constants';

export function Architecture() {
  const asciiDiagram = `                    coding agent (claude code / cursor / codex)
                                 │
                           agent skill (adaptation & cohesion rules)
                                 │
                       ┌─────────┴─────────┐
                       │                   │
                      MCP                 CLI
                   (stdio)             (terminal)
                       │                   │
                       └─────────┬─────────┘
                                 │
                          retrieval core
                    (deterministic ranking & filtering)
                                 │
                          unified registry
                      (${TOTAL_COMPONENTS} indexed components)
                                 │
            ┌────────────────────┼────────────────────┐
            │                    │                    │
     shadcn adapter        npm adapter         custom adapter
            │                    │                    │
    aceternity / beui     heroui package         future registries
     efferd / magicui`;

  return (
    <div className="w-full">
      <PanelHeader
        kicker="architecture"
        title="System architecture."
        description="One unified retrieval core powers both the stdio Model Context Protocol (MCP) server for automated agents and the interactive CLI for developers."
      />

      {/* Full-width Diagram Pane */}
      <div className="p-6 md:p-10 bg-[var(--canvas)] overflow-x-auto">
        <pre className="font-mono text-xs md:text-sm text-[var(--ink)] leading-relaxed mx-auto text-left w-max">
          {asciiDiagram}
        </pre>
      </div>

      {/* Structured Caption Bar */}
      <div className="border-t border-[var(--line)] px-6 md:px-8 py-3 bg-[var(--surface-soft)] text-xs font-mono text-[var(--mute)]">
        Fig. 01 — One retrieval core, multiple interfaces. Deterministic registry with modular library adapters.
      </div>
    </div>
  );
}
