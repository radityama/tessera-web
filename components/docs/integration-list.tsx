import { INTEGRATIONS } from '@/lib/integrations';
import { CopyButton } from '@/components/ui/copy-button';
import { ShieldCheck, FileCode, Cpu, AlertTriangle } from 'lucide-react';

const STATUS = {
  'runtime verified': {
    label: 'runtime verified',
    badge: 'border-[var(--verified-border)] bg-[var(--verified-soft)] text-[var(--verified-solid)]',
    Icon: ShieldCheck,
  },
  'config verified': {
    label: 'config verified',
    badge: 'border-[var(--caution-border)] bg-[var(--caution-soft)] text-[var(--caution-solid)]',
    Icon: FileCode,
  },
  'protocol verified': {
    label: 'protocol verified',
    badge: 'border-[var(--primary-border)] bg-[var(--primary-soft)] text-[var(--primary-solid)]',
    Icon: Cpu,
  },
} as const;

export function IntegrationList() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-1.5">
        {INTEGRATIONS.map((h) => (
          <a
            key={h.slug}
            href={`#${h.slug}`}
            className="rounded-[4px] border border-[var(--line)] px-2 py-0.5 font-mono text-xs text-[var(--body)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
          >
            {h.name}
          </a>
        ))}
      </div>
      <div className="space-y-8">
        {INTEGRATIONS.map((h, i) => {
          const style = STATUS[h.status];
          return (
            <section key={h.slug} className="space-y-2.5">
              <h3 id={h.slug} className="scroll-mt-24 font-mono text-sm font-bold text-[var(--ink)]">
                [{String(i + 1).padStart(2, '0')}] {h.name}
              </h3>
              <div className="flex flex-wrap items-center gap-1.5">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-[4px] border px-2 py-0.5 font-mono text-xs font-medium ${style.badge}`}
                >
                  <style.Icon className="h-3 w-3" aria-hidden="true" />
                  <span>[{style.label}]</span>
                </span>
                <span className="font-mono text-xs text-[var(--mute)]">
                  {h.lastVerified ? `last verified ${h.lastVerified}` : 'date unrecorded'}
                </span>
                {!h.snippetVerified && (
                  <span className="inline-flex items-center gap-1 rounded-[4px] border border-[var(--danger-border)] bg-[var(--danger-soft)] px-2 py-0.5 font-mono text-xs font-medium text-[var(--danger-solid)]">
                    <AlertTriangle className="h-3 w-3" aria-hidden="true" />
                    <span>[unverified — check vendor docs]</span>
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-[var(--mute)]">
                config: <span className="text-[var(--body)]">{h.configPath}</span>
              </p>
              <div className="overflow-hidden rounded-[4px] border border-[var(--line)]">
                <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1.5">
                  <span className="truncate font-mono text-xs text-[var(--mute)]">{h.configPath}</span>
                  <CopyButton text={h.snippet} label="copy" className="shrink-0" />
                </div>
                <pre className="overflow-x-auto whitespace-pre px-3 py-3 font-mono text-xs leading-relaxed text-[var(--body)]">
                  {h.snippet}
                </pre>
              </div>
              {h.verifyCommand && (
                <p className="font-mono text-xs text-[var(--mute)]">
                  verify: <span className="text-[var(--body)]">{h.verifyCommand}</span>
                </p>
              )}
              {h.note && <p className="text-xs leading-relaxed text-[var(--mute)]">{h.note}</p>}
              <p className="font-mono text-xs text-[var(--mute)]">
                official docs:{' '}
                {h.officialDocs.map((url) => (
                  <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-[var(--body)] underline decoration-[var(--line-strong)] underline-offset-2 hover:text-[var(--ink)]">
                    {url.replace('https://', '')}
                  </a>
                ))}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
}
