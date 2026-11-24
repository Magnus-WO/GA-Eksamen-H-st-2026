import { Block } from "payload";

export const NewReviewBlock: Block = {
  slug: "new-review-block",
  interfaceName: "NewReviewBlock",
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
      name: "review",
      label: "Anmeldelse",
      type: "relationship",
      relationTo: "anmeldelser",
      hasMany: false,
      required: true,
    },
  ],
};
