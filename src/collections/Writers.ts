import { CollectionConfig } from "payload";

export const Writers: CollectionConfig = {
  slug: "skribenter",
  admin: {
    useAsTitle: "writerName",
    description: "Her kan du legge til, endre og slette skribenter",
  },
  fields: [
    {
      name: "writerName",
      label: "Fullt navn",
      type: "text",
      required: true,
    },
    {
      name: "aboutWriter",
      label: "Om skribenten",
      type: "richText",
      required: false,
    },
    {
      name: "showsWritten",
      label: "Filmer/serier skrevet",
      type: "richText",
      required: false,
    },
  ],
};
