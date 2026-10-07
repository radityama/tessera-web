import React from 'react';
import { CLI_COMMANDS } from '@/lib/constants';
import { PanelHeader } from '@/components/layout/panel';
import { CopyButton } from '@/components/ui/copy-button';
import { Badge } from '@/components/ui/badge';

export function Cli() {
  return (
    <div className="w-full">
      <PanelHeader
        kicker="cli"
        title="Use it from the terminal."
        description="Every Tessera capability is accessible via the CLI. It runs locally with zero background telemetry, deterministic JSON output, and offline search."
        aside={
          <div className="text-xs text-[var(--mute)]">
            npm: <code className="text-[var(--ink)] font-semibold">@tessera-dev/cli</code>
          </div>
        }
      />

      {/* Command matrix rows */}
      <div className="divide-y divide-[var(--hairline)] bg-[var(--canvas)]">
        {CLI_COMMANDS.map((cmd) => (
          <div
            key={cmd.command}
            className="p-5 md:px-8 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--surface-soft)] transition-colors"
          >
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <Badge
                  variant="muted"
                  className="bg-[var(--surface-card)] text-xs font-bold"
                >
                  tessera {cmd.command}
                </Badge>
                {cmd.args && (
                  <span className="text-xs text-[var(--mute)] font-mono">
                    {cmd.args}
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm text-[var(--body)]">
                {cmd.description}
              </p>
              {cmd.flags && cmd.flags.length > 0 && (
                <div className="text-[11px] text-[var(--stone)] flex flex-wrap gap-2 pt-0.5">
                  <span className="text-[var(--mute)]">flags:</span>
                  {cmd.flags.map((flag) => (
                    <code key={flag} className="text-[var(--body)]">
                      {flag}
                    </code>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto shrink-0 bg-[var(--canvas)] border border-[var(--hairline)] rounded-[4px] px-2.5 py-1.5 text-xs">
              <code className="text-[var(--mute)] select-none">$</code>
              <code className="text-[var(--ink)] font-mono">{cmd.usage}</code>
              <CopyButton text={cmd.usage} label="copy" className="ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
