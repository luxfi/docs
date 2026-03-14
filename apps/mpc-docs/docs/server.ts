// @ts-nocheck
import { frontmatter as __fd_glob_14 } from "../content/docs/protocols/ringtail.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/protocols/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/protocols/frost.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/protocols/cggmp21.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/protocols/bls.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/quickstart.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/installation.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_7 } from "../content/docs/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_6 } from "../content/docs/hsm.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_5 } from "../content/docs/deployment.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_4 } from "../content/docs/configuration.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_3 } from "../content/docs/bridge.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_2 } from "../content/docs/api.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_1 } from "../content/docs/protocols/meta.json?collection=docs"
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

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_0, "protocols/meta.json": __fd_glob_1, }, {"api.mdx": __fd_glob_2, "bridge.mdx": __fd_glob_3, "configuration.mdx": __fd_glob_4, "deployment.mdx": __fd_glob_5, "hsm.mdx": __fd_glob_6, "index.mdx": __fd_glob_7, "installation.mdx": __fd_glob_8, "quickstart.mdx": __fd_glob_9, "protocols/bls.mdx": __fd_glob_10, "protocols/cggmp21.mdx": __fd_glob_11, "protocols/frost.mdx": __fd_glob_12, "protocols/index.mdx": __fd_glob_13, "protocols/ringtail.mdx": __fd_glob_14, }, {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "bridge.mdx": () => import("../content/docs/bridge.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "deployment.mdx": () => import("../content/docs/deployment.mdx?collection=docs"), "hsm.mdx": () => import("../content/docs/hsm.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "protocols/bls.mdx": () => import("../content/docs/protocols/bls.mdx?collection=docs"), "protocols/cggmp21.mdx": () => import("../content/docs/protocols/cggmp21.mdx?collection=docs"), "protocols/frost.mdx": () => import("../content/docs/protocols/frost.mdx?collection=docs"), "protocols/index.mdx": () => import("../content/docs/protocols/index.mdx?collection=docs"), "protocols/ringtail.mdx": () => import("../content/docs/protocols/ringtail.mdx?collection=docs"), });