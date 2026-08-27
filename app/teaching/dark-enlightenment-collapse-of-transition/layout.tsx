import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description:
    "Mohammad Reza Naderi’s talk on accelerationism, political transition, and the collapse of transition in the emergence of Dark Enlightenment.",
  alternates: { canonical: "/teaching/dark-enlightenment-collapse-of-transition" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
