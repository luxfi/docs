import type { ReactNode } from 'react';
import { DocsLayout } from '@hanzo/docs/ui/layouts/docs';
import { baseOptions, logo } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();
  
  return (
    <DocsLayout
      tree={source.pageTree}
      {...base}
      nav={{
        ...base.nav,
        title: (
          <>
            {logo}
            <span className="font-semibold max-md:hidden">Lux Docs</span>
          </>
        ),
      }}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}
