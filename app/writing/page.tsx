import type { Metadata } from "next";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site";
import { writings } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Current philosophical essays and notes by Mohammad Reza Naderi on truth, discipline, radical novelty, politics, poetry, and the present.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  return (
    <>
      <SiteHeader showSubscribe />
      <main>
        <PageIntro eyebrow="Writing" title="Short philosophy with a public life." />

        <section className="page-description shell" id="subscribe">
          <p>
            Notes and complete interventions emerging from current research: more
            concentrated than a chapter, more developed than a private notebook
            entry, and published when the work produces them. Published pieces also
            appear through Substack.
          </p>
        </section>

        <section className="writing-list shell">
          <div>
            {writings.map((essay, index) => (
              <article className={index === 0 ? "essay-row featured" : "essay-row"} id={essay.id} key={essay.id}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{essay.area}</p>
                </div>
                <div>
                  <h2>
                    {essay.href ? <a href={essay.href}>{essay.title}</a> : essay.title}
                  </h2>
                  <p>{essay.text}</p>
                </div>
                {essay.href ? (
                  <a className="essay-state" href={essay.href}>Read ↗</a>
                ) : (
                  <span className="essay-state">In preparation</span>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
