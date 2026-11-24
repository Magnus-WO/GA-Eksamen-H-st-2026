import Link from "next/link";

export type TooManyPagesErrorProps = {
  collectionName: "anmeldelser" | "artikler" | "filmkvelder";
};

export default function TooManyPagesError({
  collectionName,
}: TooManyPagesErrorProps) {
  return (
    <div className="TooManyPagesError">
      <p>
        Vi har dessverre ikke så mange {collectionName} ennå. Men vi liker
        entusiasmen din!
      </p>
      <Link href={`/${collectionName}`}>Trykk her for å gå til side 1</Link>
    </div>
  );
}
