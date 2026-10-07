import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WORKFLOW_STAGES } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';

export function Workflow() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="workflow"
        title="From prompt to reusable source."
        description="A deterministic five-step retrieval pipeline designed specifically for coding agents."
        aside={
          <div className="text-xs text-[var(--mute)] font-mono flex items-center flex-wrap gap-1">
            <span>query</span>
            <ArrowRight className="w-3 h-3 text-[var(--ash)]" aria-hidden="true" />
            <span>search</span>
            <ArrowRight className="w-3 h-3 text-[var(--ash)]" aria-hidden="true" />
            <span>inspect</span>
            <ArrowRight className="w-3 h-3 text-[var(--ash)]" aria-hidden="true" />
            <span>retrieve</span>
            <ArrowRight className="w-3 h-3 text-[var(--ash)]" aria-hidden="true" />
            <span>adapt</span>
            <ArrowRight className="w-3 h-3 text-[var(--ash)]" aria-hidden="true" />
            <span>cohesion</span>
          </div>
        }
      />

      {/* 5-cell horizontal pipeline on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[var(--line)]">
        {WORKFLOW_STAGES.map((stage) => (
          <div
            key={stage.number}
            className="p-5 md:p-6 flex flex-col justify-between space-y-4 bg-[var(--canvas)] hover:bg-[var(--surface-soft)] transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--mute)]">
                  {stage.number}
                </span>
                <span className="text-[11px] font-semibold text-[var(--ink)] tracking-wider">
                  {stage.name}
                </span>
              </div>
              <h3 className="text-xs font-bold text-[var(--ink)] leading-snug">
                {stage.summary}
              </h3>
              <p className="text-xs text-[var(--body)] leading-relaxed">
                {stage.detail}
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--line)] text-[11px] text-[var(--mute)] font-mono break-words whitespace-normal">
              $ {stage.action}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
