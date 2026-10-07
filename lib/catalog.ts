import { SOURCES, TOTAL_COMPONENTS } from './constants';
import index from '@/data/index.json';

export interface CatalogLicense {
  status: 'known' | 'unknown';
  identifier: string | null;
  redistribution: string;
}

export interface CatalogEntry {
  id: string;
  source: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  frameworks: string[];
  motion: string;
  tags: string[];
  license: CatalogLicense;
  retrieval: string;
  upstream: string | null;
  docs: string | null;
}

export const CATALOG: CatalogEntry[] = index as CatalogEntry[];

const SOURCE_IDS: Record<string, string> = {
  'Aceternity UI': 'aceternity',
  beUI: 'beui',
  Efferd: 'efferd',
  'Magic UI': 'magicui',
  HeroUI: 'heroui',
};

const sourceCounts = new Map<string, number>();
for (const entry of CATALOG) {
  sourceCounts.set(entry.source, (sourceCounts.get(entry.source) ?? 0) + 1);
}
for (const source of SOURCES) {
  const id = SOURCE_IDS[source.name] ?? source.name;
  const actual = sourceCounts.get(id) ?? 0;
  if (actual !== source.components) {
    throw new Error(
      `[catalog] source "${source.name}" declares ${source.components} components but index.json has ${actual}`
    );
  }
}
if (CATALOG.length !== TOTAL_COMPONENTS) {
  throw new Error(
    `[catalog] TOTAL_COMPONENTS is ${TOTAL_COMPONENTS} but index.json has ${CATALOG.length} entries`
  );
}

export const CATALOG_CATEGORIES = [...new Set(CATALOG.map((e) => e.category))].sort();
export const CATALOG_SOURCES = [...new Set(CATALOG.map((e) => e.source))].sort();
