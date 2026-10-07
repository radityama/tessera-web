import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { MCP_TOOLS } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { DocsPager } from '@/components/layout/docs-pager';
import { CopyButton } from '@/components/ui/copy-button';

export const metadata: Metadata = {
  title: 'MCP server',
  description:
    'Tessera MCP server over stdio: setup, transport details, and the 6 tools with input schemas and sample responses.',
  alternates: { canonical: `${siteConfig.url}/docs/mcp` },
};

const TOOL_DETAILS: Record<string, { input: string; response: string; note: string }> = {
  search_components: {
    input: `{
  "query": "dark technical terminal hero",
  "source": "magicui",
  "limit": 5
}`,
    response: `[{
  "id": "magicui/terminal",
  "name": "Terminal",
  "source": "magicui",
  "category": "terminal",
  "score": 0.628,
  "license": { "status": "known", "redistribution": "permitted" },
  "reasons": ["matches aesthetics: terminal", "known license (MIT)"]
}]`,
    note: 'Same ranking core as tessera search. Scores depend on the pinned snapshot.',
  },
  get_component: {
    input: `{ "id": "magicui/terminal" }`,
    response: `{
  "id": "magicui/terminal",
  "category": "terminal",
  "frameworks": ["react"],
  "license": { "status": "known", "identifier": "MIT" },
  "retrieval": { "kind": "shadcn-registry" },
  "provenance": { "adapter": "shadcn-registry" }
}`,
    note: 'Canonical metadata only. Does not imply source was vendored locally.',
  },
  get_component_artifact: {
    input: `{ "id": "magicui/terminal" }`,
    response: `{
  "files": ["registry/magicui/terminal.tsx (7716 bytes)"],
  "dependencies": [],
  "install": "npx shadcn@latest add https://magicui.design/r/terminal.json"
}`,
    note: 'File manifest and dependency list. Nothing is installed or executed.',
  },
  get_installation: {
    input: `{ "id": "magicui/terminal" }`,
    response: `{
  "kind": "command",
  "command": "npx shadcn@latest add https://magicui.design/r/terminal.json",
  "dependencies": []
}`,
    note: 'Safe installation guidance. The tool never installs anything itself.',
  },
  find_similar_components: {
    input: `{ "id": "magicui/terminal", "limit": 3 }`,
    response: `[
  { "id": "aceternity/terminal", "score": 0.800 },
  { "id": "beui/not-found-terminal", "score": 0.610 }
]`,
    note: 'Alternatives by category, tags, motion level, and framework.',
  },
  search_patterns: {
    input: `{ "pattern": "developer tool hero with terminal" }`,
    response: `[{ "id": "efferd/hero-1", "category": "hero", "score": 0.640 }]`,
    note: 'Higher-level layout patterns (hero, pricing, terminal, navigation, tabs, modal).',
  },
};

export default function McpDocsPage() {
  const cmd = 'npx -y @tessera-dev/cli mcp';
  return (
    <div className="w-full">
      <PanelHeader
        heading="h1"
        kicker="docs / mcp"
        title="MCP server."
        description="A thin protocol layer over the retrieval core. It must not contain ranking logic. Response shapes below are illustrative excerpts of real records; exact scores follow the pinned snapshot."
      />
      <div className="px-5 sm:px-8 py-6 space-y-8">
        <section className="space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[setup]</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Transport: stdio, JSON-RPC 2.0. Tools only — no resources, no sampling. The server never
            executes shell commands, never installs dependencies, and never runs retrieved code.
          </p>
          <div className="flex items-center justify-between gap-3 bg-[var(--surface-soft)] border border-[var(--line)] rounded-[4px] px-3 py-2 text-xs max-w-full overflow-hidden">
            <code className="text-[var(--ink)] whitespace-nowrap overflow-x-auto">$ {cmd}</code>
            <CopyButton text={cmd} label="copy" className="shrink-0" />
          </div>
          <p className="text-xs text-[var(--mute)] leading-relaxed">
            Per-harness wiring (Claude Code, Cursor, Codex, …) lives on the{' '}
            <a href="/docs/integrations" className="link-sweep font-bold text-[var(--ink)]">integrations page</a>.
          </p>
        </section>

        {MCP_TOOLS.map((tool, i) => {
          const detail = TOOL_DETAILS[tool.name];
          return (
            <section key={tool.name} id={tool.name} className="scroll-target space-y-3">
              <h2 className="text-sm font-bold text-[var(--ink)]">
                [{String(i + 1).padStart(2, '0')}] {tool.name}
              </h2>
              <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">{tool.purpose}</p>
              <div className="text-xs text-[var(--mute)]">
                signature: <code className="text-[var(--ink)]">{tool.signature}</code>
              </div>
              {detail ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="border border-[var(--line)] rounded-[4px] overflow-hidden">
                    <div className="px-3 py-1.5 bg-[var(--surface-soft)] border-b border-[var(--line)] text-xs text-[var(--mute)]">
                      sample request
                    </div>
                    <pre className="px-3 py-3 text-xs leading-relaxed text-[var(--body)] overflow-x-auto whitespace-pre">
                      {detail.input}
                    </pre>
                  </div>
                  <div className="border border-[var(--line)] rounded-[4px] overflow-hidden">
                    <div className="px-3 py-1.5 bg-[var(--surface-soft)] border-b border-[var(--line)] text-xs text-[var(--mute)]">
                      sample response (excerpt)
                    </div>
                    <pre className="px-3 py-3 text-xs leading-relaxed text-[var(--body)] overflow-x-auto whitespace-pre">
                      {detail.response}
                    </pre>
                  </div>
                </div>
              ) : null}
              {detail ? <p className="text-xs text-[var(--mute)] leading-relaxed">{detail.note}</p> : null}
            </section>
          );
        })}
      </div>
      <DocsPager />
    </div>
  );
}
