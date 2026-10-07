'use client';

import React, { useState } from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { CopyButton } from '@/components/ui/copy-button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CLI_COMMANDS, MCP_TOOLS } from '@/lib/constants';

const CORE = ['search', 'inspect', 'fetch', 'doctor'];

export function UseIt() {
  const [tab, setTab] = useState<'cli' | 'mcp'>('cli');
  const commands = CLI_COMMANDS.filter((c) => CORE.includes(c.command));

  return (
    <div className="w-full">
      <PanelHeader
        kicker="use it"
        title="One index, two doors."
        description="Developers enter through the CLI. Agents enter through MCP. Both read the same pinned snapshot."
        aside={
          <Tabs value={tab} onValueChange={(v) => setTab(v as 'cli' | 'mcp')}>
            <TabsList aria-label="Interface">
              {(['cli', 'mcp'] as const).map((t) => (
                <TabsTrigger
                  key={t}
                  value={t}
                  className="text-xs px-3 py-1 motion-safe:active:scale-[0.97] data-[state=active]:bg-[var(--ink)] data-[state=active]:text-[var(--canvas)] data-[state=active]:border-[var(--ink)] data-[state=inactive]:bg-[var(--canvas)] data-[state=inactive]:text-[var(--body)] data-[state=inactive]:border-[var(--line)] data-[state=inactive]:hover:text-[var(--ink)]"
                >
                  [{t}]
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        }
      />

      {tab === 'cli' ? (
        <div className="divide-y divide-[var(--line)]">
          {commands.map((c) => (
            <div
              key={c.command}
              className="px-5 sm:px-8 md:px-10 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
            >
              <code className="text-xs font-bold text-[var(--ink)] whitespace-nowrap w-40 shrink-0">
                tessera {c.command}
              </code>
              <span className="text-[13px] sm:text-sm text-[var(--body)] flex-1">{c.description}</span>
              <CopyButton text={c.usage} label="copy" className="shrink-0" />
            </div>
          ))}
          <div className="px-5 sm:px-8 md:px-10 py-3 bg-[var(--surface-soft)] text-xs">
            <a href="/docs/cli" className="link-sweep font-bold text-[var(--ink)]">
              full command reference →
            </a>
          </div>
        </div>
      ) : (
        <div>
          <div className="px-5 sm:px-8 md:px-10 py-4 border-b border-[var(--line)] flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <code className="text-xs font-bold text-[var(--ink)] whitespace-nowrap">
              claude mcp add --scope user tessera -- npx -y @tessera-dev/cli mcp
            </code>
            <CopyButton
              text="claude mcp add --scope user tessera -- npx -y @tessera-dev/cli mcp"
              label="copy"
              className="shrink-0"
            />
          </div>
          <div className="px-5 sm:px-8 md:px-10 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
            {MCP_TOOLS.map((t) => (
              <div key={t.name} className="text-xs">
                <code className="text-[var(--ink)] font-bold">{t.name}</code>
                <span className="text-[var(--mute)]"> — {t.purpose.split('.')[0].toLowerCase()}</span>
              </div>
            ))}
          </div>
          <div className="px-5 sm:px-8 md:px-10 py-3 bg-[var(--surface-soft)] border-t border-[var(--line)] text-xs">
            <a href="/docs/mcp" className="link-sweep font-bold text-[var(--ink)]">
              server setup and tool schemas →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
