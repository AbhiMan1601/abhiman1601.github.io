import type { Metadata } from "next";
import Link from "next/link";
import { aboutMe } from "@/data/aboutme";
import { publicationData, sortPublicationsByDate } from "@/data/publication";

export const metadata: Metadata = {
  title: "Publications",
  description: `Research publications by ${aboutMe.name}`,
};

export default function PublicationsPage() {
  const publications = sortPublicationsByDate(publicationData);

  return (
    <main className="site-shell publications-page">
      <header className="site-header">
        <div className="signal" aria-hidden="true">= = = = = = = = = = = =</div>
        <div className="header-row">
          <Link href="/" className="wordmark">← {aboutMe.name.toLowerCase()}</Link>
          <a href={aboutMe.googleScholarUrl} target="_blank" rel="noreferrer">google scholar ↗</a>
        </div>
        <div className="signal signal-right" aria-hidden="true">= = = = = = = = = = = =</div>
      </header>

      <section className="publications-intro">
        <p className="kicker">Research archive</p>
        <h1>Publications</h1>
        <p>Selected work on decentralized systems, market design, risk, and economic security.</p>
      </section>

      <div className="publication-list">
        {publications.map((publication, index) => (
          <article key={publication.title} className="publication-row">
            <p className="publication-number">[{String(index + 1).padStart(2, "0")}]</p>
            <div>
              <p className="entry-meta">{publication.year} · {publication.conference}</p>
              <h2>
                {publication.paperUrl ? (
                  <a href={publication.paperUrl} target="_blank" rel="noreferrer">{publication.title} ↗</a>
                ) : publication.title}
              </h2>
              <p>{publication.authors}</p>
              {publication.award && <p className="publication-note">+ {publication.award}</p>}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
