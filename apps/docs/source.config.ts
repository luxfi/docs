import { defineConfig, defineDocs } from '@hanzo/docs/mdx/config';

export const docs = defineDocs({
  docs: {
    async: true,
    // The markdown each page compiled from, kept on the page object so the
    // /llms-full.txt route and the search index read the same words a person
    // reads.
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {},
});

export default defineConfig({});
