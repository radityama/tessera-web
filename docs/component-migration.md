# Tessera Web — Component Migration (custom → shadcn/ui)

Branch: `refactor/migrate-ui-to-shadcn`. Companion to `docs/component-audit.md` (inventory) — this file records what was installed, mapped, and verified.

## Installed shadcn components (all via `bunx shadcn@latest add`, Radix foundation)

| Primitive | File | Tessera adaptation |
|---|---|---|
| `button` | `components/ui/button.tsx` | cva with Tessera API only: variants `primary/secondary/ghost`, sizes `sm/md/lg`, byte-identical class strings to the legacy custom Button; `asChild` implemented via Radix Slot (legacy declared it but ignored it; 0 consumers passed it) |
| `badge` | `components/ui/badge.tsx` | Tessera variants: `muted` (surface pill), `success` (`bg-[#eafaf1]`), `accent` (`bg-[#ebf5ff]`), `outline` |
| `tabs` | `components/ui/tabs.tsx` | Official Root/List/Trigger/Content structure; Trigger base carries Tessera pill defaults (`text-xs`, 4px radius, ink focus ring); active colors via `data-[state=active]:` at call sites |
| `accordion` | `components/ui/accordion.tsx` | Item/Trigger/Content pre-styled as Tessera FAQ rows (hairline borders, `px-6 py-5`, surface-soft hover, single rotating ChevronDown, `[-]/[+]` markers via `group-data-[state=open]:`); open/close animation via shadcn `animate-accordion-down/up` keyframes |
| `table` | `components/ui/table.tsx` | Thin wrappers with Tessera defaults (mono, hairline row borders, surface-soft hover, built-in `overflow-x-auto` container); column widths/padding passed at call sites (tailwind-merge resolves conflicts) |
| `skeleton` | `components/ui/skeleton.tsx` | Renders the existing `skeleton-shimmer` sweep (not a generic gray pulse) |

All templates were repointed from the standalone `cn` package to `@/lib/utils`; the `cn` npm package was removed (it duplicated the existing utility).

## Existing → new mapping

| Before | After |
|---|---|
| `components/ui/button.tsx` (custom, 0 consumers) | Official `Button` (Tessera variants preserved) |
| Hand-rolled buttons in site-header (GitHub/CTA/menu), hero, final-cta, not-found | `Button` / `Button asChild` for anchors, per-site paddings via `className` |
| `CopyButton` / `ThemeToggle` internals | Same logic, rendered on `Button variant="secondary" size="sm"` |
| FAQ hand accordion (`useState` + Motion) | Controlled official `Accordion` (`type="single" collapsible`, first-open default, toggle-shut preserved) |
| Installation `role=tablist` buttons | Controlled official `Tabs` (`value`/`onValueChange`) |
| Terminal-demo tab buttons | Controlled official `Tabs`; filter chips stay plain buttons (toggle semantics, not tabs) |
| Tables in sources / compatibility / local-first | `Table` primitives; redundant outer `overflow-x-auto` wrappers removed (built into `Table`) |
| Status pills (3 verification levels), retrieval pills, `local/network` badges, CLI command pills, MCP signature chips | `Badge` with Tessera variants (+ minimal `className` overrides) |
| 34 shimmer `div`/`span` in `global-loading.tsx` | `Skeleton` (identical output: same `skeleton-shimmer` class) |

## Preserved custom compositions (no primitive equivalent)

`Panel*` rail kit, `SectionSeparator` hatch art, `SiteShell`, drawer Motion animation, hero/workflow/problem/agent-skill/architecture/limitations/safety/stats/mcp/cli table content, terminal chrome + Motion swaps, footer anchors, ASCII `[-]/[+]/[01]` markers, `opengraph-image.tsx` (next/og inline styles).

## Deliberately excluded primitives

`card` (would redesign continuous rails/stats), `separator` (`SectionSeparator` + panel hairlines already canonical), `tooltip` (no existing tooltip behavior), `scroll-area` (would alter the custom 6px terminal scrollbar), `collapsible`/`navigation-menu`/`sheet`/`dialog` (drawer must stay inline Motion; desktop nav is 6 anchors), all form primitives (no forms on site).

## Behavior contracts re-verified

FAQ single-open + first-open + toggle-shut; installation `npx/npm/pnpm` swap + copy; terminal 4 demos + search filter chips + mobile-hidden copy; tables hover/`tabular-nums`/`tfoot`/responsive columns; copy `[copy]`→`[copied]` 2s + textarea fallback; theme toggle + `localStorage` persistence; mobile drawer open/close; no console/page errors.

## Testing methodology

- `bun install --frozen-lockfile`, `bunx tsc --noEmit`, `bun run lint`, `bun run build` — all pass.
- Baseline screenshots captured pre-migration (dev server): 1440/768/375 × light/dark + install-pnpm, terminal-inspect, faq-third-open, mobile-nav-open states (`/tmp/opencode/baseline/`, not committed).
- Post-migration screenshots from `bun start` (prod build) compared with PIL pixel-diff + visual inspection + `getComputedStyle` spot checks (terminal tabs: active `bg #302c2c / border #646262`, 12px, `4px/10px` padding — exact).
- Desktop pairs ≤1.7% differ (subpixel AA + cursor/ping animation phase — inspected, no structural delta). Mobile baseline captures raced the viewport resize (showed ≥sm layout); mobile equivalence verified against the responsive spec instead (`ThemeToggle` hidden, hamburger shown, drawer + badges correct at 375px).
- Two test-procedure artifacts, not regressions: sticky-header overlap intercepts programmatic clicks at scroll-top (solved with `scrollIntoView({block:'center'})`); Radix Tabs/Accordion add proper `role=tab`/`aria-expanded` semantics (a11y improvement, invisible).

## Limitations

- FAQ open/close animation moved from Motion (`0.2s` height+opacity) to shadcn CSS keyframes (`animate-accordion-down/up`); visually equivalent in screenshots, microscopically different easing.
- `Button` adds `select-none` to former plain anchors (GitHub/CTA links) — standard shadcn behavior, no visible change.
