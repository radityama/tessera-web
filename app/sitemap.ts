import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { source } from '@/lib/source';

const STATIC_ROUTES = [
  '/',
  '/catalog',
  '/trust',
  '/changelog',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const docsRoutes = source.getPages().map((page) => page.url);
  return [...STATIC_ROUTES, ...docsRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
