export interface SourceLibrary {
  name: string;
  components: number;
  retrieval: 'shadcn registry' | 'npm package';
  description: string;
  url: string;
}

export const SOURCES: SourceLibrary[] = [
  {
    name: 'Aceternity UI',
    components: 8,
    retrieval: 'shadcn registry',
    description: 'Animated visual effects and modern interactive primitives.',
    url: 'https://ui.aceternity.com',
  },
  {
    name: 'beUI',
    components: 15,
    retrieval: 'shadcn registry',
    description: 'Refined UI patterns, accessible controls, and composable cards.',
    url: 'https://beui.org',
  },
  {
    name: 'Efferd',
    components: 20,
    retrieval: 'shadcn registry',
    description: 'Clean typographic components, data tables, and minimal surfaces.',
    url: 'https://efferd.dev',
  },
  {
    name: 'Magic UI',
    components: 18,
    retrieval: 'shadcn registry',
    description: 'Specialized landing page components, marquee, and terminal primitives.',
    url: 'https://magicui.design',
  },
  {
    name: 'HeroUI',
    components: 12,
    retrieval: 'npm package',
    description: 'Modern component suite with polished states and system tokens.',
    url: 'https://heroui.com',
  },
];

export const TOTAL_COMPONENTS = 73;
export const TOTAL_SOURCES = 5;

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
    flags: ['--source <name>', '--limit <n>', '--json'],
  },
  {
    command: 'inspect',
    args: '<id>',
    description: 'Read canonical metadata, licensing evidence, upstream URL, and dependency tree.',
    usage: 'tessera inspect magicui/terminal',
    flags: ['--full', '--json'],
  },
  {
    command: 'similar',
    args: '<id>',
    description: 'Find structurally adjacent components in the index to evaluate alternative implementations.',
    usage: 'tessera similar aceternity/lamp',
    flags: ['--limit <n>'],
  },
  {
    command: 'add',
    args: '<id> --dry-run',
    description: 'Simulate component installation without modifying project files or running scripts.',
    usage: 'tessera add magicui/terminal --dry-run',
    flags: ['--dry-run', '--target <path>'],
  },
  {
    command: 'fetch',
    args: '<id>',
    description: 'Retrieve real upstream source files from shadcn registry or npm package tarball.',
    usage: 'tessera fetch magicui/terminal',
    flags: ['--stdout', '--out-dir <path>'],
  },
  {
    command: 'mcp',
    description: 'Run the Model Context Protocol server over stdio for coding agent harnesses.',
    usage: 'tessera mcp',
    flags: ['--verbose'],
  },
  {
    command: 'doctor',
    description: 'Validate local registry state, Node runtime version, and outbound retrieval hosts.',
    usage: 'tessera doctor',
    flags: [],
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
    notes: 'Tested in live interactive sessions with Claude 3.7 / 3.5 Sonnet harness via stdio MCP.',
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
    answer: 'No. The search index is packaged locally inside the CLI. Searching, ranking, inspecting metadata, and finding similar components run completely offline on your machine with zero latency and zero data transfer.',
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
    output: `01  magicui/terminal
    score       0.612
    category    terminal
    source      magicui
    framework   react
    license     MIT
    artifact    retrievable

    why
    [+] exact category match: terminal
    [+] matches aesthetics: technical, dark
    [+] zero runtime dependencies beyond react

02  efferd/code-block
    score       0.448
    category    display
    source      efferd
    framework   react
    license     MIT
    artifact    retrievable

03  aceternity/macbook-scroll
    score       0.321
    category    hero
    source      aceternity
    framework   react
    license     MIT
    artifact    retrievable`,
  },
  {
    id: 'inspect',
    label: 'tessera inspect',
    command: 'tessera inspect magicui/terminal',
    output: `component:      magicui/terminal
version:        1.2.0
upstream:       https://magicui.design/r/terminal.json
retrieval:      shadcn registry
license:        MIT (verified in repository root)
framework:      react >= 18.0.0

dependencies:
  runtime:      clsx, tailwind-merge
  peer:         react, react-dom
  registry:     []

files:
  - components/magicui/terminal.tsx (4.2 kB)
  - hooks/use-terminal-typing.ts   (1.8 kB)

why matched:
  category      terminal (1.00)
  keywords      cli, terminal, monospaced, code (0.85)
  provenance    canonical magicui distribution`,
  },
  {
    id: 'fetch',
    label: 'tessera fetch',
    command: 'tessera fetch magicui/terminal --out-dir ./components/upstream',
    output: `[retrieval] resolving artifact for magicui/terminal...
[network]   GET https://magicui.design/r/terminal.json [200 OK]
[validate]  sha256 integrity matched pinned registry manifest
[license]   MIT confirmed from upstream manifest
[write]     components/upstream/terminal.tsx (4,218 bytes)
[write]     components/upstream/use-terminal-typing.ts (1,842 bytes)

status:     retrieved 2 files.
note:       source not automatically added to project index.
next step:  adapt component tokens to match local design system.`,
  },
  {
    id: 'mcp',
    label: 'tessera mcp',
    command: 'tessera mcp --verbose',
    output: `[mcp] initializing Tessera Model Context Protocol server v0.1.0
[mcp] transport: stdio (JSON-RPC 2.0)
[mcp] local index: 73 components loaded from memory
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
