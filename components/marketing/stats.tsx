import React from 'react';
import { TOTAL_COMPONENTS, TOTAL_SOURCES, MCP_TOOLS, AGENT_HARNESSES } from '@/lib/constants';

export function Stats() {
  const stats = [
    {
      value: TOTAL_COMPONENTS,
      label: 'components indexed',
      detail: 'Curated primitives with license & dependency manifests',
    },
    {
      value: TOTAL_SOURCES,
      label: 'upstream sources',
      detail: 'Indexed registries and npm packages',
    },
    {
      value: MCP_TOOLS.length,
      label: 'MCP server tools',
      detail: 'Model Context Protocol endpoints over stdio',
    },
    {
      value: AGENT_HARNESSES.length,
      label: 'documented harnesses',
      detail: 'Coding agent environments with verified setups',
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[var(--canvas)]">
        {stats.map((stat, index) => {
          const borderClasses =
            index === 0
              ? 'border-r border-b md:border-b-0 border-[var(--line)]'
              : index === 1
              ? 'border-b md:border-b-0 md:border-r border-[var(--line)]'
              : index === 2
              ? 'border-r border-[var(--line)]'
              : '';

          return (
            <div
              key={stat.label}
              className={`p-6 md:p-8 space-y-2 hover:bg-[var(--surface-soft)] transition-colors ${borderClasses}`}
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)] tabular-nums font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-[var(--ink)]">
                {stat.label}
              </div>
              <p className="text-[11px] text-[var(--stone)] leading-relaxed">
                {stat.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
