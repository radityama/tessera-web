import React from 'react';
import { siteConfig } from '@/lib/site';
import { TOTAL_COMPONENTS, TOTAL_SOURCES } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { CopyButton } from '@/components/ui/copy-button';
import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="get started"
        title="Search before you generate another component."
        description={`One local index. ${TOTAL_COMPONENTS} components. ${TOTAL_SOURCES} sources. Zero accounts. Give your coding agent the retrieval layer it needs.`}
      />

      {/* Grounded Command & Action Bar */}
      <div className="px-5 sm:px-8 md:px-10 py-6 bg-[var(--surface-soft)] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            variant="primary"
            size="md"
            className="text-xs sm:text-sm font-semibold py-2.5"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="md"
            className="text-xs sm:text-sm font-semibold py-2.5"
          >
            <a
              href={siteConfig.npm}
              target="_blank"
              rel="noopener noreferrer"
            >
              npm package ({siteConfig.version})
            </a>
          </Button>
        </div>

        {/* Command Runner Snippet */}
        <div className="bg-[var(--canvas)] border border-[var(--line)] rounded-[4px] px-3.5 py-2 flex items-center justify-between gap-3 text-xs font-mono max-w-full overflow-hidden">
          <div className="flex items-center gap-2 overflow-x-auto min-w-0">
            <span className="text-[var(--mute)] select-none shrink-0">$</span>
            <code className="text-[var(--ink)] whitespace-nowrap truncate">
              {siteConfig.defaultCommand}
            </code>
          </div>
          <CopyButton text={siteConfig.defaultCommand} label="copy" className="shrink-0" />
        </div>
      </div>
    </div>
  );
}
