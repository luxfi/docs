import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
} from '@hanzo/docs/ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from '@hanzo/docs/ui/mdx';
import { Tab, Tabs } from '@hanzo/docs/ui/components/tabs';
import { Callout } from '@hanzo/docs/ui/components/callout';
import { TypeTable } from '@hanzo/docs/ui/components/type-table';
import { Accordion, Accordions } from '@hanzo/docs/ui/components/accordion';
import { Step, Steps } from '@hanzo/docs/ui/components/steps';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  // Type assertion to work around TypeScript inference issues with MDX async loading
  const loadFn = (page.data as any).load;
  const { body: Mdx, toc } = await loadFn();

  return (
    <DocsPage toc={toc}>
      <h1 className="text-2xl font-bold mb-4">{page.data.title}</h1>
      {page.data.description && (
        <p className="text-fd-muted-foreground mb-6">{page.data.description}</p>
      )}
      <DocsBody>
        <Mdx
          components={{
            ...defaultMdxComponents,
            Tab,
            Tabs,
            Callout,
            TypeTable,
            Accordion,
            Accordions,
            Step,
            Steps,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
