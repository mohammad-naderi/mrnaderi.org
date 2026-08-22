import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

const notes = [
  {
    number: "01",
    tag: "Poetry · Discipline",
    title: "The Subject Called “Rimbaud”",
    text: "Rimbaud names three distinct things: an event in poetry, a poet, and a new consistency in poetic art. Distinguishing them helps clarify why the subject is the discipline in composition rather than the biographical individual.",
    href: "https://mrnaderi.substack.com/p/the-subject-called-rimbaud",
  },
  {
    number: "02",
    tag: "The Present · Truth",
    title: "Why the Crisis of Truth Appears as a Crisis of Novelty",
    text: "Truth is not encountered directly in everyday life. What first becomes visible is a blockage in the production and recognition of radical novelty; philosophy draws from this the deeper crisis of truth.",
  },
  {
    number: "03",
    tag: "Politics · Diagnosis",
    title: "The Present Made Permanent",
    text: "The recurrent enemy of novelty is naturalization: the transformation of a contingent arrangement into the horizon of the possible. Even thinking that denaturalizes one order can reproduce the same error elsewhere.",
  },
];

const homeBooks = [
  {
    title: "Badiou, Infinity, and Subjectivity",
    coverSrc: "/badiou-infinity-and-subjectivity.jpg",
  },
  {
    title: "Philosophy After Lacan",
    coverSrc: "/philosophy-after-lacan.jpg",
  },
  {
    title: "Atlas de Política Experimental",
    coverSrc: "/atlas-de-politica-experimental.jpg",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="home-page">
        <section className="hero shell">
          <div className="hero-copy">
            <h1>Truth, Discipline, and Radical Novelty</h1>
            <p className="hero-intro">
              I am a philosopher and author based in Toronto. My work develops the
              Theory of Discipline, an account of the forms of thought through which
              a consistency that did not previously exist can be composed. The project
              emerged from sustained engagement with Alain Badiou and mathematical
              ontology and now forms the basis of my continuing philosophical work.
            </p>
            <Link className="home-opening-link" href="/about">
              Read About
            </Link>
          </div>

          <figure className="portrait-frame">
            <Image
              src="/profile-photo-4x5.jpg"
              alt="Portrait of Mohammad Reza Naderi against cedar foliage"
              width={977}
              height={1221}
              sizes="(max-width: 760px) calc(100vw - 38px), (max-width: 1180px) 38vw, 470px"
              priority
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center", transform: "none" }}
            />
          </figure>
        </section>

        <section className="home-project shell" aria-labelledby="theory-title">
          <h2 id="theory-title">The Theory of Discipline</h2>
          <p>
            The Theory of Discipline is my principal philosophical project. It
            formalizes what it means for thinking to be disciplinary. A disciplinary
            thinking possesses certain constitutive and operative features that sustain
            a particular ethos—one that treats the excess of being over thinking as
            absolute: as the source of a consistency that did not previously exist.
          </p>
          <p>
            A disciplinary thinking encounters this excess in the presence of an
            impasse already existing within the discipline. Through a process I call
            composition, it operates the encountered excess into a truth. When a truth
            is composed, not only is that impasse resolved in the form of a new
            consistency; further consequences also ensue and manifest themselves in the
            worlds affected by that thinking. These consequences appear as novelties—or,
            more precisely, as what I call radical novelties.
          </p>
          <Link className="home-editorial-link" href="/philosophy">
            Read Philosophy
          </Link>
        </section>

        <section className="home-books section shell" aria-labelledby="publications-title">
          <div className="section-heading">
            <h2 id="publications-title">Books</h2>
            <Link className="text-link desktop-link" href="/publications">
              Complete publications
            </Link>
          </div>

          <div className="home-book-shelf">
            {homeBooks.map((book) => (
              <Link
                className="home-book-cover-link"
                href="/publications"
                key={book.title}
                aria-label={`${book.title} — view publications`}
              >
                <img src={book.coverSrc} alt={book.title} loading="lazy" />
              </Link>
            ))}
            <Link
              className="home-book-cover-link"
              href="/publications"
              aria-label="Badiou and Disciplinary Truths — view publications"
            >
              <div className="home-book-placeholder" aria-hidden="true">
                <span>Mohammad Reza Naderi</span>
                <strong>Badiou and Disciplinary Truths</strong>
              </div>
            </Link>
          </div>
        </section>

        <section className="home-writing section shell" aria-labelledby="current-writing">
          <div className="home-section-heading">
            <h2 id="current-writing">Current Writing</h2>
            <div className="home-writing-intro">
              <p>Shorter essays emerging from current research are published here and through Substack as they are completed.</p>
              <Link className="home-editorial-link" href="/writing#subscribe">
                Writing &amp; Substack
              </Link>
            </div>
          </div>

          <div className="home-writing-list">
            {notes.map((note) => (
              <article className="home-writing-entry" key={note.number}>
                <div className="home-writing-meta">
                  <span>{note.number}</span>
                  <p>{note.tag}</p>
                </div>
                <div>
                  <h3>
                    {note.href ? <a href={note.href}>{note.title}</a> : note.title}
                  </h3>
                  <p>{note.text}</p>
                </div>
                {note.href ? (
                  <a className="home-writing-status" href={note.href}>Read ↗</a>
                ) : (
                  <p className="home-writing-status">In preparation</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="home-context shell" aria-label="Biography and teaching">
          <article>
            <h2>Biography</h2>
            <p>
              My route to philosophy began in Iran through independent study of
              philosophical and Marxist texts, Islamic philosophy, Persian literature,
              and mysticism. It later passed through mathematics and computer science
              and a long professional life building technological systems and
              organizations. These different formations remain present in my
              philosophical work.
            </p>
            <Link className="home-editorial-link" href="/about">About</Link>
          </article>
          <article>
            <h2>Teaching</h2>
            <p>
              My teaching has ranged from Rumi’s <em>Masnavi</em> and Shabestari’s
              <em> Golshan-e Rāz</em> to Hegel, structuralism, Deleuze, Badiou, and
              contemporary French philosophy. I regard teaching as an occasion for
              collective inquiry in which a line of thought can be tested, clarified,
              and transformed.
            </p>
            <Link className="home-editorial-link" href="/teaching">Teaching &amp; Talks</Link>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
