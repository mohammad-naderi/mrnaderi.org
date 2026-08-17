import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro eyebrow="About" title="A life across systems and philosophy.">
          <p>
            Mohammad Reza Naderi is an Iranian-born Canadian philosopher, author,
            and teacher based in Toronto. His work brings continental philosophy
            into sustained contact with mathematical ontology and the practical
            life of disciplines.
          </p>
        </PageIntro>

        <section className="about-main shell">
          <figure>
            <Image
              src="/reza-naderi-portrait-31649-retouched.png"
              alt="Mohammad Reza Naderi"
              width={1152}
              height={1536}
              sizes="(max-width: 760px) calc(100vw - 38px), 40vw"
              unoptimized
            />
          </figure>
          <div className="about-prose">
            <p className="eyebrow">Biography</p>
            <h2>Formal structures. Collective work. The possibility of the new.</h2>
            <p>
              Naderi received his PhD in Philosophy and Critical Thinking from
              the European Graduate School in 2017, where his dissertation,
              <em> Infinity and Subjectivity: Badiou’s Theory of Discipline</em>,
              was supervised by Alain Badiou. He previously completed an MA in
              Philosophy at the University of Toronto. His 2006 thesis,
              <em> Relation of Heidegger to German Idealism</em>, examined
              Heidegger’s attempt to bring German Idealism into relation with
              Husserlian phenomenology. His books and essays examine infinity,
              subjectivity, formalization, truth, and the philosophical
              consequences of Badiou’s work.
            </p>
            <p>
              He is a member of the research collective Subset of Theoretical
              Practice and teaches contemporary French philosophy at the Toronto
              Psychoanalytic Society &amp; Institute. His current work develops the
              Theory of Discipline and a third book organized by radical novelty
              as philosophy’s central category.
            </p>
            <p>
              His independent philosophical studies have also included sustained
              engagement with Descartes and Spinoza; Kant, Hegel, and German
              Idealism; and the dialectical thought of Georg Lukács and Lucien
              Goldmann.
            </p>
            <p>
              These studies developed alongside, rather than after, an education
              and career in mathematics and computation. Naderi completed a BSc
              in Computer Science and Pure Mathematics at the University of
              Toronto in 1994 and spent decades as a software architect,
              entrepreneur, and advisor. Through FARA Logics Inc., he led
              long-term technology and architecture work across Canadian and
              American institutions. The practical demands of building systems
              and sustaining collective work remain internal to his philosophical
              concern with how disciplines acquire consistency.
            </p>
            <p>
              Naderi’s engagement with philosophy began much earlier through
              independent study of classical philosophical and Marxist texts.
              During the early 1980s, when opportunities for formal education in
              Iran were severely limited, he also undertook sustained study of
              Islamic philosophy, Persian literature, and mysticism with eminent
              scholars in these fields. His work focused particularly on Rumi’s
              <em> Masnavi</em>, Shabestari’s <em>Golshan-e Rāz</em>, and Attar’s
              <em> The Conference of the Birds</em>. He later taught the
              <em> Masnavi</em> and <em>Golshan-e Rāz</em> for ten years.
            </p>
          </div>
        </section>

        <section className="about-details shell">
          <article>
            <p className="eyebrow">Education</p>
            <h3>Philosophy and mathematics</h3>
            <p>PhD, Philosophy and Critical Thinking · 2017</p>
            <p>Doctoral supervisor: Alain Badiou</p>
            <p>MA, Philosophy · University of Toronto · 2006</p>
            <p>BSc, Computer Science and Pure Mathematics · 1994</p>
          </article>
          <article>
            <p className="eyebrow">Intellectual formation</p>
            <h3>Several traditions</h3>
            <p>Islamic philosophy · Persian mystical poetry</p>
            <p>Early modern philosophy · German Idealism</p>
            <p>Dialectical social thought · mathematics · computation</p>
          </article>
          <article>
            <p className="eyebrow">Current work</p>
            <h3>Theory of Discipline</h3>
            <p>Radical novelty · truth · mathematical ontology · the present</p>
            <p>Teaching: Toronto Psychoanalytic Society &amp; Institute</p>
            <p>Research collective: Subset of Theoretical Practice</p>
            <p>
              Contact: <a href="mailto:contact@mrnaderi.org">contact@mrnaderi.org</a>
            </p>
          </article>
        </section>

        <section className="cv-note">
          <div className="shell">
            <p className="eyebrow light">Public CV</p>
            <h2>The intellectual record, in one place.</h2>
            <div className="cv-copy">
              <p>
                Books, essays, teaching, presentations, education, and the
                relevant arc of an earlier professional life—written as a public
                record rather than a job application.
              </p>
              <div className="cv-actions">
                <a className="arrow-link light" href="/documents/Mohammad-Reza-Naderi-CV.pdf">
                  Download PDF <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link cv-word-link" href="/documents/Mohammad-Reza-Naderi-CV.docx">
                  Download Word version
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
