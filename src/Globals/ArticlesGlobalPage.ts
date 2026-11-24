import { GlobalConfig, slugField } from "payload";
import { ArticleC2ABlock } from "@/Blocks/ArticleC2ABlock";

export const ArticlesGlobalPage: GlobalConfig = {
  slug: "artikler-side",
  fields: [
    {
      name: "title",
      label: "Overskrift",
      type: "text",
      required: true,
      defaultValue: "Artikler",
    },
    {
      name: "subtitle",
      label: "Undertittel",
      type: "text",
      required: true,
    },

    {
      name: "pageBlocks",
      label: "layout",
      type: "blocks",
      blocks: [ArticleC2ABlock],
      required: false,
    },
    slugField({ useAsSlug: "title" }),
  ],
};
