import { DocsLayout } from '@hanzo/docs/ui/layouts/docs';
import { baseOptions, linkItems, logo } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.getPageTree()}
      links={linkItems.filter((item) => item.type === 'icon')}
      nav={{
        ...base.nav,
        title: (
          <>
            {logo}
            <span className="font-medium max-md:hidden">Lux CLI</span>
          </>
        ),
      }}
      sidebar={{
        tabs: {
          transform(option, node) {
            if (!node.icon) return option;

            return {
              ...option,
              icon: (
                <div className="[&_svg]:size-full rounded-lg size-full text-brand max-md:bg-brand/10 max-md:border max-md:p-1.5">
                  {node.icon}
                </div>
              ),
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
