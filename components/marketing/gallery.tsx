import React from 'react';
import { CATALOG } from '@/lib/catalog';
import { SOURCES, TOTAL_COMPONENTS, TOTAL_SOURCES } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';

const FEATURED = [
  'magicui/terminal',
  'beui/command-palette',
  'beui/table',
  'magicui/marquee',
  'efferd/pricing-1',
  'efferd/contact-1',
] as const;

function Preview({ category }: { category: string }) {
  if (category === 'terminal') {
    return (
      <div className="rounded-[4px] border border-[var(--line)] bg-[var(--surface-dark)] p-3 font-mono text-xs leading-relaxed text-[#fdfcfc]">
        <div className="mb-2 flex gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 bg-[#9a9898]"></span>
          <span className="h-1.5 w-1.5 bg-[#9a9898]"></span>
          <span className="h-1.5 w-1.5 bg-[#9a9898]"></span>
        </div>
        <div>$ tessera search &quot;terminal hero&quot;</div>
        <div className="text-[#9a9898]">01 terminal · 0.68 · MIT</div>
      </div>
    );
  }
  if (category === 'command-menu') {
    return (
      <div className="rounded-[4px] border border-[var(--line)] bg-[var(--canvas)] p-2 font-mono text-xs">
        <div className="border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-1.5 text-[var(--mute)]">
          Type a command or search…
        </div>
        <div className="mt-1 space-y-1">
          <div className="bg-[var(--surface-soft)] px-2 py-1 font-semibold text-[var(--ink)]">Search components</div>
          <div className="px-2 py-1 text-[var(--mute)]">Inspect license</div>
          <div className="px-2 py-1 text-[var(--mute)]">Fetch upstream source</div>
        </div>
      </div>
    );
  }
  if (category === 'table') {
    return (
      <div className="overflow-hidden rounded-[4px] border border-[var(--line)] font-mono text-xs">
        <div className="grid grid-cols-3 border-b border-[var(--line)] bg-[var(--surface-soft)] font-semibold text-[var(--ink)]">
          <span className="px-2 py-1.5">component</span>
          <span className="px-2 py-1.5">license</span>
          <span className="px-2 py-1.5 text-right">score</span>
        </div>
        {[
          ['terminal', 'MIT', '0.68'],
          ['marquee', 'MIT', '0.68'],
          ['table', 'MIT', '0.64'],
        ].map((row) => (
          <div key={row[0]} className="grid grid-cols-3 border-b border-[var(--line)] text-[var(--body)] last:border-b-0">
            <span className="px-2 py-1.5">{row[0]}</span>
            <span className="px-2 py-1.5">{row[1]}</span>
            <span className="px-2 py-1.5 text-right tabular-nums">{row[2]}</span>
          </div>
        ))}
      </div>
    );
  }
  if (category === 'animation') {
    return (
      <div className="flex gap-2 overflow-hidden rounded-[4px] border border-[var(--line)] bg-[var(--canvas)] p-3 font-mono text-xs">
        {['search', 'inspect', 'fetch', 'adapt'].map((w) => (
          <span key={w} className="shrink-0 rounded-[4px] border border-[var(--line)] bg-[var(--surface-soft)] px-2.5 py-1 text-[var(--ink)]">
            {w}
          </span>
        ))}
      </div>
    );
  }
  if (category === 'pricing') {
    return (
      <div className="grid grid-cols-3 gap-2 font-mono text-xs">
        {[
          ['basic', '0'],
          ['team', '12'],
          ['org', '49'],
        ].map(([plan, price]) => (
          <div key={plan} className="rounded-[4px] border border-[var(--line)] bg-[var(--canvas)] p-2.5 text-center">
            <div className="text-[var(--mute)]">{plan}</div>
            <div className="text-base font-bold text-[var(--ink)] tabular-nums">${price}</div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="space-y-2 rounded-[4px] border border-[var(--line)] bg-[var(--canvas)] p-3 font-mono text-xs">
      <div className="border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-1.5 text-[var(--mute)]">Your Name</div>
      <div className="border border-[var(--line)] bg-[var(--surface-soft)] px-2 py-1.5 text-[var(--mute)]">email@example.com</div>
      <div className="bg-[var(--ink)] px-2 py-1.5 text-center font-semibold text-[var(--canvas)]">Send</div>
    </div>
  );
}

export function Gallery() {
  const featured = FEATURED.map((id) => CATALOG.find((e) => e.id === id)).filter(
    (e): e is NonNullable<typeof e> => Boolean(e),
  );

  return (
    <div className="w-full">
      <PanelHeader
        kicker="discovery"
        title="Start from UI that already exists."
        description={`${TOTAL_COMPONENTS} components · ${TOTAL_SOURCES} sources. Every tile below is a real index entry with a permissive license.`}
        aside={
          <a href="/catalog" className="link-sweep text-xs font-bold text-[var(--ink)]">
            Browse all components →
          </a>
        }
      />

      <div className="grid grid-cols-1 border-b border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((entry) => (
          <article key={entry.id} className="flex min-w-0 flex-col border-b border-[var(--line)] sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
            <div className="border-b border-[var(--verified-border)] bg-[var(--verified-soft)] px-4 py-2 font-mono text-xs">
              <span className="font-bold text-[var(--ink)]">{entry.name}</span>
              <span className="text-[var(--mute)]"> · {entry.source} · {entry.category}</span>
            </div>
            <div className="flex-1 bg-[var(--canvas)] p-4">
              <Preview category={entry.category} />
            </div>
            <div className="flex items-center justify-between gap-2 border-t border-[var(--line)] bg-[var(--canvas)] px-4 py-2 font-mono text-xs">
              <span className="font-semibold text-[var(--verified-solid)]">MIT · permitted</span>
              <a href="/catalog" className="text-[var(--mute)] link-sweep">
                {entry.id} →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 font-mono text-xs text-[var(--mute)] sm:px-8 md:px-10">
        {SOURCES.map((s) => (
          <span key={s.name}>
            <span className="font-semibold text-[var(--ink)]">{s.name}</span>{' '}
            <span className="tabular-nums">{s.components}</span>
          </span>
        ))}
      </div>

      <div className="bg-[var(--canvas)] px-5 py-3 text-xs text-[var(--stone)] sm:px-8 md:px-10">
        Simplified renderings; retrieve full source with tessera fetch. Tessera
        is independent and is not affiliated with, sponsored by, or endorsed by
        the libraries it indexes.
      </div>
    </div>
  );
}
