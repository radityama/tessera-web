import React from 'react';
import { SiteHeader } from '@/components/layout/site-header';
import { Announcement } from '@/components/layout/announcement';
import { SiteFooter } from '@/components/layout/site-footer';
import { SectionSeparator } from '@/components/layout/section-separator';
import { DocsNav } from '@/components/layout/docs-nav';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--canvas)] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      <SiteHeader />
      <Announcement />
      <main className="flex-1 w-full">
        <div className="panel-frame relative bg-[var(--canvas)] screen-line-bottom">
          <div className="lg:flex lg:items-start">
            <DocsNav />
            <div className="flex-1 min-w-0 lg:border-l lg:border-[var(--line)]">{children}</div>
          </div>
        </div>
        <SectionSeparator />
      </main>
      <SiteFooter />
    </div>
  );
}
