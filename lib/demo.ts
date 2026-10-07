export const DEMO_QUERY = 'Build a dark developer-tool hero with a terminal.';

export const DEMO_SEARCH_TOOL = {
  name: 'search_components',
  args: { query: 'dark technical terminal hero', category: 'terminal', limit: 3 },
} as const;

export interface DemoCandidate {
  id: string;
  score: number;
  license: string;
  detail: string;
}

export const DEMO_CANDIDATES: DemoCandidate[] = [
  {
    id: 'magicui/terminal',
    score: 0.68,
    license: 'MIT',
    detail: 'MIT, redistribution permitted · 0 declared deps',
  },
  {
    id: 'aceternity/terminal',
    score: 0.64,
    license: 'LicenseRef-Aceternity',
    detail: 'redistribution restricted · 0 declared deps',
  },
  {
    id: 'beui/not-found-terminal',
    score: 0.523,
    license: 'MIT',
    detail: 'MIT · 3 required runtime deps',
  },
];

export const DEMO_SELECTED_ID = 'magicui/terminal';

export const DEMO_INSPECT = {
  tool: 'get_component',
  id: 'magicui/terminal',
  license: 'MIT',
  framework: 'react',
  retrieval: 'shadcn-registry',
  upstream: 'https://magicui.design/r/terminal.json',
  dependencies: 'none declared',
} as const;

export const DEMO_ARTIFACT = {
  tool: 'get_component_artifact',
  id: 'magicui/terminal',
  file: 'registry/magicui/terminal.tsx',
  license: 'MIT',
} as const;

export const DEMO_FETCH_COMMAND = 'tessera fetch magicui/terminal';

export const DEMO_RESULT_NOTE =
  'Adapted from magicui/terminal (MIT, redistribution permitted). Upstream declares no dependencies, but its source imports motion.';
