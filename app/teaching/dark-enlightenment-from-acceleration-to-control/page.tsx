import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "Dark Enlightenment — From Acceleration to Control",
};

const toc = [
  ["opening", "Opening"],
  ["two-left-critiques", "Two Left Critiques of Capitalism"],
  ["ontology", "Ontology: Contradiction vs Generativity"],
  ["subject-agency", "Subject and Agency"],
  ["deleuze-guattari", "Deleuze and Guattari on Capitalism"],
];

export default function DarkEnlightenmentPartOnePage() {
  return (
    <>
      <SiteHeader />
      <main className="seminar-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/teaching">← Teaching & Talks</Link>
          <p className="eyebrow">Talk · Part I</p>
          <h1>Dark Enlightenment</h1>
          <div className="seminar-meta">
            <p>From Acceleration to Control: How Dark Enlightenment Emerges from “the Left”</p>
            <p>May 8, 2026</p>
          </div>
        </section>

        <section className="seminar-layout shell">
          <nav className="seminar-toc" aria-label="Talk contents">
            <p>Contents</p>
            {toc.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>

          <article className="seminar-prose">
            <section id="opening">
              <h2>Opening</h2>
              <p>Let me begin with a paradox.</p>
              <p>The orientation often called “Dark Enlightenment” is typically presented as a reactionary, right-wing critique of modern democracy. It is associated with figures such as Nick Land and Curtis Yarvin, and it is usually understood as a rejection of the political legacy of the Enlightenment.</p>
              <p>But this description, while not wrong, is fundamentally insufficient.</p>
              <p>Because it does not explain the most important fact: this orientation does not emerge from the traditional right.</p>
              <p>It emerges, in a precise and traceable way, from theoretical resources that belong to the left. If we do not understand this genealogy, then our critique will remain external and ultimately superficial.</p>
              <p>So, the question I want to pose today is the following: How does a line of thinking that begins with Marx and passes through Deleuze and Guattari arrive at something like the Dark Enlightenment?</p>
              <p>And more importantly: What is lost in this transition?</p>
            </section>

            <section id="two-left-critiques">
              <h2>Framing Section — Two Left Critiques of Capitalism</h2>
              <p>The claim that orientations such as accelerationism and the Dark Enlightenment emerge “from the left” requires clarification. The left is not a unified theoretical position, and its critique of capitalism has taken different philosophical forms. For our purposes, two distinct lines of critique are particularly important. One is the classical Marxist critique, rooted in the Hegelian tradition. The other is a later critique associated with Deleuze and Guattari, which draws instead on Spinoza.</p>
              <p>Understanding the difference between these two traditions is essential, because accelerationism and the Dark Enlightenment do not emerge from the Marxist line, but from the latter. In order to see how this is possible, we must first situate these two critiques in relation to each other.</p>
              <p>The difference between Marx and Deleuze is not simply a difference in conclusions about capitalism, but a deeper philosophical divergence that concerns both ontology and the theory of the subject. In both respects, this divergence reflects the difference between their respective philosophical lineages: Marx inherits a Hegelian framework, whereas Deleuze develops a position closer to a modified Spinozism.</p>
              <p>We can begin with ontology.</p>
            </section>

            <section id="ontology">
              <h2>Ontology: Contradiction vs Generativity</h2>
              <p>Both Hegel and Spinoza are thinkers of immanence, but they diverge on the principle of transformation. In the Hegelian lineage taken up by Marx, change is driven by contradiction. Opposing forces generate tension, and this tension produces transformation through processes of negation and resolution. Capitalism, on this view, is defined by internal contradictions that both sustain it and open the possibility of its transformation.</p>
              <p>In the Spinozist lineage taken up by Deleuze, transformation is not grounded in contradiction, but in the productive power of being itself. Being is not composed of fixed identities that enter into opposition, but of differential processes that continuously generate new forms. What changes is not a contradiction being resolved, but a field of relations being reconfigured through the production of new determinations. The process is immanent in both cases, but in Hegel it is structured by negativity, whereas in Deleuze it is structured by generativity.</p>
              <p>This difference has direct consequences for how capitalism is understood. In the Marxian framework, capitalism is a system whose internal contradictions generate the conditions of its transformation. In the Deleuzian framework, capitalism is a configuration that operates directly on generative processes, organizing and reconfiguring the field in which they are actualized.</p>
            </section>

            <section id="subject-agency">
              <h2>Subject and Agency</h2>
              <p>This ontological difference is accompanied by a corresponding difference in the theory of the subject.</p>
              <p>In the Hegelian-Marxist lineage, transformation requires subjectivity. The contradictions of capitalism do not resolve themselves automatically; they must be taken up and organized through collective agency. The proletariat is not simply a sociological category, but the point at which the system’s internal contradiction becomes capable of conscious intervention. Politics, in this framework, is inseparable from the formation of a subject capable of acting on these contradictions.</p>
              <p>In the Deleuzian-Spinozist lineage, the role of the subject is fundamentally redefined. Agency is not understood as a sovereign capacity that stands outside the process and imposes change upon it. Rather, it is immanent to the process itself. What appears as intervention is a reconfiguration of relations within a field of generative processes, not the imposition of form by an external subject. Freedom, in this sense, is not independence from determination, but the capacity to act within and through the relations that constitute a situation.</p>
              <p>This leads to a different conception of politics. Politics is no longer the organized transformation of a system through a unified subject, but the creation of new configurations within the processes that compose it. It becomes a matter of experimentation, recomposition, and the opening of alternative possibilities, rather than the execution of a determinate program.</p>
            </section>

            <section id="deleuze-guattari">
              <h2>Deleuze and Guattari on Capitalism</h2>
              <p>Within this framework, Deleuze and Guattari analyze capitalism as a system that operates directly on generative processes. Unlike earlier social formations, which tend to stabilize these processes within relatively fixed structures, capitalism continuously reconfigures the conditions under which they are actualized. It breaks existing structures and reorganizes them in new forms, producing a dynamic in which instability and re-stabilization are inseparable.</p>
              <p>To clarify this, they distinguish between different regimes through which social systems organize generative processes. In what they describe as “primitive” formations, flows of labor, exchange, and social relations are directly coded into stable structures such as kinship systems and local obligations. In “despotic” formations, these codes are centralized and subordinated to a higher organizing principle, resulting in what they call overcoding. Capitalism, by contrast, operates through decoding and recoding. It breaks existing structures, releases processes from fixed configurations, and then reorganizes them in new ways in order to sustain itself.</p>
              <p>This dynamic is further articulated in their analysis of desire. Desire, in their framework, should not be understood psychologically, but as the productive dimension of being itself. All social systems organize this productivity by structuring the field in which it is actualized. What distinguishes capitalism is not that it organizes desire, but how it does so. Earlier systems stabilize this productivity by limiting variation. Capitalism, by contrast, continuously generates variation and reorganizes it, expanding the field of possible actualizations while structuring them in ways that tend to reproduce the system.</p>
              <p>Unlike Marx, however, this analysis does not culminate in a program of transformation. Deleuze and Guattari provide a powerful account of how capitalism operates, but they do not specify how it should be overcome. Their framework remains diagnostic and immanent, identifying points of transformation without organizing them into a structured political trajectory.</p>
              <p>The emphasis on the absence of a program is crucial. It prepares the ground for what follows. The orientations that later come to be known as accelerationism and the Dark Enlightenment can be understood as attempts to extract a program from a framework that deliberately resists one.</p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
