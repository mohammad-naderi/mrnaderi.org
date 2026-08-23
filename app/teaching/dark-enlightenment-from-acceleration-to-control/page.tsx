import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";
import DarkEnlightenmentPartOneSectionGroup1 from "./sections-1";
import DarkEnlightenmentPartOneSectionGroup2 from "./sections-2";
import DarkEnlightenmentPartOneSectionGroup3 from "./sections-3";

export const metadata: Metadata = {
  title: "Dark Enlightenment — From Acceleration to Control",
};

const toc = [
  ["abstract", "Abstract"],
  ["opening", "1. Opening"],
  ["civilizational-framing", "2. Civilizational Framing"],
  ["two-left-critiques", "3. Two Left Critiques of Capitalism"],
  ["ontology", "4. Ontology: Contradiction vs Generativity"],
  ["subject-agency", "5. Subject and Agency"],
  ["crisis-of-mediation", "6. Historical Transformation: Crisis of Mediation"],
  ["critique-to-process", "7. From Critique to Process"],
  ["nietzsche-libidinal", "8. Nietzsche and Libidinal Economy"],
  ["deleuze-guattari", "9. Deleuze and Guattari: Systematic Articulation"],
  ["missing-program", "10. The Missing Program"],
  ["transition-accelerationism", "11. Transition to Accelerationism"],
];

export default function DarkEnlightenmentPartOnePage() {
  return (
    <>
      <SiteHeader />
      <main className="seminar-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/teaching">← Teaching & Talks</Link>
          <p className="eyebrow">Talk · Part I</p>
          <h1>Dark Enlightenment</h1>
          <p className="seminar-subtitle">
            From Acceleration to Control: How Dark Enlightenment Emerges from “the Left”
          </p>
          <div className="seminar-meta">
            <p>May 8, 2026</p>
          </div>
        </section>

        <section className="seminar-layout shell">
          <nav className="seminar-toc" aria-label="Talk contents">
            <p>Contents</p>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>

          <article className="seminar-prose">
            <DarkEnlightenmentPartOneSectionGroup1 />
            <DarkEnlightenmentPartOneSectionGroup2 />
            <DarkEnlightenmentPartOneSectionGroup3 />
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
