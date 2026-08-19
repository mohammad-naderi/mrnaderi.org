import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site";

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
        <PageIntro eyebrow="Teaching & talks" title="Teaching & Talks." />

        <section className="page-description shell">
          <p>
            Selected teaching, seminars, and talks. Recordings, transcripts, and
            related materials will be linked here where available; selected
            transcripts will also be published on Substack.
          </p>
        </section>

        <section className="teaching-section content-section shell">
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
      </main>
      <SiteFooter />
    </>
  );
}
