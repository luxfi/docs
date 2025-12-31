import defaultComponents from '@hanzo/docs/ui/mdx';
import { Steps, Step } from '@hanzo/docs/ui/components/steps';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMDXComponents(components: Record<string, any>): Record<string, any> {
  return {
    ...defaultComponents,
    Steps,
    Step,
    ...components,
  };
}
