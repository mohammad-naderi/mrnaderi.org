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
      <main>
        <PageIntro eyebrow="Teaching & talks" title="Philosophy in the room.">
          <p>
            A teaching practice extending from a decade devoted to Rumi’s
            <em> Masnavi</em> and Shabestari’s <em>Golshan-e Rāz</em> to contemporary
            French philosophy at the Toronto Psychoanalytic Society &amp; Institute,
            invited seminars, and lectures.
          </p>
        </PageIntro>

        <section className="teaching-section shell">
          <div className="teaching-aside">
            <p className="eyebrow">Selected teaching & talks</p>
            <h2>Seminars and presentations</h2>
            <p>
              Across Persian mystical poetry, Hegel and materialism, structural
              determination, and Deleuze, teaching remains an occasion to test
              how thought is carried by a text—and how something genuinely new
              can emerge from collective inquiry.
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
            Selected descriptions, reading lists, recordings, and teaching
            materials will be added as the archive is assembled.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
