import type { Metadata } from "next";
import { BookSpine, PageIntro, SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = { title: "Publications" };

const articles = [
  {
    year: "2024",
    title: "Love – The Scene of the Two",
    venue: "Poliética · 12(4) · 164–190",
    note: "Badiou's philosophy of love considered as a discipline that composes a shared world through difference.",
    href: "https://revistas.pucsp.br/index.php/PoliEtica/article/view/68062",
  },
  {
    year: "2024",
    title: "‘Lacan Is Our Hegel’: Dialectic from Hegel to Lacan to Badiou",
    venue: "Philosophy After Lacan · Routledge · 142–166",
    note: "A reconstruction of the successive splitting of Hegel by Lacan and Lacan by Badiou.",
    href: "https://www.taylorfrancis.com/chapters/edit/10.4324/9781003425953-10/lacan-hegel-reza-naderi",
  },
  {
    year: "2023",
    title: "The Place of the Subject in Badiou’s Theory of Discipline",
    venue: "Filozofski vestnik · 43(3)",
    note: "The subject reconsidered through the Cartesian cogito, mathematical infinity, and the disciplinary continuity of Badiou's thought.",
    href: "https://ojs.zrc-sazu.si/filozofski-vestnik/article/view/12065",
  },
  {
    year: "2021",
    title: "Atlas of Experimental Politics",
    venue: "Subset of Theoretical Practice · ŠUM #17: Meta-Futures",
    note: "Collective work on political experimentation, including the section ‘The Discipline of Politics.’",
    href: "https://www.sum.si/journal-articles/atlas-of-experimental-politics",
  },
  {
    year: "2020",
    title: "Contribution to the Critique of Political Organization",
    venue: "Crisis & Critique · 7(3) · 399–428",
    note: "Collective research toward an axiomatic approach to political organization and political economy.",
    href: "https://www.crisiscritique.org/storage/app/media/2020-11-24/gabriel-tupinambaet-al.pdf",
  },
  {
    year: "2020",
    title: "Model Theory and the ‘Unnamable’",
    venue: "Revolutions for the Future · Suture Press · 92–121",
    note: "Badiou's concept of model placed in relation to Sylvain Lazarus's anthropology of the name and model of politics.",
    href: "https://web.flu.cas.cz/scan/323554882.pdf",
  },
  {
    year: "2018",
    title: "Mark and Lack: Formalism as Fidelity",
    venue: "Crisis & Critique · 5(1) · 272–299",
    note: "A reading of Badiou's early formalism as the opening of a longer trajectory toward Being and Event.",
    href: "https://www.crisiscritique.org/past",
  },
  {
    year: "2008",
    title: "War, Peace, and Fuzzy Logic",
    venue: "Cybernetics and Systems · 39(2) · 113–135",
    note: "With Mory Ghomshei and John Meech. A formal exploration of causal and non-causal pathways toward peace.",
    href: "https://www.tandfonline.com/doi/abs/10.1080/01969720701853418",
  },
  {
    year: "2008",
    title: "Fuzzy Logic in a Postmodern Era",
    venue: "Forging New Frontiers: Fuzzy Pioneers II · 363–376",
    note: "With Mory Ghomshei and John Meech. Fuzzy logic used to think the relation between causality and serendipity.",
    href: "https://link.springer.com/chapter/10.1007/978-3-540-73185-6_18",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="publications-page">
        <PageIntro eyebrow="Publications" title="Books, articles, and chapters." />

        <section className="page-description shell">
          <p>
            My publications have appeared under both Reza Naderi and Mohammad
            Reza Naderi. I use Mohammad Reza Naderi on this site.
          </p>
        </section>

        <section className="content-section shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Monographs & collections</p>
              <h2>Books</h2>
            </div>
          </div>
          <div className="publication-books">
            <BookSpine
              tone="ink"
              status="Lexington Books · 2023"
              title="Badiou, Infinity, and Subjectivity"
              description="A sustained reading of the relation among infinity, formalism, and subjectivity in Alain Badiou's philosophy."
              href="https://www.bloomsbury.com/us/badiou-infinity-and-subjectivity-9781666931044/"
              coverSrc="/badiou-infinity-and-subjectivity.jpg"
            />
            <BookSpine
              tone="blue"
              status="Routledge · 2024 · Co-editor"
              title="Philosophy after Lacan"
              description="A collection examining the philosophical consequences of Lacanian thought and its continuing conceptual force."
              href="https://www.routledge.com/Philosophy-After-Lacan-Politics-Science-and-Art/Taheri-Vanderwees-Naderi/p/book/9781032546452"
              coverSrc="/philosophy-after-lacan.jpg"
            />
            <BookSpine
              tone="red"
              status="GLAC Edições · 2026 · Co-author"
              title="Atlas de Política Experimental"
              description="A substantially revised and expanded Portuguese-language edition of Atlas of Experimental Politics, collectively written by the Subconjunto de Prática Teórica. My contribution, ‘The Discipline of Politics,’ was rewritten for this volume."
              href="https://www.glacedicoes.com/product-page/atlas-de-politica-experimental-subconjunto-de-pratica-teorica"
              coverSrc="/atlas-de-politica-experimental.jpg"
            />
            <BookSpine
              tone="green"
              status="Bloomsbury Academic · Forthcoming 2027"
              title="Badiou and Disciplinary Truths"
              description="A companion to The Immanence of Truths and a systematic presentation of the Theory of Discipline."
              href="https://www.bloomsbury.com/us/badiou-and-disciplinary-truths-9781350555440/"
            />
          </div>
        </section>

        <section className="articles-section shell">
          <div>
            <p className="eyebrow">Selected</p>
            <h2>Articles & chapters</h2>
          </div>
          <div className="article-list">
            {articles.map((article) => (
              <article key={article.title}>
                <span>{article.year}</span>
                <div>
                  <h3><a href={article.href}>{article.title} <span aria-hidden="true">↗</span></a></h3>
                  <p>{article.venue}</p>
                  <p>{article.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
