'use client';

import React, { useState } from 'react';
import { Terminal, Search, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TERMINAL_DEMOS } from '@/lib/constants';
import { CopyButton } from '@/components/ui/copy-button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TerminalDemo() {
  const [activeTab, setActiveTab] = useState<'search' | 'inspect' | 'fetch' | 'mcp'>('search');
  const [searchQuery, setSearchQuery] = useState('dark technical terminal hero');

  const currentDemo = TERMINAL_DEMOS.find((d) => d.id === activeTab) || TERMINAL_DEMOS[0];

  return (
    <div className="w-full bg-[#201d1d] text-[#fdfcfc] border-t border-[var(--line)] overflow-hidden font-mono text-xs md:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-[#383333] px-4 py-3 bg-[#191717] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#9a9898] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
            <span>tessera / {activeTab}</span>
          </span>
          <span className="text-[#646262] hidden sm:inline">· v0.1.0</span>
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
          <AnimatePresence mode="wait">
            <motion.span
              key={currentDemo.command}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="text-[#fdfcfc] font-medium whitespace-nowrap"
            >
              {currentDemo.command}
            </motion.span>
          </AnimatePresence>
          <span className="inline-block w-2 h-4 bg-[#fdfcfc] animate-pulse select-none shrink-0" />
        </div>
        <span className="text-[11px] text-[#9a9898] uppercase tracking-wider shrink-0 hidden md:inline">
          local index · 73 items
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
            {[
              'dark technical terminal hero',
              'minimal data table',
              'lamp lighting effect',
              'marquee cards',
            ].map((query) => (
              <button
                key={query}
                type="button"
                onClick={() => setSearchQuery(query)}
                className={`px-2 py-0.5 rounded-[4px] border text-[11px] transition-[color,background-color,border-color,transform] duration-150 ease-out cursor-pointer motion-safe:active:scale-[0.97] ${
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

      {/* Terminal Output Body with motion transition */}
      <div className="p-5 md:p-6 min-h-[320px] md:min-h-[380px] max-h-[500px] overflow-y-auto leading-relaxed selection:bg-[#fdfcfc] selection:text-[#201d1d]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeTab === 'search' ? searchQuery : ''}`}
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          >
            <pre className="font-mono text-xs md:text-[13px] whitespace-pre-wrap text-[#d6d4d4]">
              {activeTab === 'search' && searchQuery !== 'dark technical terminal hero' ? (
                `01  efferd/data-table
    score       0.584
    category    display
    source      efferd
    framework   react
    license     MIT
    artifact    retrievable

    why
    [+] keyword relevance match for query: "${searchQuery}"
    [+] clean monospaced tabular typography
    [+] zero third-party css bundle bloat

02  beui/card-surface
    score       0.412
    category    surfaces
    source      beui
    framework   react
    license     MIT
    artifact    retrievable`
              ) : (
                currentDemo.output
              )}
            </pre>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Terminal Status Footer */}
      <div className="border-t border-[#383333] px-4 py-2.5 bg-[#191717] flex flex-wrap items-center justify-between text-[11px] text-[#9a9898] gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#fdfcfc]">
            <CheckCircle2 className="w-3 h-3 text-[#30d158]" aria-hidden="true" />
            <span>search locally</span>
          </span>
          <span className="text-[#646262]">·</span>
          <span>fetch explicitly</span>
          <span className="text-[#646262]">·</span>
          <span>execute nothing</span>
        </div>
        <div className="text-[#646262]">stdio / json-rpc 2.0</div>
      </div>
    </div>
  );
}
