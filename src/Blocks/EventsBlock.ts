import { Block, slugField } from "payload";

export const EventsBlock: Block = {
  slug: "filmkvelder-blokk",
  fields: [
    {
      name: "heading",
      label: "Overskrift",
      type: "text",
      required: true,
    },
    {
      name: "eventsInformation",
      label: "Mer informasjon",
      type: "richText",
      required: false,
    },
    {
      name: "events",
      label: "Arrangementer",
      type: "relationship",
      relationTo: "filmkvelder",
      hasMany: true,
    },
    slugField({ useAsSlug: "heading" }),
  ],
};
