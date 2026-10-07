# Changes

## Product-led homepage (feat/product-led-homepage)

- Audited homepage IA (13 blocks, 8,099px, 1,495 words) and upstream Tessera MCP contracts; PR draft kept outside the repository.
- Phase 1: semantic role color tokens (primary/verified/caution/danger/match, light+dark) in `app/globals.css`; system sans for prose with mono headings/technical text; derived component/source counts from `data/index.json`.
- Phase 2: installed Brainless `claude-session`, `codex-session`, `grok-session` (26 files) and rewrote the three session blocks to tell one Tessera retrieval story with real tool names, payloads, candidates, and license states. Added `lib/demo.ts` as the single demo data source plus `agent-demo` and `demo-result` showcase frame.
- Phase 3: rebuilt homepage to 10 sections (hero, agent demo, problem flow, discovery gallery, rendered composition comparison, compatibility grid, trust fact grid, installation, FAQ, CTA). Removed `workflow`, `use-it`, `sources` table, and primary `terminal-demo` (kept as condensed "Under the hood" details). Footer untouched; `/docs` architecture untouched.
- Phase 4: responsive/accessibility polish; reduced-motion final-state defaults; footer focus behavior preserved via main-scoped rules.
