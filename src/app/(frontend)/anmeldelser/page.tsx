import { getPayload } from "payload";
import config from "@payload-config";
import { log } from "console";

import NewReviewBlock from "@/app/Components/NewReviewBlock";
import ReviewCard from "@/app/Components/ReviewCard";
import PageHeader from "@/app/Components/PageHeader";
import Pagination from "@/app/Components/Pagination";

export default async function AnmeldelserPage() {
  const payload = await getPayload({ config });
  const reviewsData = await payload.find({
    collection: "anmeldelser",
    pagination: true,
    limit: 10,
    page: 1,
  });

  const collection = reviewsData.docs;

  const page = await payload.findGlobal({ slug: "anmeldelser-side" });

  if (!page || !page.pageBlocks) {
    throw new Error("Kunne ikke hente siden. Prøv igjen senere");
  }
  const blocks = page.pageBlocks;
  log(reviewsData);

  return (
    <main className="page container">
      <PageHeader title={page.title} subtitle={page.subtitle} />

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
          })}
        </>
      </section>
      <Pagination
        pageNumber={reviewsData.page}
        hasNextPage={reviewsData.hasNextPage}
        hasPrevPage={reviewsData.hasPrevPage}
        prevPage={reviewsData.prevPage}
        nextPage={reviewsData.nextPage}
        totalPages={reviewsData.totalPages}
      />
    </main>
  );
}
