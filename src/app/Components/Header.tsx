import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="Header container">
      <div className="header-top">
        <p>Filmen er slutt.</p>
        <h1 className="site-header">FILMKLUBBEN RULLETEKST</h1>
        <p>Samtalen begynner.</p>
      </div>
      <nav className="navbar">
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
    </header>
  );
}
