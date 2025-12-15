import { createMDX } from 'fumadocs-mdx/next';
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

const withMDX = createMDX();

export default withMDX(config);
