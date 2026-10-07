import { SiteHeader } from '@/components/layout/site-header';
import { Announcement } from '@/components/layout/announcement';
import { Panel } from '@/components/layout/panel';
import { SectionSeparator } from '@/components/layout/section-separator';
import { SiteFooter } from '@/components/layout/site-footer';

import { Hero } from '@/components/marketing/hero';
import { Problem } from '@/components/marketing/problem';
import { Workflow } from '@/components/marketing/workflow';
import { Sources } from '@/components/marketing/sources';
import { Cli } from '@/components/marketing/cli';
import { Mcp } from '@/components/marketing/mcp';
import { AgentSkill } from '@/components/marketing/agent-skill';
import { Compatibility } from '@/components/marketing/compatibility';
import { LocalFirst } from '@/components/marketing/local-first';
import { Safety } from '@/components/marketing/safety';
import { Architecture } from '@/components/marketing/architecture';
import { Limitations } from '@/components/marketing/limitations';
import { Stats } from '@/components/marketing/stats';
import { Installation } from '@/components/marketing/installation';
import { Faq } from '@/components/marketing/faq';
import { FinalCta } from '@/components/marketing/final-cta';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      {/* 1. Navigation */}
      <SiteHeader />

      {/* 2. Announcement Row */}
      <Announcement />

      <main className="flex-1 w-full">
        {/* 3. Hero & Dark Terminal Product Demo */}
        <Panel id="hero" hasTopLine={false}>
          <Hero />
        </Panel>

        <SectionSeparator />

        {/* 4. Problem: Why Tessera? */}
        <Panel id="why">
          <Problem />
        </Panel>

        <SectionSeparator />

        {/* 5. Workflow: Search -> Inspect -> Retrieve -> Adapt -> Cohesion */}
        <Panel id="workflow">
          <Workflow />
        </Panel>

        <SectionSeparator />

        {/* 6. Supported Sources: 73 components across 5 sources */}
        <Panel id="sources">
          <Sources />
        </Panel>

        <SectionSeparator />

        {/* 7. CLI: Commands matrix */}
        <Panel id="cli">
          <Cli />
        </Panel>

        <SectionSeparator />

        {/* 8. MCP: Model Context Protocol server & 6 tools */}
        <Panel id="mcp">
          <Mcp />
        </Panel>

        <SectionSeparator />

        {/* 9. Agent Skill: Beyond retrieval to design adaptation */}
        <Panel id="skill">
          <AgentSkill />
        </Panel>

        <SectionSeparator />

        {/* 10. Compatibility: Runtime vs Config vs Protocol verified */}
        <Panel id="compatibility">
          <Compatibility />
        </Panel>

        <SectionSeparator />

        {/* 11. Local-First: Offline index, zero telemetry */}
        <Panel id="local-first">
          <LocalFirst />
        </Panel>

        <SectionSeparator />

        {/* 12. Safety & Licensing: Verified provenance */}
        <Panel id="safety">
          <Safety />
        </Panel>

        <SectionSeparator />

        {/* 13. Architecture: Fig. 01 ASCII Diagram */}
        <Panel id="architecture">
          <Architecture />
        </Panel>

        <SectionSeparator />

        {/* 14. Current Limitations: Honest v0.1 boundaries */}
        <Panel id="limitations">
          <Limitations />
        </Panel>

        <SectionSeparator />

        {/* 15. Stats: Factual metrics */}
        <Panel id="stats">
          <Stats />
        </Panel>

        <SectionSeparator />

        {/* 16. Installation: npx, npm, pnpm */}
        <Panel id="install">
          <Installation />
        </Panel>

        <SectionSeparator />

        {/* 17. FAQ: Plain bordered rows with ASCII toggles */}
        <Panel id="faq">
          <Faq />
        </Panel>

        <SectionSeparator />

        {/* 18. Final CTA */}
        <Panel id="cta" hasBottomLine={true}>
          <FinalCta />
        </Panel>

        <SectionSeparator />
      </main>

      {/* 19. Footer */}
      <SiteFooter />
    </div>
  );
}
