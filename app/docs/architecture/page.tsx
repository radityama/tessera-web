import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { TOTAL_COMPONENTS } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { DocsPager } from '@/components/layout/docs-pager';

export const metadata: Metadata = {
  title: 'Architecture',
  description:
    'Tessera system architecture: skill, MCP/CLI, retrieval core, unified registry, and adapters.',
  alternates: { canonical: `${siteConfig.url}/docs/architecture` },
};

const LAYERS: [string, string][] = [
  [
    'agent skill',
    'Adaptation and cohesion rules. Reads project tokens, judges candidates against the page language, rejects on license or design conflict, and normalises everything retrieved.',
  ],
  [
    'MCP / CLI',
    'Two interfaces over one core. The MCP server speaks JSON-RPC 2.0 over stdio for agents; the CLI serves developers in the terminal. Neither contains ranking logic.',
  ],
  [
    'retrieval core',
    'Deterministic BM25-style lexical ranking with category and aesthetic weighting, filters, similar-component lookup, and pattern search. No embeddings, no vector store, no network.',
  ],
  [
    'unified registry',
    `Schema v2 records: names, descriptions, categories, dependencies, licenses with evidence, and upstream URLs for ${TOTAL_COMPONENTS} indexed components. Pinned snapshots keep every install reproducible.`,
  ],
  [
    'adapters',
    'One adapter per provider kind. The shadcn adapter resolves registry item URLs; the npm adapter resolves package tarballs. Future registries plug in without touching the core.',
  ],
];

export default function ArchitectureDocsPage() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="docs / architecture"
        title="System architecture."
        description="One unified retrieval core powers both the stdio MCP server for agents and the interactive CLI for developers."
      />
      <div className="p-6 md:p-8 border-b border-[var(--line)] overflow-x-auto">
        <pre className="font-mono text-xs md:text-sm text-[var(--ink)] leading-relaxed mx-auto text-left w-max">
          {`                    coding agent (claude code / cursor / codex)
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
      efferd / magicui`}
        </pre>
      </div>
      <div className="border-b border-[var(--line)] px-5 sm:px-8 py-2 bg-[var(--surface-soft)] text-xs text-[var(--mute)]">
        Fig. 01 — One retrieval core, multiple interfaces. Deterministic registry with modular library adapters.
      </div>
      <div className="px-5 sm:px-8 py-6 space-y-6">
        {LAYERS.map(([title, body], i) => (
          <section key={title} className="space-y-2">
            <h2 className="text-sm font-bold text-[var(--ink)]">
              [{String(i + 1).padStart(2, '0')}] {title}
            </h2>
            <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed max-w-2xl">{body}</p>
          </section>
        ))}
      </div>
      <DocsPager />
    </div>
  );
}
