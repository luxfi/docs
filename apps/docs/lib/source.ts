import { docs } from '@/docs/server';
import { loader } from '@hanzo/docs/core/source';
import { Icon } from '@/components/icons';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/',
  source: docs.toSource(),
  // Frontmatter and meta.json name icons by their lucide name. Without a
  // resolver the name is rendered as text, so a page called Staking read
  // "LayersStaking" in the sidebar.
  icon: (name) => (name ? createElement(Icon, { name }) : undefined),
});
