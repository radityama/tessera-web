import index from '@/data/index.json';

export interface SourceLibrary {
  id: string;
  name: string;
  components: number;
  retrieval: 'shadcn registry' | 'npm package';
  description: string;
  url: string;
}

const SOURCE_DEFINITIONS: Omit<SourceLibrary, 'components'>[] = [
  {
    name: 'Aceternity UI',
    id: 'aceternity',
    retrieval: 'shadcn registry',
    description: 'Animated visual effects and modern interactive primitives.',
    url: 'https://ui.aceternity.com',
  },
  {
    name: 'beUI',
    id: 'beui',
    retrieval: 'shadcn registry',
    description: 'Refined UI patterns, accessible controls, and composable cards.',
    url: 'https://beui.dev',
  },
  {
    name: 'Efferd',
    id: 'efferd',
    retrieval: 'shadcn registry',
    description: 'Clean typographic components, data tables, and minimal surfaces.',
    url: 'https://efferd.com',
  },
  {
    name: 'Magic UI',
    id: 'magicui',
    retrieval: 'shadcn registry',
    description: 'Specialized landing page components, marquee, and terminal primitives.',
    url: 'https://magicui.design',
  },
  {
    name: 'HeroUI',
    id: 'heroui',
    retrieval: 'npm package',
    description: 'Modern component suite with polished states and system tokens.',
    url: 'https://heroui.com',
  },
];

export const SOURCES: SourceLibrary[] = SOURCE_DEFINITIONS.map((source) => ({
  ...source,
  components: index.filter((entry) => entry.source === source.id).length,
}));
export const TOTAL_COMPONENTS = index.length;
export const TOTAL_SOURCES = new Set(index.map((entry) => entry.source)).size;

export interface WorkflowStage {
  number: string;
  name: string;
  summary: string;
  detail: string;
  action: string;
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    number: '01',
    name: 'SEARCH',
    summary: 'Search pinned local index',
    detail: 'Coding agent evaluates user prompt against 73 indexed components using deterministic lexical ranking. Zero remote network calls.',
    action: 'tessera search "<query>"',
  },
  {
    number: '02',
    name: 'INSPECT',
    summary: 'Inspect ranking & provenance',
    detail: 'Examine exact ranking reasons (why it matched), dependencies, framework requirements, license type, and evidence markers.',
    action: 'tessera inspect <component-id>',
  },
  {
    number: '03',
    name: 'RETRIEVE',
    summary: 'Fetch canonical upstream source',
    detail: 'Retrieve untampered source code directly from upstream registry or npm. Source is downloaded but never automatically executed.',
    action: 'tessera fetch <component-id>',
  },
  {
    number: '04',
    name: 'ADAPT',
    summary: 'Translate to project design system',
    detail: 'Agent adopts composition, layout, and logic while stripping third-party visual identity to match the target project tokens.',
    action: 'agent adapts composition',
  },
  {
    number: '05',
    name: 'COHESION',
    summary: 'Run project-level cohesion pass',
    detail: 'Verify aesthetic fit against surrounding codebase. If a retrieved component violates project constraints, agent rejects and refines.',
    action: 'agent rejects or commits',
  },
];

export interface CliCommand {
  command: string;
  args?: string;
  description: string;
  usage: string;
  flags?: string[];
}

export const CLI_COMMANDS: CliCommand[] = [
  {
    command: 'search',
    args: '<query>',
    description: 'Rank indexed components locally using deterministic BM25-style lexical matching.',
    usage: 'tessera search "dark technical terminal hero"',
    flags: ['--source <name>', '--category <name>', '--limit <n>', '--json'],
  },
  {
    command: 'inspect',
    args: '<id>',
    description: 'Read canonical metadata, licensing evidence, upstream URL, and dependency tree.',
    usage: 'tessera inspect magicui/terminal',
    flags: ['--json'],
  },
  {
    command: 'similar',
    args: '<id>',
    description: 'Find structurally adjacent components in the index to evaluate alternative implementations.',
    usage: 'tessera similar magicui/terminal',
    flags: ['--limit <n>', '--json'],
  },
  {
    command: 'add',
    args: '<id> --dry-run',
    description: 'Simulate component installation without modifying project files or running scripts.',
    usage: 'tessera add magicui/terminal --dry-run',
    flags: ['--dry-run', '--no-dry-run', '--json'],
  },
  {
    command: 'fetch',
    args: '<id>',
    description: 'Retrieve real upstream source files from shadcn registry or npm package tarball.',
    usage: 'tessera fetch magicui/terminal --dry-run',
    flags: ['--dry-run', '--output <dir>', '--force', '--json'],
  },
  {
    command: 'mcp',
    description: 'Run the Model Context Protocol server over stdio for coding agent harnesses.',
    usage: 'tessera mcp',
    flags: [],
  },
  {
    command: 'doctor',
    description: 'Validate local registry state, Node runtime version, and outbound retrieval hosts.',
    usage: 'tessera doctor',
    flags: ['--json'],
  },
];

export interface McpTool {
  name: string;
  signature: string;
  purpose: string;
}

export const MCP_TOOLS: McpTool[] = [
  {
    name: 'search_components',
    signature: 'query: string, source?: string, limit?: number',
    purpose: 'Search indexed UI components by intent, keywords, or visual patterns.',
  },
  {
    name: 'get_component',
    signature: 'id: string',
    purpose: 'Retrieve complete metadata, ranking factors, license status, and author provenance.',
  },
  {
    name: 'get_component_artifact',
    signature: 'id: string',
    purpose: 'Inspect raw code artifacts, file manifest, and target framework requirements.',
  },
  {
    name: 'get_installation',
    signature: 'id: string',
    purpose: 'Inspect required npm dependencies, peer dependencies, and registry install instructions.',
  },
  {
    name: 'find_similar_components',
    signature: 'id: string, limit?: number',
    purpose: 'Discover alternate implementations across other indexed sources.',
  },
  {
    name: 'search_patterns',
    signature: 'pattern: string',
    purpose: 'Query indexed layout patterns (hero, pricing, terminal, navigation, tabs, modal).',
  },
];

export type VerificationStatus = 'runtime verified' | 'config verified' | 'protocol verified';

export interface AgentHarness {
  name: string;
  status: VerificationStatus;
  notes: string;
}

export const AGENT_HARNESSES: AgentHarness[] = [
  {
    name: 'Claude Code',
    status: 'runtime verified',
    notes: 'Tested in live interactive sessions via stdio MCP.',
  },
  {
    name: 'Codex',
    status: 'config verified',
    notes: 'Configured via CLI integration instructions and system prompt injection.',
  },
  {
    name: 'Cursor',
    status: 'config verified',
    notes: 'Configured via Cursor Features > MCP Servers with stdio command definition.',
  },
  {
    name: 'Windsurf',
    status: 'config verified',
    notes: 'Compatible via Cascade MCP configuration settings and agent rules.',
  },
  {
    name: 'OpenCode',
    status: 'config verified',
    notes: 'Configured via OpenCode tool specification and local execution bridge.',
  },
  {
    name: 'Cline',
    status: 'config verified',
    notes: 'Configured via Cline MCP settings panel using stdio npx command.',
  },
  {
    name: 'Roo Code',
    status: 'config verified',
    notes: 'Configured via Roo Code custom tool / MCP provider definition.',
  },
  {
    name: 'VS Code Copilot',
    status: 'config verified',
    notes: 'Configured via experimental MCP bridge and agent skill markdown.',
  },
  {
    name: 'Gemini CLI',
    status: 'config verified',
    notes: 'Configured via system instructions or tool execution proxy.',
  },
  {
    name: 'Zed',
    status: 'config verified',
    notes: 'Configured via Zed assistant context server settings.',
  },
  {
    name: 'Continue',
    status: 'config verified',
    notes: 'Configured via Continue config.json mcpServers block.',
  },
  {
    name: 'Generic MCP Client',
    status: 'protocol verified',
    notes: 'Conforms to JSON-RPC 2.0 Model Context Protocol over standard input/output.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Is Tessera another component library?',
    answer: 'No. Tessera provides zero UI components of its own. It does not publish buttons, modals, or themes. Tessera is a retrieval layer that indexes existing third-party libraries so coding agents can find and evaluate real implementations instead of hallucinating them.',
  },
  {
    question: 'Does Tessera copy component source into its registry?',
    answer: 'No. The Tessera registry only stores metadata: component names, descriptions, categories, dependencies, licenses, and upstream URLs. When an agent fetches a component, Tessera downloads the file directly from the original upstream registry or npm repository at runtime.',
  },
  {
    question: 'Does search require a network connection?',
    answer: 'No. The search index is packaged locally inside the CLI. Searching, ranking, inspecting metadata, and finding similar components run completely offline on your machine with no network round-trips and zero data transfer.',
  },
  {
    question: 'Does Tessera automatically install dependencies or execute code?',
    answer: 'Never. Retrieved code is strictly text downloaded to an output directory or stdout. Tessera never executes postinstall scripts, never runs arbitrary remote code, and never alters package.json unless explicitly directed by the agent or developer.',
  },
  {
    question: 'How does Tessera handle licensing?',
    answer: 'Tessera records upstream license metadata with evidence when known (e.g. MIT, Apache-2.0). If an upstream component has unknown licensing or non-commercial redistribution terms, Tessera explicitly flags it. It never assumes or fabricates license permissions.',
  },
  {
    question: 'Why not just ask the coding agent to search the web?',
    answer: 'Web search returns marketing pages, documentation portals, and blog articles rather than structured component metadata. It fails to expose exact package dependencies, ranking scores, or retrievable code artifacts, and it requires high-latency network round-trips for every query.',
  },
  {
    question: 'Is Tessera tied to React forever?',
    answer: 'In v0.1.0, the 5 indexed libraries are React-based. However, the retrieval core and registry schema are framework-agnostic. Support for Vue, Svelte, and vanilla HTML primitives is planned for future index expansions.',
  },
  {
    question: 'What is the "Reuse composition, not identity" philosophy?',
    answer: 'When an agent retrieves an accordion or animated terminal, it should keep the compositional structure (keyboard accessibility, DOM hierarchy, animation timings) but adapt class names, color tokens, and spacing to match your project\'s established design system.',
  },
];

export const TERMINAL_DEMOS = [
  {
    id: 'search',
    label: 'tessera search',
    command: 'tessera search "dark technical terminal hero"',
    // TODO(verify-against-cli): display copy; canonical real outputs live in SEARCH_EXAMPLES.
    output: `01  efferd/hero-1
    score       0.640
    category    hero
    source      efferd
    framework   react
    license     unknown — verify upstream terms before reuse
    artifact    retrievable

    why
    [+] exact category match: hero
    [+] matches query terms in name/description/tags
    [+] zero runtime dependencies

02  magicui/terminal
    score       0.628
    category    terminal
    source      magicui
    framework   react
    license     MIT
    artifact    retrievable

03  aceternity/terminal
    score       0.588
    category    terminal
    source      aceternity
    framework   react
    license     LicenseRef-Aceternity, redistribution restricted
    artifact    retrievable`,
  },
  {
    id: 'inspect',
    label: 'tessera inspect',
    command: 'tessera inspect magicui/terminal',
    output: `magicui/terminal — Terminal
A terminal component
category: terminal (secondary: —)
frameworks: react
visual: aesthetics=[terminal] tags=[terminal, component] motion=unknown density=unknown
dependencies: none
installation: command — npx shadcn@latest add https://magicui.design/r/terminal.json — Add through the shadcn CLI from the upstream registry URL, then adapt the copied source to your design tokens.
retrieval: shadcn-registry — https://magicui.design/r/terminal.json
license: MIT, redistribution permitted
links: homepage=https://magicui.design/ docs=https://magicui.design/docs
provenance: adapter=shadcn-registry upstream=terminal derived=[category, secondaryCategories, visual.aesthetics, visual.tags, visual.motion]`,
  },
  {
    id: 'fetch',
    label: 'tessera fetch',
    command: 'tessera fetch magicui/terminal --dry-run',
    output: `magicui/terminal — 1 file(s) from magicui
upstream: https://magicui.design/r/terminal.json
license: MIT, redistribution permitted
dependencies: none
registry dependencies: none
install: npx shadcn@latest add https://magicui.design/r/terminal.json

files:
  registry/magicui/terminal.tsx (7716 bytes)

Tessera wrote these files only because you asked. Nothing was installed or executed.`,
  },
  {
    id: 'mcp',
    label: 'tessera mcp',
    command: 'tessera mcp',
    // TODO(verify-against-cli): startup banner captured from docs, not a live stdio session.
    output: `[mcp] initializing Tessera Model Context Protocol server v0.1.0
[mcp] transport: stdio (JSON-RPC 2.0)
[mcp] local index: ${TOTAL_COMPONENTS} components loaded from memory
[mcp] registered 6 tools:
      - search_components (BM25 lexical ranking)
      - get_component (metadata, provenance, license)
      - get_component_artifact (source files manifest)
      - get_installation (dependencies and registry rules)
      - find_similar_components (structural alternatives)
      - search_patterns (layout pattern catalog)
[mcp] ready for coding agent requests on stdin.`,
  },
];

// Real outputs captured from `@tessera-dev/cli@0.1.0`
// (`tessera search "<query>"`, 2026-10-07). Trimmed to top 3 for display.
export const SEARCH_EXAMPLES: Record<string, string> = {
  'dark technical terminal hero': `01  efferd/hero-1
    score       0.640
    category    hero
    source      efferd
    framework   react
    license     unknown — verify upstream terms before reuse
    artifact    retrievable

    why
    [+] exact category match: hero
    [+] matches query terms in name/description/tags
    [+] zero runtime dependencies

02  magicui/terminal
    score       0.628
    category    terminal
    source      magicui
    framework   react
    license     MIT
    artifact    retrievable

03  aceternity/terminal
    score       0.588
    category    terminal
    source      aceternity
    framework   react
    license     LicenseRef-Aceternity, redistribution restricted
    artifact    retrievable`,
  'minimal data table': `01  heroui/table
    score       0.765
    category    table
    source      heroui
    framework   react
    license     MIT
    artifact    not retrievable (npm-package)

    why
    [+] exact category match: table
    [+] matches aesthetics: minimal
    [+] known license (MIT)

02  beui/table
    score       0.641
    category    table
    source      beui
    framework   react
    license     MIT
    artifact    retrievable

03  beui/table-editable
    score       0.641
    category    table
    source      beui
    framework   react
    license     MIT
    artifact    retrievable`,
  'lamp lighting effect': `01  magicui/aurora-text
    score       0.622
    category    background
    source      magicui
    framework   react
    license     MIT
    artifact    retrievable

    why
    [+] no required runtime dependencies
    [+] known license (MIT)

02  magicui/meteors
    score       0.622
    category    background
    source      magicui
    framework   react
    license     MIT
    artifact    retrievable

03  magicui/neon-gradient-card
    score       0.622
    category    card
    source      magicui
    framework   react
    license     MIT
    artifact    retrievable`,
  'marquee cards': `01  efferd/pricing-1
    score       0.680
    category    pricing
    source      efferd
    framework   react
    license     MIT
    artifact    retrievable

    why
    [+] matches query terms in name/description/tags
    [+] no required runtime dependencies
    [+] known license (MIT)

02  magicui/marquee
    score       0.680
    category    animation
    source      magicui
    framework   react
    license     MIT
    artifact    retrievable

03  beui/marquee
    score       0.550
    category    animation
    source      beui
    framework   react
    license     MIT
    artifact    retrievable`,
};

export interface AgentSkillStep {
  step: string;
  title: string;
  desc: string;
}

export const AGENT_SKILL_STEPS: AgentSkillStep[] = [
  {
    step: '01',
    title: 'Decompose Intent',
    desc: 'Agent breaks complex UI requests into discrete primitive requirements (e.g. animated hero vs. metric counter).',
  },
  {
    step: '02',
    title: 'Detect Design Tokens',
    desc: 'Agent reads the local project config (Tailwind tokens, CSS variables, border radius scale) before searching.',
  },
  {
    step: '03',
    title: 'Search & Evaluate',
    desc: 'Agent calls Tessera MCP, inspects ranking explanations, and checks whether external dependencies conflict with local ones.',
  },
  {
    step: '04',
    title: 'License & Provenance Check',
    desc: 'Agent confirms acceptable license terms and evidence before retrieving code files.',
  },
  {
    step: '05',
    title: 'Adapt Composition',
    desc: 'Agent keeps the underlying layout and accessibility logic, but strips third-party styling classes to adopt local project tokens.',
  },
  {
    step: '06',
    title: 'Cohesion Audit',
    desc: 'If a retrieved component feels visually discordant or over-engineered, the agent rejects it in favor of an intentional local design.',
  },
];

export interface SafetyPrinciple {
  marker: string;
  title: string;
  description: string;
}

export const SAFETY_PRINCIPLES: SafetyPrinciple[] = [
  {
    marker: '[+]',
    title: 'License evidence when known',
    description:
      'When an upstream repository provides an explicit LICENSE file (e.g. MIT, Apache-2.0), Tessera records the license identifier and the evidence path.',
  },
  {
    marker: '[+]',
    title: 'Unknown stays unknown',
    description:
      'If a component’s licensing cannot be definitively verified, Tessera marks it as unknown. It never guesses or defaults to permissive licenses.',
  },
  {
    marker: '[+]',
    title: 'Restricted redistribution surfaced',
    description:
      'Components with non-commercial, attribution-only, or proprietary caveats are prominently flagged so agents do not accidentally commit non-compliant code.',
  },
  {
    marker: '[+]',
    title: 'Upstream source is never executed',
    description:
      'Tessera treats retrieved source code as plain text. It never executes npm lifecycle scripts, pre/postinstall hooks, or arbitrary code from remote registries.',
  },
  {
    marker: '[+]',
    title: 'No silent file overwriting',
    description:
      'The CLI requires explicit output directories or outputs directly to stdout. It will never overwrite existing codebase files without developer consent.',
  },
  {
    marker: '[+]',
    title: 'Pinned retrieval hosts',
    description:
      'Retrieval requests are constrained strictly to verified upstream registries and canonical npm package mirrors pinned in the metadata manifest.',
  },
];

export interface Limitation {
  marker: string;
  title: string;
  description: string;
}

export const LIMITATIONS: Limitation[] = [
  {
    marker: '[-]',
    title: 'Five sources indexed',
    description:
      'v0.1 indexes 73 components across Aceternity UI, beUI, Efferd, Magic UI, and HeroUI. It is not an exhaustive index of all open-source frontend code.',
  },
  {
    marker: '[-]',
    title: 'React-focused ecosystem',
    description:
      'All current indexed components target modern React. Vue, Svelte, and vanilla web components are architecturally planned but not present in the v0.1 index.',
  },
  {
    marker: '[-]',
    title: 'Lexical ranking, not vector embeddings',
    description:
      'Tessera uses deterministic lexical keyword matching (BM25-style) with category and aesthetic weighting. It does not run opaque local embedding models.',
  },
  {
    marker: '[-]',
    title: 'add command is dry-run only',
    description:
      'tessera add simulates component installation and dependency manifests. To actually write files to disk, developers or agents use tessera fetch with explicit targets.',
  },
  {
    marker: '[-]',
    title: 'No recursive dependency tree fetching',
    description:
      'If a retrieved component references another internal component, fetch does not automatically spider upstream URLs. Dependencies are displayed in metadata for explicit retrieval.',
  },
  {
    marker: '[-]',
    title: 'Most harness integrations are config-verified',
    description:
      'Claude Code has undergone full runtime test suites. Other agent integrations (Cursor, Windsurf, Zed, etc.) are currently verified against standard config schemas.',
  },
];

export interface LocalOperation {
  operation: string;
  network: string;
  detail: string;
}

export const LOCAL_OPERATIONS: LocalOperation[] = [
  {
    operation: 'tessera search',
    network: 'local',
    detail: 'Indexed metadata is compiled directly into the CLI package. Queries evaluate offline with zero outbound packets.',
  },
  {
    operation: 'tessera inspect',
    network: 'local',
    detail: 'Resolves dependency graph, ranking criteria, and license attributes from the embedded index.',
  },
  {
    operation: 'tessera similar',
    network: 'local',
    detail: 'Computes nearest component neighbors across alternate sources using deterministic lexical scoring.',
  },
  {
    operation: 'tessera fetch',
    network: 'network (explicit)',
    detail: 'Transfers upstream code files directly from shadcn registry hosts or npm. Occurs only when explicitly called.',
  },
  {
    operation: 'tessera add --dry-run',
    network: 'local',
    detail: 'Simulates package installation and output directory writes without touching disks or executing scripts.',
  },
];
