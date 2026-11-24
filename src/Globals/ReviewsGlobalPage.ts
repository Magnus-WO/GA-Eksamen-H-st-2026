import { NewReviewBlock } from "@/Blocks/NewReviewBlock";
import { GlobalConfig, slugField } from "payload";

export const ReviewsGlobalPage: GlobalConfig = {
  slug: "anmeldelser-side",

  fields: [
    {
      name: "title",
      label: "Sidetittel",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Undertittel",
      type: "text",
      required: false,
    },
    slugField(),

    {
      name: "pageBlocks",
      label: "layout",
      type: "blocks",
      blocks: [NewReviewBlock],
      required: false,
    },
  ],
};
