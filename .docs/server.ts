// @ts-nocheck
import { frontmatter as __fd_glob_11 } from "../content/docs/nodes/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/reference/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/learn/tokenomics.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/learn/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_7 } from "../content/docs/learn/architecture.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_6 } from "../content/docs/build/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_5 } from "../content/docs/index.mdx?collection=docs&only=frontmatter"
import { default as __fd_glob_4 } from "../content/docs/reference/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/nodes/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/learn/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/build/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from '@hanzo/docs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("@hanzo/docs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_0, "build/meta.json": __fd_glob_1, "learn/meta.json": __fd_glob_2, "nodes/meta.json": __fd_glob_3, "reference/meta.json": __fd_glob_4, }, {"index.mdx": __fd_glob_5, "build/index.mdx": __fd_glob_6, "learn/architecture.mdx": __fd_glob_7, "learn/index.mdx": __fd_glob_8, "learn/tokenomics.mdx": __fd_glob_9, "reference/index.mdx": __fd_glob_10, "nodes/index.mdx": __fd_glob_11, }, {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "build/index.mdx": () => import("../content/docs/build/index.mdx?collection=docs"), "learn/architecture.mdx": () => import("../content/docs/learn/architecture.mdx?collection=docs"), "learn/index.mdx": () => import("../content/docs/learn/index.mdx?collection=docs"), "learn/tokenomics.mdx": () => import("../content/docs/learn/tokenomics.mdx?collection=docs"), "reference/index.mdx": () => import("../content/docs/reference/index.mdx?collection=docs"), "nodes/index.mdx": () => import("../content/docs/nodes/index.mdx?collection=docs"), });