import { createMDX } from '@hanzo/docs/mdx/next';
import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['shiki'],
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
};

const withMDX = createMDX({
  outDir: '.docs',
});

export default withMDX(config);
