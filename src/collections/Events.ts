import { CollectionConfig, slugField } from "payload";

export const Events: CollectionConfig = {
  slug: "filmkvelder",
  labels: { singular: "Filmkveld", plural: "Filmkvelder" },
  admin: {
    useAsTitle: "eventName",
    description:
      "Her kan du legge til kommende arrangementer, endre og slette de.",
  },
  fields: [
    {
      name: "eventName",
      label: "Hva skal filmkvelden hete?",
      type: "text",
      required: true,
    },
    {
      name: "eventInfo",
      label: "Informasjon om filmkvelden",
      type: "richText",
      required: true,
    },
    {
      name: "eventImage",
      label: "Forsidebilde",
      type: "relationship",
      relationTo: "media",
      required: false,
    },
    {
      name: "eventTime",
      label: "Klokkeslett (f.eks 19:30)",
      type: "text",
      required: true,
    },
    {
      name: "eventDate",
      label: "Dato",
      type: "date",
      required: true,
    },
    {
      name: "eventAddress",
      label: "Adresse",
      type: "text",
      required: true,
    },
    {
      name: "participents",
      label: "Påmeldte",
      type: "array",
      fields: [
        {
          name: "participantInfo",
          type: "group",
          fields: [
            {
              name: "participantName",
              label: "Fullt navn",
              type: "text",
            },
            {
              name: "participantEmail",
              label: "epost",
              type: "email",
            },
            {
              name: "participantAge",
              label: "Alder",
              type: "number",
              min: 0,
            },
          ],
        },
      ],
    },
    {
      name: "eventCreatedBy",
      label: "Arrangør",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    slugField({ useAsSlug: "eventName" }),
  ],
};
