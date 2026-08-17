import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = { title: "Writing" };

const essays = [
  {
    id: "rimbaud",
    area: "Poetry · Discipline",
    title: "Rimbaud and the subject of poetry",
    text: "Rimbaud names at least three distinct things: an event in poetry, a poet, and a new consistency in poetic art. Distinguishing them makes it possible to see why the biographical individual is not identical with the subject of the discipline.",
  },
  {
    id: "crisis-of-novelty",
    area: "The Present · Truth",
    title: "Why the crisis of truth appears as a crisis of novelty",
    text: "Truth is not directly available in everyday experience. What becomes visible is a blockage in the production and recognition of radical novelty—and only philosophy draws from it the deeper crisis of truth.",
  },
  {
    id: "naturalization",
    area: "Politics · Diagnosis",
    title: "The present made permanent",
    text: "The recurrent enemy of novelty is naturalization: the transformation of a contingent arrangement into the horizon of the possible. Even thought that denaturalizes one order can reproduce the same error elsewhere.",
  },
  {
    id: "ethos",
    area: "Discipline · Subjectivity",
    title: "The ethos of a discipline",
    text: "How the orientation of a discipline—covering, regulating, or affirming—shapes its relation to excess, novelty, and truth.",
  },
  {
    id: "phenomenology",
    area: "Novelty · Philosophy",
    title: "Novelty as the phenomenology of truth",
    text: "A compact statement of the route from the diagnosis of the present to the possibility of truth: novelty is how the life of truth becomes philosophically legible.",
  },
];

export default function WritingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro eyebrow="Writing" title="Short philosophy with a public life.">
          <p>
            Notes and complete interventions emerging from current research:
            more concentrated than a chapter, more developed than a private
            notebook entry, and published when the work produces them.
          </p>
        </PageIntro>

        <section className="writing-list shell">
          <div className="writing-status">
            <p className="eyebrow">First sequence</p>
            <p>
              These pieces are in preparation. The Rimbaud essay will inaugurate
              the series and the Substack once its title and publication identity
              are settled.
            </p>
          </div>
          <div>
            {essays.map((essay, index) => (
              <article className={index === 0 ? "essay-row featured" : "essay-row"} id={essay.id} key={essay.id}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{essay.area}</p>
                </div>
                <div>
                  <h2>{essay.title}</h2>
                  <p>{essay.text}</p>
                </div>
                <span className="essay-state">In preparation</span>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter-block" id="subscribe">
          <div className="shell newsletter-inner">
            <p className="eyebrow light">Substack</p>
            <div>
              <h2>No content calendar. A sequence of thought.</h2>
              <p>
                New essays will arrive by email when a line of research has
                become a complete piece of writing. The publication name and
                subscription link will be added here when the Substack is opened.
              </p>
            </div>
            <Link href="/about">About Mohammad Reza Naderi <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
