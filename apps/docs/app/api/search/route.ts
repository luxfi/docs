import { source } from '@/lib/source';
import { createFromSource } from '@hanzo/docs/core/search/server';

// The search index, exported as a static file the client searches locally —
// this site is a static export, so there is no server to query at runtime.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
