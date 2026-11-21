import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-bg">
      <footer className="Footer container">
        <h2>Filmklubben Rulletekst</h2>
        <section className="footer-content">
          <div>
            <p>Filmen er slutt.</p>
            <p>Samtalen begynner.</p>
          </div>
          <ul>
            <li>
              <Link href={`#`}>Anmeldelser</Link>
            </li>
            <li>
              <Link href={`#`}>Filmkvelder</Link>
            </li>
            <li>
              <Link href={`#`}>Artikler</Link>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
