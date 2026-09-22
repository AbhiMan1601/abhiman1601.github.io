import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { BlogTitles } from "@/components/blog-titles";
import { aboutMe } from "@/data/aboutme";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { newsData } from "@/data/news";
import { publicationData, sortPublicationsByDate } from "@/data/publication";
import { talksData } from "@/data/talks";

const featuredPublications = sortPublicationsByDate(publicationData).slice(0, 4);

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <h2>{children}</h2>
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="signal" aria-hidden="true">= = = = = = = = = = = =</div>
        <div className="header-row">
          <Link href="/" className="wordmark">| {aboutMe.name.toLowerCase()}</Link>
          <nav aria-label="Primary navigation">
            <a href="#work">work</a>
            <a href="#writing">writing</a>
            <a href="#about">about</a>
          </nav>
        </div>
        <div className="signal signal-right" aria-hidden="true">= = = = = = = = = = = =</div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Research · Engineering · Economic security</p>
          <h1 id="hero-title">{aboutMe.name}</h1>
          <p className="hero-role">
            {aboutMe.title} at{" "}
            <a href={aboutMe.institutionUrl} target="_blank" rel="noreferrer">
              {aboutMe.institution}<ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </p>
          <p className="hero-summary">
            I study incentives, adversarial behavior, and market design in decentralized systems.
          </p>
          <div className="hero-links" aria-label="Contact and profiles">
            <a href={`mailto:${aboutMe.email}`}><Mail size={14} />email</a>
            {aboutMe.githubUsername && (
              <a href={`https://github.com/${aboutMe.githubUsername}`} target="_blank" rel="noreferrer"><Github size={14} />github</a>
            )}
            {aboutMe.linkedinUsername && (
              <a href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`} target="_blank" rel="noreferrer"><Linkedin size={14} />linkedin</a>
            )}
            {aboutMe.googleScholarUrl && (
              <a href={aboutMe.googleScholarUrl} target="_blank" rel="noreferrer">scholar ↗</a>
            )}
          </div>
        </div>
        {aboutMe.imageUrl && (
          <div className="portrait-wrap">
            <Image
              src={aboutMe.imageUrl}
              alt={`Portrait of ${aboutMe.name}`}
              width={180}
              height={180}
              priority
              unoptimized
              className="portrait"
            />
          </div>
        )}
      </section>

      <section id="about" className="page-section">
        <SectionHeading number="01">About</SectionHeading>
        <div className="about-grid">
          <p className="side-note">A short introduction, current work, and research interests.</p>
          <div className="prose" dangerouslySetInnerHTML={{ __html: aboutMe.description }} />
        </div>
      </section>

      {newsData.length > 0 && (
        <section id="news" className="page-section">
          <SectionHeading number="02">Updates</SectionHeading>
          <div className="entry-grid">
            {newsData.slice(0, 6).map((item) => (
              <article className="flat-entry" key={`${item.date}-${item.title}`}>
                <p className="entry-meta">{item.date}</p>
                <h3>
                  {item.link ? <a href={item.link} target="_blank" rel="noreferrer">{item.title} ↗</a> : item.title}
                </h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="research" className="page-section">
        <SectionHeading number="03">Selected publications</SectionHeading>
        <div className="entry-grid publication-grid">
          {featuredPublications.map((publication) => (
            <article className="flat-entry" key={publication.title}>
              <p className="entry-meta">{publication.year} · {publication.conference}</p>
              <h3>
                {publication.paperUrl ? <a href={publication.paperUrl} target="_blank" rel="noreferrer">{publication.title} ↗</a> : publication.title}
              </h3>
              <p>{publication.authors}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/publications">View all publications <span>→</span></Link>
      </section>

      <section id="writing" className="page-section">
        <SectionHeading number="04">Latest writing</SectionHeading>
        <BlogTitles />
      </section>

      {talksData.length > 0 && (
        <section id="talks" className="page-section">
          <SectionHeading number="05">Talks</SectionHeading>
          <div className="talk-grid">
            {talksData.map((talk) => (
              <article key={talk.youtubeId}>
                <div className="video-frame">
                  <iframe src={`https://www.youtube-nocookie.com/embed/${talk.youtubeId}`} title={talk.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <p className="entry-meta">{talk.event} · {talk.date}</p>
                <h3>{talk.title}</h3>
              </article>
            ))}
          </div>
        </section>
      )}

      <section id="work" className="page-section">
        <SectionHeading number="06">Experience</SectionHeading>
        <div className="timeline-list">
          {experienceData.map((item) => (
            <article className="timeline-row" key={`${item.date}-${item.company}`}>
              <p className="entry-meta">{item.date}</p>
              <div>
                <h3>{item.title}</h3>
                <p className="entry-company">
                  {item.companyUrl ? <a href={item.companyUrl} target="_blank" rel="noreferrer">{item.company} ↗</a> : item.company}
                </p>
                {item.description && <p>{item.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="page-section compact-section">
        <SectionHeading number="07">Education</SectionHeading>
        <div className="timeline-list">
          {educationData.map((item) => (
            <article className="timeline-row education-row" key={`${item.year}-${item.institution}`}>
              <p className="entry-meta">{item.year}</p>
              <div><h3>{item.degree}</h3><p>{item.institution}</p>{item.advisor && <p className="muted">{item.advisor}</p>}</div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
