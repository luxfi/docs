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
  docs: create.doc("docs", {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "development.mdx": () => import("../content/docs/development.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "indexer.mdx": () => import("../content/docs/indexer.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "backend/architecture.mdx": () => import("../content/docs/backend/architecture.mdx?collection=docs"), "backend/database.mdx": () => import("../content/docs/backend/database.mdx?collection=docs"), "backend/index.mdx": () => import("../content/docs/backend/index.mdx?collection=docs"), "backend/indexing.mdx": () => import("../content/docs/backend/indexing.mdx?collection=docs"), "deployment/docker.mdx": () => import("../content/docs/deployment/docker.mdx?collection=docs"), "deployment/environment.mdx": () => import("../content/docs/deployment/environment.mdx?collection=docs"), "deployment/index.mdx": () => import("../content/docs/deployment/index.mdx?collection=docs"), "deployment/kubernetes.mdx": () => import("../content/docs/deployment/kubernetes.mdx?collection=docs"), "frontend/index.mdx": () => import("../content/docs/frontend/index.mdx?collection=docs"), "frontend/setup.mdx": () => import("../content/docs/frontend/setup.mdx?collection=docs"), "frontend/testing.mdx": () => import("../content/docs/frontend/testing.mdx?collection=docs"), "frontend/theming.mdx": () => import("../content/docs/frontend/theming.mdx?collection=docs"), }),
};
export default browserCollections;