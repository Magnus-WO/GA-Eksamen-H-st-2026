import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      <header className="Header ">
        <div className="header-top container">
          <p>Filmen er slutt.</p>
          <h1 className="site-header ">FILMKLUBBEN RULLETEKST</h1>
          <p>Samtalen begynner.</p>
        </div>
      </header>
      <nav className="navbar container">
        <ul>
          <li>
            <Link href={`/anmeldelser`}>Anmeldelser</Link>
          </li>
          <li>
            <Link href={`/artikler`}>Artikler</Link>
          </li>
          <li>
            <Link href={`/filmkvelder`}>Filmkvelder</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
