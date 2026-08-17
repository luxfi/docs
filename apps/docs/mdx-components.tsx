import defaultMdxComponents from '@hanzo/docs/ui/mdx';
import { Tab, Tabs } from '@hanzo/docs/ui/components/tabs';
import { Step, Steps } from '@hanzo/docs/ui/components/steps';
import { Accordion, Accordions } from '@hanzo/docs/ui/components/accordion';
import { TypeTable } from '@hanzo/docs/ui/components/type-table';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    Step,
    Steps,
    Accordion,
    Accordions,
    TypeTable,
    ...components,
  };
}
