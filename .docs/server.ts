// @ts-nocheck
import { frontmatter as __fd_glob_26 } from "../content/docs/reference/sdk-js.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_25 } from "../content/docs/reference/sdk-go.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_24 } from "../content/docs/reference/platform.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_23 } from "../content/docs/reference/json-rpc.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_22 } from "../content/docs/reference/info.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_21 } from "../content/docs/reference/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_20 } from "../content/docs/reference/health.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_19 } from "../content/docs/nodes/validator.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_18 } from "../content/docs/nodes/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_17 } from "../content/docs/nodes/full-node.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_16 } from "../content/docs/nodes/archive.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_15 } from "../content/docs/learn/tokenomics.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_14 } from "../content/docs/learn/post-quantum.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_13 } from "../content/docs/learn/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_12 } from "../content/docs/learn/consensus.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_11 } from "../content/docs/learn/architecture.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_10 } from "../content/docs/build/tutorials.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_9 } from "../content/docs/build/subnets.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_8 } from "../content/docs/build/sdks.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_7 } from "../content/docs/build/index.mdx?collection=docs&only=frontmatter"
import { frontmatter as __fd_glob_6 } from "../content/docs/build/contracts.mdx?collection=docs&only=frontmatter"
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

export const docs = await create.docsLazy("docs", "content/docs", {"meta.json": __fd_glob_0, "build/meta.json": __fd_glob_1, "learn/meta.json": __fd_glob_2, "nodes/meta.json": __fd_glob_3, "reference/meta.json": __fd_glob_4, }, {"index.mdx": __fd_glob_5, "build/contracts.mdx": __fd_glob_6, "build/index.mdx": __fd_glob_7, "build/sdks.mdx": __fd_glob_8, "build/subnets.mdx": __fd_glob_9, "build/tutorials.mdx": __fd_glob_10, "learn/architecture.mdx": __fd_glob_11, "learn/consensus.mdx": __fd_glob_12, "learn/index.mdx": __fd_glob_13, "learn/post-quantum.mdx": __fd_glob_14, "learn/tokenomics.mdx": __fd_glob_15, "nodes/archive.mdx": __fd_glob_16, "nodes/full-node.mdx": __fd_glob_17, "nodes/index.mdx": __fd_glob_18, "nodes/validator.mdx": __fd_glob_19, "reference/health.mdx": __fd_glob_20, "reference/index.mdx": __fd_glob_21, "reference/info.mdx": __fd_glob_22, "reference/json-rpc.mdx": __fd_glob_23, "reference/platform.mdx": __fd_glob_24, "reference/sdk-go.mdx": __fd_glob_25, "reference/sdk-js.mdx": __fd_glob_26, }, {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "build/contracts.mdx": () => import("../content/docs/build/contracts.mdx?collection=docs"), "build/index.mdx": () => import("../content/docs/build/index.mdx?collection=docs"), "build/sdks.mdx": () => import("../content/docs/build/sdks.mdx?collection=docs"), "build/subnets.mdx": () => import("../content/docs/build/subnets.mdx?collection=docs"), "build/tutorials.mdx": () => import("../content/docs/build/tutorials.mdx?collection=docs"), "learn/architecture.mdx": () => import("../content/docs/learn/architecture.mdx?collection=docs"), "learn/consensus.mdx": () => import("../content/docs/learn/consensus.mdx?collection=docs"), "learn/index.mdx": () => import("../content/docs/learn/index.mdx?collection=docs"), "learn/post-quantum.mdx": () => import("../content/docs/learn/post-quantum.mdx?collection=docs"), "learn/tokenomics.mdx": () => import("../content/docs/learn/tokenomics.mdx?collection=docs"), "nodes/archive.mdx": () => import("../content/docs/nodes/archive.mdx?collection=docs"), "nodes/full-node.mdx": () => import("../content/docs/nodes/full-node.mdx?collection=docs"), "nodes/index.mdx": () => import("../content/docs/nodes/index.mdx?collection=docs"), "nodes/validator.mdx": () => import("../content/docs/nodes/validator.mdx?collection=docs"), "reference/health.mdx": () => import("../content/docs/reference/health.mdx?collection=docs"), "reference/index.mdx": () => import("../content/docs/reference/index.mdx?collection=docs"), "reference/info.mdx": () => import("../content/docs/reference/info.mdx?collection=docs"), "reference/json-rpc.mdx": () => import("../content/docs/reference/json-rpc.mdx?collection=docs"), "reference/platform.mdx": () => import("../content/docs/reference/platform.mdx?collection=docs"), "reference/sdk-go.mdx": () => import("../content/docs/reference/sdk-go.mdx?collection=docs"), "reference/sdk-js.mdx": () => import("../content/docs/reference/sdk-js.mdx?collection=docs"), });