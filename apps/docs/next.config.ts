import { createMDX } from '@hanzo/docs/mdx/next';
import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  serverExternalPackages: ['shiki'],
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  outDir: '.docs',
});

export default withMDX(config);
