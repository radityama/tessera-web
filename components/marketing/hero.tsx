import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { CopyButton } from '@/components/ui/copy-button';
import { Button } from '@/components/ui/button';
import { TerminalDemo } from './terminal-demo';

export function Hero() {
  return (
    <div className="w-full">
      {/* Hero Content Block */}
      <div className="p-6 sm:p-10 md:p-12 space-y-6">
        <div className="space-y-4">
          {/* Small label */}
          <div className="text-xs tracking-wider text-[var(--mute)]">
            [ui retrieval for coding agents]
          </div>

          {/* Primary headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[var(--ink)] leading-[1.1] text-balance">
            Stop generating UI that already exists.
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-[var(--body)] leading-relaxed max-w-2xl">
            Tessera lets coding agents search, inspect, and retrieve real UI
            components from existing libraries before generating another
            implementation from scratch.
          </p>

          {/* Support statement & philosophy */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[var(--stone)]">
            <span className="font-semibold text-[var(--ink)]">73 components</span>
            <span aria-hidden="true">·</span>
            <span>5 sources</span>
            <span aria-hidden="true">·</span>
            <span>Local-first search</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--ink)] italic">&ldquo;Reuse composition, not identity.&rdquo;</span>
          </div>
        </div>
      </div>

      {/* Grounded Action & Quick Execution Bar */}
      <div className="border-t border-[var(--line)] px-6 sm:px-10 md:px-12 py-3.5 bg-[var(--surface-soft)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Button
            asChild
            variant="primary"
            size="md"
            className="text-xs sm:text-sm font-semibold gap-1.5 group"
          >
            <a href="#install">
              <span>Get started</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 ease-out motion-safe:group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="md"
            className="text-xs sm:text-sm font-semibold"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>

        {/* Quick Execution Snippet integrated into the bar */}
        <div className="flex items-center justify-between gap-3 bg-[var(--canvas)] border border-[var(--hairline)] rounded-[4px] px-3 py-1.5 text-xs font-mono max-w-full overflow-hidden">
          <div className="flex items-center gap-2 overflow-x-auto min-w-0">
            <span className="text-[var(--mute)] select-none shrink-0">$</span>
            <code className="text-[var(--ink)] whitespace-nowrap truncate">
              {siteConfig.defaultCommand}
            </code>
          </div>
          <CopyButton text={siteConfig.defaultCommand} label="copy" className="shrink-0" />
        </div>
      </div>

      {/* Terminal Demo Visual Carrier */}
      <TerminalDemo />
    </div>
  );
}
