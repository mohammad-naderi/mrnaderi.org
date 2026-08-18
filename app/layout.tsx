import type { Metadata } from "next";
import "./globals.css";
import "./philosophy-refinement.css";

export const metadata: Metadata = {
  title: {
    default: "Mohammad Reza Naderi",
    template: "%s · Mohammad Reza Naderi",
  },
  description:
    "The philosophical work, publications, seminars, and current writing of Mohammad Reza Naderi.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
