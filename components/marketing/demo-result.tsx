import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CopyButton } from '@/components/ui/copy-button';
import {
  DEMO_ARTIFACT,
  DEMO_FETCH_COMMAND,
  DEMO_INSPECT,
  DEMO_RESULT_NOTE,
  DEMO_SELECTED_ID,
} from '@/lib/demo';

export function DemoResult() {
  return (
    <div className="flex h-full flex-col bg-[var(--surface-dark)] text-[#fdfcfc]">
      <div className="flex items-center justify-between border-b border-[#383333] px-4 py-2.5">
        <span className="font-mono text-xs font-semibold tracking-wider">
          RESULT / PREVIEW
        </span>
        <span className="rounded-[4px] border border-[var(--match-border)] bg-[var(--match-soft)] px-2 py-0.5 font-mono text-xs font-medium text-[var(--match-solid)]">
          adapted
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-5 sm:px-5">
        <div className="space-y-2">
          <div className="font-mono text-xs text-[#9a9898]">
            [developer-tool hero]
          </div>
          <p className="font-mono text-xl font-bold leading-snug tracking-tight sm:text-2xl">
            Dark technical hero, retrieved not generated.
          </p>
          <p className="max-w-[52ch] text-sm leading-relaxed text-[#c7c5c5]">
            The agent kept the upstream terminal composition and re-skinned it
            in this project&apos;s tokens.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-[4px] bg-[var(--accent)] px-3 py-1.5 font-mono text-xs font-semibold text-white">
            Get started
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="inline-flex items-center rounded-[4px] border border-[#646262] px-3 py-1.5 font-mono text-xs font-medium text-[#fdfcfc]">
            View source
          </span>
        </div>

        <div className="rounded-[4px] border border-[#383333] bg-[#191717]">
          <div className="flex items-center gap-1.5 border-b border-[#2d2828] px-3 py-2" aria-hidden="true">
            <span className="h-2 w-2 bg-[#9a9898]"></span>
            <span className="h-2 w-2 bg-[#9a9898]"></span>
            <span className="h-2 w-2 bg-[#9a9898]"></span>
          </div>
          <div className="space-y-1 px-3 py-3 font-mono text-xs leading-relaxed">
            <div className="text-[#fdfcfc]">
              <span className="select-none text-[#30d158]">$ </span>
              tessera search &quot;dark technical terminal hero&quot;
            </div>
            <div className="text-[#9a9898]">
              01 magicui/terminal · 0.68 · MIT · retrievable
            </div>
            <div className="text-[#9a9898]">
              02 aceternity/terminal · 0.64 · redistribution restricted
            </div>
            <div className="text-[#fdfcfc]">
              <span className="select-none text-[#30d158]">$ </span>
              tessera fetch magicui/terminal
              <span className="terminal-cursor ml-1 inline-block h-3.5 w-2 bg-[#fdfcfc] align-middle" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[var(--verified-border)] bg-[#191717] px-4 py-2.5 font-mono text-xs leading-relaxed text-[#9a9898]">
        <div>
          <span className="font-semibold text-[#5ee87a]">retrieved:</span>{' '}
          <span className="text-[#fdfcfc]">{DEMO_SELECTED_ID}</span>
          {' · '}
          {DEMO_INSPECT.license}
          {' · '}
          {DEMO_INSPECT.framework}
          {' · '}
          {DEMO_INSPECT.retrieval}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="truncate">
            {DEMO_ARTIFACT.file} · {DEMO_FETCH_COMMAND}
          </span>
          <CopyButton
            text={DEMO_FETCH_COMMAND}
            label="copy"
            className="border-[#646262] bg-transparent text-[#fdfcfc]"
          />
        </div>
        <div className="mt-1 text-[11px]">{DEMO_RESULT_NOTE}</div>
      </div>
    </div>
  );
}
