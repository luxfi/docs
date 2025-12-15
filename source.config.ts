import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

export const docs = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      preview: z.string().optional(),
      index: z.boolean().default(false),
      method: z.string().optional(),
    }),
    async: true,
  },
  meta: {
    schema: metaSchema.extend({
      description: z.string().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: async () => {
    const { rehypeCodeDefaultOptions } = await import(
      'fumadocs-core/mdx-plugins/rehype-code'
    );

    return {
      rehypeCodeOptions: {
        langs: ['ts', 'js', 'html', 'tsx', 'mdx', 'go', 'rust', 'bash', 'json', 'yaml', 'toml'],
        inline: 'tailing-curly-colon',
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
        transformers: [...(rehypeCodeDefaultOptions.transformers ?? [])],
      },
    };
  },
});
