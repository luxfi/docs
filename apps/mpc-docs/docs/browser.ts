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
  docs: create.doc("docs", {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "bridge.mdx": () => import("../content/docs/bridge.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "deployment.mdx": () => import("../content/docs/deployment.mdx?collection=docs"), "hsm.mdx": () => import("../content/docs/hsm.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "protocols/bls.mdx": () => import("../content/docs/protocols/bls.mdx?collection=docs"), "protocols/cggmp21.mdx": () => import("../content/docs/protocols/cggmp21.mdx?collection=docs"), "protocols/frost.mdx": () => import("../content/docs/protocols/frost.mdx?collection=docs"), "protocols/index.mdx": () => import("../content/docs/protocols/index.mdx?collection=docs"), "protocols/ringtail.mdx": () => import("../content/docs/protocols/ringtail.mdx?collection=docs"), }),
};
export default browserCollections;