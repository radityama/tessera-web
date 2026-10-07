if (!process.env.APP_URL && process.env.NODE_ENV === 'production') {
  console.warn(
    '[tessera-web] APP_URL is not set; canonical, sitemap and OG URLs fall back to https://tessera.dev. Set APP_URL for deploy.'
  );
}

export const siteConfig = {
  name: 'Tessera',
  title: 'Tessera — UI retrieval for coding agents',
  description:
    'Search, inspect, and retrieve real UI components from existing libraries before your coding agent generates them from scratch.',
  url: process.env.APP_URL || 'https://tessera.dev',
  github: 'https://github.com/radityama/tessera',
  npm: 'https://www.npmjs.com/package/@tessera-dev/cli',
  version: 'v0.1.0',
  package: '@tessera-dev/cli',
  minNode: '>= 20.0.0',
  license: 'MIT',
  defaultCommand: 'npx -y @tessera-dev/cli search "dark technical terminal hero"',
  keywords: [
    'Tessera',
    'coding agents',
    'UI retrieval',
    'MCP server',
    'component search',
    'Claude Code',
    'Cursor',
    'Codex',
    'shadcn registry',
    'open-source developer tools',
    'local-first',
  ],
};
