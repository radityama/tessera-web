import { SiteHeader } from '@/components/layout/site-header';
import { Announcement } from '@/components/layout/announcement';
import { Panel } from '@/components/layout/panel';
import { SectionSeparator } from '@/components/layout/section-separator';
import { SiteFooter } from '@/components/layout/site-footer';

import { Hero } from '@/components/marketing/hero';
import { Problem } from '@/components/marketing/problem';
import { Workflow } from '@/components/marketing/workflow';
import { Composition } from '@/components/marketing/composition';
import { Sources } from '@/components/marketing/sources';
import { UseIt } from '@/components/marketing/use-it';
import { Compatibility } from '@/components/marketing/compatibility';
import { TrustBand } from '@/components/marketing/trust-band';
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

      <main id="main" className="flex-1 w-full">
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

        {/* 6. Composition: reuse composition, not identity (before/after) */}
        <Panel id="composition">
          <Composition />
        </Panel>

        <SectionSeparator />

        {/* 7. Supported Sources + catalog link */}
        <Panel id="sources">
          <Sources />
        </Panel>

        <SectionSeparator />

        {/* 8. Use it: CLI + MCP tabs */}
        <Panel id="use-it">
          <UseIt />
        </Panel>

        <SectionSeparator />

        {/* 9. Compatibility: compact (first 5 + link to all 12) */}
        <Panel id="compatibility">
          <Compatibility limit={5} />
        </Panel>

        <SectionSeparator />

        {/* 10. Trust: condensed guarantees/governance/boundaries */}
        <Panel id="trust">
          <TrustBand />
        </Panel>

        <SectionSeparator />

        {/* 11. Installation: npx, npm, pnpm */}
        <Panel id="install">
          <Installation />
        </Panel>

        <SectionSeparator />

        {/* 12. FAQ: plain bordered rows with ASCII toggles */}
        <Panel id="faq">
          <Faq />
        </Panel>

        <SectionSeparator />

        {/* 13. Final CTA */}
        <Panel id="cta" hasBottomLine={true}>
          <FinalCta />
        </Panel>

        <SectionSeparator />
      </main>

      {/* 14. Footer */}
      <SiteFooter />
    </div>
  );
}
