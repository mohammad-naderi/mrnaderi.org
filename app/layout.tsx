import type { Metadata } from "next";
import "./globals.css";
import "./home-refinement.css";
import "./philosophy-refinement.css";
import "./interior-refinement.css";
import "./seminar.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mrnaderi.org"),
  title: {
    default: "Mohammad Reza Naderi",
    template: "%s · Mohammad Reza Naderi",
  },
  description:
    "The philosophical work, publications, seminars, and current writing of Mohammad Reza Naderi.",
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
