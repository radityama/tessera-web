'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Search, CheckCircle2 } from 'lucide-react';
import { useInView, useReducedMotion } from 'motion/react';
import { TERMINAL_DEMOS, SEARCH_EXAMPLES, TOTAL_COMPONENTS } from '@/lib/constants';
import { siteConfig } from '@/lib/site';
import { CopyButton } from '@/components/ui/copy-button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SEARCH_QUERIES = Object.keys(SEARCH_EXAMPLES);

/** Animated replay: streams output line by line (~35ms/line). */
function ReplayOutput({ output }: { output: string }) {
  const lines = output.split('\n');
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= lines.length; i++) {
      timers.push(setTimeout(() => setShown(i), i * 35));
    }
    return () => {
      for (const t of timers) clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [output]);

  return (
    <pre
      aria-hidden="true"
      className="font-mono text-xs md:text-[13px] whitespace-pre-wrap text-[#d6d4d4]"
    >
      {lines.slice(0, shown).join('\n')}
    </pre>
  );
}

export function TerminalDemo() {
  const [activeTab, setActiveTab] = useState<'search' | 'inspect' | 'fetch' | 'mcp'>('search');
  const [searchQuery, setSearchQuery] = useState(SEARCH_QUERIES[0]);
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  const currentDemo = TERMINAL_DEMOS.find((d) => d.id === activeTab) || TERMINAL_DEMOS[0];
  const fullOutput =
    activeTab === 'search'
      ? (SEARCH_EXAMPLES[searchQuery] ?? currentDemo.output)
      : currentDemo.output;
  const fullCommand = currentDemo.command;
  const replayKey = `${activeTab}-${activeTab === 'search' ? searchQuery : ''}`;
  const animate = inView && !reduceMotion;

  return (
    <div ref={rootRef} className="w-full bg-[#201d1d] text-[#fdfcfc] border-t border-[var(--line)] dark:border dark:border-[var(--line-strong)] overflow-hidden font-mono text-xs md:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#383333] px-4 py-3 bg-[#191717] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#9a9898] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
            <span>tessera / {activeTab}</span>
          </span>
          <span className="text-[#8a8787] hidden sm:inline">· {siteConfig.version}</span>
        </div>

        {/* Tab Controls */}
        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as typeof activeTab)
          }
        >
          <TabsList aria-label="Terminal demo" className="gap-1">
            {TERMINAL_DEMOS.map((demo) => (
              <TabsTrigger
                key={demo.id}
                value={demo.id}
                className="px-2.5 py-1 motion-safe:active:scale-[0.97] data-[state=active]:bg-[#302c2c] data-[state=active]:text-[#fdfcfc] data-[state=active]:border-[#646262] data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#9a9898] data-[state=inactive]:border-transparent data-[state=inactive]:hover:text-[#fdfcfc] data-[state=inactive]:hover:bg-[#252222]"
              >
                [{demo.id}]
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Copy command control */}
        <div className="hidden sm:block">
          <CopyButton
            text={currentDemo.command}
            label="copy cmd"
            className="border-[#646262] text-[#fdfcfc] hover:bg-[#302c2c]"
          />
        </div>
      </div>

      {/* Terminal Command Input Display */}
      <div className="px-5 py-4 border-b border-[#2d2828] bg-[#1e1a1a] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto text-[#fdfcfc]">
          <span className="text-[#30d158] select-none">$</span>
          {animate ? (
            <ReplayCommand key={`cmd-${replayKey}`} command={fullCommand} />
          ) : (
            <>
              <span className="text-[#fdfcfc] font-medium whitespace-nowrap">{fullCommand}</span>
              <span className="terminal-cursor inline-block w-2 h-4 bg-[#fdfcfc] select-none shrink-0" aria-hidden="true" />
            </>
          )}
          <span className="sr-only">{fullCommand}</span>
        </div>
        <span className="text-xs text-[#9a9898] uppercase tracking-wider shrink-0 hidden md:inline">
          local index · {TOTAL_COMPONENTS} items
        </span>
      </div>

      {/* Interactive search bar for 'search' tab */}
      {activeTab === 'search' && (
        <div className="px-5 py-2.5 bg-[#252121] border-b border-[#2d2828] flex items-center gap-3 text-xs">
          <span className="text-[#9a9898] shrink-0 flex items-center gap-1.5">
            <Search className="w-3 h-3 text-[#9a9898]" aria-hidden="true" />
            <span>filter query:</span>
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SEARCH_QUERIES.map((query) => (
              <button
                key={query}
                type="button"
                onClick={() => setSearchQuery(query)}
                className={`px-2 py-0.5 rounded-[4px] border text-xs transition-[color,background-color,border-color,transform] duration-150 ease-out cursor-pointer motion-safe:active:scale-[0.97] ${
                  searchQuery === query
                    ? 'border-[#007aff] text-[#fdfcfc] bg-[#1a2b40]'
                    : 'border-[#383333] text-[#9a9898] hover:text-[#fdfcfc] hover:border-[#646262]'
                }`}
              >
                &quot;{query}&quot;
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Terminal Output Body (min-h reserves space: no layout shift during replay) */}
      <div className="p-5 md:p-6 min-h-[320px] md:min-h-[380px] max-h-[500px] overflow-y-auto leading-relaxed selection:bg-[#fdfcfc] selection:text-[#201d1d]">
        {animate ? (
          <ReplayOutput key={replayKey} output={fullOutput} />
        ) : (
          <pre className="font-mono text-xs md:text-[13px] whitespace-pre-wrap text-[#d6d4d4]">
            {fullOutput}
          </pre>
        )}
        <span className="sr-only">{fullOutput}</span>
      </div>

      {/* Terminal Status Footer */}
      <div className="border-t border-[#383333] px-4 py-2.5 bg-[#191717] flex flex-wrap items-center justify-between text-xs text-[#9a9898] gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#fdfcfc]">
            <CheckCircle2 className="w-3 h-3 text-[#30d158]" aria-hidden="true" />
            <span>search locally</span>
          </span>
          <span className="text-[#8a8787]">·</span>
          <span>fetch explicitly</span>
          <span className="text-[#8a8787]">·</span>
          <span>execute nothing</span>
        </div>
        <div className="text-[#8a8787]">stdio / json-rpc 2.0</div>
      </div>
    </div>
  );
}

function ReplayCommand({ command }: { command: string }) {
  const [chars, setChars] = useState(0);
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= command.length; i++) {
      timers.push(setTimeout(() => setChars(i), i * 25));
    }
    return () => {
      for (const t of timers) clearTimeout(t);
    };
  }, [command]);
  return (
    <>
      <span className="text-[#fdfcfc] font-medium whitespace-nowrap" aria-hidden="true">
        {command.slice(0, chars)}
      </span>
      <span className="terminal-cursor inline-block w-2 h-4 bg-[#fdfcfc] select-none shrink-0" aria-hidden="true" />
    </>
  );
}
