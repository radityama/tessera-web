/**
 * Regenerates `data/index.json` from the published `@tessera-dev/registry`
 * package (same snapshot the CLI bundles). Run with:
 *
 *   bun scripts/sync-index.ts
 *
 * Uses only node builtins + the system `npm`/`tar` binaries. No new
 * dependencies. Re-verify per-source counts against `SOURCES` afterwards —
 * `lib/catalog.ts` asserts them at build time.
 */
import { execSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

interface RawEntry {
  id: string;
  source: string;
  slug: string;
  name: string;
  description?: string;
  category?: string;
  frameworks?: string[];
  visual?: { motion?: string; tags?: string[] };
  license?: { status?: string; identifier?: string; redistribution?: string };
  retrieval?: { kind?: string; itemUrl?: string; package?: string };
  links?: { docs?: string };
}

const dir = mkdtempSync(join(tmpdir(), 'tessera-registry-'));
try {
  console.log(`[sync-index] packing @tessera-dev/registry in ${dir}`);
  execSync('npm pack @tessera-dev/registry --silent', { cwd: dir, stdio: 'pipe' });
  execSync('tar -xzf tessera-dev-registry-*.tgz', { cwd: dir, stdio: 'pipe' });
  const base = join(dir, 'package', 'bundled-registry');
  const sources = readdirSync(base, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
  const entries = [];
  for (const source of sources) {
    const raw: RawEntry[] = JSON.parse(
      readFileSync(join(base, source, 'components.json'), 'utf8')
    );
    for (const e of raw) {
      entries.push({
        id: e.id,
        source: e.source,
        slug: e.slug,
        name: e.name,
        description: e.description ?? '',
        category: e.category ?? 'other',
        frameworks: e.frameworks ?? [],
        motion: e.visual?.motion ?? 'unknown',
        tags: e.visual?.tags ?? [],
        license: {
          status: e.license?.status ?? 'unknown',
          identifier: e.license?.identifier ?? null,
          redistribution: e.license?.redistribution ?? 'unknown',
        },
        retrieval: e.retrieval?.kind ?? 'unknown',
        upstream:
          e.retrieval?.itemUrl ??
          (e.retrieval?.package ? `https://www.npmjs.com/package/${e.retrieval.package}` : null),
        docs: e.links?.docs ?? null,
      });
    }
  }
  entries.sort((a, b) => (a.id < b.id ? -1 : 1));
  writeFileSync('data/index.json', JSON.stringify(entries, null, 1) + '\n');
  const counts: Record<string, number> = {};
  for (const e of entries) counts[e.source] = (counts[e.source] ?? 0) + 1;
  console.log(`[sync-index] wrote data/index.json with ${entries.length} entries`, counts);
} finally {
  rmSync(dir, { recursive: true, force: true });
}
