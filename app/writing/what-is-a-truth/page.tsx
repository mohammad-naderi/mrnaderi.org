import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "What Is a Truth?",
  description:
    "A reflection on truth in the Theory of Discipline: truth as invariant configuration, the state of a discipline, consistency, impasse, excess, locality, and novelty.",
  alternates: { canonical: "/writing/what-is-a-truth" },
};

export default function WhatIsATruthPage() {
  return (
    <>
      <SiteHeader showSubscribe />
      <main className="seminar-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/writing">← Writing</Link>
          <p className="eyebrow">Current writing</p>
          <h1>What Is a Truth?</h1>
          <div className="seminar-meta">
            <p>Truth · Theory of Discipline</p>
            <p>August 2026</p>
          </div>
        </section>

        <section className="seminar-layout shell" style={{ gridTemplateColumns: "1fr", maxWidth: "920px" }}>
          <article className="seminar-prose course-notes-prose">
            <section id="question">
              <h2>1. The Question</h2>
              <p>
                The Theory of Discipline is about truth. So is Badiou’s philosophy. But for all the sophistication and impressive machinery that is underneath these two theories, there is very little that tells us what truths are in their being. Badiou defines truths as multiples, generic multiples to be exact. But given the fact that all beings are multiples, the assertion that truths are also multiples tells us very little about what a truth is. The adjective “generic” gives some qualification to this otherwise ambiguous determination of a multiple, but still not much.
              </p>
              <p>
                ToD, on the other hand, adds sophisticated machinery that explains how truths are composed and what becomes possible once a truth is composed. It tells us that a truth is the outcome of a process of composition motivated by an impasse and conducted under the orientation of an Idea, through a generic procedure sustained by fidelity, in the presence of an encounter with excess. It also tells us that once a truth is composed and permanently registered in a discipline, possibilities, constructions and consequences become available to that discipline that were not available in its previous state. All of this tells us how and under what conditions a truth is composed and what a discipline can do once it possesses a truth. But it still doesn’t tell us what a truth is in its being.
              </p>
              <p>
                So here I want to ruminate about the being of a truth. I also want to think about what exactly is different between a truth, consistency and novelty. Obviously, all of this is from the point of view of ToD. I am not going to elaborate much about what precious little Badiou has said on these questions. Nevertheless, I like to start with an example of a truth according to Badiou: Greek tragedy.
              </p>
            </section>

            <section id="greek-tragedy">
              <h2>2. Working Backward from Greek Tragedy</h2>
              <p>
                Badiou calls Greek tragedy a form of truth belonging to the procedure of art, or, in a more refined version, performing art. According to ToD, however, the appropriate name for Greek tragedy is not truth but novelty. Why? Because of the word <em>Greek</em>. Greece is a world under a particular historical condition. Greek tragedy appeared in a particular world and at a particular historical juncture. If Greek tragedy is not exactly a truth but a novelty, then the question is: what is the truth?
              </p>
              <p>
                According to ToD, the truth is something that became permanently available within the discipline of performing art and under which the discipline was able to produce a consequence that, in locality with the Greek world, appeared as Greek tragedy.
              </p>
              <p>
                That means that before Greek tragedy could appear, something had to change within the discipline of performing art. New possibilities had to become thinkable and practically available: new ways of organizing storytelling, character, dramatic action, the relation between an individual and family, community, political order, gods, nature, fate and so forth; together with new possibilities of acting, speech, music, staging, costume, ritual, and other elements belonging to the discipline.
              </p>
              <p>In other words, the discipline of performing art had to go through a state transition. Schematically:</p>
              <pre>{`D@S₁ ⟶ D@S₂`}</pre>
              <p>
                By state I mean the state of the discipline as a whole. It includes its theory, its models, its operations, constructions, techniques, practices, accumulated consequences and whatever else belongs to the discipline at that historical coordinate. There is no reason to decide in advance whether a particular change belongs to the theory or to the model. The discipline is the operative unit and the state is meant to include all of it.
              </p>
              <p>Greek tragedy is what some of the newly available possibilities of the discipline produced through locality with the Greek world:</p>
              <pre>{`D@S₂ @ W_Greece ⟶ Greek tragedy`}</pre>
              <p>
                But those possibilities are not themselves the truth. They are what became available to the discipline because of the truth.
              </p>
              <p>So we are back to the original question. What is the truth then?</p>
              <p>
                In its being, I think a truth is an <strong>invariant configuration of heterogeneous elements composed within a discipline</strong>. The elements are not unified in advance by a predicate or an organizing principle available in the prior state of the discipline. Their unity is produced through the relations established in the composition itself. In this sense the truth is a generic multiplicity.
              </p>
              <p>
                In the case of performing art these may be elements of storytelling, character, acting, music, speech, costume, staging, ritual, mythology, religion, the relation of an individual to a family, a community, political institutions, gods, nature, fate and many other things. These elements may have been available to the discipline before. What was not available was this particular configuration of them and the relations established among them.
              </p>
              <p>
                Once such a configuration stabilizes, the discipline is no longer in the same state. It can think, assert, invent, construct and do things that were unavailable to it before.
              </p>
              <p>That stable invariant configuration is what I am proposing to call <strong>truth in its being</strong>.</p>
            </section>

            <section id="state">
              <h2>3. Truth and the State of a Discipline</h2>
              <p>We can therefore rewrite the state transition more precisely:</p>
              <pre>{`D@S₁ ──working under T──⟶ D@S₂`}</pre>
              <p>
                This needs one qualification. T does not perform the transition. The discipline does. Truth is passive. Once composed, however, it becomes one of the invariant resources or conditions permanently registered within the discipline, and the discipline can work under that truth.
              </p>
              <p>
                This also allows us to clean up something that has bothered me in my own use of the word <em>consistency</em>. I have repeatedly said that a truth produces a “new consistency.” But consistency is not an object. It is not another thing that appears beside the truth. Consistency is a property. When we say that a theory is consistent, we mean that it does not produce contradictory results.
              </p>
              <p>
                So when I have spoken of a new consistency, what I should have said more precisely is that the discipline has entered a new state in which a larger or different range of propositions, constructions, operations and possibilities can be sustained consistently. What is new is not an object called consistency. What is new is the state of the discipline and what the discipline can now sustain without contradiction.
              </p>
              <p>Thus:</p>
              <pre>{`D@S₁ ──working under T──⟶ D@S₂`}</pre>
              <p>does not mean:</p>
              <pre>{`C₁ ⟶ C₂`}</pre>
              <p>
                as though C₁ and C₂ were two objects called consistencies. It means that the discipline has altered its state while maintaining the consistency required by its own interiority, and that in the new state possibilities can be sustained that could not be sustained in the previous one.
              </p>
              <p>
                This is also why I do not think we need to decide whether the change has taken place in the theory or in the model of the discipline. Chapter 3 does not make this distinction when it speaks about the operations of the discipline, and there is no reason to introduce it here. The discipline as a whole changes state.
              </p>
              <p>
                So, coming back to Greek tragedy, something happened within performing art by which heterogeneous elements that had previously existed separately, or stood in different relations, were composed into a configuration that the discipline had not previously possessed. Once this configuration stabilized, the discipline entered a new state. It could think, assert, invent and construct things that had previously been unavailable to it.
              </p>
              <p>That stable configuration is what I am proposing to call truth in its being.</p>
            </section>

            <section id="composition">
              <h2>4. The Composition of Truth</h2>
              <p>Now we can reverse the direction of the analysis and ask how such a truth is composed.</p>
              <p>
                The process of composition starts from an impasse. An impasse is the minimum condition for composition to begin. But an impasse by itself does not produce a truth. For an impasse to become the site of a truth-composition, an Idea has to emerge, a generic procedure has to be undertaken and a fidelity has to sustain that procedure.
              </p>
              <p>Let us call this triplet—Idea, Generic and Fidelity—ζ.</p>
              <p>For a particular impasse I, let us call its associated triplet ζ<sub>I</sub>.</p>
              <p>
                The Idea provides the orientation. Genericity provides the procedure of composition. Fidelity sustains the procedure. The principle of maximality governs the discipline’s effort to push the procedure as far as its consistency permits.
              </p>
              <p>But even this is not enough for a procedure of truth. One more thing is required: an encounter with excess.</p>
              <p>Let us call that encounter E.</p>
              <p>A truth-composition therefore requires three ingredients: an encounter with excess, an impasse, and the triplet associated with that impasse:</p>
              <pre>{`Composition(E, I, ζ_I) ⟶ T`}</pre>
              <p>
                The result, if the composition stabilizes, is a truth: an invariant configuration of heterogeneous elements within the discipline.
              </p>
              <p>
                Once composed, that truth is permanently registered in the discipline. It does not disappear and it does not change with the historical life of the discipline. But the discipline does change. The truth can therefore become the basis of subsequent state transitions as the discipline is affected by its own historicity.
              </p>
              <p>Schematically:</p>
              <pre>{`D@Sₙ ──historicity, working under T──⟶ D@Sₙ₊₁`}</pre>
              <p>
                The discipline can continue to draw new possibilities from the same truth as its own historical state changes. It can produce new assertions, constructions, operations and consequences. Through locality with different worlds, some of those consequences appear as novelties.
              </p>
              <p>
                The truth remains invariant. The discipline has a history. And novelty belongs to what the historical discipline, working under an invariant truth, becomes capable of producing in a world.
              </p>
            </section>

            <section id="different-impasses">
              <h2>5. One Truth, Different Impasses</h2>
              <p>
                There is another question that follows from this account. If a truth is composed in relation to an impasse, does every different impasse produce a different truth?
              </p>
              <p>
                I raised this question in §9.5 of <em>Badiou and Disciplinary Truths</em> through the example of the status of women. I think the intuition behind that discussion was correct, even if I would now explain it somewhat differently.
              </p>
              <p>
                Consider an encounter within the discipline of politics with something that the existing political representation cannot fully contain: the equality of men and women. I am using the word <em>equality</em> here in a very basic sense. The encounter imposes upon political thinking the fact that there is nothing in being that sustains the representation according to which a woman, simply by virtue of being a woman, has less capacity than a man to appear as a political subject.
              </p>
              <p>
                But a representation does not necessarily encounter this excess everywhere in the same way. It has particular points at which its organization comes under pressure. These are its impasses.
              </p>
              <p>
                In one political configuration the fault line may be religious. A religious representation may assign different political capacities, rights or functions to men and women. In another configuration the fault line may be familial or social. In another it may be racial. In another it may concern citizenship or the state.
              </p>
              <p>Thus we may have:</p>
              <pre>{`I_religious, I_familial, I_racial, I_statist`}</pre>
              <p>
                The Ideas that orient composition in relation to these impasses will not necessarily be the same. Neither will the generic procedures or the fidelities that sustain them. We can therefore associate a different triplet with each impasse:
              </p>
              <pre>{`ζ_religious, ζ_familial, ζ_racial, ζ_statist`}</pre>
              <p>But there is no reason for these differences to result in different truths.</p>
              <p>
                The reason is that the impasse does not determine the identity of the truth. Nor does the particular triplet through which the truth is composed. The impasse specifies the coordinate at which the existing representation becomes incapable of sustaining itself in the presence of the encounter. The triplet specifies the procedure through which the discipline works at that coordinate.
              </p>
              <p>But what imposes itself upon all of these representations is the same excess.</p>
              <p>Schematically:</p>
              <pre>{`Composition(E, I_religious, ζ_religious) ⟶ T
Composition(E, I_familial, ζ_familial) ⟶ T
Composition(E, I_racial, ζ_racial) ⟶ T`}</pre>
              <p>The T on the right side of these expressions is the same truth.</p>
              <p>
                We can say that the “essence,” if I may use that word provisionally, of what the encounter imposes is <strong>men and women are equal</strong>. But this equality pressures different representations at different fault lines. A religious representation experiences one impasse. A familial representation experiences another. A racialized representation experiences another. The material that has to be composed, the Idea under which it is composed and the fidelity through which that composition is sustained may therefore be very different.
              </p>
              <p>
                Yet once the composition stabilizes, the resulting truth is not marked as religious, familial or racial. Those qualifications belong to the conditions under which the truth was composed. They do not belong to the truth in its being.
              </p>
              <p>
                This is another aspect of the invariance of truth. A truth surpasses the particular impasse and the particular triplet through which it was composed. The impasse and the triplet belong to its genesis. They do not individuate it.
              </p>
              <p>
                This is what I think §9.5 was trying to say when it argued that different generic constructions oriented toward different impasses need not constitute different truths. The unity comes neither from the identity of the impasses nor from the identity of the procedures. It comes from the invariant configuration that results from the same encounter with excess.
              </p>
              <p>Different local fault lines can therefore lead the discipline to the same truth.</p>
            </section>

            <section id="without-truth">
              <h2>6. Composition Without Truth</h2>
              <p>
                But this immediately raises another question. What if there is an impasse and there is an Idea, a generic procedure and a fidelity, but there is no encounter with excess?
              </p>
              <p>
                Nothing in ToD requires every impasse to be accompanied by an encounter with excess. Disciplines face impasses all the time. An impasse simply means that, at some point, the discipline can no longer proceed in the way in which it has been proceeding. Something has to be decided, constructed or reorganized.
              </p>
              <p>An Idea can orient that work. A generic procedure can construct material under that orientation. Fidelity can sustain the procedure.</p>
              <p>In other words, the triplet can operate perfectly well in the absence of an encounter with excess.</p>
              <p>Schematically:</p>
              <pre>{`(I, ζ_I) ⟶ K`}</pre>
              <p>where K may be a decision, a proposition, a construction, a procedure or some other consequence that resolves the impasse.</p>
              <p>
                Such a procedure can be extremely important. It may transform the discipline. It may move the discipline from one state to another:
              </p>
              <pre>{`D@S₁ ──(I, ζ_I)──⟶ D@S₂`}</pre>
              <p>It may even produce something genuinely new.</p>
              <p>But it does not produce a truth.</p>
              <p>For a truth, the encounter with excess is indispensable:</p>
              <pre>{`Composition(E, I, ζ_I) ⟶ T`}</pre>
              <p>
                This gives excess a very precise function within the Theory of Discipline. Idea, genericity and fidelity do not by themselves distinguish a truth procedure from every other procedure of disciplined composition. They describe how a discipline works under an impasse.
              </p>
              <p>
                What distinguishes the composition of a truth is that this work takes place in the presence of an encounter with something in being that the existing representation cannot contain.
              </p>
              <p>
                Without E, the triplet can resolve an impasse. It can draw conclusions. It can alter the state of the discipline. It can produce consequences and perhaps even novelties. But those conclusions remain products of the resources of disciplinary thinking itself.
              </p>
              <p>
                With E, something different happens. The discipline is placed under a constraint that does not originate in its own representation. The impasse becomes the local point at which that constraint is felt, and the triplet becomes the means through which the discipline composes a response to it.
              </p>
              <p>When that composition stabilizes as an invariant configuration, what has been composed is a truth.</p>
              <p>So there are two procedures that may look very similar from inside a discipline:</p>
              <pre>{`(I, ζ_I) ⟶ K

(E, I, ζ_I) ⟶ T`}</pre>
              <p>Both involve an impasse. Both involve an Idea, a generic procedure and fidelity. Both may alter the state of the discipline.</p>
              <p>But only the second is a procedure of truth.</p>
              <p><strong>The difference is excess.</strong></p>
            </section>

            <section id="conclusion">
              <h2>7. What, Then, Is a Truth?</h2>
              <p>We can now return to the question with which we began.</p>
              <p>What is a truth in its being?</p>
              <p>
                A truth is an <strong>invariant configuration of heterogeneous elements composed within a discipline</strong>. Those elements are not unified in advance by the predicates, classifications or organizing principles available in the prior state of the discipline. Their unity is produced through the relations established by the composition itself. In this sense a truth is a generic multiplicity.
              </p>
              <p>A truth is composed through an encounter with excess at an impasse, under an Idea, through a generic procedure sustained by fidelity:</p>
              <pre>{`Composition(E, I, ζ_I) ⟶ T`}</pre>
              <p>
                But the conditions of its genesis do not individuate the truth. Once composed, the truth surpasses the particular impasse and the particular triplet through which it was reached. Different impasses and different triplets can therefore result in the same truth when the same encounter with excess imposes the same invariant configuration upon disciplinary thought.
              </p>
              <p>Nor does the truth subsequently change. Once registered, it remains permanently within the discipline. What changes is the discipline.</p>
              <p>This is why the concept of <strong>state</strong> is useful. A state is the total historical condition of a discipline at a particular coordinate:</p>
              <pre>{`D@S`}</pre>
              <p>
                It includes the discipline’s theory, models, constructions, operations, techniques, practices, accumulated consequences and whatever else belongs to its interior at that point. Speaking of state allows us to describe transformation without arbitrarily privileging one component of the discipline over another.
              </p>
              <p>A truth can become part of the conditions under which the discipline passes from one state to another:</p>
              <pre>{`D@S₁ ──working under T──⟶ D@S₂`}</pre>
              <p>Truth does not perform this transition. The discipline does.</p>
              <p>
                This also clarifies <strong>consistency</strong>. Consistency is not an object produced by truth. It is a property that the discipline must maintain. When I have spoken elsewhere of a truth producing a “new consistency,” this should not be understood as the production of something called consistency. What changes is the state of the discipline. In the new state the discipline may be able to sustain consistently propositions, constructions, operations and possibilities that could not be sustained in its prior state.
              </p>
              <p>
                The distinction between <strong>truth and novelty</strong> is equally important. Truth remains internal to the discipline as an invariant configuration. Novelty belongs to consequences. Through the operation of locality, a discipline in a particular state interacts with a world and produces consequences there:
              </p>
              <pre>{`D@S @ W ⟶ K`}</pre>
              <p>When such a consequence introduces something that was previously unavailable, it is a novelty.</p>
              <p>
                Greek tragedy therefore need not be the truth. Greek tragedy is a historically localized novelty. The truth lies behind it, internal to the discipline of performing art, as the invariant configuration that altered what that discipline could think, construct and produce. In locality with the Greek world, those new disciplinary possibilities gave rise to Greek tragedy.
              </p>
              <p>
                The same truth can continue to generate different possibilities throughout the historical life of the discipline. The discipline changes from state to state. Worlds change. Consequences change. Novelties change.
              </p>
              <p>The truth does not.</p>
              <p>This is perhaps the clearest way I can presently distinguish the principal terms:</p>
              <p><strong>Truth</strong> is the invariant configuration.</p>
              <p><strong>State</strong> is the historical condition of the discipline as a whole.</p>
              <p><strong>Consistency</strong> is a property the discipline sustains as it passes from one state to another.</p>
              <p><strong>Impasse</strong> is the point at which the discipline can no longer proceed in its existing way.</p>
              <p><strong>Idea, Generic and Fidelity</strong> form the triplet through which the discipline composes in relation to an impasse.</p>
              <p><strong>Excess</strong> is what distinguishes truth-composition from composition that remains entirely within the resources of disciplinary thought.</p>
              <p><strong>Consequence</strong> is what the discipline produces through its operations.</p>
              <p><strong>Locality</strong> is the operation through which disciplinary consequences become effective in worlds.</p>
              <p>And <strong>novelty</strong> is a consequence that introduces something genuinely new.</p>
              <p>
                Truth, then, is neither its composition, nor the consistency of the discipline, nor the consequences that follow from it. It is the invariant configuration that, once composed and permanently registered, changes what a discipline can become capable of doing.
              </p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
