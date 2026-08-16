import { docs } from '@/.docs/server';
import { loader } from '@hanzo/docs/core/source';
import { icons } from 'lucide-react';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  // Frontmatter and meta.json name icons by their lucide name. Without a
  // resolver the name is rendered as text, so a page called Staking read
  // "LayersStaking" in the sidebar.
  icon(name) {
    if (name && name in icons) {
      return createElement(icons[name as keyof typeof icons]);
    }
    return undefined;
  },
});
