import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = { title: "Teaching & Talks" };

type Session = {
  date: string;
  type: string;
  title: string;
  series: string;
  readHref?: string;
  courseHref?: string;
};

const sessions: Session[] = [
  {
    date: "16 Apr 2026",
    type: "Seminar",
    title: "Meaning, Structure, and the Problem of Determination",
    series: "Adventures of French Structuralism · Toronto Psychoanalytic Society & Institute",
    readHref: "/teaching/meaning-structure-determination",
    courseHref:
      "https://torontopsychoanalysis.com/extension-program/course-thirteen-adventures-in-french-structuralism/",
  },
  {
    date: "22 Apr 2026",
    type: "Seminar",
    title: "From Structuralism to Process: Deleuze, Anti-Oedipus, and the Problem of Novelty",
    series: "Adventures of French Structuralism · Toronto Psychoanalytic Society & Institute",
    courseHref:
      "https://torontopsychoanalysis.com/extension-program/course-thirteen-adventures-in-french-structuralism/",
  },
  {
    date: "8 & 22 May 2026",
    type: "Talks",
    title: "Dark Enlightenment",
    series: "Two-session invited presentation",
  },
  {
    date: "Nov–Dec 2025",
    type: "Course",
    title: "Clinical Lacan: Painful Loves",
    series: "Toronto Psychoanalytic Society & Institute · Extension Program",
    courseHref:
      "https://torontopsychoanalysis.com/extension-program/course-five-clinical-lacan-painful-loves/",
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

const actionStyle = {
  borderBottom: "1px solid #9b9e97",
  paddingBottom: "4px",
  color: "var(--ink)",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: ".08em",
  textTransform: "uppercase" as const,
};

export default function TeachingPage() {
  return (
    <>
      <SiteHeader />
      <main className="teaching-page">
        <PageIntro eyebrow="Teaching & talks" title="Teaching & Talks." />

        <section className="page-description shell">
          <p>
            Selected teaching, seminars, and talks. Written seminar texts,
            recordings, and related materials are linked here where available.
            Institutional course pages are included selectively as a record of
            the occasion on which the work was presented.
          </p>
        </section>

        <section
          className="teaching-section content-section shell"
          style={{ gridTemplateColumns: "1fr", maxWidth: "920px" }}
        >
          <div className="session-list">
            {sessions.map((session) => (
              <article key={session.title}>
                <div>
                  <span>{session.date}</span>
                  <span>{session.type}</span>
                </div>
                <h3>{session.title}</h3>
                <p>{session.series}</p>
                {session.readHref || session.courseHref ? (
                  <div
                    className="session-actions"
                    style={{
                      justifyContent: "flex-start",
                      gap: "24px",
                      marginTop: "18px",
                      color: "var(--ink)",
                    }}
                  >
                    {session.readHref ? (
                      <Link href={session.readHref} style={actionStyle}>
                        Read seminar →
                      </Link>
                    ) : null}
                    {session.courseHref ? (
                      <a href={session.courseHref} style={actionStyle}>
                        Course page ↗
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
