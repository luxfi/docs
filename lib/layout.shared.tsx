import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookOpenIcon, CodeIcon, ServerIcon, WalletIcon, ShieldIcon, NetworkIcon } from 'lucide-react';

// Lux Network Icon
function LuxIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

export const logo = (
  <div className="flex items-center gap-2">
    <LuxIcon className="size-5" />
  </div>
);

export const baseOptions = (): BaseLayoutProps => ({
  nav: {
    title: (
      <>
        {logo}
        <span className="font-semibold">Lux Docs</span>
      </>
    ),
  },
  links: [
    {
      text: 'Network',
      url: 'https://lux.network',
      icon: <NetworkIcon />,
    },
    {
      text: 'Explorer',
      url: 'https://explore.lux.network',
      icon: <ServerIcon />,
    },
    {
      text: 'Wallet',
      url: 'https://wallet.lux.network',
      icon: <WalletIcon />,
    },
  ],
  githubUrl: 'https://github.com/luxfi',
});

// Project categories for the docs portal
export const projectCategories = [
  {
    title: 'Core Infrastructure',
    description: 'Node, consensus, and network fundamentals',
    icon: ServerIcon,
    projects: [
      { name: 'Node', href: '/docs/node', description: 'Run a Lux node' },
      { name: 'Consensus', href: '/docs/consensus', description: 'Multi-consensus engine' },
      { name: 'EVM', href: '/docs/evm', description: 'EVM compatibility layer' },
    ],
  },
  {
    title: 'Developer Tools',
    description: 'SDKs, CLIs, and development resources',
    icon: CodeIcon,
    projects: [
      { name: 'SDK', href: '/docs/sdk', description: 'Go SDK for Lux' },
      { name: 'CLI', href: '/docs/cli', description: 'Command line interface' },
      { name: 'Netrunner', href: '/docs/netrunner', description: 'Network testing tool' },
    ],
  },
  {
    title: 'Cryptography',
    description: 'Post-quantum and threshold cryptography',
    icon: ShieldIcon,
    projects: [
      { name: 'Crypto', href: '/docs/crypto', description: 'Cryptographic primitives' },
      { name: 'Threshold', href: '/docs/threshold', description: 'Threshold signatures' },
      { name: 'MPC', href: '/docs/mpc', description: 'Multi-party computation' },
    ],
  },
  {
    title: 'Applications',
    description: 'Wallets, bridges, and DeFi',
    icon: WalletIcon,
    projects: [
      { name: 'Wallet', href: '/docs/wallet', description: 'Lux Wallet' },
      { name: 'Bridge', href: '/docs/bridge', description: 'Cross-chain bridge' },
      { name: 'DEX', href: '/docs/dex', description: 'Decentralized exchange' },
    ],
  },
];
