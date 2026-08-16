import { source } from '@/lib/source';

type Page = ReturnType<typeof source.getPages>[number];

/** One page as a model reads it: title, canonical URL, source file, body. */
export async function getLLMText(page: Page) {
  const processed = await page.data.getText('processed');
  return `# ${page.data.title}
URL: https://docs.lux.network${page.url}
Source: https://github.com/luxfi/docs/blob/main/apps/docs/content/docs/${page.path}

${page.data.description ?? ''}

${processed}`;
}
