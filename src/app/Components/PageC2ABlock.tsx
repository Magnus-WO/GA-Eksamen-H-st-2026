import { Artikler, Anmeldelser, Media } from "@/payload-types";
import Link from "next/link";
import Image from "next/image";

export type PageC2ABlockProps = {
  title: string;
  text: string;
  link: Artikler | Anmeldelser | number;
  image: Media | number;
};

export default function PageC2ABlock({
  title,
  text,
  link,
  image,
}: PageC2ABlockProps) {
  return (
    <article className="PageC2ABlock">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        {typeof link === "object" && typeof link !== "number" && (
          <Link
            className="Button"
            href={`${link.id}`}
            title={`Gå til ${link.title}`}
          >
            {link.title}
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
