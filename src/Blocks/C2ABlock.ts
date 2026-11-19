import { Block, slugField } from "payload";

export const C2ABlock: Block = {
  slug: "call-to-action-block",
  interfaceName: "CallToActionBlock",
  labels: {
    plural: "Call to action blocks",
    singular: "Call to action blocks",
  },
  fields: [
    {
      name: "title",
      label: "Overskrift",
      type: "text",
      required: true,
      unique: true,
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
      type: "text",
      label: "Tekst",
      required: true,
    },
    {
      name: "eventLink",
      label: "Lenke til arrangement",
      type: "relationship",
      relationTo: "filmkvelder",
      required: true,
    },
    slugField({ useAsSlug: "title" }),
  ],
};
