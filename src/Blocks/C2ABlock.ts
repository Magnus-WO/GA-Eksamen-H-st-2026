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
      required: false,
      unique: true,
    },
    {
      name: "image",
      label: "Bakgrunnsbilde",
      type: "relationship",
      relationTo: "media",
      required: false,
    },
    {
      name: "text",
      type: "richText",
      label: "Tekst",
      required: false,
    },
    {
      name: "eventLink",
      label: "Lenke til arrangement",
      type: "relationship",
      relationTo: "filmkvelder",
      required: false,
    },
    slugField({ useAsSlug: "title" }),
  ],
};
