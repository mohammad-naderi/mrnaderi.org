import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description:
    "Mohammad Reza Naderi’s Theory of Discipline: truth, mathematical ontology, subjectivity, the excess of being over thought, and the possibility of radical novelty.",
};

export default function PhilosophyLayout({ children }: { children: ReactNode }) {
  return children;
}
