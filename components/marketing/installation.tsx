'use client';

import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PanelHeader } from '@/components/layout/panel';
import { CopyButton } from '@/components/ui/copy-button';

export function Installation() {
  const [packageManager, setPackageManager] = useState<'npx' | 'npm' | 'pnpm'>('npx');

  const installSnippets = {
    npx: {
      code: 'npx -y @tessera-dev/cli search "dark technical terminal hero"',
      notes: 'Executes without installing. Node.js >= 20 required.',
    },
    npm: {
      code: `npm install -g @tessera-dev/cli\ntessera doctor`,
      notes: 'Installs the tessera binary globally into your PATH.',
    },
    pnpm: {
      code: `pnpm add -g @tessera-dev/cli\ntessera doctor`,
      notes: 'Installs global binary via pnpm link store.',
    },
  };

  const activeSnippet = installSnippets[packageManager];

  return (
    <div id="install" className="w-full">
      <PanelHeader
        kicker="installation"
        title="One command to look before generating."
        description="Try Tessera instantly with zero project configuration, or install it globally for persistent terminal and MCP use."
        aside={
          <div className="text-xs text-[var(--mute)]">
            Node.js <code className="text-[var(--ink)] font-semibold">&gt;= 20.0.0</code>
          </div>
        }
      />

      {/* Structured Tab Selector Bar */}
      <div className="px-6 md:px-8 py-3 bg-[var(--surface-soft)] border-b border-[var(--line)] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Package Manager">
          {(['npx', 'npm', 'pnpm'] as const).map((pm) => (
            <button
              key={pm}
              type="button"
              role="tab"
              aria-selected={packageManager === pm}
              onClick={() => setPackageManager(pm)}
              className={`text-xs font-mono font-medium px-3 py-1 rounded-[4px] border transition-colors cursor-pointer ${
                packageManager === pm
                  ? 'bg-[var(--ink)] text-[var(--canvas)] border-[var(--ink)]'
                  : 'bg-[var(--canvas)] text-[var(--body)] border-[var(--line)] hover:text-[var(--ink)]'
              }`}
            >
              [{pm}]
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-[var(--mute)]">
          <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
          <span>runner: {packageManager}</span>
        </div>
      </div>

      {/* Integrated Code Execution Pane with motion transition */}
      <div className="px-6 md:px-8 py-6 bg-[var(--canvas)] text-xs md:text-sm font-mono text-[var(--ink)] min-h-[90px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={packageManager}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
          >
            <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {activeSnippet.code}
            </pre>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Structured Notes & Action Sub-Bar */}
      <div className="border-t border-[var(--line)] px-6 md:px-8 py-3 bg-[var(--surface-soft)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--mute)]">
        <AnimatePresence mode="wait">
          <motion.span
            key={`notes-${packageManager}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {activeSnippet.notes}
          </motion.span>
        </AnimatePresence>
        <CopyButton text={activeSnippet.code} label="copy" />
      </div>
    </div>
  );
}
