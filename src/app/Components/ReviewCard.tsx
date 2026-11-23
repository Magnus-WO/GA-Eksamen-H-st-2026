import { Anmeldelser } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export type ReviewCardProps = {
  review: Anmeldelser;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className={`Card Card${review.variation} noise-texture`}>
      {typeof review.mainImage === "object" && review.mainImage?.url && (
        <Image
          src={review.mainImage.url}
          alt={review.mainImage.alt}
          width={300}
          height={300}
        />
      )}
      <div className="content">
        <h3>{review.title}</h3>
        <p className="score">Terningkast: {review.quickFacts.score}</p>
        <p className="quote">{review.quote}</p>
        <Link href={`#`} title={`Les ${review.title}`} className="TertiaryBtn">
          Les hele anmeldelsen
        </Link>
      </div>
    </article>
  );
}
