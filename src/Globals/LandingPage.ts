import { ArticlesReelBlock } from "@/Blocks/ArticlesReel";
import { C2ABlock } from "@/Blocks/C2ABlock";
import { EventsBlock } from "@/Blocks/EventsBlock";
import { ReviewsReelBlock } from "@/Blocks/ReviewsReel";

import { GlobalConfig } from "payload";

export const LandingPage: GlobalConfig = {
  slug: "landing-page",
  access: { read: () => true },
  fields: [
    {
      name: "layout",
      label: "Bannere",
      type: "blocks",
      blocks: [C2ABlock, ReviewsReelBlock, ArticlesReelBlock, EventsBlock],
    },
  ],
};
