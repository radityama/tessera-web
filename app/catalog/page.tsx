import type { Metadata } from 'next';
import React from 'react';
import { siteConfig } from '@/lib/site';
import { CATALOG, CATALOG_SOURCES } from '@/lib/catalog';
import { TOTAL_COMPONENTS } from '@/lib/constants';
import { SiteHeader } from '@/components/layout/site-header';
import { Announcement } from '@/components/layout/announcement';
import { SiteFooter } from '@/components/layout/site-footer';
import { SectionSeparator } from '@/components/layout/section-separator';
import { Panel, PanelHeader } from '@/components/layout/panel';
import { CatalogTable } from '@/components/catalog/catalog-table';

export const metadata: Metadata = {
  title: 'Component catalog',
  description: `Browse all ${TOTAL_COMPONENTS} UI components indexed by Tessera across ${CATALOG_SOURCES.length} sources.`,
  alternates: { canonical: `${siteConfig.url}/catalog` },
};

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      <SiteHeader />
      <Announcement />
      <main className="flex-1 w-full">
        <Panel id="catalog" hasTopLine={false}>
          <PanelHeader
            kicker="catalog"
            title="Every component in the index."
            description={`All ${CATALOG.length} indexed components with source, category, framework, license, retrieval method, and upstream link. Generated from the pinned registry snapshot — run bun scripts/sync-index.ts to refresh.`}
          />
          <CatalogTable entries={CATALOG} />
        </Panel>
        <SectionSeparator />
      </main>
      <SiteFooter />
    </div>
  );
}
