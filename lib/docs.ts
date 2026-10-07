export interface DocNavItem {
  href: string;
  label: string;
  description: string;
}

export const DOC_NAV: DocNavItem[] = [
  { href: '/docs', label: 'Overview', description: 'Start here' },
  { href: '/docs/cli', label: 'CLI', description: 'Command reference' },
  { href: '/docs/mcp', label: 'MCP', description: 'Server and tools' },
  { href: '/docs/integrations', label: 'Integrations', description: 'Harness setups' },
  { href: '/docs/skill', label: 'Skill', description: 'Agent skill' },
  { href: '/docs/architecture', label: 'Architecture', description: 'System layers' },
];

const ORDER = DOC_NAV.map((d) => d.href);

export function docPrevNext(pathname: string): {
  prev: DocNavItem | null;
  next: DocNavItem | null;
} {
  const i = ORDER.indexOf(pathname);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? DOC_NAV[i - 1] : null,
    next: i < DOC_NAV.length - 1 ? DOC_NAV[i + 1] : null,
  };
}
