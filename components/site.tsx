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

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </details>

        {showSubscribe ? (
          <a className="subscribe-button" href="https://mrnaderi.substack.com/subscribe">
            Subscribe
          </a>
        ) : null}
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (!window.__mrnMobileMenuCloseBound) {
              document.addEventListener('click', function (event) {
                const target = event.target;
                if (!(target instanceof Element)) return;
                const link = target.closest('.mobile-menu-nav a');
                if (!link) return;
                const menu = link.closest('details.mobile-menu');
                if (menu) menu.removeAttribute('open');
              });
              window.__mrnMobileMenuCloseBound = true;
            }
          `,
        }}
      />

      <style>{`
        .mobile-menu {
          display: none;
        }

        @media (max-width: 1050px) {
          .mobile-menu {
            position: relative;
            display: block;
            justify-self: end;
          }

          .mobile-menu summary {
            cursor: pointer;
            list-style: none;
            border-bottom: 1px solid #8d918b;
            padding: 8px 0 5px;
            color: #3f4742;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: .12em;
            text-transform: uppercase;
          }

          .mobile-menu summary::-webkit-details-marker {
            display: none;
          }

          .site-header .mobile-menu-nav {
            position: absolute;
            top: calc(100% + 14px);
            right: 0;
            z-index: 50;
            display: grid;
            min-width: 220px;
            gap: 0;
            border: 1px solid rgba(29, 36, 33, 0.18);
            background: var(--paper);
            box-shadow: 0 14px 30px rgba(29, 36, 33, 0.12);
          }

          .site-header .mobile-menu-nav a {
            display: block;
            padding: 14px 18px;
            border-bottom: 1px solid var(--line);
            color: var(--ink);
            font-size: 12px;
            letter-spacing: .02em;
          }

          .site-header .mobile-menu-nav a:last-child {
            border-bottom: 0;
          }
        }
      `}</style>
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
  reviewHref,
  reviewLabel,
}: {
  title: string;
  subtitle?: string;
  status: string;
  description: string;
  tone: "ink" | "blue" | "green" | "red";
  href?: string;
  coverSrc?: string;
  reviewHref?: string;
  reviewLabel?: string;
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
        {reviewHref ? (
          <div className="book-links">
            {href ? (
              <a className="book-link" href={href}>
                Publisher details <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <a className="book-link" href={reviewHref}>
              {reviewLabel ?? "Review"} <span aria-hidden="true">↗</span>
            </a>
          </div>
        ) : href ? (
          <span className="book-link">Publisher details <span aria-hidden="true">↗</span></span>
        ) : null}
      </div>
    </article>
  );

  if (reviewHref) return book;

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
