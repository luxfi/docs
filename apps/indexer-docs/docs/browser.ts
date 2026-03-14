// @ts-nocheck
import { browser } from '@hanzo/docs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("@hanzo/docs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
    docs: {
      /**
       * extracted references (e.g. hrefs, paths), useful for analyzing relationships between pages.
       */
      extractedReferences: import("@hanzo/docs-mdx").ExtractedReference[];
    },
  }
} & {
  DocData: {
    docs: {
      /**
       * Last modified date of document file, obtained from version control.
       *
       */
      lastModified?: Date;
    },
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "architecture.mdx": () => import("../content/docs/architecture.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "defi.mdx": () => import("../content/docs/defi.mdx?collection=docs"), "development.mdx": () => import("../content/docs/development.mdx?collection=docs"), "explorer.mdx": () => import("../content/docs/explorer.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "storage.mdx": () => import("../content/docs/storage.mdx?collection=docs"), "chains/dag.mdx": () => import("../content/docs/chains/dag.mdx?collection=docs"), "chains/evm.mdx": () => import("../content/docs/chains/evm.mdx?collection=docs"), "chains/index.mdx": () => import("../content/docs/chains/index.mdx?collection=docs"), "chains/multichain.mdx": () => import("../content/docs/chains/multichain.mdx?collection=docs"), "chains/pchain.mdx": () => import("../content/docs/chains/pchain.mdx?collection=docs"), "deployment/docker.mdx": () => import("../content/docs/deployment/docker.mdx?collection=docs"), "deployment/index.mdx": () => import("../content/docs/deployment/index.mdx?collection=docs"), "deployment/kubernetes.mdx": () => import("../content/docs/deployment/kubernetes.mdx?collection=docs"), }),
};
export default browserCollections;