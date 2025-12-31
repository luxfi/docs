// @ts-nocheck
import { browser } from '@hanzo/docs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("@hanzo/docs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "build/index.mdx": () => import("../content/docs/build/index.mdx?collection=docs"), "learn/architecture.mdx": () => import("../content/docs/learn/architecture.mdx?collection=docs"), "learn/index.mdx": () => import("../content/docs/learn/index.mdx?collection=docs"), "learn/tokenomics.mdx": () => import("../content/docs/learn/tokenomics.mdx?collection=docs"), "nodes/index.mdx": () => import("../content/docs/nodes/index.mdx?collection=docs"), "reference/index.mdx": () => import("../content/docs/reference/index.mdx?collection=docs"), }),
};
export default browserCollections;