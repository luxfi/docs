import type { Metadata } from 'next';

export const baseUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hsm.lux.network',
);

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl,
      siteName: 'Lux HSM Docs',
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@luxnetwork',
      creator: '@luxnetwork',
      ...override.twitter,
    },
    metadataBase: baseUrl,
  };
}
