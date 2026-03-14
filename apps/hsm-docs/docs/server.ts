// @ts-nocheck
import { frontmatter as __fd_glob_18 } from "../content/docs/providers/zymbit.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_17 } from "../content/docs/providers/mldsa.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_16 } from "../content/docs/providers/local.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_15 } from "../content/docs/providers/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_14 } from "../content/docs/providers/gcp.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/providers/azure.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/providers/aws.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/quickstart.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/post-quantum.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/mpc.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/kms.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_7 } from "../content/docs/installation.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_6 } from "../content/docs/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_5 } from "../content/docs/consensus.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_4 } from "../content/docs/bridge.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_3 } from "../content/docs/best-practices.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_2 } from "../content/docs/api.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_1 } from "../content/docs/providers/meta.json?collection=docs"
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

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_0, "providers/meta.json": __fd_glob_1, }, {"api.mdx": __fd_glob_2, "best-practices.mdx": __fd_glob_3, "bridge.mdx": __fd_glob_4, "consensus.mdx": __fd_glob_5, "index.mdx": __fd_glob_6, "installation.mdx": __fd_glob_7, "kms.mdx": __fd_glob_8, "mpc.mdx": __fd_glob_9, "post-quantum.mdx": __fd_glob_10, "quickstart.mdx": __fd_glob_11, "providers/aws.mdx": __fd_glob_12, "providers/azure.mdx": __fd_glob_13, "providers/gcp.mdx": __fd_glob_14, "providers/index.mdx": __fd_glob_15, "providers/local.mdx": __fd_glob_16, "providers/mldsa.mdx": __fd_glob_17, "providers/zymbit.mdx": __fd_glob_18, }, {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "best-practices.mdx": () => import("../content/docs/best-practices.mdx?collection=docs"), "bridge.mdx": () => import("../content/docs/bridge.mdx?collection=docs"), "consensus.mdx": () => import("../content/docs/consensus.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "kms.mdx": () => import("../content/docs/kms.mdx?collection=docs"), "mpc.mdx": () => import("../content/docs/mpc.mdx?collection=docs"), "post-quantum.mdx": () => import("../content/docs/post-quantum.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "providers/aws.mdx": () => import("../content/docs/providers/aws.mdx?collection=docs"), "providers/azure.mdx": () => import("../content/docs/providers/azure.mdx?collection=docs"), "providers/gcp.mdx": () => import("../content/docs/providers/gcp.mdx?collection=docs"), "providers/index.mdx": () => import("../content/docs/providers/index.mdx?collection=docs"), "providers/local.mdx": () => import("../content/docs/providers/local.mdx?collection=docs"), "providers/mldsa.mdx": () => import("../content/docs/providers/mldsa.mdx?collection=docs"), "providers/zymbit.mdx": () => import("../content/docs/providers/zymbit.mdx?collection=docs"), });