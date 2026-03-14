import { resolve } from 'path';
import createBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from '@hanzo/docs/mdx/next';
import type { NextConfig } from 'next';

const withAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const config: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@hanzo/mdx:collections/server': resolve(__dirname, './docs/server.ts'),
      '@hanzo/mdx:collections/browser': resolve(__dirname, './docs/browser.ts'),
      '@hanzo/mdx:collections/dynamic': resolve(__dirname, './docs/dynamic.ts'),
    };
    return config;
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  serverExternalPackages: [
    'shiki',
  ],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX();

export default withAnalyzer(withMDX(config as any) as NextConfig);
