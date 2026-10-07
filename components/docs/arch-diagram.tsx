import React from 'react';

function Node({ label, sub, accent }: { label: string; sub?: string; accent?: boolean }) {
  return (
    <div
      className={`mx-auto w-full max-w-md rounded-[4px] border px-4 py-2.5 text-center ${
        accent
          ? 'border-[var(--match-border)] bg-[var(--match-soft)]'
          : 'border-[var(--line)] bg-[var(--surface-soft)]'
      }`}
    >
      <div className="font-mono text-xs font-bold text-[var(--ink)]">{label}</div>
      {sub && <div className="mt-0.5 font-mono text-xs text-[var(--mute)]">{sub}</div>}
    </div>
  );
}

function Arrow() {
  return (
    <div className="select-none py-1 text-center font-mono text-sm text-[var(--mute)]" aria-hidden="true">
      ↓
    </div>
  );
}

export function ArchDiagram() {
  return (
    <figure className="my-6 rounded-[4px] border border-[var(--line)] bg-[var(--canvas)] px-4 py-5 sm:px-6">
      <div role="img" aria-label="Flow diagram: coding agent, agent skill, MCP and CLI interfaces, retrieval core, unified registry, then shadcn, npm, and custom adapters.">
        <Node label="coding agent" sub="claude code / cursor / codex" />
        <Arrow />
        <Node label="agent skill" sub="adaptation and cohesion rules" />
        <Arrow />
        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-2">
          <Node label="MCP" sub="stdio" />
          <Node label="CLI" sub="terminal" />
        </div>
        <Arrow />
        <Node label="retrieval core" sub="deterministic ranking and filtering" accent />
        <Arrow />
        <Node label="unified registry" sub="73 indexed components" />
        <Arrow />
        <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-2 sm:grid-cols-3">
          <Node label="shadcn adapter" sub="aceternity / beui / efferd / magicui" />
          <Node label="npm adapter" sub="heroui package" />
          <Node label="custom adapter" sub="future registries" />
        </div>
      </div>
      <details className="mx-auto mt-4 max-w-md">
        <summary className="cursor-pointer font-mono text-xs text-[var(--mute)]">
          text alternative
        </summary>
        <pre className="mt-2 overflow-x-auto whitespace-pre font-mono text-xs leading-relaxed text-[var(--body)]">
{`coding agent
    ↓
agent skill
    ↓
MCP + CLI
    ↓
retrieval core
    ↓
unified registry
    ↓
shadcn | npm | custom adapters`}
        </pre>
      </details>
    </figure>
  );
}
