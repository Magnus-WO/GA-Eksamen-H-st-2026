import { Artikler } from "@/payload-types";
import Link from "next/link";
import Image from "next/image";

export type ArticleCardProps = {
  article: Artikler;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article
      className={`Card Card${article.variation} noise-texture`}
      key={article.id}
    >
      {typeof article.mainImage === "object" && article.mainImage?.url && (
        <Image
          src={article.mainImage.url}
          alt={article.mainImage.alt}
          width={300}
          height={300}
        />
      )}
      <div className="content">
        <h3>{article.title}</h3>
        {article.subtitle && <p className="quote">{article.subtitle}</p>}
        <Link
          href={`#`}
          title={`Les om ${article.title}`}
          className="TertiaryBtn"
        >
          Les artikkelen
        </Link>
      </div>
    </article>
  );
}
