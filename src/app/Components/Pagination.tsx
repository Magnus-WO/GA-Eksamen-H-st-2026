import Link from "next/link";

export type PaginationProps = {
  pageNumber?: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null | undefined;
  prevPage: number | null | undefined;
  totalPages: number;
};

export default function Pagination({
  pageNumber,
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
  totalPages,
}: PaginationProps) {
  return (
    <nav className="Pagination">
      <div>
        {hasPrevPage && (
          <Link href={`/anmeldelser/side/${prevPage}`}>Forrige</Link>
        )}
      </div>
      {pageNumber && (
        <div>
          <p>
            {pageNumber}/{totalPages}
          </p>
        </div>
      )}
      <div>
        {hasNextPage && (
          <Link href={`/anmeldelser/side/${nextPage}`}>Neste</Link>
        )}
      </div>
    </nav>
  );
}
