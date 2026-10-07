# Tessera Web

The official marketing website for [Tessera](https://github.com/radityama/tessera), an open-source UI retrieval system for coding agents.

Tessera helps coding agents discover, inspect, and retrieve existing UI components from real libraries instead of generating replacements from scratch. This repository contains only the marketing website. The CLI, MCP server, and retrieval engine live in the [main Tessera repository](https://github.com/radityama/tessera).

## About Tessera

The core idea: a coding agent should search and evaluate existing components before writing new ones. Tessera provides a local-first retrieval layer over indexed third-party UI libraries:

- **Component discovery** — deterministic lexical ranking over a pinned local index (73 components across 5 sources in v0.1.0). Search works fully offline.
- **Source inspection** — ranking reasons, dependency trees, framework requirements, and license evidence per component.
- **UI retrieval** — canonical source fetched directly from the upstream shadcn registry or npm package at request time. Nothing is copied into a Tessera-owned registry, and nothing is executed on install.
- **CLI workflow** — `search`, `inspect`, `similar`, `add --dry-run`, `fetch`, `mcp`, and `doctor` commands.
- **MCP integration** — a Model Context Protocol server over stdio exposing 6 tools (`search_components`, `get_component`, `get_component_artifact`, `get_installation`, `find_similar_components`, `search_patterns`).
- **Coding agent compatibility** — documented setup for Claude Code, Cursor, Codex, Windsurf, OpenCode, Cline, Roo Code, and other MCP-capable harnesses.

Install the CLI with:

```bash
npx -y @tessera-dev/cli search "dark technical terminal hero"
```

Package: [@tessera-dev/cli on npm](https://www.npmjs.com/package/@tessera-dev/cli) (v0.1.0).

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) (Radix primitives, CSS variables; see `components.json`)
- [Motion](https://motion.dev/) for animation
- [Lucide React](https://lucide.dev/) for icons
- [Bun](https://bun.sh/) as package manager

The site keeps its own design tokens (`--canvas`, `--ink`, `--surface-*`, `--accent`, …) in `app/globals.css`. shadcn semantic tokens are mapped onto those values; the Tessera tokens take precedence. Light/dark theming is handled by the custom provider in `context/theme-context.tsx` (persisted to `localStorage`, `.dark` class + `data-theme` attribute). Do not add a second theme provider.

## Getting Started

Requirements: Node.js >= 20.9 and Bun >= 1.0.

```bash
git clone https://github.com/radityama/tessera-web.git
cd tessera-web
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

`APP_URL` is **required for deploy** (optional for local dev):

| Variable | Required | Default | Purpose |
| -------- | -------- | ------- | ------- |
| `APP_URL` | Yes (deploy) | `https://tessera.dev` | Canonical site URL for metadata, Open Graph images, sitemap, and canonical links |

Production builds warn loudly when `APP_URL` is missing so canonical, sitemap and OG URLs never silently point at the wrong domain. Copy `.env.example` to `.env.local` and adjust if needed. No API keys are required; the site makes no AI API calls.

## Routes

| Route | Contents |
| ----- | -------- |
| `/` | 10-section pitch: hero, problem, workflow, composition, sources, use-it, compatibility, trust, install, FAQ, CTA |
| `/docs` | Docs landing + install snippet |
| `/docs/cli` | Full command reference with real CLI output |
| `/docs/mcp` | Server setup and the 6 tool schemas |
| `/docs/integrations` | Copy-paste configs for 12 harnesses |
| `/docs/skill` | Agent skill install + decision pipeline |
| `/docs/architecture` | System layers around Fig. 01 |
| `/catalog` | All 73 indexed components (`data/index.json`, refresh with `bun scripts/sync-index.ts`) |
| `/trust` | Guarantees, governance, boundaries |
| `/changelog` | Release notes (append new versions here) |

## Project Structure

```text
app/                  App Router routes, global styles, metadata
  page.tsx            Homepage section composition
  globals.css         Tessera design tokens + shadcn theme tokens
  docs/               Reference routes (cli, mcp, integrations, skill, architecture)
  catalog/            Component catalog route
  trust/ changelog/   Trust and release-notes routes
components/
  layout/             Site chrome: header, footer, panels, separators, docs nav
  marketing/          Homepage sections: hero, composition, use-it, trust-band, …
  catalog/            Catalog filter table (client island)
  ui/                 Reusable primitives (Button, Badge, CopyButton, ThemeToggle)
context/              Theme provider (light/dark state)
lib/
  site.ts             Site metadata, URLs, package coordinates
  constants.ts        Marketing content data (sources, commands, tools, FAQs)
  catalog.ts          Typed catalog loader with build-time count assertion
  integrations.ts     Harness configs with verification level + date
  docs.ts             Docs nav and prev/next
  og.tsx              Shared OG-image shell + font loader
data/
  index.json          Pinned component index (73 entries)
scripts/
  sync-index.ts       Regenerates data/index.json from @tessera-dev/registry
notes/                Internal working notes (not the /docs site content)
```

`components.json` is the shadcn/ui configuration (Radix foundation, Tailwind v4, CSS variables, lucide icons). Reusable UI primitives live in `components/ui/` as locally installed shadcn/ui implementations adapted to Tessera tokens — they are vendored source, not a hosted dependency.

Installed primitives: `button`, `badge`, `tabs`, `accordion`, `table`. `Button` exposes Tessera variants (`primary` / `secondary` / `ghost`) and sizes (`sm` / `md` / `lg`) with `asChild` support; `Badge` exposes `muted` / `success` / `accent` / `outline`. Domain compositions (hero, panels, terminal, tables content) stay in `components/marketing/` and `components/layout/`.

Adding another primitive:

```bash
bunx shadcn@latest add <component>
```

Then adapt it: rewrite the template's `from "cn"` import to `@/lib/utils`, replace default shadcn colors with Tessera CSS variables, and verify light/dark rendering. See `notes/component-migration.md` for the full mapping and the deliberately excluded primitives (`card`, `separator`, `tooltip`, `scroll-area`, `collapsible`, `navigation-menu`).

## Development Commands

| Command | Description |
| ------- | ----------- |
| `bun dev` | Start the development server (Turbopack) |
| `bun run build` | Production build |
| `bun start` | Serve the production build |
| `bun run lint` | ESLint |
| `bun run typecheck` | TypeScript check (`tsc --noEmit`) |
| `bun run clean` | Remove the `.next` output directory |

## Related Repositories

- Main project (CLI, MCP server, retrieval engine): [radityama/tessera](https://github.com/radityama/tessera)
- This website: [radityama/tessera-web](https://github.com/radityama/tessera-web)
- npm package: [@tessera-dev/cli](https://www.npmjs.com/package/@tessera-dev/cli)

## Contributing

Keep changes focused: this repo is the marketing site, not the retrieval engine. Preserve the existing design tokens, typography (JetBrains Mono), and light/dark behavior; visual changes should be intentional, not side effects of tooling.

1. Fork the repo and create a branch from `main`.
2. Run `bun run lint`, `bun run typecheck`, and `bun run build` before opening a PR.
3. Open a pull request describing what changed and how it was validated.

Contribution guidelines for the main Tessera project: [CONTRIBUTING.md](https://github.com/radityama/tessera/blob/main/CONTRIBUTING.md).

## License

This repository has no explicit license file. The main Tessera project is [MIT](https://github.com/radityama/tessera/blob/main/LICENSE) — check with the maintainers before reusing site content.
