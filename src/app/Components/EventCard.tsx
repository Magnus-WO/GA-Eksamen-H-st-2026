import Link from "next/link";
import Image from "next/image";
import { Filmkvelder } from "@/payload-types";
import { log } from "console";

export type EventCardProps = {
  event: Filmkvelder;
};

export default function EventCard({ event }: EventCardProps) {
  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("nb-NO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Europe/Oslo",
    });
  }
  return (
    <article className="EventCard">
      <div className="imageContainer">
        {typeof event.eventImage === "object" && event.eventImage?.url ? (
          <Image
            src={event.eventImage.url}
            alt={event.eventImage.alt}
            height={150}
            width={150}
          />
        ) : (
          <p>Kunne ikke hente bildet</p>
        )}
      </div>

      <div>
        <h3>{event.eventName}</h3>
        <ul>
          <li>
            Dato: <span>{formatDate(event.eventDate)}</span>
          </li>
          <li>
            Tidspunkt: <span>{event.eventTime}</span>
          </li>
          <li>
            Adresse: <span>{event.eventAddress}</span>
          </li>
        </ul>
      </div>
      <Link
        href={`#`}
        title={`Gå til ${event.eventName}`}
        className="TertiaryBtn"
      >
        Gå til
      </Link>
    </article>
  );
}
