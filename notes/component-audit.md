# Tessera Web — Component Audit & Migration Matrix

Audit date: 2026-10-07. Branch: `refactor/migrate-ui-to-shadcn`. Foundation: **Radix UI** (`components.json`: `radix-lyra`, Tailwind v4, CSS variables, `lucide` icons).
Previous phase state: Next.js 16.4.0 modernization merged (`16b7323`); shadcn initialized; no shadcn components installed yet.

Design tokens that must survive (light → dark): `--canvas`, `--ink`, `--surface-soft/card`, `--body/#c7c5c5`, `--mute`, `--stone`, `--ash`, `--line`, `--line-strong`, `--accent #007aff→#3b9eff`, `--success`, `--warning`, `--danger`, `--radius-control:4px`. Global mono font, 1px hairlines, `rounded-[4px]` controls, `.dark` class + `data-theme` via `context/theme-context.tsx` (do NOT add next-themes).

## Migration table

| Existing Component | Class | Current Implementation | shadcn Replacement | Status | Notes |
|---|---|---|---|---|---|
| `components/ui/button.tsx` | A | Custom `Button`: variants `primary/secondary/ghost`, sizes `sm/md/lg`, plain `<button>` (`asChild` declared but ignored), **0 consumers** | Official `button` (cva + Slot), extended with Tessera `primary/secondary/ghost` + `sm/md/lg` mapping to byte-identical class strings | done | Canonical primitive after migration; implement `asChild` via Slot (safe: nobody passes it today) |
| `components/ui/copy-button.tsx` | A | Clipboard logic + hand-rolled button classes (`size sm secondary` dialect + `gap-1.5 shrink-0`), `[copy]`→`[copied]` 2s feedback, textarea fallback | Keep Tessera clipboard logic; render official `Button` underneath | done | Used in hero, cli, mcp (×2), installation, final-cta |
| `components/ui/theme-toggle.tsx` | A | `useTheme()` readout button (`theme: light/dark`, Sun/Moon), 3× `suppressHydrationWarning` | Keep logic/readout; render official `Button` underneath | done | Used in site-header (desktop + drawer) |
| `components/marketing/faq.tsx` | A | Hand accordion: `openIndex` state (default 0, single-open, toggle-shut), `[-]/[+]` markers, ChevronDown rotate, Motion height animation | Official `accordion` (`type="single" collapsible defaultValue="item-0"`), adapted to Tessera rows/borders/animation | done | Must preserve first-open default + toggle-shut + Motion feel |
| `components/marketing/installation.tsx` | B | Hand tabs (`role=tablist`, `[{pm}]` pills, `npx/npm/pnpm`, Motion fade/slide `0.12s`, copy button) | Official `tabs` (Triggers styled as Tessera pills); keep Motion content swap + copy | done | Preserve commands, active styling, transitions |
| `components/marketing/terminal-demo.tsx` | B | Hand tabs (4 demos) + filter chips + copy-cmd, hardcoded dark hex (`#201d1d`…), Motion `0.1s` swaps, scrollable output | Official `tabs` for demo switching; keep terminal chrome, chips, Motion, scroll behavior | done | Terminal stays hex-themed (inverted by design, not CSS vars) |
| `components/marketing/sources.tsx` | A/C | Hand table (`tfoot` totals, retrieval pills, responsive `hidden sm:table-cell`) inside C composition | Official `table` primitives, Tessera cell/padding/hover classes | done | Composition stays; table markup migrates |
| `components/marketing/compatibility.tsx` | A/C | Hand table + status badges (`runtime/config/protocol verified`, hardcoded `bg-[#eafaf1]/#ebf5ff`) | Official `table` + `badge` (Tessera variants incl. success/accent tints) | done | Badge colors must match current tints exactly |
| `components/marketing/local-first.tsx` | A/C | Hand table + `local/network` badges | Official `table` + `badge` | done | Same badge variants as compatibility |
| `components/marketing/cli.tsx` | C | Command rows + command-name pills + `$` snippet bars + CopyButton | `badge` for pills; rows/snippet bars stay (domain layout) | done | Pills → Badge, rest unchanged |
| `components/marketing/mcp.tsx` | C | Config/JSON snippet boxes + tool cards + CopyButton | Snippet boxes stay; tool-card eyebrow/signature chips → `badge` where pill-shaped | done | Keep JSON box + absolute copy position |
| `components/marketing/hero.tsx` | C | Hero copy + CTA buttons + snippet + TerminalDemo embed | CTA buttons → official `Button` (Tessera variants) | done | Type scale, spacing, icon untouched |
| `components/marketing/final-cta.tsx` | C | CTA bar + snippet + CopyButton | CTA buttons → official `Button` | done | Same as hero |
| `components/marketing/agent-skill.tsx` | C | Divide-grid cards, `[01]` markers, accent/success highlights | No primitive swap (markers are brand ASCII, not badges) | keep | Documented exception: markers ≠ Badge |
| `components/marketing/workflow.tsx` | C | 5-col divide pipeline + breadcrumb + `$ action` footers | No swap (domain layout) | keep | Exception: pipeline cards are layout, not Card |
| `components/marketing/problem.tsx` | C | Without/with split, danger/success flows | No swap | keep | Exception: comparison layout, no primitive equivalent |
| `components/marketing/architecture.tsx` | C | ASCII `pre` + caption bar | No swap (`pre` is content) | keep | Exception |
| `components/marketing/limitations.tsx` | C | 2-col `[-]` card list | No swap | keep | Exception: shared pattern with safety |
| `components/marketing/safety.tsx` | C | 2-col `[+]` card list | No swap | keep | Exception |
| `components/marketing/stats.tsx` | C | 4-number strip, index-based borders | No swap (borders are the design; Card would redesign) | keep | Exception: Card explicitly rejected |
| `components/layout/site-header.tsx` | B | Sticky bar, hand outline/solid/icon buttons, Motion drawer (`0.18s` height), 6 anchor links | Buttons → official `Button` (incl. `asChild` for anchors); drawer Motion kept | done | Do NOT convert drawer to overlay/sheet |
| `components/layout/site-footer.tsx` | C | 4-col grid, link+icon rows, code chip, legal row | Code chip stays; no primitive fits links better than `<a>` | keep | Exception: footer links are plain anchors |
| `components/layout/announcement.tsx` | C | Release banner + external link | No swap | keep | Trivial static banner |
| `components/layout/panel.tsx` | C | `Panel/Header/Title/Description/Content/Footer` rail kit | No swap (domain layout; Card would break continuous rails) | keep | Exception |
| `components/layout/section-separator.tsx` | C | Diagonal-hatch macro band (brand art) | No swap (Separator ≠ hatch art) | keep | Exception: canonical Tessera separator already exists |
| `components/layout/site-shell.tsx` | C | Viewport/rail wrappers | No swap | keep | Layout containment |
| `components/layout/global-loading.tsx` | A/C | Route skeleton, shimmer bars (`skeleton-shimmer rounded-[2px/4px]`), ping/pulse accents | Bare shimmer bars → official-structure `skeleton` adapted to `skeleton-shimmer`; composition kept | done | Do NOT replace with generic gray placeholders |
| `components/ui/*` (after migration) | — | Single canonical primitives | Remove legacy duplicates; wrappers must sit on shadcn foundations | done | No `custom-/legacy-` files |
| `app/not-found.tsx` | C | 404 card + hand-rolled primary-style link | Link → official `Button asChild` (primary/md classes) | done | Only visual-primitive change on this page |
| `app/loading.tsx` | D | Passthrough to GlobalLoading | — | n/a | Non-visual |
| `app/opengraph-image.tsx` | D | Edge `ImageResponse`, inline styles (no Tailwind) | — | n/a | next/og can't use shadcn; untouched |
| `app/page.tsx`, `app/layout.tsx` | D | Composition + metadata/font/theme bootstrap | — | n/a | Untouched |
| `context/theme-context.tsx` | D | Theme state, persistence, DOM sync | — | n/a | Canonical; no next-themes |
| `hooks/use-mobile.ts` | D | SSR-safe viewport boolean | — | n/a | Currently unused by components; keep |
| `lib/utils.ts` (`cn`) | D | `twMerge(clsx())` | Reused as-is; registry templates importing `from "cn"` get rewritten to `@/lib/utils` | done | `cn` npm package removed (unused) |
| `lib/constants.ts`, `lib/site.ts` | D | Content data + site metadata | — | n/a | Untouched |
| `app/robots.ts`, `app/sitemap.ts` | D | SEO routes | — | n/a | Untouched |

## Deliberately NOT installed (justified)

| Primitive | Reason |
|---|---|
| `card` | Tessera panels/stats are continuous rail layouts; Card would redesign borders/padding |
| `separator` | `SectionSeparator` + Panel hairlines already the canonical separators; bare-rule spots are container borders, replacing them adds DOM churn for zero gain |
| `tooltip` | No existing tooltip behavior; adding them changes visible behavior |
| `scroll-area` | Terminal uses native scroll + custom 6px scrollbar CSS; Radix scrollbars would alter appearance |
| `collapsible` / `navigation-menu` / `sheet` / `dialog` | Drawer must stay inline Motion height-expand; desktop nav is 6 anchors — these would redesign interaction |
| `form` / `input` et al. | No forms on site |

## Install list (all actually consumed)

`button`, `badge`, `tabs`, `accordion`, `table`, `skeleton` (+ `collapsible` NOT needed — accordion covers FAQ).

## Compatibility contracts (must hold after migration)

- Button: `variant primary|secondary|ghost` (default `primary`), `size sm|md|lg` (default `md`) with original class strings; `className` appended last; `{...props}` spread.
- CopyButton: props `text/label/className/ariaLabel`, `[copy]`→`[copied]` 2s, clipboard + textarea fallback.
- FAQ: single-open, first item open by default, click open item to shut, Motion height/opacity animation, `[-]/[+]` + chevron.
- Installation: `npx/npm/pnpm` tabs, `[{pm}]` pill styling, Motion content swap, per-pm copy.
- Terminal: 4 demo tabs + search filter chips, Motion swaps, scrollable output, mobile-hidden copy.
- Tables: column widths, `tabular-nums`, hover rows, `overflow-x-auto`, `tfoot` (sources), responsive hidden columns.
- Badges: `runtime verified` green tint `bg-[#eafaf1]`, `config verified` surface, `protocol verified` blue tint `bg-[#ebf5ff]`; retrieval pills surface.
