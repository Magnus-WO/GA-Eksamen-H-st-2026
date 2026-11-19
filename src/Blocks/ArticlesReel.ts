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
      minRows: 1,
      required: true,
    },
    {
      name: "variation",
      type: "select",
      defaultValue: "--blue",
      options: [
        {
          label: "Rosa",
          value: "--pink",
        },
        {
          label: "Gul",
          value: "--yellow",
        },
        {
          label: "Blå",
          value: "--blue",
        },
      ],
    },
    slugField({ useAsSlug: "heading" }),
  ],
};
