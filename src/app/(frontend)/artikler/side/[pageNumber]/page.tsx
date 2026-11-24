import { getPayload } from "payload";
import config from "@payload-config";

import PageHeader from "@/app/Components/PageHeader";
import Pagination from "@/app/Components/Pagination";
import PageC2ABlock from "@/app/Components/PageC2ABlock";
import ArticleCard from "@/app/Components/ArticleCard";
import TooManyPagesError from "@/app/Components/TooManyPagesError";

export type ArtiklerPageProps = {
  params: Promise<{ pageNumber: string }>;
};

export default async function ArtiklerPage({ params }: ArtiklerPageProps) {
  const { pageNumber } = await params;

  const payload = await getPayload({ config });
  const page = await payload.findGlobal({ slug: "artikler-side" });

  const articlesData = await payload.find({
    collection: "artikler",
    pagination: true,
    limit: 10,
    page: Number(pageNumber),
  });

  const collection = articlesData.docs;

  if (!page || !page.pageBlocks) {
    throw new Error("Kunne ikke hente siden nå. Beklager det :(");
  }

  const blocks = page.pageBlocks;

  return (
    <main className="page container">
      <PageHeader title={page.title} subtitle={page.subtitle} />

      {Number(pageNumber) > articlesData.totalPages && (
        <TooManyPagesError collectionName="artikler" />
      )}
      <section className="grid">
        {collection.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </section>
      <Pagination
        hasNextPage={articlesData.hasNextPage}
        hasPrevPage={articlesData.hasPrevPage}
        nextPage={articlesData.nextPage}
        prevPage={articlesData.prevPage}
        pageNumber={articlesData.page}
        totalPages={articlesData.totalPages}
      />
    </main>
  );
}
