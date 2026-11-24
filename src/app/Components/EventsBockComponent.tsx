import { FilmkvelderBlokk } from "@/payload-types";
import Link from "next/link";

import { RichText } from "@payloadcms/richtext-lexical/react";
import EventCard from "./EventCard";
export type EventsBlockProps = {
  eventsBlock: FilmkvelderBlokk;
};

export default function EventsBlock({ eventsBlock }: EventsBlockProps) {
  const events = eventsBlock.events.filter((event) => {
    return typeof event === "object" && event !== null;
  });

  return (
    <div className="eventsBlock-bg">
      <section className="eventsBlock container">
        <div className="info">
          <h2>
            <Link href={`/filmkvelder`} title="Se alle filmkvelder">
              {eventsBlock.heading}
            </Link>
          </h2>
          <RichText data={eventsBlock.eventsInformation} />
        </div>
        <div className="events">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
