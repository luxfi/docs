// source.config.ts
import { defineConfig, defineDocs } from "@hanzo/docs/mdx/config";
var docs = defineDocs({
  docs: {
    async: true
  },
  meta: {}
});
var source_config_default = defineConfig({
  mdxOptions: async () => {
    const { rehypeCodeDefaultOptions } = await import("@hanzo/docs/core/mdx-plugins/rehype-code");
    return {
      rehypeCodeOptions: {
        langs: ["ts", "js", "html", "tsx", "mdx", "go", "rust", "bash", "json", "yaml", "toml"],
        inline: "tailing-curly-colon",
        themes: {
          light: "github-light",
          dark: "github-dark"
        },
        transformers: [...rehypeCodeDefaultOptions.transformers ?? []]
      }
    };
  }
});
export {
  source_config_default as default,
  docs
};
