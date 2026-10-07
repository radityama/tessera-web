import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tessera — UI retrieval for coding agents',
    short_name: 'Tessera',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdfcfc',
    theme_color: '#fdfcfc',
    icons: [
      { src: '/icon', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
