import React from 'react';
import { PanelHeader } from '@/components/layout/panel';
import { CopyButton } from '@/components/ui/copy-button';
import { siteConfig } from '@/lib/site';

const MCP_SNIPPET = 'claude mcp add --scope user tessera -- npx -y @tessera-dev/cli mcp';

export function Installation() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="installation"
        title="One command to look before generating."
        description="No configuration. Node.js 20 or later."
      />

      <div className="space-y-3 bg-[var(--canvas)] px-5 py-6 sm:px-8 md:px-10">
        <div className="flex max-w-full items-center justify-between gap-3 overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-2 font-mono text-xs">
          <div className="flex min-w-0 items-center gap-2 overflow-x-auto">
            <span className="shrink-0 select-none text-[var(--mute)]">$</span>
            <code className="whitespace-nowrap text-[var(--ink)]">{siteConfig.defaultCommand}</code>
          </div>
          <CopyButton text={siteConfig.defaultCommand} label="copy" className="shrink-0" />
        </div>
        <div className="flex max-w-full items-center justify-between gap-3 overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--canvas)] px-3 py-2 font-mono text-xs">
          <div className="flex min-w-0 items-center gap-2 overflow-x-auto">
            <span className="shrink-0 select-none text-[var(--mute)]">$</span>
            <code className="whitespace-nowrap text-[var(--ink)]">{MCP_SNIPPET}</code>
          </div>
          <CopyButton text={MCP_SNIPPET} label="copy" className="shrink-0" />
        </div>
        <p className="text-xs text-[var(--mute)]">
          First line searches locally. Second line connects your agent. Everything
          else lives in{' '}
          <a href="/docs/cli" className="link-sweep font-bold text-[var(--ink)]">
            /docs/cli
          </a>
          .
        </p>
      </div>
    </div>
  );
}
