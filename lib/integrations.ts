import type { VerificationStatus } from './constants';

/**
 * Copy-paste MCP configs per harness. Snippets are taken from the main repo's
 * `docs/integrations/` (each checked against that harness's official docs,
 * last verified 2026-10-06). Anything I wrote by hand instead is marked
 * `snippetVerified: false` and rendered with an [unverified] badge.
 */
export interface Integration {
  slug: string;
  name: string;
  status: VerificationStatus;
  lastVerified: string | null;
  officialDocs: string[];
  configPath: string;
  language: string;
  snippet: string;
  snippetVerified: boolean;
  verifyCommand?: string;
  note?: string;
}

const STDIO_JSON = `{
  "mcpServers": {
    "tessera": {
      "command": "npx",
      "args": ["-y", "@tessera-dev/cli", "mcp"]
    }
  }
}`;

export const INTEGRATIONS: Integration[] = [
  {
    slug: 'claude-code',
    name: 'Claude Code',
    status: 'runtime verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://code.claude.com/docs/en/mcp'],
    configPath: '.mcp.json (project) · claude mcp add (global)',
    language: 'bash',
    snippet: 'claude mcp add --scope user tessera -- npx -y @tessera-dev/cli mcp',
    snippetVerified: true,
    verifyCommand: 'claude mcp list   # expect: tessera ... Connected',
    note: 'Project scope: .mcp.json with an mcpServers block. Claude Code asks for approval on first load.',
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://cursor.com/docs/mcp'],
    configPath: '.cursor/mcp.json (project) · ~/.cursor/mcp.json (global)',
    language: 'json',
    snippet: STDIO_JSON,
    snippetVerified: true,
    note: 'Restart Cursor after editing mcp.json. Project config wins on duplicate server names.',
  },
  {
    slug: 'codex',
    name: 'Codex',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://developers.openai.com/codex/mcp'],
    configPath: '.codex/config.toml (trusted projects) · ~/.codex/config.toml',
    language: 'toml',
    snippet: `[mcp_servers.tessera]
command = "npx"
args = ["-y", "@tessera-dev/cli", "mcp"]`,
    snippetVerified: true,
    verifyCommand: 'codex mcp list',
    note: 'Table name is snake_case mcp_servers. Or: codex mcp add tessera -- npx -y @tessera-dev/cli mcp.',
  },
  {
    slug: 'windsurf',
    name: 'Windsurf',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://docs.devin.ai/desktop/cascade/mcp'],
    configPath: '~/.config/devin/mcp_config.json (global only)',
    language: 'json',
    snippet: STDIO_JSON,
    snippetVerified: true,
    note: 'Windsurf documents only global MCP config. Hard cap of 100 tools across all servers.',
  },
  {
    slug: 'vscode-copilot',
    name: 'VS Code (Copilot)',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://code.visualstudio.com/docs/copilot/chat/mcp-servers'],
    configPath: '.vscode/mcp.json (uses "servers") · .mcp.json (uses "mcpServers")',
    language: 'json',
    snippet: `{
  "servers": {
    "tessera": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@tessera-dev/cli", "mcp"]
    }
  }
}`,
    snippetVerified: true,
    note: 'The two workspace formats use different top-level keys: servers vs mcpServers.',
  },
  {
    slug: 'cline',
    name: 'Cline',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://docs.cline.bot/mcp/mcp-overview'],
    configPath: '~/.cline/data/settings/cline_mcp_settings.json (global)',
    language: 'json',
    snippet: `{
  "mcpServers": {
    "tessera": {
      "command": "npx",
      "args": ["-y", "@tessera-dev/cli", "mcp"],
      "disabled": false,
      "autoApprove": []
    }
  }
}`,
    snippetVerified: true,
    note: 'Project-scoped MCP is not documented; treat MCP as global for Cline.',
  },
  {
    slug: 'roo-code',
    name: 'Roo Code',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://roocodeinc.github.io/Roo-Code/features/mcp/using-mcp-in-roo/'],
    configPath: '.roo/mcp.json (project) · global mcp_settings.json via UI',
    language: 'json',
    snippet: STDIO_JSON,
    snippetVerified: true,
    note: 'Project config overrides global on duplicate names. Invoked via use_mcp_tool.',
  },
  {
    slug: 'gemini-cli',
    name: 'Gemini CLI',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://geminicli.com/docs/tools/mcp-server'],
    configPath: '.gemini/settings.json (project) · ~/.gemini/settings.json (global)',
    language: 'json',
    snippet: STDIO_JSON,
    snippetVerified: true,
    verifyCommand: 'gemini mcp add tessera npx -y @tessera-dev/cli mcp',
  },
  {
    slug: 'zed',
    name: 'Zed',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://zed.dev/docs/ai/mcp'],
    configPath: '.zed/settings.json · user settings.json (key: context_servers)',
    language: 'json',
    snippet: `{
  "context_servers": {
    "tessera": {
      "command": "npx",
      "args": ["-y", "@tessera-dev/cli", "mcp"]
    }
  }
}`,
    snippetVerified: true,
    note: 'The key must be context_servers. Zed supports tools, not MCP resources.',
  },
  {
    slug: 'continue',
    name: 'Continue',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://docs.continue.dev/'],
    configPath: '.continue/mcpServers/tessera.yaml · ~/.continue/config.yaml',
    language: 'yaml',
    snippet: `name: tessera
version: 1.0.0
schema: v1
mcpServers:
  - name: tessera
    type: stdio
    command: npx
    args:
      - "-y"
      - "@tessera-dev/cli"
      - "mcp"`,
    snippetVerified: true,
    note: 'mcpServers is a YAML array of objects with inline names, not a map.',
  },
  {
    slug: 'opencode',
    name: 'OpenCode',
    status: 'config verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://opencode.ai/docs/mcp-servers/'],
    configPath: 'opencode.json · ~/.config/opencode/opencode.json (key: mcp)',
    language: 'json',
    snippet: `{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "tessera": {
      "type": "local",
      "command": ["npx", "-y", "@tessera-dev/cli", "mcp"],
      "enabled": true
    }
  }
}`,
    snippetVerified: true,
    verifyCommand: 'opencode mcp list',
    note: 'Top-level key is mcp and command is an array. Raise timeout: first npx run downloads the package.',
  },
  {
    slug: 'generic-mcp',
    name: 'Generic MCP Client',
    status: 'protocol verified',
    lastVerified: '2026-10-06',
    officialDocs: ['https://modelcontextprotocol.io/'],
    configPath: 'any JSON-RPC 2.0 stdio client',
    language: 'bash',
    snippet: 'npx -y @tessera-dev/cli mcp',
    snippetVerified: true,
    note: 'Speaks MCP over stdin/stdout. Six tools; no resources, no sampling.',
  },
];
