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
        description="magicui/terminal (MIT): same structure, two identities. The agent keeps the left and ships the right."
      />

      <div className="grid grid-cols-1 gap-4 bg-[var(--canvas)] px-5 py-6 sm:px-8 md:grid-cols-2 md:px-10 md:py-8">
        <figure className="min-w-0 rounded-[4px] border border-[var(--line)] bg-[var(--surface-soft)]">
          <figcaption className="border-b border-[var(--line)] px-3 py-2 font-mono text-xs font-semibold text-[var(--mute)]">
            ORIGINAL COMPONENT
          </figcaption>
          <div className="p-4">
            <div className="w-full rounded-xl border bg-white">
              <div className="flex gap-x-2 border-b p-4" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
              </div>
              <div className="space-y-1.5 p-4 font-mono text-xs text-neutral-600">
                <div>$ tessera search &quot;terminal&quot;</div>
                <div>01 terminal · 0.68 · MIT</div>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--line)] px-3 py-2 font-mono text-xs text-[var(--mute)]">
            magicui/terminal · MIT · upstream classes
          </div>
        </figure>

        <figure className="min-w-0 rounded-[4px] border border-[var(--match-border)] bg-[var(--match-soft)]">
          <figcaption className="border-b border-[var(--match-border)] px-3 py-2 font-mono text-xs font-semibold text-[var(--match-solid)]">
            ADAPTED INTO YOUR PROJECT
          </figcaption>
          <div className="p-4">
            <div className="w-full rounded-[4px] border border-[var(--line)] bg-[var(--canvas)]">
              <div className="flex gap-1.5 border-b border-[var(--line)] px-3 py-2" aria-hidden="true">
                <span className="h-2 w-2 bg-[var(--mute)]"></span>
                <span className="h-2 w-2 bg-[var(--mute)]"></span>
                <span className="h-2 w-2 bg-[var(--mute)]"></span>
              </div>
              <div className="space-y-1.5 px-3 py-2 font-mono text-xs text-[var(--body)]">
                <div className="text-[var(--ink)]">$ tessera search &quot;terminal&quot;</div>
                <div>01 terminal · 0.68 · MIT</div>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--match-border)] px-3 py-2 font-mono text-xs text-[var(--match-solid)]">
            same composition · project tokens
          </div>
        </figure>
      </div>

      <details className="group border-t border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 sm:px-8 md:px-10">
        <summary className="cursor-pointer font-mono text-xs font-semibold text-[var(--ink)] marker:text-[var(--mute)]">
          View source diff
        </summary>
        <div className="mt-3">
          <div className="flex items-center gap-1.5 text-xs" role="tablist" aria-label="Code view">
            {(['upstream', 'adapted'] as const).map((v) => (
              <button
                key={v}
                role="tab"
                aria-selected={view === v}
                type="button"
                onClick={() => setView(v)}
                className={`cursor-pointer rounded-[4px] border px-2.5 py-1 text-xs transition-[color,background-color,border-color,transform] duration-150 ease-out motion-safe:active:scale-[0.97] ${
                  view === v
                    ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--canvas)]'
                    : 'border-[var(--line)] bg-[var(--canvas)] text-[var(--body)] hover:text-[var(--ink)]'
                }`}
              >
                [{v}]
              </button>
            ))}
          </div>
          <div className="mt-2 overflow-x-auto">
            <AnimatePresence mode="wait">
              <motion.pre
                key={view}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12, ease: 'easeOut' }}
                className="whitespace-pre font-mono text-xs leading-relaxed text-[var(--body)]"
              >
                {view === 'upstream' ? UPSTREAM : ADAPTED}
              </motion.pre>
            </AnimatePresence>
          </div>
          <div className="mt-2 font-mono text-xs text-[var(--mute)]">
            kept: DOM structure, sequencing, keyboard-readable output · stripped:
            theme colors, rounded-xl radius, p-4 spacing
          </div>
        </div>
      </details>
    </div>
  );
}
