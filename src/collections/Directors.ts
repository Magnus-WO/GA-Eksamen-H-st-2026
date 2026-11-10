import { CollectionConfig, slugField } from "payload";

export const Directors: CollectionConfig = {
  slug: "regissorer",
  labels: { singular: "Regissør", plural: "Regissører" },
  admin: {
    useAsTitle: "directorName",
    description: "Her kan du legge til, endre og slette regissører.",
  },
  fields: [
    {
      name: "directorName",
      label: "Fullt navn",
      type: "text",
      required: true,
    },
    {
      name: "aboutDirector",
      label: "Om regissøren",
      type: "richText",
      required: false,
    },
    {
      name: "directedMovies",
      label: "Filmer/serier regissert",
      type: "richText",
      required: false,
    },
    slugField({ useAsSlug: "directorName" }),
  ],
};
