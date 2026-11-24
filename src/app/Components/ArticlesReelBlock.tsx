import { type Artikler } from "@/payload-types";
import ArticleCard from "./ArticleCard";
import Link from "next/link";

export type ArticlesReelProps = {
  articles: Artikler[];
  heading: string;
};

export default function ArticlesReel({ articles, heading }: ArticlesReelProps) {
  return (
    <div className="articlesReel-bg">
      <section className="ArticlesReel-container container">
        <h2>
          <Link href={`/artikler`} title="Se alle artikler">
            {heading}
          </Link>
        </h2>
        <div className="reel">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
