'use client';

import React, { useMemo, useState } from 'react';
import type { CatalogEntry } from '@/lib/catalog';
import { CATALOG_CATEGORIES, CATALOG_SOURCES } from '@/lib/catalog';

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex items-center gap-2 text-[11px] text-[var(--mute)]">
      <span>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[var(--canvas)] border border-[var(--line)] rounded-[4px] px-2 py-1 text-xs text-[var(--ink)] cursor-pointer"
      >
        <option value="">all</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

export function CatalogTable({ entries }: { entries: CatalogEntry[] }) {
  const [query, setQuery] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [license, setLicense] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      if (source && e.source !== source) return false;
      if (category && e.category !== category) return false;
      if (license === 'known' && e.license.status !== 'known') return false;
      if (license === 'unknown' && e.license.status !== 'unknown') return false;
      if (license === 'permitted' && e.license.redistribution !== 'permitted') return false;
      if (
        q &&
        !`${e.id} ${e.name} ${e.description} ${e.tags.join(' ')}`.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
  }, [entries, query, source, category, license]);

  return (
    <div className="w-full">
      <div className="px-5 sm:px-8 py-4 border-b border-[var(--line)] bg-[var(--surface-soft)] flex flex-wrap items-center gap-x-4 gap-y-3">
        <label className="flex items-center gap-2 text-[11px] text-[var(--mute)]">
          <span>filter</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="name, id, tag…"
            className="bg-[var(--canvas)] border border-[var(--line)] rounded-[4px] px-2 py-1 text-xs text-[var(--ink)] placeholder:text-[var(--mute)] w-44"
          />
        </label>
        <Select label="source" value={source} onChange={setSource} options={CATALOG_SOURCES} />
        <Select label="category" value={category} onChange={setCategory} options={CATALOG_CATEGORIES} />
        <Select
          label="license"
          value={license}
          onChange={setLicense}
          options={['known', 'unknown', 'permitted']}
        />
        <span className="text-[11px] text-[var(--mute)] tabular-nums">
          {filtered.length} / {entries.length}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="px-5 sm:px-8 py-10 text-xs text-[var(--mute)]">
          No components match. Clear the filters to see the full index.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <caption className="sr-only">
              Indexed UI components with source, category, framework, license, retrieval method, and
              upstream link
            </caption>
            <thead>
              <tr className="text-left text-[var(--mute)] border-b border-[var(--line)]">
                <th scope="col" className="py-2.5 px-5 sm:px-8 font-bold">COMPONENT</th>
                <th scope="col" className="py-2.5 px-4 font-bold">SOURCE</th>
                <th scope="col" className="py-2.5 px-4 font-bold">CATEGORY</th>
                <th scope="col" className="py-2.5 px-4 font-bold hidden md:table-cell">FRAMEWORK</th>
                <th scope="col" className="py-2.5 px-4 font-bold">LICENSE</th>
                <th scope="col" className="py-2.5 px-4 font-bold hidden sm:table-cell">RETRIEVAL</th>
                <th scope="col" className="py-2.5 px-5 sm:px-8 font-bold">UPSTREAM</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-b border-[var(--line)] hover:bg-[var(--surface-soft)]">
                  <td className="py-2.5 px-5 sm:px-8">
                    <div className="font-bold text-[var(--ink)]">{e.id}</div>
                    <div className="text-[11px] text-[var(--mute)]">{e.name}</div>
                  </td>
                  <td className="py-2.5 px-4 text-[var(--body)]">{e.source}</td>
                  <td className="py-2.5 px-4 text-[var(--body)]">{e.category}</td>
                  <td className="py-2.5 px-4 text-[var(--body)] hidden md:table-cell">
                    {e.frameworks.join(', ') || '—'}
                  </td>
                  <td className="py-2.5 px-4 text-[var(--body)]">
                    {e.license.status === 'known' ? (e.license.identifier ?? 'known') : 'unknown'}
                  </td>
                  <td className="py-2.5 px-4 text-[var(--mute)] hidden sm:table-cell">{e.retrieval}</td>
                  <td className="py-2.5 px-5 sm:px-8">
                    {e.upstream ? (
                      <a
                        href={e.upstream}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-sweep text-[var(--body)] hover:text-[var(--ink)]"
                      >
                        upstream →
                      </a>
                    ) : (
                      <span className="text-[var(--mute)]">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
