import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description:
    "Mohammad Reza Naderi’s talk on Dark Enlightenment, acceleration, control, political transition, and the intellectual routes through which Dark Enlightenment emerges from currents associated with the left.",
  alternates: { canonical: "/teaching/dark-enlightenment-from-acceleration-to-control" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
