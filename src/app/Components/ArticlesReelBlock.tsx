import { type Artikler } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export type ArticlesReelProps = {
  articles: Artikler[];
  heading: string;
};

export default function ArticlesReel({ articles, heading }: ArticlesReelProps) {
  return (
    <div className="articlesReel-bg">
      <section className="ArticlesReel-container container">
        <h2>{heading}</h2>
        <div className="reel">
          {articles.map((article) => (
            <article
              className={`Card Card${article.variation} noise-texture`}
              key={article.id}
            >
              {typeof article.mainImage === "object" &&
                article.mainImage?.url && (
                  <Image
                    src={article.mainImage.url}
                    alt={article.mainImage.alt}
                    width={300}
                    height={300}
                  />
                )}
              <div className="content">
                <h3>{article.title}</h3>
                {article.subtitle && (
                  <p className="quote">{article.subtitle}</p>
                )}
                <Link
                  href={`#`}
                  title={`Les om ${article.title}`}
                  className="TertiaryBtn"
                >
                  Les artikkelen
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
