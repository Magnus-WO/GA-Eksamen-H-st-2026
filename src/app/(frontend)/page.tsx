import C2ABanner from "../Components/C2ABanner";
import { getPayload } from "payload";

import config from "@payload-config";
import ReviewsReel from "../Components/ReviewsReel";

export default async function HomePage() {
  const payload = await getPayload({ config });
  const page = await payload.findGlobal({
    slug: "landing-page",
    depth: 2,
  });

  if (!page || !page.layout) {
    throw new Error("Kunne ikke hente siden");
  }

  const blocks = page.layout;

  return (
    <>
      {blocks.map((block) => {
        switch (block.blockType) {
          case "call-to-action-block": {
            return (
              <C2ABanner
                key={block.id}
                title={block.title}
                text={block.text}
                event={block.eventLink}
                image={block.image}
              ></C2ABanner>
            );
          }
          case "anmeldelser-reel": {
            const reviews = block.reviews.filter(
              (review) => typeof review === "object" && review !== null,
            );
            return (
              <ReviewsReel
                reviews={reviews}
                heading={block.heading}
                key={block.id}
              />
            );
          }
        }
      })}
    </>
  );
}
