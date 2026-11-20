import { type Anmeldelser } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export type ReviewsReelProps = {
  reviews: Anmeldelser[];
  heading: string;
};

export default function ReviewsReel({ reviews, heading }: ReviewsReelProps) {
  return (
    <div className="reviewsReel-bg">
      <section className="ReviewsReel-container container">
        <h2>{heading}</h2>
        {typeof reviews !== "number" && (
          //
          <div className="reel">
            {reviews.map((review: Anmeldelser) => (
              <article
                className={`Card Card${review.variation} noise-texture`}
                key={review.id}
              >
                {typeof review.mainImage === "object" &&
                  review.mainImage?.url && (
                    <Image
                      src={review.mainImage.url}
                      alt={review.mainImage.alt}
                      width={300}
                      height={300}
                    />
                  )}
                <div className="content">
                  <h3>{review.title}</h3>
                  <p className="score">
                    Terningkast: {review.quickFacts.score}
                  </p>
                  <p className="quote">{review.quote}</p>
                  <Link
                    href={`#`}
                    title={`Les ${review.title}`}
                    className="TertiaryBtn"
                  >
                    Les hele anmeldelsen
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
