import { Block, slugField } from "payload";

export const ArticlesReelBlock: Block = {
  slug: "artikler-reel",
  fields: [
    {
      name: "heading",
      label: "Overskrift",
      type: "text",
      required: true,
    },
    {
      name: "articles",
      label: "Artikler",
      type: "relationship",
      relationTo: "artikler",
      hasMany: true,
    },
    slugField({ useAsSlug: "heading" }),
  ],
};
