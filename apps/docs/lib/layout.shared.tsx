import type { BaseLayoutProps } from '@hanzo/docs/ui/layouts/shared';
import { NetworkIcon, ServerIcon, WalletIcon } from 'lucide-react';

// The mark, as the favicon draws it.
function LuxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      <path d="M50 85 L15 25 L85 25 Z" transform="translate(0 -5)" />
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
