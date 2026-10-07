import React from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { SiteHeader } from '@/components/layout/site-header';
import { DocsFooter } from '@/components/layout/docs-footer';
import { SectionSeparator } from '@/components/layout/section-separator';
import 'fumadocs-ui/style.css';
import './docs.css';

export default function DocsLayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--canvas)] selection:bg-[var(--ink)] selection:text-[var(--canvas)]">
      <SiteHeader fullWidth />
      {/* Theme handling stays disabled: the Tessera provider in app/layout.tsx
          remains the single owner (no second localStorage key, no .dark fight). */}
      <RootProvider theme={{ enabled: false }}>
        <main id="main" className="w-full flex-1" data-tessera-docs>
          <DocsLayout
            tree={source.pageTree}
            tabs={false}
            themeSwitch={{ enabled: false }}
          >
            {children}
          </DocsLayout>
          <SectionSeparator />
        </main>
      </RootProvider>
      <DocsFooter />
    </div>
  );
}
