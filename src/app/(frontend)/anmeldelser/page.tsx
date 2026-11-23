import { getPayload } from "payload";
import config from "@payload-config";

import NewReviewBlock from "@/app/Components/NewReviewBlock";

import { log } from "console";
import ReviewCard from "@/app/Components/ReviewCard";

export default async function AnmeldelserPage() {
  const payload = await getPayload({ config });
  const data = await payload.find({ collection: "anmeldelser" });
  const collection = data.docs;
  const page = await payload.findGlobal({ slug: "anmeldelser-side" });

  if (!page || !page.pageBlocks) {
    throw new Error("Kunne ikke hente siden. Prøv igjen senere");
  }
  const blocks = page.pageBlocks;
  log(blocks);

  return (
    <main className="page container">
      <header className="pageHeader">
        <h2>{page.title}</h2>
        {page.subtitle && <p>{page.subtitle}</p>}
      </header>

      {blocks.map((block) => {
        switch (block.blockType) {
          case "new-review-block": {
            return (
              <NewReviewBlock
                title={block.title}
                text={block.text}
                review={block.review}
                image={block.image}
                key={block.id}
              />
            );
          }
        }
      })}
      <section className="grid">
        <>
          {collection.map((review) => {
            return <ReviewCard review={review} key={review.id} />;
          })}{" "}
          {collection.map((review) => {
            return <ReviewCard review={review} key={review.id} />;
          })}
          {collection.map((review) => {
            return <ReviewCard review={review} key={review.id} />;
          })}
        </>
      </section>
    </main>
  );
}
