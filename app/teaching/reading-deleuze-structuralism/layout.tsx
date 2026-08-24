import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Companion to Deleuze’s ‘How Do We Recognize Structuralism?’",
  description:
    "A course companion to Gilles Deleuze’s ‘How Do We Recognize Structuralism?’ for Adventures of French Structuralism.",
};

export default function DeleuzeCompanionLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const applyCompanionTitle = () => {
                const header = document.querySelector('.course-notes-page .seminar-header');
                const heading = header?.querySelector('h1');
                const eyebrow = header?.querySelector('.eyebrow');
                if (heading) heading.textContent = 'Companion to Deleuze’s “How Do We Recognize Structuralism?”';
                if (eyebrow) eyebrow.textContent = 'Course companion';
                document.title = 'Companion to Deleuze’s “How Do We Recognize Structuralism?”';
                const description = document.querySelector('meta[name="description"]');
                if (description) {
                  description.setAttribute('content', 'A course companion to Gilles Deleuze’s “How Do We Recognize Structuralism?” for Adventures of French Structuralism.');
                }
              };
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', applyCompanionTitle, { once: true });
              } else {
                applyCompanionTitle();
              }
            })();
          `,
        }}
      />
    </>
  );
}
