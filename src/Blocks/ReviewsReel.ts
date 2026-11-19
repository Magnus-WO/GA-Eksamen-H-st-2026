import { Block, slugField } from "payload";

export const ReviewsReelBlock: Block = {
  slug: "anmeldelser-reel",
  interfaceName: "ReviewsReelBlock",
  fields: [
    {
      name: "heading",
      label: "Overskrift",
      type: "text",
      required: true,
    },
    {
      name: "reviews",
      label: "Anmeldelser",
      type: "relationship",
      relationTo: "anmeldelser",
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
