'use client';

/**
 * Where this site gets its icons.
 *
 * `@hanzogui/*` ship no client directives, so any module the server evaluates —
 * a layout, an MDX page, the source loader — pulls gui in with it, and gui
 * builds its contexts at import time against a React that has no `createContext`
 * on the server. One boundary, declared here, keeps every icon on the client
 * side of it, and every file in the app imports from this one place.
 */
import * as icons from '@hanzogui/lucide-icons-2';
import type { ComponentProps, ComponentType } from 'react';

export { Network, Server, Terminal, Wallet } from '@hanzogui/lucide-icons-2';

export type IconProps = ComponentProps<typeof icons.Network>;

/** An icon content names rather than imports: frontmatter `icon:` and meta.json. */
export function Icon({ name, ...props }: IconProps & { name: string }) {
  const set = icons as unknown as Record<string, ComponentType<IconProps> | undefined>;
  // lucide-react published every icon twice, plain and `…Icon`; this set
  // publishes it once, so a name written against the alias still lands.
  const Found = set[name] ?? set[name.replace(/Icon$/, '')];

  if (!Found) {
    console.warn(`unknown icon: ${name}`);
    return null;
  }

  return <Found {...props} />;
}
