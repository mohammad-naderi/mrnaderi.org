import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum vitae of Mohammad Reza Naderi.",
  alternates: { canonical: "/cv" },
};

export default function CvPage() {
  return (
    <>
      <SiteHeader />
      <main className="shell" style={{ paddingTop: "42px", paddingBottom: "42px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "18px",
          }}
        >
          <Link className="text-link" href="/about">
            ← Back to About
          </Link>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a
              className="text-link"
              href="/documents/Mohammad-Reza-Naderi-CV.pdf"
              download
            >
              Download PDF
            </a>
            <a
              className="text-link"
              href="/documents/Mohammad-Reza-Naderi-CV.docx"
              download
            >
              Download Word version
            </a>
          </div>
        </div>

        <iframe
          src="/documents/Mohammad-Reza-Naderi-CV.pdf#view=FitH"
          title="Mohammad Reza Naderi curriculum vitae"
          style={{
            width: "100%",
            height: "calc(100vh - 210px)",
            minHeight: "720px",
            border: "1px solid #d8d5cc",
            background: "#fff",
          }}
        />
      </main>
      <SiteFooter />
    </>
  );
}
