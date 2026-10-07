import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { SiteHeader } from '@/components/layout/site-header';
import { Announcement } from '@/components/layout/announcement';
import { SiteFooter } from '@/components/layout/site-footer';
import { SectionSeparator } from '@/components/layout/section-separator';
import { Panel } from '@/components/layout/panel';
import { LocalFirst } from '@/components/marketing/local-first';
import { Safety } from '@/components/marketing/safety';
import { Limitations } from '@/components/marketing/limitations';

export const metadata: Metadata = {
  title: 'Trust and limits',
  description:
    'Tessera trust and limits: local-first guarantees, governance and licensing principles, and current v0.1 boundaries.',
  alternates: { canonical: `${siteConfig.url}/trust` },
};

export default function TrustPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      <SiteHeader />
      <Announcement />
      <main className="flex-1 w-full">
        <Panel id="guarantees" hasTopLine={false}>
          <LocalFirst />
        </Panel>
        <SectionSeparator />
        <Panel id="governance">
          <Safety />
        </Panel>
        <SectionSeparator />
        <Panel id="boundaries" hasBottomLine={true}>
          <Limitations />
        </Panel>
        <SectionSeparator />
      </main>
      <SiteFooter />
    </div>
  );
}
