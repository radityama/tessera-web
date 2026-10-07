'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PanelHeader } from '@/components/layout/panel';

// Real excerpt: magicui/terminal frame (MIT, https://magicui.design/r/terminal.json).
// Retrieved with `tessera fetch magicui/terminal --output ./vendor` (7716 bytes).
const UPSTREAM = `<div
  ref={containerRef}
  className={cn(
    "border-border bg-background z-0 h-full max-h-100 w-full max-w-lg rounded-xl border",
    className
  )}
>
  <div className="border-border flex flex-col gap-y-2 border-b p-4">
    <div className="flex flex-row gap-x-2">
      <div className="h-2 w-2 rounded-full bg-red-500"></div>
      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
      <div className="h-2 w-2 rounded-full bg-green-500"></div>
    </div>
  </div>
  <pre className="p-4">
    <code className="grid gap-y-1 overflow-auto">{wrappedChildren}</code>
  </pre>
</div>`;

const ADAPTED = `<div
  ref={containerRef}
  className={cn(
    "z-0 h-full w-full max-w-lg rounded-[4px] border border-[var(--line)] bg-[var(--canvas)]",
    className
  )}
>
  <div className="flex flex-col gap-2 border-b border-[var(--line)] px-3 py-2">
    <div className="flex flex-row gap-1.5" aria-hidden="true">
      <div className="h-2 w-2 bg-[var(--mute)]"></div>
      <div className="h-2 w-2 bg-[var(--mute)]"></div>
      <div className="h-2 w-2 bg-[var(--mute)]"></div>
    </div>
  </div>
  <pre className="px-3 py-2">
    <code className="grid gap-y-1 overflow-auto">{wrappedChildren}</code>
  </pre>
</div>`;

export function Composition() {
  const [view, setView] = useState<'upstream' | 'adapted'>('upstream');

  return (
    <div className="w-full">
      <PanelHeader
        kicker="composition"
        title="Reuse composition, not identity."
        description="The same retrieved component — magicui/terminal (MIT) — first with its original third-party classes, then adapted to project tokens. Structure survives; identity does not."
        aside={
          <div className="flex items-center gap-1.5 text-xs" role="tablist" aria-label="Code view">
            {(['upstream', 'adapted'] as const).map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={view === v}
                type="button"
                onClick={() => setView(v)}
                className={`px-2.5 py-1 rounded-[4px] border text-xs cursor-pointer motion-safe:active:scale-[0.97] transition-[color,background-color,border-color,transform] duration-150 ease-out ${
                  view === v
                    ? 'bg-[var(--ink)] text-[var(--canvas)] border-[var(--ink)]'
                    : 'bg-[var(--canvas)] text-[var(--body)] border-[var(--line)] hover:text-[var(--ink)]'
                }`}
              >
                [{v}]
              </button>
            ))}
          </div>
        }
      />

      <div className="border-b border-[var(--line)] px-5 sm:px-8 md:px-10 py-5 bg-[var(--canvas)] overflow-x-auto">
        <AnimatePresence mode="wait">
          <motion.pre
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="font-mono text-xs md:text-xs leading-relaxed text-[var(--body)] whitespace-pre"
          >
            {view === 'upstream' ? UPSTREAM : ADAPTED}
          </motion.pre>
        </AnimatePresence>
      </div>

      <div className="px-5 sm:px-8 md:px-10 py-4 bg-[var(--surface-soft)] text-[13px] sm:text-sm text-[var(--body)] leading-relaxed space-y-1.5">
        <div>
          <span className="font-bold text-[var(--ink)]">kept:</span> DOM structure, context-based
          sequencing, typing timings, keyboard-readable pre/code output.
        </div>
        <div>
          <span className="font-bold text-[var(--ink)]">stripped:</span> theme colors
          (bg-background, red/yellow/green dots), rounded-xl radius, p-4 spacing.
        </div>
        <div className="text-[var(--mute)]">
          source: magicui/terminal · MIT ·{' '}
          <a
            href="/docs/skill"
            className="link-sweep font-bold text-[var(--ink)]"
          >
            how the skill decides →
          </a>
        </div>
      </div>
    </div>
  );
}
