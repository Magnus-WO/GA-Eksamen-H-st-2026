import { Block } from "payload";

export const ArticleC2ABlock: Block = {
  slug: "article-c2a-block",
  fields: [
    {
      name: "title",
      label: "Overskrift",
      type: "text",
      required: true,
    },
    {
      name: "image",
      label: "Bilde",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "text",
      label: "Tekst",
      type: "text",
      required: true,
    },
    {
      name: "articleLink",
      label: "Artikkel det lenkes til",
      type: "relationship",
      relationTo: "artikler",
      hasMany: false,
      required: true,
    },
  ],
};
