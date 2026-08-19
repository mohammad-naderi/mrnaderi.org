import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["Philosophy", "/philosophy"],
  ["Writing", "/writing"],
  ["Publications", "/publications"],
  ["Teaching & Talks", "/teaching"],
  ["About", "/about"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Mohammad Reza Naderi home">
          <span className="wordmark-name">Mohammad Reza Naderi</span>
          <span className="wordmark-rule" aria-hidden="true" />
          <span className="wordmark-field">Philosophy</span>
        </Link>
        <nav aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="subscribe-button" href="/writing#subscribe">
          Subscribe
        </Link>
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
          Toronto · <a href="mailto:contact@mrnaderi.org">contact@mrnaderi.org</a>
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
}: {
  title: string;
  subtitle?: string;
  status: string;
  description: string;
  tone: "ink" | "blue" | "green";
  href?: string;
}) {
  const book = (
    <article className="book-item">
      <div className={`book-cover ${tone}`} aria-hidden="true">
        <span>Mohammad Reza Naderi</span>
        <strong>{title}</strong>
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
  children: ReactNode;
}) {
  return (
    <section className="page-intro shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="page-deck">{children}</div>
    </section>
  );
}
