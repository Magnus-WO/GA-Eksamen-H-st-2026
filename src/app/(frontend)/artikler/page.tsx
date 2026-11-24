import { getPayload } from "payload";
import config from "@payload-config";

import PageHeader from "@/app/Components/PageHeader";
import Pagination from "@/app/Components/Pagination";
import PageC2ABlock from "@/app/Components/PageC2ABlock";
import ArticleCard from "@/app/Components/ArticleCard";

export default async function ArtiklerPage() {
  const payload = await getPayload({ config });
  const page = await payload.findGlobal({ slug: "artikler-side" });
  const articlesData = await payload.find({
    collection: "artikler",
    limit: 10,
    page: 1,
  });

  const collection = articlesData.docs;

  if (!page || !page.pageBlocks) {
    throw new Error("Kunne ikke hente siden nå. Beklager det :(");
  }

  const blocks = page.pageBlocks;

  return (
    <main className="page container">
      <PageHeader title={page.title} subtitle={page.subtitle} />

      {blocks.map((block) => {
        switch (block.blockType) {
          case "article-c2a-block": {
            return (
              <PageC2ABlock
                title={block.title}
                text={page.subtitle}
                link={block.articleLink}
                image={block.image}
                key={block.id}
              />
            );
          }
        }
      })}
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
