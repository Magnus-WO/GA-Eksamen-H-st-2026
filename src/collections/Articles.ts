import { CollectionConfig, slugField } from "payload";

export const Articles: CollectionConfig = {
  slug: "artikler",
  labels: { singular: "Artikkel", plural: "Artikler" },
  admin: {
    useAsTitle: "title",
    description: "Her kan du legge til, endre og slette artikler",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Overskrift",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: "Undertittel",
      required: false,
    },
    {
      name: "mainImage",
      label: "Hovedbilde",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      label: "Innhold",
      type: "richText",
      required: true,
    },
    {
      name: "createdBy",
      label: "Skrevet av",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "variation",
      type: "select",
      defaultValue: "--green",
      required: false,
      options: [
        {
          label: "Grå",
          value: "--grey",
        },
        {
          label: "Grønn",
          value: "--green",
        },
        {
          label: "Oransj",
          value: "--orange",
        },
      ],
    },
    slugField(),
  ],
};
