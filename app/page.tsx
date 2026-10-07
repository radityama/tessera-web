import { SiteHeader } from '@/components/layout/site-header';
import { Announcement } from '@/components/layout/announcement';
import { Panel } from '@/components/layout/panel';
import { SectionSeparator } from '@/components/layout/section-separator';
import { SiteFooter } from '@/components/layout/site-footer';

import { Hero } from '@/components/marketing/hero';
import { AgentDemo } from '@/components/marketing/agent-demo';
import { Problem } from '@/components/marketing/problem';
import { Gallery } from '@/components/marketing/gallery';
import { Composition } from '@/components/marketing/composition';
import { Compatibility } from '@/components/marketing/compatibility';
import { TrustBand } from '@/components/marketing/trust-band';
import { Installation } from '@/components/marketing/installation';
import { Faq } from '@/components/marketing/faq';
import { FinalCta } from '@/components/marketing/final-cta';

export default function HomePage() {
  return (
    <div className="homepage flex flex-col min-h-screen bg-[var(--canvas)] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      <SiteHeader />

      <Announcement />

      <main id="main" className="flex-1 w-full">
        <Panel id="hero" hasTopLine={false}>
          <Hero />
        </Panel>

        <SectionSeparator />

        <Panel id="demo">
          <AgentDemo />
        </Panel>

        <SectionSeparator />

        <Panel id="why">
          <Problem />
        </Panel>

        <SectionSeparator />

        <Panel id="sources">
          <Gallery />
        </Panel>

        <SectionSeparator />

        <Panel id="composition">
          <Composition />
        </Panel>

        <SectionSeparator />

        <Panel id="compatibility">
          <Compatibility />
        </Panel>

        <SectionSeparator />

        <Panel id="trust">
          <TrustBand />
        </Panel>

        <SectionSeparator />

        <Panel id="install">
          <Installation />
        </Panel>

        <SectionSeparator />

        <Panel id="faq">
          <Faq />
        </Panel>

        <SectionSeparator />

        <Panel id="cta" hasBottomLine={true}>
          <FinalCta />
        </Panel>

        <SectionSeparator />
      </main>

      <SiteFooter />
    </div>
  );
}
