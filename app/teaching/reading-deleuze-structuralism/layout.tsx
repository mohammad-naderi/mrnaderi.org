import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Companion to Deleuze’s ‘How Do We Recognize Structuralism?’",
  description:
    "A course companion to Gilles Deleuze’s ‘How Do We Recognize Structuralism?’ for Adventures of French Structuralism.",
  alternates: { canonical: "/teaching/reading-deleuze-structuralism" },
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
              const applyCompanionEnhancements = () => {
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

                const toc = document.querySelector('.course-notes-page .seminar-toc');
                if (toc && !toc.querySelector('[data-appendix-toc="true"]')) {
                  const appendixHeadings = Array.from(
                    document.querySelectorAll('.course-notes-page .course-notes-prose h3[id]')
                  ).filter((node) => node.textContent?.trim().startsWith('Appendix '));

                  appendixHeadings.forEach((node) => {
                    const link = document.createElement('a');
                    link.href = '#' + node.id;
                    link.textContent = node.textContent || '';
                    link.setAttribute('data-appendix-toc', 'true');
                    toc.appendChild(link);
                  });
                }
              };
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', applyCompanionEnhancements, { once: true });
              } else {
                applyCompanionEnhancements();
              }
            })();
          `,
        }}
      />
    </>
  );
}
