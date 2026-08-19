import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = { title: "Teaching & Talks" };

const sessions = [
  {
    date: "16 Apr 2026",
    type: "Seminar",
    title: "Meaning, Structure, and the Problem of Determination",
    series: "Adventures of French Structuralism · TPS&I",
  },
  {
    date: "22 Apr 2026",
    type: "Seminar",
    title: "From Structuralism to Process: Deleuze, Anti-Oedipus, and the Problem of Novelty",
    series: "Adventures of French Structuralism · TPS&I",
  },
  {
    date: "8 & 22 May 2026",
    type: "Talks",
    title: "Dark Enlightenment",
    series: "Two-session invited presentation",
  },
  {
    date: "September 2019",
    type: "Presentation",
    title: "The Unconscious Materialism of Hegel",
    series: "Dialectic Returns · Prague",
  },
  {
    date: "Ten years",
    type: "Teaching practice",
    title: "Rumi’s Masnavi and Shabestari’s Golshan-e Rāz",
    series: "Persian mystical philosophy and classical poetry",
  },
];

export default function TeachingPage() {
  return (
    <>
      <SiteHeader />
      <main className="teaching-page">
        <section className="teaching-title shell">
          <h1>Teaching &amp; Talks</h1>
        </section>

        <section className="page-description shell">
          <p>
            Selected teaching, seminars, and talks. Recordings, transcripts, and
            related materials will be linked here where available; selected
            transcripts will also be published on Substack.
          </p>
        </section>

        <section className="teaching-section shell">
          <div className="teaching-aside">
            <p className="eyebrow">Selected</p>
            <h2>Seminars and presentations</h2>
            <p>
              Recent seminars and presentations are listed alongside earlier
              teaching and invited talks.
            </p>
          </div>
          <div className="session-list">
            {sessions.map((session) => (
              <article key={session.title}>
                <div>
                  <span>{session.date}</span>
                  <span>{session.type}</span>
                </div>
                <h3>{session.title}</h3>
                <p>{session.series}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="teaching-method">
          <div className="shell">
            <p className="eyebrow light">Method</p>
            <blockquote>
              Teaching is not the transfer of a finished philosophy. It is one
              of the situations in which a line of thought is tested, clarified,
              and sometimes genuinely transformed.
            </blockquote>
          </div>
        </section>

        <section className="materials-note shell">
          <h2>Recordings and materials</h2>
          <p>
            Recordings, transcripts, reading lists, and other materials will be
            added to individual entries as they become available.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
