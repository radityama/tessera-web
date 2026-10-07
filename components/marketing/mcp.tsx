import React from 'react';
import { MCP_TOOLS } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { CopyButton } from '@/components/ui/copy-button';

export function Mcp() {
  const mcpConfigJson = JSON.stringify(
    {
      mcpServers: {
        tessera: {
          command: 'npx',
          args: ['-y', '@tessera-dev/cli', 'mcp'],
        },
      },
    },
    null,
    2
  );

  return (
    <div className="w-full">
      <PanelHeader
        kicker="mcp"
        title="Give your coding agent the same retrieval layer."
        description="Tessera implements the Model Context Protocol (MCP) over standard input/output. Any MCP-compatible assistant can query the index, inspect source artifacts, and check installation constraints directly."
        aside={
          <div className="text-xs text-[var(--mute)]">
            stdio transport · JSON-RPC 2.0
          </div>
        }
      />

      {/* Configuration Block */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--hairline)]">
        {/* Run command */}
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--hairline)] bg-[var(--surface-soft)] space-y-4">
          <div className="text-xs font-semibold text-[var(--mute)]">
            STANDALONE EXECUTION
          </div>
          <p className="text-xs text-[var(--body)] leading-relaxed">
            Run the server directly without pre-installing dependencies. It listens on stdio and responds to tool discovery.
          </p>
          <div className="bg-[var(--canvas)] border border-[var(--hairline)] rounded-[4px] p-3 flex items-center justify-between gap-3 text-xs font-mono">
            <code>npx -y @tessera-dev/cli mcp</code>
            <CopyButton text="npx -y @tessera-dev/cli mcp" label="copy" />
          </div>
        </div>

        {/* JSON Config */}
        <div className="p-6 md:p-8 bg-[var(--canvas)] space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-[var(--mute)]">
            <span>MCP SERVER CONFIG</span>
            <span className="text-[11px] text-[var(--stone)]">claude_desktop_config.json</span>
          </div>
          <div className="relative bg-[var(--surface-soft)] border border-[var(--hairline)] rounded-[4px] p-3 text-xs font-mono text-[var(--ink)]">
            <pre className="overflow-x-auto">{mcpConfigJson}</pre>
            <div className="absolute top-2.5 right-2.5">
              <CopyButton text={mcpConfigJson} label="copy" />
            </div>
          </div>
        </div>
      </div>

      {/* 6 MCP Tools List Header */}
      <div className="px-6 md:px-8 py-3 bg-[var(--surface-soft)] border-b border-[var(--line)]">
        <div className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
          REGISTERED MCP TOOLS (6)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--line)]">
        {/* Column 1 */}
        <div className="divide-y divide-[var(--line)]">
          {MCP_TOOLS.slice(0, 3).map((tool) => (
            <div key={tool.name} className="p-5 md:p-6 space-y-2 bg-[var(--canvas)] hover:bg-[var(--surface-soft)] transition-colors">
              <div className="flex items-baseline justify-between gap-2">
                <code className="text-xs font-bold text-[var(--ink)]">
                  {tool.name}
                </code>
                <span className="text-[10px] text-[var(--mute)] uppercase">tool</span>
              </div>
              <div className="text-[11px] font-mono text-[var(--stone)] bg-[var(--surface-soft)] px-2 py-1 rounded-[4px] border border-[var(--line)]">
                {tool.signature}
              </div>
              <p className="text-xs text-[var(--body)]">{tool.purpose}</p>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="divide-y divide-[var(--line)]">
          {MCP_TOOLS.slice(3, 6).map((tool) => (
            <div key={tool.name} className="p-5 md:p-6 space-y-2 bg-[var(--canvas)] hover:bg-[var(--surface-soft)] transition-colors">
              <div className="flex items-baseline justify-between gap-2">
                <code className="text-xs font-bold text-[var(--ink)]">
                  {tool.name}
                </code>
                <span className="text-[10px] text-[var(--mute)] uppercase">tool</span>
              </div>
              <div className="text-[11px] font-mono text-[var(--stone)] bg-[var(--surface-soft)] px-2 py-1 rounded-[4px] border border-[var(--line)]">
                {tool.signature}
              </div>
              <p className="text-xs text-[var(--body)]">{tool.purpose}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
