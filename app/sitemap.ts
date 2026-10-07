import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

const ROUTES = [
  '/',
  '/docs',
  '/docs/cli',
  '/docs/mcp',
  '/docs/integrations',
  '/docs/skill',
  '/docs/architecture',
  '/catalog',
  '/trust',
  '/changelog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
