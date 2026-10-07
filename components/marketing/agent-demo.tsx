'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { PanelHeader } from '@/components/layout/panel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ClaudeSession } from '@/components/brainless/blocks/claude-session';
import { CodexSession } from '@/components/brainless/blocks/codex-session';
import { GrokSession } from '@/components/brainless/blocks/grok-session';
import { DemoResult } from './demo-result';
import { DEMO_CANDIDATES, DEMO_FETCH_COMMAND, DEMO_QUERY } from '@/lib/demo';

const TABS = [
  { value: 'claude', label: 'Claude Code', accent: '#cd694a', status: 'runtime verified' },
  { value: 'codex', label: 'Codex', accent: '#5cc2e0', status: 'config verified' },
  { value: 'grok', label: 'Grok', accent: '#e0af68', status: 'illustrative' },
] as const;

type TabValue = (typeof TABS)[number]['value'];

export function AgentDemo() {
  const [tab, setTab] = useState<TabValue>('claude');
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      <PanelHeader
        kicker="agent demo"
        title="Tessera works beneath your coding agent."
        description="One request, three harnesses. Each agent searches the same local index, checks the same license, and retrieves the same source before adapting it."
      />

      <Tabs value={tab} onValueChange={(v) => setTab(v as TabValue)}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 sm:px-8 md:px-10">
          <TabsList aria-label="Coding agent harness">
            {TABS.map((t) => (
              <TabsTrigger
                key={t.value}
                value={t.value}
                className="relative rounded-none border-0 bg-transparent px-3 py-1.5 pb-2 text-xs font-semibold text-[var(--mute)] data-[state=active]:bg-transparent data-[state=active]:text-[var(--ink)] data-[state=inactive]:hover:text-[var(--ink)]"
              >
                <span>[{t.label}]</span>
                {tab === t.value && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-2 bottom-0 h-0.5"
                    style={{ backgroundColor: t.accent }}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="font-mono text-xs text-[var(--mute)]">
            same query · same index · same license check
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="min-w-0 border-b border-[var(--line)] bg-[#141212] px-4 py-4 sm:px-5 lg:border-b-0 lg:border-r">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                <TabsContent value="claude">
                  <ClaudeSession />
                </TabsContent>
                <TabsContent value="codex">
                  <CodexSession />
                </TabsContent>
                <TabsContent value="grok">
                  <GrokSession />
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="min-w-0">
            <DemoResult />
          </div>
        </div>
      </Tabs>

      <div className="border-t border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 sm:px-8 md:px-10">
        <details className="group text-xs">
          <summary className="cursor-pointer font-mono font-semibold text-[var(--ink)] marker:text-[var(--mute)]">
            Under the hood: raw CLI
          </summary>
          <div className="mt-2 space-y-1 overflow-x-auto font-mono text-[var(--body)]">
            <div>
              <span className="select-none text-[var(--success-text)]">$ </span>
              tessera search &quot;dark technical terminal hero&quot; --limit 3
            </div>
            {DEMO_CANDIDATES.map((c) => (
              <div key={c.id}>
                {c.id} · {c.score} · {c.detail}
              </div>
            ))}
            <div>
              <span className="select-none text-[var(--success-text)]">$ </span>
              {DEMO_FETCH_COMMAND}
            </div>
            <a href="/docs/cli" className="link-sweep font-bold text-[var(--ink)]">
              full command reference →
            </a>
          </div>
        </details>
      </div>

      <div className="border-t border-[var(--line)] bg-[var(--canvas)] px-5 py-2.5 text-xs text-[var(--mute)] sm:px-8 md:px-10">
        Query: &quot;{DEMO_QUERY}&quot; Claude Code is runtime verified; Codex is
        config verified; the Grok rendering is illustrative, not a verified
        integration. Verification detail lives in{' '}
        <a href="/docs/integrations" className="link-sweep font-bold text-[var(--ink)]">
          /docs/integrations
        </a>
        .
      </div>
    </div>
  );
}
