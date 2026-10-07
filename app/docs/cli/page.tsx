import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { PanelHeader } from '@/components/layout/panel';
import { DocsPager } from '@/components/layout/docs-pager';
import { CopyButton } from '@/components/ui/copy-button';

export const metadata: Metadata = {
  title: 'CLI reference',
  description:
    'Full Tessera CLI reference: synopsis, flags, real examples with real output, exit codes, and --json shapes.',
  alternates: { canonical: `${siteConfig.url}/docs/cli` },
};

function Block({ command, output }: { command: string; output: string }) {
  return (
    <div className="border border-[var(--line)] rounded-[4px] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-3 py-2 bg-[var(--surface-soft)] border-b border-[var(--line)]">
        <code className="text-xs text-[var(--ink)] overflow-x-auto whitespace-nowrap">$ {command}</code>
        <CopyButton text={command} label="copy" className="shrink-0" />
      </div>
      <pre className="px-3 py-3 text-xs md:text-xs leading-relaxed text-[var(--body)] overflow-x-auto whitespace-pre">
        {output}
      </pre>
    </div>
  );
}

function Flags({ rows }: { rows: [string, string][] }) {
  return (
    <div className="border border-[var(--line)] rounded-[4px] overflow-hidden">
      {rows.map(([flag, desc], i) => (
        <div
          key={flag}
          className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 px-3 py-2 text-xs md:text-xs ${
            i > 0 ? 'border-t border-[var(--line)]' : ''
          }`}
        >
          <code className="text-[var(--ink)] font-bold whitespace-nowrap">{flag}</code>
          <span className="text-[var(--body)]">{desc}</span>
        </div>
      ))}
    </div>
  );
}

export default function CliDocsPage() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="docs / cli"
        title="CLI reference."
        description="Every command, every flag, with real examples run against @tessera-dev/cli v0.1.0. Only fetch touches the network; everything else reads the pinned local snapshot."
      />
      <div className="px-5 sm:px-8 py-6 space-y-10">
        <section id="search" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[search] rank components locally</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Synopsis: <code className="text-[var(--ink)]">tessera search [options] &lt;query&gt;</code>.
            Deterministic lexical ranking over the pinned index. Scores and reasons print inline.
          </p>
          <Flags
            rows={[
              ['--category <category>', 'Filter by category.'],
              ['--framework <fw>', 'react | vue | svelte | html | other.'],
              ['--source <name>', 'Filter by source library.'],
              ['--motion <level>', 'none | low | medium | high.'],
              ['--limit <n>', 'Max results, 1–50. Default 10.'],
              ['--json', 'Stable JSON output for scripting.'],
              ['--registry <dir>', 'Point at a different snapshot.'],
            ]}
          />
          <Block
            command='tessera search "dark technical terminal hero"'
            output={`1. efferd/hero-1 — hero-1 (0.640)
   category: hero | source: efferd | frameworks: react
   motion: unknown | deps: 0 | license: unknown — verify upstream terms before reuse
   artifact: retrievable (shadcn-registry)
   why: exact category match: hero; matches query terms in name/description/tags; no required runtime dependencies
2. magicui/terminal — Terminal (0.628)
   category: terminal | source: magicui | frameworks: react
   motion: unknown | deps: 0 | license: MIT, redistribution permitted
   artifact: retrievable (shadcn-registry)
   why: matches aesthetics: terminal; no required runtime dependencies; known license (MIT)
3. aceternity/terminal — Terminal (0.588)
   category: terminal | source: aceternity | frameworks: react
   motion: unknown | deps: 0 | license: LicenseRef-Aceternity, redistribution restricted
   artifact: retrievable (shadcn-registry)
   why: matches aesthetics: terminal; no required runtime dependencies; known license (LicenseRef-Aceternity)`}
          />
        </section>

        <section id="inspect" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[inspect] canonical metadata</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Synopsis: <code className="text-[var(--ink)]">tessera inspect [options] &lt;source/slug&gt;</code>.
            Includes retrieval mechanism, license with evidence, and provenance.
          </p>
          <Flags
            rows={[
              ['--json', 'Stable JSON output.'],
              ['--registry <dir>', 'Point at a different snapshot.'],
            ]}
          />
          <Block
            command="tessera inspect magicui/terminal"
            output={`magicui/terminal — Terminal
A terminal component
category: terminal (secondary: —)
frameworks: react
visual: aesthetics=[terminal] tags=[terminal, component] motion=unknown density=unknown
dependencies: none
installation: command — npx shadcn@latest add https://magicui.design/r/terminal.json — Add through the shadcn CLI from the upstream registry URL, then adapt the copied source to your design tokens.
retrieval: shadcn-registry — https://magicui.design/r/terminal.json
license: MIT, redistribution permitted
links: homepage=https://magicui.design/ docs=https://magicui.design/docs
provenance: adapter=shadcn-registry upstream=terminal derived=[category, secondaryCategories, visual.aesthetics, visual.tags, visual.motion]`}
          />
        </section>

        <section id="similar" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[similar] structural alternatives</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Synopsis: <code className="text-[var(--ink)]">tessera similar [options] &lt;source/slug&gt;</code>.
            Ranks by shared category, tags, motion level, and framework.
          </p>
          <Flags
            rows={[
              ['--limit <n>', 'Max results. Default 5.'],
              ['--json', 'Stable JSON output.'],
              ['--registry <dir>', 'Point at a different snapshot.'],
            ]}
          />
          <Block
            command="tessera similar magicui/terminal"
            output={`1. aceternity/terminal — Terminal (0.800)
   category: terminal | source: aceternity | frameworks: react
   why: same category: terminal; shared tags: terminal; same motion level: unknown; shared framework: react
2. beui/not-found-terminal — 404 / Not Found Terminal (0.610)
   category: terminal | source: beui | frameworks: react
   why: same category: terminal; shared tags: terminal; shared framework: react`}
          />
        </section>

        <section id="add" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[add] safe installation plan</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Synopsis: <code className="text-[var(--ink)]">tessera add [options] &lt;source/slug&gt;</code>.
            Dry-run by default in v0.1 and never mutates the project. <code className="text-[var(--ink)]">--no-dry-run</code> is
            refused with an explanatory error.
          </p>
          <Flags
            rows={[
              ['--dry-run', 'Only print the plan. Default true.'],
              ['--no-dry-run', 'Attempt mutation. Refused in v0.1.'],
              ['--json', 'Stable JSON output.'],
              ['--registry <dir>', 'Point at a different snapshot.'],
            ]}
          />
          <Block
            command="tessera add magicui/terminal --dry-run"
            output={`Plan for magicui/terminal (dry-run — no files changed):
- installation kind: command
- run: npx shadcn@latest add https://magicui.design/r/terminal.json
- Add through the shadcn CLI from the upstream registry URL, then adapt the copied source to your design tokens.
- required dependencies: none
- adapt to your design tokens before keeping (reuse composition, not identity).`}
          />
        </section>

        <section id="fetch" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[fetch] retrieve upstream source</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Synopsis: <code className="text-[var(--ink)]">tessera fetch [options] &lt;source/slug&gt;</code>.
            The only network command. Files are written, never executed; collisions are skipped unless{' '}
            <code className="text-[var(--ink)]">--force</code> is passed; upstream paths escaping{' '}
            <code className="text-[var(--ink)]">--output</code> are rejected.
          </p>
          <Flags
            rows={[
              ['--dry-run', 'Show what would be written without writing.'],
              ['--output <dir>', 'Write files under this directory instead of printing.'],
              ['--force', 'Overwrite existing files. Refused by default.'],
              ['--json', 'Emit the artifact as JSON.'],
              ['--registry <dir>', 'Point at a different snapshot.'],
            ]}
          />
          <Block
            command="tessera fetch magicui/terminal --dry-run"
            output={`magicui/terminal — 1 file(s) from magicui
upstream: https://magicui.design/r/terminal.json
license: MIT, redistribution permitted
dependencies: none
registry dependencies: none
install: npx shadcn@latest add https://magicui.design/r/terminal.json

files:
  registry/magicui/terminal.tsx (7716 bytes)

Tessera wrote these files only because you asked. Nothing was installed or executed.`}
          />
          <p className="text-xs text-[var(--mute)] leading-relaxed">
            Not every component is fetchable: npm-shipped entries (HeroUI) and metadata-only records
            return a structured error. Caveat from upstream: provider-declared dependencies can
            under-report real imports — magicui/terminal imports motion, which its registry entry does
            not list.
          </p>
        </section>

        <section id="mcp" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[mcp] start the MCP server</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Synopsis: <code className="text-[var(--ink)]">tessera mcp [options]</code>. Speaks MCP over
            stdin/stdout (JSON-RPC 2.0). No flags besides <code className="text-[var(--ink)]">--registry</code>.
            Full protocol detail lives on the <a href="/docs/mcp" className="link-sweep font-bold text-[var(--ink)]">MCP page</a>.
          </p>
          <Flags rows={[['--registry <dir>', 'Point at a different snapshot.']]} />
        </section>

        <section id="doctor" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[doctor] installation health</h2>
          <Flags rows={[['--json', 'Emit the report as JSON.'], ['--registry <dir>', 'Point at a different snapshot.']]} />
          <Block
            command="tessera doctor"
            output={`ok    node-version: node 22.23.2 (requires >=20)
ok    registry-source: bundled
ok    registry-valid: 73 components across 5 sources
ok    registry-integrity: 0 without retrieval, 0 with unevidenced licenses
ok    mcp-server: 6 tools registered

All checks passed.`}
          />
        </section>

        <section id="exit-codes" className="scroll-target space-y-3">
          <h2 className="text-sm font-bold text-[var(--ink)]">[exit codes] and --json</h2>
          <p className="text-[13px] sm:text-sm text-[var(--body)] leading-relaxed">
            Exit <code className="text-[var(--ink)]">0</code> on success,{' '}
            <code className="text-[var(--ink)]">1</code> on any handled error. Errors print as JSON on
            stderr: <code className="text-[var(--ink)]">{'{ "error": { "code": "...", "message": "..." } }'}</code>.
            Every command accepts <code className="text-[var(--ink)]">--json</code> for scripting; search
            results carry id, name, source, category, visual tags, dependency count, motion, license
            status, score, and reasons.
          </p>
        </section>
      </div>
      <DocsPager />
    </div>
  );
}
