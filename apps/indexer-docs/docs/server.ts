// @ts-nocheck
import { frontmatter as __fd_glob_20 } from "../content/docs/deployment/kubernetes.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_19 } from "../content/docs/deployment/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_18 } from "../content/docs/deployment/docker.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_17 } from "../content/docs/chains/pchain.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_16 } from "../content/docs/chains/multichain.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_15 } from "../content/docs/chains/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_14 } from "../content/docs/chains/evm.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/chains/dag.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/storage.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/quickstart.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/installation.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/explorer.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_7 } from "../content/docs/development.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_6 } from "../content/docs/defi.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_5 } from "../content/docs/configuration.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_4 } from "../content/docs/architecture.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_3 } from "../content/docs/api.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_2 } from "../content/docs/deployment/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/chains/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from '@hanzo/docs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("@hanzo/docs-mdx/runtime/types").InternalTypeConfig & {
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
}>({"doc":{"passthroughs":["extractedReferences","lastModified"]}});

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_0, "chains/meta.json": __fd_glob_1, "deployment/meta.json": __fd_glob_2, }, {"api.mdx": __fd_glob_3, "architecture.mdx": __fd_glob_4, "configuration.mdx": __fd_glob_5, "defi.mdx": __fd_glob_6, "development.mdx": __fd_glob_7, "explorer.mdx": __fd_glob_8, "index.mdx": __fd_glob_9, "installation.mdx": __fd_glob_10, "quickstart.mdx": __fd_glob_11, "storage.mdx": __fd_glob_12, "chains/dag.mdx": __fd_glob_13, "chains/evm.mdx": __fd_glob_14, "chains/index.mdx": __fd_glob_15, "chains/multichain.mdx": __fd_glob_16, "chains/pchain.mdx": __fd_glob_17, "deployment/docker.mdx": __fd_glob_18, "deployment/index.mdx": __fd_glob_19, "deployment/kubernetes.mdx": __fd_glob_20, }, {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "architecture.mdx": () => import("../content/docs/architecture.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "defi.mdx": () => import("../content/docs/defi.mdx?collection=docs"), "development.mdx": () => import("../content/docs/development.mdx?collection=docs"), "explorer.mdx": () => import("../content/docs/explorer.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "storage.mdx": () => import("../content/docs/storage.mdx?collection=docs"), "chains/dag.mdx": () => import("../content/docs/chains/dag.mdx?collection=docs"), "chains/evm.mdx": () => import("../content/docs/chains/evm.mdx?collection=docs"), "chains/index.mdx": () => import("../content/docs/chains/index.mdx?collection=docs"), "chains/multichain.mdx": () => import("../content/docs/chains/multichain.mdx?collection=docs"), "chains/pchain.mdx": () => import("../content/docs/chains/pchain.mdx?collection=docs"), "deployment/docker.mdx": () => import("../content/docs/deployment/docker.mdx?collection=docs"), "deployment/index.mdx": () => import("../content/docs/deployment/index.mdx?collection=docs"), "deployment/kubernetes.mdx": () => import("../content/docs/deployment/kubernetes.mdx?collection=docs"), });