import {
  type InferMetaType,
  type InferPageType,
  loader,
} from '@hanzo/docs/core/source';
import { docs } from '@hanzo/mdx:collections/server';
import { lucideIconsPlugin } from '@hanzo/docs/core/source/lucide-icons';

export const source = loader({
  source: docs.toSource(),
  baseUrl: '/docs',
  plugins: [lucideIconsPlugin()],
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;
