import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description:
    "Mohammad Reza Naderi on meaning, structure, determination, Deleuze, and the problem of novelty in French structuralism.",
  alternates: { canonical: "/teaching/meaning-structure-determination" },
};

export default function SeminarLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <style>{`
        .seminar-header {
          max-width: 920px;
          padding-block: 58px 54px;
          border-bottom: 1px solid var(--line);
        }
        .seminar-back {
          display: inline-block;
          margin-bottom: 42px;
          border-bottom: 1px solid #9b9e97;
          padding-bottom: 4px;
          color: var(--muted);
          font-size: 11px;
          font-weight: 650;
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .seminar-header .eyebrow { margin-bottom: 18px; }
        .seminar-header h1 {
          max-width: 850px;
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(42px, 5vw, 66px);
          font-weight: 400;
          letter-spacing: -.035em;
          line-height: 1.06;
        }
        .seminar-meta {
          margin-top: 30px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }
        .seminar-meta a {
          display: inline-block;
          margin-top: 10px;
          border-bottom: 1px solid #9b9e97;
          padding-bottom: 3px;
          color: var(--ink);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        .seminar-layout {
          display: grid;
          grid-template-columns: 230px minmax(0, 740px);
          justify-content: center;
          gap: 72px;
          align-items: start;
          padding-block: 58px 110px;
        }
        .seminar-toc {
          position: sticky;
          top: 28px;
          border-top: 1px solid var(--line);
          padding-top: 18px;
        }
        .seminar-toc > p {
          margin-bottom: 14px;
          color: var(--blue);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .seminar-toc a {
          display: block;
          padding-block: 7px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.45;
        }
        .seminar-toc a:hover { color: var(--ink); }
        .seminar-prose { max-width: 740px; }
        .seminar-prose section {
          scroll-margin-top: 28px;
          padding-bottom: 62px;
        }
        .seminar-prose section + section {
          border-top: 1px solid var(--line);
          padding-top: 58px;
        }
        .seminar-prose h2 {
          margin: 0 0 30px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 31px;
          font-weight: 400;
          letter-spacing: -.02em;
          line-height: 1.18;
        }
        .seminar-prose p,
        .seminar-prose li {
          color: #3f4742;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          line-height: 1.78;
        }
        .seminar-prose p { margin-top: 20px; }
        .seminar-prose h2 + p { margin-top: 0; }
        .seminar-prose ul {
          margin: 16px 0 8px;
          padding-left: 27px;
        }
        .seminar-prose li { margin-block: 6px; }
        .seminar-formula {
          margin-block: 26px !important;
          color: var(--ink) !important;
          font-family: Georgia, "Times New Roman", serif !important;
          font-size: 22px !important;
          text-align: center;
        }
        @media (max-width: 900px) {
          .seminar-layout {
            grid-template-columns: 1fr;
            gap: 42px;
            max-width: 760px;
          }
          .seminar-toc {
            position: static;
            columns: 2;
            column-gap: 32px;
          }
          .seminar-toc > p { column-span: all; }
        }
        @media (max-width: 760px) {
          .seminar-header { padding-block: 44px 40px; }
          .seminar-back { margin-bottom: 30px; }
          .seminar-header h1 { font-size: clamp(38px, 11vw, 52px); }
          .seminar-layout { padding-block: 42px 72px; }
          .seminar-toc { columns: 1; }
          .seminar-prose section { padding-bottom: 46px; }
          .seminar-prose section + section { padding-top: 44px; }
          .seminar-prose h2 { font-size: 28px; }
          .seminar-prose p,
          .seminar-prose li { font-size: 17px; line-height: 1.72; }
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const applyCourseContext = () => {
                const header = document.querySelector('.seminar-page .seminar-header');
                const eyebrow = header?.querySelector('.eyebrow');
                const meta = header?.querySelectorAll('.seminar-meta p');
                if (eyebrow) eyebrow.textContent = 'Course text';
                if (meta && meta[0]) meta[0].textContent = 'Adventures of French Structuralism';
                if (meta && meta[1]) meta[1].textContent = 'Toronto Psychoanalytic Society & Institute · April 22, 2026';
              };
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', applyCourseContext, { once: true });
              } else {
                applyCourseContext();
              }
            })();
          `,
        }}
      />
    </>
  );
}
