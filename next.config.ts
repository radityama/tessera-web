import type {NextConfig} from 'next';
import { createMDX } from 'fumadocs-mdx/next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  transpilePackages: ['motion'],
};

const withMDX = createMDX();

export default withMDX(nextConfig);
