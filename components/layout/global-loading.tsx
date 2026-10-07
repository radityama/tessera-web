import React from 'react';
import { SectionSeparator } from './section-separator';
import { Skeleton } from '@/components/ui/skeleton';

export function GlobalLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading page content"
      className="flex flex-col min-h-screen bg-[var(--canvas)] text-[var(--ink)] font-mono select-none"
    >
      {/* Top Header Skeleton */}
      <header className="w-full bg-[var(--canvas)] border-b border-[var(--hairline)]">
        <div className="panel-frame h-14 flex items-center justify-between px-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <Skeleton className="w-4 h-4 border border-[var(--hairline-strong)] block rounded-[1px]" />
            <Skeleton className="w-16 h-4 block rounded-[2px]" />
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Skeleton className="w-10 h-3 block rounded-[2px]" />
            <Skeleton className="w-14 h-3 block rounded-[2px]" />
            <Skeleton className="w-12 h-3 block rounded-[2px]" />
            <Skeleton className="w-8 h-3 block rounded-[2px]" />
            <Skeleton className="w-10 h-3 block rounded-[2px]" />
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Skeleton className="w-20 h-6 block rounded-[4px]" />
            <Skeleton className="w-20 h-6 block rounded-[4px]" />
          </div>
        </div>
      </header>

      {/* Announcement Skeleton */}
      <div className="panel-frame border-b border-[var(--hairline)] bg-[var(--surface-soft)] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Skeleton className="w-12 h-3 block rounded-[2px]" />
          <Skeleton className="w-48 h-3 block rounded-[2px]" />
        </div>
        <Skeleton className="w-16 h-3 block rounded-[2px] hidden sm:block" />
      </div>

      <main className="flex-1 w-full pb-16">
        {/* Hero Section Skeleton */}
        <section className="panel-frame relative bg-[var(--canvas)] border-b border-[var(--hairline)]">
          <div className="p-6 sm:p-10 md:p-12 space-y-8">
            <div className="space-y-4 max-w-3xl">
              {/* Kicker */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-[var(--mute)]">[initializing registry]</span>
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
              </div>

              {/* Title shimmer bars */}
              <div className="space-y-3">
                <Skeleton className="w-full max-w-xl h-9 sm:h-12 rounded-[2px]" />
                <Skeleton className="w-4/5 max-w-md h-9 sm:h-12 rounded-[2px]" />
              </div>

              {/* Subtitle shimmer */}
              <div className="space-y-2 pt-2">
                <Skeleton className="w-full max-w-lg h-4 rounded-[2px]" />
                <Skeleton className="w-3/4 max-w-md h-4 rounded-[2px]" />
              </div>

              {/* Metadata pill-less row */}
              <div className="flex items-center gap-3 pt-2">
                <Skeleton className="w-24 h-3 rounded-[2px]" />
                <span className="text-[var(--mute)]">·</span>
                <Skeleton className="w-16 h-3 rounded-[2px]" />
                <span className="text-[var(--mute)]">·</span>
                <Skeleton className="w-28 h-3 rounded-[2px]" />
              </div>
            </div>

            {/* Quick command skeleton */}
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <Skeleton className="w-28 h-8 rounded-[4px]" />
                <Skeleton className="w-28 h-8 rounded-[4px]" />
              </div>
              <Skeleton className="h-10 w-full rounded-[4px] border border-[var(--hairline)]" />
            </div>
          </div>

          {/* Dark Terminal Demo Skeleton */}
          <div className="w-full bg-[#201d1d] text-[#fdfcfc] border-t border-[var(--hairline)] p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#383333] pb-3">
              <div className="flex items-center gap-3">
                <span className="w-24 h-3 bg-[#302c2c] block rounded-[2px]" />
                <span className="w-12 h-3 bg-[#2a2626] block rounded-[2px]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-14 h-5 bg-[#302c2c] block rounded-[4px]" />
                <span className="w-14 h-5 bg-[#2a2626] block rounded-[4px]" />
              </div>
            </div>

            <div className="py-2 flex items-center gap-2">
              <span className="text-[#30d158]">$</span>
              <span className="text-[#9a9898] text-xs">tessera search &quot;...&quot;</span>
              <span className="inline-block w-2 h-4 bg-[#fdfcfc] animate-pulse" />
            </div>

            <div className="space-y-2.5 pt-2 pb-6">
              <div className="w-3/4 max-w-md h-3 bg-[#2e2a2a] rounded-[2px]" />
              <div className="w-1/2 max-w-xs h-3 bg-[#282424] rounded-[2px]" />
              <div className="w-2/3 max-w-sm h-3 bg-[#2e2a2a] rounded-[2px]" />
            </div>
          </div>
        </section>

        <SectionSeparator />

        {/* Problem 2-column skeleton */}
        <section className="panel-frame relative bg-[var(--canvas)] border-b border-[var(--hairline)]">
          <div className="border-b border-[var(--hairline)] p-6 md:p-8 space-y-2">
            <Skeleton className="w-16 h-3 rounded-[2px]" />
            <Skeleton className="w-64 h-6 rounded-[2px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--hairline)]">
            <div className="p-6 md:p-8 space-y-4 bg-[var(--surface-soft)]">
              <Skeleton className="w-32 h-4 rounded-[2px]" />
              <div className="space-y-2 pl-2 border-l border-[var(--hairline)]">
                <Skeleton className="w-20 h-3 rounded-[2px]" />
                <Skeleton className="w-40 h-3 rounded-[2px]" />
                <Skeleton className="w-32 h-3 rounded-[2px]" />
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4 bg-[var(--canvas)]">
              <Skeleton className="w-32 h-4 rounded-[2px]" />
              <div className="space-y-2 pl-2 border-l border-[var(--hairline-strong)]">
                <Skeleton className="w-20 h-3 rounded-[2px]" />
                <Skeleton className="w-44 h-3 rounded-[2px]" />
                <Skeleton className="w-36 h-3 rounded-[2px]" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Skeleton */}
      <footer className="panel-frame border-t border-[var(--hairline)] bg-[var(--canvas)] p-6 md:p-8 flex items-center justify-between">
        <Skeleton className="w-24 h-3 rounded-[2px]" />
        <Skeleton className="w-48 h-3 rounded-[2px]" />
      </footer>
    </div>
  );
}
