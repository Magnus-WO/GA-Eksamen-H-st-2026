import { CollectionConfig, slugField } from "payload";

export const Reviews: CollectionConfig = {
  slug: "anmeldelser",
  labels: { singular: "Anmeldelse", plural: "Anmeldelser" },
  admin: {
    useAsTitle: "title",
    description: "Her kan du legge til, endre og slette anmeldelser.",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Overskrift",
      type: "text",
      required: true,
    },
    {
      name: "quickFacts",
      label: "Raske fakta",
      type: "group",
      fields: [
        {
          name: "score",
          label: "Terningkast",
          type: "number",
          min: 0,
          required: true,
        },

        {
          name: "director",
          label: "Regissør(er)",
          type: "relationship",
          relationTo: "regissorer",
          hasMany: true,
          required: true,
        },
        {
          name: "writer",
          label: "Skribent(er)",
          type: "relationship",
          relationTo: "skribenter",
          hasMany: true,
          required: true,
        },
        {
          name: "filmLength",
          label: "Lengde på filmen (Ex. 1t 30min)",
          type: "text",
          required: true,
        },
        {
          name: "age",
          label: "Aldersgrense i år",
          type: "number",
          min: 0,
          required: true,
        },
        {
          name: "leadingRoles",
          label: "Hovedrolle(r)",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "quote",
      label: "Sitat (oppsummering)",
      type: "text",
      required: true,
    },

    {
      name: "mainImage",
      label: "Forsidebilde",
      type: "relationship",
      relationTo: "media",
      required: false,
    },
    {
      name: "mainText",
      label: "Innhold",
      type: "richText",
      required: true,
    },
    {
      name: "writtenBy",
      label: "Skrevet av",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    slugField({ useAsSlug: "title" }),
  ],
};
