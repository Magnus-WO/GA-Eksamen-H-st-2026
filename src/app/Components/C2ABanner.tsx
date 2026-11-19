import Link from "next/link";
import Image from "next/image";
import type { Filmkvelder, Media } from "@/payload-types";

export type C2AProps = {
  title: string;
  text: string;
  event: Filmkvelder | number;
  image: Media | number;
};

export default function C2ABanner({ title, text, event, image }: C2AProps) {
  return (
    <div className="C2ABanner-container container">
      <article className="C2ABanner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
          {typeof event !== "number" ? (
            <Link
              href={`${event.id}`}
              className="Button"
              title={`Gå til ${event.eventName}`}
            >
              Gå til filmkveld
            </Link>
          ) : (
            <p>Kunne ikke hente linken</p>
          )}
        </div>
        {typeof image !== "number" &&
          typeof image === "object" &&
          image.url && (
            <Image
              src={image.url}
              alt={image.alt}
              width={300}
              height={300}
              className="C2AImage"
            ></Image>
          )}
      </article>
    </div>
  );
}
