import type { BaseLayoutProps } from '@hanzo/docs/ui/layouts/shared';
import { Network, Server, Wallet } from '@/components/icons';

// The mark, as the favicon draws it.
export function LuxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" width={20} height={20} aria-hidden="true" {...props}>
      <path d="M50 85 L15 25 L85 25 Z" transform="translate(0 -5)" />
    </svg>
  );
}

// One element, not a fragment: the header renders the title inside a link and
// inside the mobile trigger, and a pair of siblings there is a list React wants
// keyed. It is also the thing that keeps the mark on the wordmark's centre line.
export const title = (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
    <LuxIcon />
    Lux Docs
  </span>
);

export const baseOptions = (): BaseLayoutProps => ({
  nav: { title },
  links: [
    {
      text: 'Network',
      url: 'https://lux.network',
      icon: <Network />,
    },
    {
      text: 'Explorer',
      url: 'https://explore.lux.network',
      icon: <Server />,
    },
    {
      text: 'Wallet',
      url: 'https://wallet.lux.network',
      icon: <Wallet />,
    },
  ],
  githubUrl: 'https://github.com/luxfi',
});
