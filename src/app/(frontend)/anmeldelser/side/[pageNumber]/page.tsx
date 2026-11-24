import { getPayload } from "payload";
import config from "@payload-config";

import ReviewCard from "@/app/Components/ReviewCard";
import PageHeader from "@/app/Components/PageHeader";
import Pagination from "@/app/Components/Pagination";
import TooManyPagesError from "@/app/Components/TooManyPagesError";

export type PaginatedAnmeldelserPageProps = {
  params: Promise<{ pageNumber: string }>;
};

export default async function PaginatedAnmeldelserPage({
  params,
}: PaginatedAnmeldelserPageProps) {
  const { pageNumber } = await params;

  const payload = await getPayload({ config });
  const reviewsData = await payload.find({
    collection: "anmeldelser",
    pagination: true,
    limit: 10,
    page: Number(pageNumber),
  });

  const collection = reviewsData.docs;

  const page = await payload.findGlobal({ slug: "anmeldelser-side" });

  if (!page || !page.pageBlocks) {
    throw new Error("Kunne ikke hente siden. Prøv igjen senere");
  }

  return (
    <main className="page container">
      <PageHeader title={page.title} subtitle={page.subtitle} />
      {Number(pageNumber) > reviewsData.totalPages && (
        <TooManyPagesError collectionName="anmeldelser" />
      )}
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
