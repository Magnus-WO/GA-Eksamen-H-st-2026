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
    },
    slugField({ useAsSlug: "heading" }),
  ],
};
