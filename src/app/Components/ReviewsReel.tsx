import { type Anmeldelser } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import ReviewCard from "./ReviewCard";

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
              <ReviewCard review={review} key={review.id} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
