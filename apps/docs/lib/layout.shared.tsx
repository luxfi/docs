import type { BaseLayoutProps } from '@hanzo/docs/ui/layouts/shared';
import { NetworkIcon, ServerIcon, WalletIcon } from 'lucide-react';

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
