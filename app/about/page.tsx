import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
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
            <h1>Biography</h1>
            <p className="about-lead">
              I am an Iranian-born Canadian philosopher, author, and teacher based
              in Toronto. My work brings continental philosophy into sustained
              contact with mathematical ontology and the practical life of disciplines.
            </p>
            <p>
              I received my PhD in Philosophy and Critical Thinking from the
              European Graduate School in 2017. My dissertation,
              <em> Infinity and Subjectivity: Badiou’s Theory of Discipline</em>,
              was supervised by Alain Badiou. I had previously completed an MA in
              Philosophy at the University of Toronto. My 2006 thesis,
              <em> Relation of Heidegger to German Idealism</em>, examined
              Heidegger’s attempt to bring German Idealism into relation with
              Husserlian phenomenology. My books and essays examine infinity,
              subjectivity, formalization, truth, and the philosophical
              consequences of Badiou’s work.
            </p>
            <p>
              I am a member of the research collective Subset of Theoretical
              Practice and teach contemporary French philosophy at the Toronto
              Psychoanalytic Society &amp; Institute. My current work develops the
              Theory of Discipline and a third book that takes radical novelty as
              philosophy’s central category.
            </p>
            <p>
              My independent philosophical studies have also included sustained
              engagement with Descartes and Spinoza; Kant, Hegel, and German
              Idealism; and the dialectical thought of Georg Lukács and Lucien
              Goldmann.
            </p>
            <p>
              These studies developed alongside, rather than after, my education
              and career in mathematics and computation. I completed a BSc
              in Computer Science and Pure Mathematics at the University of
              Toronto in 1994 and spent decades as a software architect,
              entrepreneur, and advisor. Through FARA Logics Inc., I led
              long-term technology and architecture work across Canadian and
              American institutions. The practical demands of building systems
              and sustaining collective work remain internal to my philosophical
              concern with how disciplines acquire consistency.
            </p>
            <p>
              My engagement with philosophy began much earlier through
              independent study of classical philosophical and Marxist texts.
              During the early 1980s, when opportunities for formal education in
              Iran were severely limited, I also undertook sustained study of
              Islamic philosophy, Persian literature, and mysticism with eminent
              scholars in these fields. My work focused particularly on Rumi’s
              <em> Masnavi</em>, Shabestari’s <em>Golshan-e Rāz</em>, and Attar’s
              <em> The Conference of the Birds</em>. I later taught the
              <em> Masnavi</em> and <em>Golshan-e Rāz</em> for ten years.
            </p>
          </div>
        </section>

        <section className="about-cv shell" aria-labelledby="public-cv-title">
          <h2 id="public-cv-title">Public CV</h2>
          <div>
            <p>
              A fuller record of my books, essays, teaching, presentations,
              education, and earlier professional work is available here.
            </p>
            <div className="about-cv-actions">
              <a className="text-link" href="/documents/Mohammad-Reza-Naderi-CV.pdf">
                Download PDF ↗
              </a>
              <a className="text-link" href="/documents/Mohammad-Reza-Naderi-CV.docx">
                Download Word version
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
