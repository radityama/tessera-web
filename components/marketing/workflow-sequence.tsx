'use client';

import React, { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { WORKFLOW_STAGES } from '@/lib/constants';

export function WorkflowSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: '-80px' });
  const [played, setPlayed] = useState(false);

  if (inView && !played) setPlayed(true);

  return (
    <div ref={rootRef} className="relative">
      {/* Sweep line: horizontal on lg, vertical below lg. Transform/opacity only. */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 left-0 h-px bg-[var(--ink)] w-full origin-left motion-safe:transition-transform motion-safe:duration-[600ms] motion-safe:ease-out"
        style={{ transform: played ? 'scaleX(1)' : 'scaleX(0)' }}
      />
      <div
        aria-hidden="true"
        className="lg:hidden absolute top-0 left-0 w-px bg-[var(--ink)] h-full origin-top motion-safe:transition-transform motion-safe:duration-[600ms] motion-safe:ease-out"
        style={{ transform: played ? 'scaleY(1)' : 'scaleY(0)' }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-[var(--line)]">
        {WORKFLOW_STAGES.map((stage, i) => (
          <div
            key={stage.number}
            className="px-5 sm:px-8 md:px-10 py-6 flex flex-col justify-between space-y-4 bg-[var(--canvas)]"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-bold motion-safe:transition-colors motion-safe:duration-200 motion-safe:ease-out text-[var(--mute)]"
                  style={played ? { color: 'var(--ink)', transitionDelay: `${i * 120}ms` } : undefined}
                >
                  {stage.number}
                </span>
                <span className="text-xs font-semibold text-[var(--ink)] tracking-wider">
                  {stage.name}
                </span>
              </div>
              <h3 className="text-xs font-bold text-[var(--ink)] leading-snug">
                {stage.summary}
              </h3>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
                {stage.detail}
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--line)] text-xs text-[var(--mute)] font-mono break-words whitespace-normal">
              $ {stage.action}
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">
        Workflow stages: search, inspect, retrieve, adapt, cohesion.
      </span>
    </div>
  );
}
