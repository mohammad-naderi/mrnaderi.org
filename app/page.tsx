import Link from "next/link";
import Image from "next/image";
import { ArrowLink, BookSpine, SiteFooter, SiteHeader } from "@/components/site";

const notes = [
  {
    tag: "Poetry · Discipline",
    title: "Rimbaud and the subject of poetry",
    text: "A poet, an event, and a new consistency in poetic art are not the same thing. Rimbaud helps clarify why the subject is the discipline in composition.",
    href: "/writing#rimbaud",
  },
  {
    tag: "The Present · Novelty",
    title: "The crisis of novelty",
    text: "Why the crisis of truth is never encountered directly, but appears first as the exhaustion of our capacity to recognize the new.",
    href: "/writing#crisis-of-novelty",
  },
  {
    tag: "Politics · Naturalization",
    title: "The present made permanent",
    text: "On the recurrent tendency to treat a contingent order as nature—and the foreclosure of radical novelty that follows.",
    href: "/writing#naturalization",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Philosopher · Author</p>
            <h1>Philosophy, truth, and the possibility of the new.</h1>
            <p className="hero-intro">
              My philosophical work concerns truth, novelty, and the forms of thought
              through which a consistency that did not previously exist can be composed.
              At its centre is the Theory of Discipline, a project that emerged from my
              work on Alain Badiou and has developed into a more general account of
              disciplinary thinking.
            </p>
            <div className="hero-actions">
              <ArrowLink href="/writing">Read current writing</ArrowLink>
              <Link className="text-link" href="/philosophy">
                Explore the philosophy
              </Link>
            </div>
          </div>

          <figure className="portrait-frame">
            <Image
              src="/reza-naderi-portrait-31649-retouched.png"
              alt="Portrait of Mohammad Reza Naderi against cedar foliage"
              width={1152}
              height={1536}
              sizes="(max-width: 760px) calc(100vw - 38px), (max-width: 1180px) 38vw, 470px"
              priority
              unoptimized
            />
            <figcaption>Mohammad Reza Naderi</figcaption>
          </figure>
        </section>

        <section className="section shell" aria-labelledby="current-writing">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From the notebook</p>
              <h2 id="current-writing">Current writing</h2>
            </div>
            <Link className="text-link desktop-link" href="/writing">
              View all writing
            </Link>
          </div>

          <div className="notes-grid">
            {notes.map((note, index) => (
              <article className={index === 0 ? "note-card featured" : "note-card"} key={note.title}>
                <p className="note-tag">{note.tag}</p>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
                <Link href={note.href} aria-label={`Read ${note.title}`}>
                  Read the note <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="theory-band" aria-labelledby="theory-title">
          <div className="shell theory-inner">
            <div>
              <p className="eyebrow light">A philosophical project</p>
              <h2 id="theory-title">Theory of Discipline</h2>
            </div>
            <div className="theory-copy">
              <p>
                A discipline is a form of composition: a structured process through
                which a consistency that did not previously exist can be produced.
                The Theory of Discipline asks how such composition can proceed
                immanently, how thought encounters its limits, and under what material
                conditions a discipline can participate in the production of truth.
              </p>
              <p className="theory-proposition">
                Discipline provides the logic of composition. Truth names an invariant
                consistency composed where disciplinary thought encounters an impasse
                in the presence of the excess of being over thought. Novelty is a
                consequence of truth.
              </p>
              <ArrowLink href="/philosophy" variant="light">
                Read the philosophical overview
              </ArrowLink>
            </div>
          </div>
        </section>

        <section className="section shell" aria-labelledby="publications-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="publications-title">Books</h2>
            </div>
            <Link className="text-link desktop-link" href="/publications">
              Complete publications
            </Link>
          </div>

          <div className="book-grid">
            <BookSpine
              tone="ink"
              status="Lexington Books · 2023"
              title="Badiou, Infinity, and Subjectivity"
              description="A study of infinity, formalism, and the transformation of subjectivity in Badiou's philosophy."
              href="https://www.bloomsbury.com/us/badiou-infinity-and-subjectivity-9781666931044/"
            />
            <BookSpine
              tone="blue"
              status="Routledge · 2024 · Co-editor"
              title="Philosophy after Lacan"
              description="A collection on the philosophical consequences and continuing force of Lacanian thought."
              href="https://www.routledge.com/Philosophy-After-Lacan-Politics-Science-and-Art/Taheri-Vanderwees-Naderi/p/book/9781032546452"
            />
            <BookSpine
              tone="green"
              status="Bloomsbury Academic · Forthcoming 2027"
              title="Badiou and Disciplinary Truths"
              description="A companion to The Immanence of Truths and the first full architecture of the Theory of Discipline."
              href="https://www.bloomsbury.com/us/badiou-and-disciplinary-truths-9781350555440/"
            />
          </div>
        </section>

        <section className="split-section shell">
          <article>
            <p className="eyebrow">Teaching & talks</p>
            <h2>Philosophy in the room</h2>
            <p>
              Seminars on structuralism, Deleuze, Badiou, contemporary thought,
              and the problem of novelty—developed as sites of live inquiry,
              not repetitions of finished work.
            </p>
            <ArrowLink href="/teaching">View seminars and talks</ArrowLink>
          </article>
          <article className="about-preview">
            <p className="eyebrow">About</p>
            <h2>An uncommon route to philosophy</h2>
            <p>
              Born in Iran and based in Toronto, Naderi came to academic
              philosophy after a long career building technology organizations
              and systems. That trajectory remains present in his attention to
              formal structures, collective work, and the life of disciplines.
            </p>
            <ArrowLink href="/about">Read the biography</ArrowLink>
          </article>
        </section>

        <section className="subscribe-section shell" id="subscribe">
          <p className="eyebrow">Essays by email</p>
          <div>
            <h2>Short philosophical writing, as the work produces it.</h2>
            <p>
              The Substack will publish complete interventions emerging from
              current research—without an arbitrary weekly schedule.
            </p>
          </div>
          <Link className="subscribe-large" href="/writing#subscribe">
            Substack coming soon <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
