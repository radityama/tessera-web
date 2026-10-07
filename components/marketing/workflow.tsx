import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PanelHeader } from '@/components/layout/panel';
import { WorkflowSequence } from './workflow-sequence';

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

      {/* 5-cell pipeline with a one-time sweep line (see workflow-sequence.tsx) */}
      <WorkflowSequence />
    </div>
  );
}
