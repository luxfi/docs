import { source } from '@/lib/source';
import { getLLMText } from '@/lib/llm';

// The whole site as one document, for a model's context window. Static: the
// export writes it as a file beside the pages it describes.
export const revalidate = false;

export async function GET() {
  const pages = await Promise.all(source.getPages().map(getLLMText));
  return new Response(pages.join('\n\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
