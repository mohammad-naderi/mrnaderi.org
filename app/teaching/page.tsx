import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = { title: "Teaching & Talks" };

type Session = {
  date: string;
  type: string;
  title: string;
  subtitle?: string;
  series: string;
  readHref?: string;
  courseNotesHref?: string;
  companionHref?: string;
  courseHref?: string;
  eventHref?: string;
  watchOneHref?: string;
  watchTwoHref?: string;
};

const sessions: Session[] = [
  {
    date: "16 Apr 2026",
    type: "Course",
    title: "Meaning, Structure, and the Problem of Determination",
    series: "Adventures of French Structuralism · Toronto Psychoanalytic Society & Institute",
    courseNotesHref: "/teaching/adventures-french-structuralism-course-notes",
    companionHref: "/teaching/reading-deleuze-structuralism",
    courseHref:
      "https://torontopsychoanalysis.com/extension-program/course-thirteen-adventures-in-french-structuralism/",
  },
  {
    date: "22 Apr 2026",
    type: "Course",
    title: "From Structuralism to Deleuze: Determination, the Idea, and the Problem of Novelty",
    series: "Adventures of French Structuralism · Toronto Psychoanalytic Society & Institute",
    readHref: "/teaching/meaning-structure-determination",
    courseHref:
      "https://torontopsychoanalysis.com/extension-program/course-thirteen-adventures-in-french-structuralism/",
  },
  {
    date: "8 May 2026",
    type: "Talk",
    title: "Dark Enlightenment",
    subtitle: "From Acceleration to Control: How Dark Enlightenment Emerges from “the Left”",
    series: "Invited talk · Part I",
    readHref: "/teaching/dark-enlightenment-from-acceleration-to-control",
  },
  {
    date: "22 May 2026",
    type: "Talk",
    title: "Dark Enlightenment",
    subtitle: "Accelerationism and the Collapse of Transition",
    series: "Invited talk · Part II",
    readHref: "/teaching/dark-enlightenment-collapse-of-transition",
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
    date: "12 Sep 2019",
    type: "Seminar",
    title: "The Unconscious Materialism of Hegel",
    series: "Dialectics Returns · International Workshop on Dialectics · Prague",
    readHref: "/teaching/unconscious-materialism-hegel",
    eventHref: "https://suturepress.com/prague-axiomatic-circle/dialectics-returns",
    watchOneHref:
      "https://www.youtube.com/watch?v=-D3DjWIiR6U&list=PLDTspDPCczZy5s87SEO8MwXZ8LwTQoy1N&index=8",
    watchTwoHref:
      "https://www.youtube.com/watch?v=Z8sLTsAJvW0&list=PLDTspDPCczZy5s87SEO8MwXZ8LwTQoy1N&index=10",
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

const actionRowStyle = {
  display: "flex",
  justifyContent: "flex-start",
  gap: "24px",
  flexWrap: "wrap" as const,
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
            {sessions.map((session) => {
              const hasActions =
                session.readHref ||
                session.courseNotesHref ||
                session.companionHref ||
                session.courseHref ||
                session.eventHref ||
                session.watchOneHref ||
                session.watchTwoHref;

              return (
                <article key={`${session.date}-${session.title}-${session.subtitle ?? ""}`}>
                  <div>
                    <span>{session.date}</span>
                    <span>{session.type}</span>
                  </div>
                  <h3>{session.title}</h3>
                  {session.subtitle ? (
                    <p
                      style={{
                        marginTop: "-4px",
                        marginBottom: "10px",
                        color: "var(--ink)",
                        fontFamily: "Georgia, serif",
                        fontSize: "17px",
                        lineHeight: 1.45,
                      }}
                    >
                      {session.subtitle}
                    </p>
                  ) : null}
                  <p>{session.series}</p>
                  {hasActions ? (
                    <div
                      className="session-actions"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginTop: "18px",
                        color: "var(--ink)",
                      }}
                    >
                      <div style={actionRowStyle}>
                        {session.readHref ? (
                          <Link href={session.readHref} style={actionStyle}>
                            Read {session.type === "Seminar" ? "seminar" : session.type === "Talk" ? "talk" : "text"} →
                          </Link>
                        ) : null}
                        {session.courseNotesHref ? (
                          <Link href={session.courseNotesHref} style={actionStyle}>
                            Course notes →
                          </Link>
                        ) : null}
                        {session.courseHref ? (
                          <a href={session.courseHref} style={actionStyle}>
                            Course page ↗
                          </a>
                        ) : null}
                        {session.eventHref ? (
                          <a href={session.eventHref} style={actionStyle}>
                            Workshop page ↗
                          </a>
                        ) : null}
                        {session.watchOneHref ? (
                          <a href={session.watchOneHref} style={actionStyle}>
                            Watch Part I ↗
                          </a>
                        ) : null}
                        {session.watchTwoHref ? (
                          <a href={session.watchTwoHref} style={actionStyle}>
                            Watch Part II ↗
                          </a>
                        ) : null}
                      </div>

                      {session.companionHref ? (
                        <div style={actionRowStyle}>
                          <Link href={session.companionHref} style={actionStyle}>
                            Companion to Deleuze’s “How Do We Recognize Structuralism?” →
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
