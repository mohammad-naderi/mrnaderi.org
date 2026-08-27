import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description:
    "Mohammad Reza Naderi’s seminar on Badiou’s encounter with Hegel’s Science of Logic, the problem of beginning, dialectic, multiplicity, and the unconscious materialism of Hegel.",
  alternates: { canonical: "/teaching/unconscious-materialism-hegel" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
