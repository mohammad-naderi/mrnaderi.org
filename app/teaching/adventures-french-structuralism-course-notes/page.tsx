import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";
import part1 from "./content/course-01";
import part2 from "./content/course-02";
import part3 from "./content/course-03";
import part4 from "./content/course-04";
import part5 from "./content/course-05";
import part6 from "./content/course-06";
import part7 from "./content/course-07";
import part8 from "./content/course-08";
import part9 from "./content/course-09";
import part10 from "./content/course-10";
import part11 from "./content/course-11";
import part12 from "./content/course-12";
import part13 from "./content/course-13";

export const metadata: Metadata = {
  title: "Notes for Adventures of French Structuralism",
  description:
    "Course notes for Adventures of French Structuralism at the Toronto Psychoanalytic Society & Institute.",
};

const courseNotesHtml = [
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
  part9,
  part10,
  part11,
  part12,
  part13,
].join("\n");

const toc = [
  ["outline", "Outline"],
  ["structuralism-overview-foundations", "Structuralism: Overview and Foundations"],
  ["structured-linguistics", "Structured Linguistics"],
  ["structured-anthropology", "Structured Anthropology"],
  ["structuralism-epistemology-science", "Structuralism, Epistemology and Science"],
  ["beyond-structure", "Beyond Structure"],
  ["theory-discipline", "Theory of Discipline"],
  ["appendix", "Appendix"],
  ["appendix-form-truth-fidelity", "1. Form, Truth, and Fidelity"],
  ["appendix-taboo-axiom", "2. From Taboo to Axiom"],
  ["deleuze-structuralist-condition", "3. Deleuze and Structuralist Condition"],
  ["hallward-badiou", "4. About French Epistemology — Hallward/Badiou"],
];

export default function StructuralismCourseNotesPage() {
  return (
    <>
      <SiteHeader />
      <main className="seminar-page course-notes-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/teaching">
            ← Teaching & Talks
          </Link>
          <p className="eyebrow">Course notes</p>
          <h1>Notes for Adventures of French Structuralism</h1>
          <div className="seminar-meta">
            <p>Adventures of French Structuralism</p>
            <p>Toronto Psychoanalytic Society & Institute</p>
            <a href="https://torontopsychoanalysis.com/extension-program/course-thirteen-adventures-in-french-structuralism/">
              Course page ↗
            </a>
          </div>
        </section>

        <section className="seminar-layout shell">
          <nav className="seminar-toc" aria-label="Course notes contents">
            <p>Contents</p>
            {toc.map(([href, label]) => (
              <a key={href} href={`#${href}`}>
                {label}
              </a>
            ))}
          </nav>

          <article
            className="seminar-prose course-notes-prose"
            dangerouslySetInnerHTML={{ __html: courseNotesHtml }}
          />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}