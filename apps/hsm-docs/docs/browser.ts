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
  docs: create.doc("docs", {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "best-practices.mdx": () => import("../content/docs/best-practices.mdx?collection=docs"), "bridge.mdx": () => import("../content/docs/bridge.mdx?collection=docs"), "consensus.mdx": () => import("../content/docs/consensus.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "kms.mdx": () => import("../content/docs/kms.mdx?collection=docs"), "mpc.mdx": () => import("../content/docs/mpc.mdx?collection=docs"), "post-quantum.mdx": () => import("../content/docs/post-quantum.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "providers/aws.mdx": () => import("../content/docs/providers/aws.mdx?collection=docs"), "providers/azure.mdx": () => import("../content/docs/providers/azure.mdx?collection=docs"), "providers/gcp.mdx": () => import("../content/docs/providers/gcp.mdx?collection=docs"), "providers/index.mdx": () => import("../content/docs/providers/index.mdx?collection=docs"), "providers/local.mdx": () => import("../content/docs/providers/local.mdx?collection=docs"), "providers/mldsa.mdx": () => import("../content/docs/providers/mldsa.mdx?collection=docs"), "providers/zymbit.mdx": () => import("../content/docs/providers/zymbit.mdx?collection=docs"), }),
};
export default browserCollections;