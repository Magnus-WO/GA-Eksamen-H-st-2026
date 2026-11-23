import { Anmeldelser, Media } from "@/payload-types";
import Link from "next/link";
import Image from "next/image";

export type NewReviewBlockProps = {
  title: string;
  text: string;
  review: Anmeldelser | number;
  image: Media | number;
};

export default function NewReviewBlock({
  title,
  text,
  review,
  image,
}: NewReviewBlockProps) {
  return (
    <article className="NewReviewBlock">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        {typeof review === "object" && typeof review !== "number" && (
          <Link
            className="Button"
            href={`${review.id}`}
            title={`Gå til ${review.title}`}
          >
            {review.title}
          </Link>
        )}
      </div>
      {typeof image === "object" && typeof image !== "number" && image.url && (
        <Image
          src={image.url}
          alt={image.alt}
          width={300}
          height={300}
          className="reviewBlock-image"
        />
      )}
    </article>
  );
}
