// @ts-nocheck
import { frontmatter as __fd_glob_21 } from "../content/docs/frontend/theming.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_20 } from "../content/docs/frontend/testing.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_19 } from "../content/docs/frontend/setup.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_18 } from "../content/docs/frontend/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_17 } from "../content/docs/deployment/kubernetes.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_16 } from "../content/docs/deployment/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_15 } from "../content/docs/deployment/environment.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_14 } from "../content/docs/deployment/docker.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/backend/indexing.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/backend/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/backend/database.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/backend/architecture.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/quickstart.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/indexer.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_7 } from "../content/docs/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_6 } from "../content/docs/development.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_5 } from "../content/docs/configuration.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_4 } from "../content/docs/api.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_3 } from "../content/docs/frontend/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/deployment/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/backend/meta.json?collection=docs"
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

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_0, "backend/meta.json": __fd_glob_1, "deployment/meta.json": __fd_glob_2, "frontend/meta.json": __fd_glob_3, }, {"api.mdx": __fd_glob_4, "configuration.mdx": __fd_glob_5, "development.mdx": __fd_glob_6, "index.mdx": __fd_glob_7, "indexer.mdx": __fd_glob_8, "quickstart.mdx": __fd_glob_9, "backend/architecture.mdx": __fd_glob_10, "backend/database.mdx": __fd_glob_11, "backend/index.mdx": __fd_glob_12, "backend/indexing.mdx": __fd_glob_13, "deployment/docker.mdx": __fd_glob_14, "deployment/environment.mdx": __fd_glob_15, "deployment/index.mdx": __fd_glob_16, "deployment/kubernetes.mdx": __fd_glob_17, "frontend/index.mdx": __fd_glob_18, "frontend/setup.mdx": __fd_glob_19, "frontend/testing.mdx": __fd_glob_20, "frontend/theming.mdx": __fd_glob_21, }, {"api.mdx": () => import("../content/docs/api.mdx?collection=docs"), "configuration.mdx": () => import("../content/docs/configuration.mdx?collection=docs"), "development.mdx": () => import("../content/docs/development.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "indexer.mdx": () => import("../content/docs/indexer.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "backend/architecture.mdx": () => import("../content/docs/backend/architecture.mdx?collection=docs"), "backend/database.mdx": () => import("../content/docs/backend/database.mdx?collection=docs"), "backend/index.mdx": () => import("../content/docs/backend/index.mdx?collection=docs"), "backend/indexing.mdx": () => import("../content/docs/backend/indexing.mdx?collection=docs"), "deployment/docker.mdx": () => import("../content/docs/deployment/docker.mdx?collection=docs"), "deployment/environment.mdx": () => import("../content/docs/deployment/environment.mdx?collection=docs"), "deployment/index.mdx": () => import("../content/docs/deployment/index.mdx?collection=docs"), "deployment/kubernetes.mdx": () => import("../content/docs/deployment/kubernetes.mdx?collection=docs"), "frontend/index.mdx": () => import("../content/docs/frontend/index.mdx?collection=docs"), "frontend/setup.mdx": () => import("../content/docs/frontend/setup.mdx?collection=docs"), "frontend/testing.mdx": () => import("../content/docs/frontend/testing.mdx?collection=docs"), "frontend/theming.mdx": () => import("../content/docs/frontend/theming.mdx?collection=docs"), });