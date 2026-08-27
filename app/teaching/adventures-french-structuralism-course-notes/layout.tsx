import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description:
    "Course notes for Mohammad Reza Naderi’s Adventures of French Structuralism, covering structure, determination, novelty, Deleuze, Lacan, and related problems in contemporary French philosophy.",
  alternates: { canonical: "/teaching/adventures-french-structuralism-course-notes" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
