import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["Philosophy", "/philosophy"],
  ["Writing", "/writing"],
  ["Publications", "/publications"],
  ["Teaching & Talks", "/teaching"],
  ["About", "/about"],
];

export function SiteHeader({ showSubscribe = false }: { showSubscribe?: boolean }) {
  return (
    <header className="site-header">
      <div
        className="shell header-inner"
        style={{ gridTemplateColumns: showSubscribe ? "1fr auto auto" : "1fr auto" }}
      >
        <Link className="wordmark" href="/" aria-label="Mohammad Reza Naderi home">
          <span className="wordmark-name">Mohammad Reza Naderi</span>
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        {showSubscribe ? (
          <a className="subscribe-button" href="https://mrnaderi.substack.com/subscribe">
            Subscribe
          </a>
        ) : null}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-name">Mohammad Reza Naderi</p>
          <p>Philosophy, disciplinary truths, and radical novelty.</p>
        </div>
        <div className="footer-links">
          {nav.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <p className="footer-note">
          <a href="mailto:contact@mrnaderi.org">contact@mrnaderi.org</a>
        </p>
      </div>
    </footer>
  );
}

export function ArrowLink({
  children,
  href,
  variant = "dark",
}: {
  children: ReactNode;
  href: string;
  variant?: "dark" | "light";
}) {
  return (
    <Link className={`arrow-link ${variant}`} href={href}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function BookSpine({
  title,
  subtitle,
  status,
  description,
  tone,
  href,
  coverSrc,
}: {
  title: string;
  subtitle?: string;
  status: string;
  description: string;
  tone: "ink" | "blue" | "green" | "red";
  href?: string;
  coverSrc?: string;
}) {
  const book = (
    <article className="book-item">
      <div
        className={`book-cover ${tone}`}
        aria-hidden="true"
        style={coverSrc ? { padding: 0, overflow: "hidden", background: "transparent" } : undefined}
      >
        {coverSrc ? (
          <img
            src={coverSrc}
            alt=""
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <>
            <span>Mohammad Reza Naderi</span>
            <strong>{title}</strong>
          </>
        )}
      </div>
      <div className="book-copy">
        <p>{status}</p>
        <h3>{title}</h3>
        {subtitle ? <span className="book-subtitle">{subtitle}</span> : null}
        <span className="book-description">{description}</span>
        {href ? <span className="book-link">Publisher details <span aria-hidden="true">↗</span></span> : null}
      </div>
    </article>
  );

  return href ? (
    <a className="book-item-link" href={href}>
      {book}
    </a>
  ) : book;
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children ? <div className="page-deck">{children}</div> : null}
    </section>
  );
}
