import type { ReactNode } from 'react';
import { HomeLayout } from '@hanzo/docs/ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
