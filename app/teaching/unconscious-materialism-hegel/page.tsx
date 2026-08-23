import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "The Unconscious Materialism of Hegel",
};

export default function HegelSeminarPage() {
  return (
    <>
      <SiteHeader />
      <main className="seminar-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/teaching">← Teaching & Talks</Link>
          <p className="eyebrow">Seminar text</p>
          <h1>The Unconscious Materialism of Hegel</h1>
          <div className="seminar-meta">
            <p>Dialectics Returns · International Workshop on Dialectics</p>
            <p>Prague · September 12, 2019</p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a href="https://suturepress.com/prague-axiomatic-circle/dialectics-returns">Workshop page ↗</a>
              <a href="https://www.youtube.com/watch?v=-D3DjWIiR6U&list=PLDTspDPCczZy5s87SEO8MwXZ8LwTQoy1N&index=8">Watch Part I ↗</a>
              <a href="https://www.youtube.com/watch?v=Z8sLTsAJvW0&list=PLDTspDPCczZy5s87SEO8MwXZ8LwTQoy1N&index=10">Watch Part II ↗</a>
            </div>
          </div>
        </section>

        <section className="seminar-layout shell" style={{ gridTemplateColumns: "1fr", maxWidth: "920px" }}>
          <article className="seminar-prose">
            <p>
              In this short talk I want to highlight Badiou’s encounter with the very beginning of Hegel’s <em>Science of Logic</em> (<em>Logic</em>): the categories of Being, Nothing and Becoming. This encounter took place in Badiou’s commentary to the Chinese philosopher Zhang Shiying’s text <em>The Rational Kernel of Hegelian Dialectic</em> (<em>Rational Kernel</em>), which was published in 1978, the same year his seminars of <em>Theory of the Subject</em> started. Both works, the <em>Rational Kernel</em> and <em>Theory of the Subject</em>, advocated the same approach toward Hegel that can be summarized in three points:
            </p>
            <ol>
              <li>Hegel’s most important work is the <em>Logic</em>, not the <em>Phenomenology</em>.</li>
              <li>The rational kernel of the Hegelian dialectic is reachable only by “splitting” Hegel.</li>
              <li>This splitting operation must be performed right at the beginning of the <em>Logic</em>.</li>
            </ol>
            <p>
              These texts, despite belonging to the early to mid periods of Badiou’s philosophical development, chart out the approach that remained the same also for the mature Badiou. In his <em>Logics of Worlds</em> Badiou writes of Hegel’s <em>Logic</em> that “I have never ceased measuring myself up to this book, almost as unreadable as Joyce’s <em>Finnegans Wake</em>.” For Badiou the difference between the <em>Logic</em> and the <em>Phenomenology</em> harkens back to the distinction that he likes to draw between his approach and the Hegel of Alexandre Kojève, who was “exclusively of the <em>Phenomenology of Spirit</em>, taken as the idealism of the scissions of self-consciousness, held in the ascending metaphor that follows from sensible immediacy to absolute knowledge, with, at its heart, the master-slave dialectic.”
            </p>
            <p>
              Splitting Hegel is also an important operation that is directly related to Badiou’s mature philosophy that he calls “Platonism of multiples.” As we shall see in more detail in the following, the splitting of Hegel speaks to the impossibility of deriving two from one. Choosing to split Hegel, as the most radical and consistent thinker of One, allows Badiou to confront one of the mainstream idealist commencements of philosophy, which is to begin with the thought of One.
            </p>
            <p>
              The <em>Rational Kernel</em> is a crucial text as this work takes on the beginning of the <em>Logic</em> directly and performs the operation of scission by showing that there are two dialectical matrixes present right at the beginning of the <em>Logic</em>.
            </p>
            <p>
              The first thing Badiou reminds us, both in the <em>Rational Kernel</em> and <em>Theory of the Subject</em>, is how fundamental the thought of One is for Hegel. It is the originary status of this thought that underlies other fundamental features of Hegel’s logic, such as placing the category of quality prior to quantity. This is so because it must be possible for Hegel to make the claim that One is a qualitative feature of Being and not a quantitative feature. As a corollary to the originary status of One, we can assert that there is no Other as the radical otherness to One; for radical otherness, since it stands in absolute otherness to One, cannot be derived from One; if there were such radical otherness, then we would have Two (One and Other) as a more originary thought. Furthermore, there is a difference between other and Other, in which only the former is derivable from One. Thus, the derivation of quantity from quality in the <em>Logic</em> is, at the same time, on a smaller scale, the derivation of other (and others) from One.
            </p>
            <p>
              Another important feature of Hegel’s logic is that the thought of One dictates the method of its progression. It is not the case that the thought of One and the thought of method, that is dialectic, are two different things which were later merged. In fact, it is completely legitimate to claim that there is no thought of dialectic for Hegel separable from the thought of One, and it is the latter that grounds the advent and the laws of the former. As a result, there seems to be no thought more originary than the thought of One in the entire Hegelian logic. Yet there is another consideration that comes before the thought of One in his system: the thought that philosophy, or rather logic, as the science of pure knowing, must be without any presupposition.
            </p>
            <blockquote>
              But if no presupposition is to be made and the beginning itself is taken immediately, then its only determination is that it is to be the beginning of logic, of thought as such. All that is present is simply the resolve, which can also be regarded arbitrary, that we propose to consider thought as such. Thus the beginning must be an absolute, or what is synonymous here, an abstract beginning; and so it may not presuppose anything, must not be mediated by anything nor have a ground; rather it is to be itself the ground of the entire science. Consequently, it must be purely and simply an immediacy, or rather merely immediacy itself. Just as it cannot possess any determination relatively to anything else, so too it cannot contain within itself any determination, any content; for any such would be a distinguishing and an interrelationship of distinct moments, and consequently a mediation. The beginning therefore is pure being.
            </blockquote>
            <p>
              Part of the requirement of no presuppositions pertains to the problem of “beginning” (<em>Anfang</em>) itself. The concept of beginning brings an additional specification that Hegel would like to do away with. Beginning implies starting with a minimal premise, or nothingness altogether. For Hegel, such a concept of beginning is paradoxically too complex to serve as the beginning of thought. The naive concept of beginning is that of “a nothing from which something is to proceed.” It thus takes for granted that what is being thought is the beginning of something yet to emerge. At the start of philosophy, however, Hegel does not assume that there will be anything beyond what we start with. All we may understand there to be is sheer indeterminate being, which may or may not prove later to be, or to have been, the beginning of something more. This is perhaps why Hegel’s account begins not even with a full sentence, but a sentence fragment: “being, pure being, without any further determination.”
            </p>
            <p>
              So, it is the demand to start with no presupposition, with even the expectation of being the “beginning” of something else extracted, that leads to the thought of pure being as the absolute beginning of logic. But without further qualification in the <em>Logic</em>, why must the thought of pure being coincide with the thought of One? For Hegel, the thought of pure being is a singular thought, and therefore it is quite legitimate to think of pure being as One.
            </p>
            <p>
              It is beyond the scope of this talk to show that a significant part, if not the most significant part, of Badiou’s philosophy is to break the relation between the beginning of philosophy and the thought of One. This is the ground for the revolutionary idea that the logic of being is not in fact the logic that is traditionally developed by, or associated with, metaphysics. The logic of being is rather captured by mathematics, hence the formula “ontology is mathematics.” For now, we want to emphasize the fact that for Hegel, to begin as a science, logic must start with the thought of One, that is pure being as one.
            </p>
            <p>
              Having established the beginning, the great aporia in Hegel’s <em>Logic</em> is how, from One, can we derive multiple (or simply, two)? How does One beget many? This is the very place that Badiou’s investigation in Hegel begins, both in <em>Theory of the Subject</em> and the <em>Rational Kernel</em>. Badiou mentions right at the beginning of <em>Theory of the Subject</em> that, while nothing can be said of One without already engaging qualitatively, Hegel “is at pains to engender the multiple, the denumerable, insofar as his idealist propensity pushes him always to obtain everything on the basis of a simple term.” Inasmuch as deriving One from multiple is difficult, it is far more difficult to derive multiple from One—“to prove the marvels of nature by God is much more complicated, since God is necessarily the marvel of marvels.”
            </p>
            <p>
              The short answer is that, for Badiou, Hegel does not derive two from One. The beginning of the <em>Logic</em> involves a “smokescreen,” a sleight of hand, to create the illusion that we have accomplished the derivation of two from One. However, at the end of the first “cycle” of the progression, when we arrive at the category of Becoming, right before the category of Determinate Being, we have not accomplished this task the way Hegel wants us to believe.
            </p>
            <p>
              Let us have a look at Badiou’s remarks on the very first categories of the <em>Logic</em>, Being, Nothing and Becoming in the <em>Rational Kernel</em>. As we know, the <em>Logic</em> starts with the concept of the indeterminate or pure being, the category of Being. This concept is so indeterminate that it will vanish into the concept of pure nothingness, into the category of Nothing, and from there we arrive at the category of Becoming. But as Badiou remarks, Becoming can only be legitimately derived if Being and Nothing keep vanishing into one another, and this could only happen if they are qualitatively the same. In that case, Becoming stands for an iterative process that elicits the sameness, and not the difference, of Being and Nothing. This process at the beginning of the <em>Logic</em>, according to which the category of Becoming names the iterative vanishing of Being and Nothing into each other, does not represent a dialectical progression. Why? Because there is nothing new, no qualitative other, no new truth that takes place as its result. We are basically positing a concept which, due to its minimal determination, is effectively the same as not positing anything at all. Put differently, Becoming is no more determined (or in-determined) than Being.
            </p>
            <p>
              This is what Badiou rightly calls the problem of “commencement” in the <em>Logic</em>. In the quote from the beginning of the <em>Logic</em>, Hegel’s condition for beginning is an absolute/abstract/pure beginning with no determination and no mediation. The thought, in this case, is equivalent to having no thought, and having no thought is equivalent to having this thought. So, the beginning posits a thought that is effectively equivalent to positing nothing. But at the same time, nothing is equivalent to having posited the abstract thought of pure being. This is the problem of idealism—the problem of thinking pure being in accordance with the metaphysical category of One.
            </p>
            <p>
              What is this problem of commencement that Hegel is facing? It is the derivation of two from One: thinking the abstract beginning under the category of metaphysical One does not provide any leverage for thought to derive multiplicity from the purity of One. Nothing is not other to Being, and Becoming is a name referring to their sameness, so we have three marks for the same pure, abstract principle. In other words, it is the sameness of the concepts of Being and Nothing that makes this process work—and if the dialectical process is to engender an other out of what has been posited, based on the contradiction within it, this process proves to be non-dialectical: there is no difference, no new determination, no two.
            </p>
            <p>
              Now, according to Badiou, Hegel was aware of this problem of deriving two from One, and stressed that, although Becoming is derived from the sameness of Being and Nothing, we should still consider them different.
            </p>
            <blockquote>
              Pure being and pure nothing are, therefore, the same. What is the truth is neither being nor nothing, but that being—does not pass over but has passed over—into nothing, and nothing into being. But it is equally true that they are not undistinguished from each other, that, on the contrary, they are not the same, that they are absolutely distinct, and yet that they are unseparated and inseparable and that each immediately vanishes in its opposite. Their truth is, therefore, this movement of the immediate vanishing of the one in the other: becoming, a movement in which both are distinguished, but by a difference which has equally immediately resolved itself.
            </blockquote>
            <p>
              Despite being the same, Hegel enjoins us to think that Nothing is the other of Being, and vice versa. Being and Nothing are utterly different from one another but collapse logically into one another because of the indeterminate immediacy of their difference. As such, there seems to be a double relation between Being and Nothing: they are the same, so positing one is equal to positing the other, like two marks pointing to the same content; but at the same time, positing one causes its own disappearance and the appearance of the other. Becoming is the category that watches over this double relation.
            </p>
            <p>
              But the subtle point that Badiou is evoking in his very concise remarks seems to be this: if we have to think difference between Being and Nothing, which he agrees with Hegel we should, this difference cannot be produced out of the category of One. One only begets One—as Hegel himself showed, by going from One of Being to One of Nothing and vice versa, naming this alternation the One of Becoming. In the alternation of Being and Nothing, there is no other. If there is other, it is under a different category than One, not One itself. Pure being is different from pure nothing, but that means that they are two things rather than one. The category of One cannot circumscribe both.
            </p>
            <p>
              So where is the second relationship coming from? Badiou suggests that there is no place for the second determination/relation other than simply positing or forcing it. Being and Nothing indeed stand in opposition to each other, but the point is that this opposition cannot be derived in continuity from Being to Nothing. This opposition is assumed, not derived. What is derived is rather their sameness. Hegel derives Nothing on the basis of its sameness with Being and subsequently “reminds” us of their difference. This intervention is what Badiou refers to as Hegel’s forcing, whose consequence is a secondary category of Becoming, one in which both Being and Nothing are simultaneously present. Therefore, continuity (One) is derived but simultaneity (Two) is forced. From Badiou’s perspective, this marks the genesis of simultaneity of Being and Nothing in the entire Hegelian logic.
            </p>
            <p>
              That Hegel was aware of this is evidenced both immediately prior to the start of the first chapter and also in part C (Becoming), section 2 (Moments of Becoming), as well as section 3 (Sublation of Becoming) of the <em>Logic</em>. In all three sections, Hegel expresses the double determination of Becoming: Becoming of succession (of Being and Nothing iteratively) and Becoming of contradiction (of Being and Nothing simultaneously). In moments of Becoming, the category of Becoming will watch over two moments of ceasing-to-be (Being) and coming-to-be (Nothing) simultaneously, not just as vanishing terms but as moments of Becoming—the language of moments, which implies stable determination, begins to take over the language of vanishing, succession and continuity.
            </p>
            <p>
              The point is this: Hegel starts with pure being clearly as a variation of the One and yet, by the time we arrive at the sublation of Becoming, we have two stable and contradictory moments carried forward for the rest of his logic. But two was never derived from One; it was posited by Hegel in such a way that he can claim them under One again, as a double determination: continuity (One) and simultaneity (Two).
            </p>
            <p>This means that in Hegel’s <em>Logic</em> there are two dialectical matrixes:</p>
            <ul>
              <li><strong>Dialectic of One:</strong> the process of One times two.</li>
              <li><strong>Dialectic of Two:</strong> the process of two times one.</li>
            </ul>
            <p>
              Both dialectics are present in the <em>Logic</em>, with the Dialectic of Two as the main motor of progression, and the Dialectic of One as what maintains the impression of the overall system of thought—the ideal of Spirit. Both dialectics have the same structure: that which is posited and the operation that ensues. In the Dialectic of One, One is posited. With One given as such, dialectic will perform the operation of doubling (two) of the same One; it repeats (doubles) One: one is qualitative and two is quantitative.
            </p>
            <p>
              In the Dialectic of Two, what is posited is Two (being and nothing, identity and non-identity, etc.) and the operation is to make one out of the two, or to make unity out of the opposites. In this way, one is derived, the outcome of an operation; Two is what there is—as the most abstract definition of the beginning. In this case two is qualitative and one quantitative, since it is the result of an operation that counts the two under the one.
            </p>
            <p>
              It is important to note the difference between the posited One and the derived one of the two dialectics. The posited One is substantial, whereas the derived one is structural: the former is a substance such as God, matter or spirit, whereas the latter is a structure that has parts such as universe or whole. The difference between these two will prove to be of utmost importance to the overall strategy that is pursued in <em>Theory of the Subject</em>.
            </p>
            <p>
              The first dialectic presents the logic of repetition, “condemned to the sterile operation of a coordinated iteration.” It attempts to derive two from one, and under the dominance of the metaphysical category of One, it thinks progression as repetition rather than novelty, and thereby represses the innovative force of dialectic, whose sense of inventiveness is procured from two (contradiction). It presents the progression as succession. The second dialectic presents the logic of contradiction, which stands for “an impossible passage from the successive (being-nothing) to the simultaneous (being and nothing).” The progression according to the former is iteration or repetition, and according to the latter is the relation of contraries—annihilation, coexistence, and mutual determination.
            </p>
            <p>
              So, what is Hegel’s position with respect to these dialectics? That Hegel does not make a clear break and does not arrive at conceiving the incompatibility of the two types of sublation again demonstrates his repeated intention to reconcile the two: the articulation of the one and the two under the law of the one. This is the content of what he names <em>Aufhebung</em>.
            </p>
            <p>
              Hegel’s text is amazing in this regard. It interlaces Being-Nothing and Being and Nothing at the beginning of the <em>Logic</em> quite often. But by the time it reaches the category of Becoming, there is another contradiction that is evident between the aforementioned dialectics. Becoming is not only the sublation of Being and Nothing under the law of the one (Determinate Being), it is also the sublation of iteration and contradiction (Dialectic of One and Two respectively) under the law of the one (iteration, Dialectic of One). The sublation therefore sublates not only two under one but also contradiction under iteration.
            </p>
            <p>
              Despite the aforementioned “objectivity,” Hegel makes the silent subjective choice to think the beginning under the category of One (Being), to suture the beginning to the category of One, a choice that, under the category of Becoming, is manifested as the sublation, or—as Frank Ruda has offered—repression, of contradiction under iteration. But “Hegel’s greatness for Badiou is to constantly point to that which he represses.” Hegel, as we have seen, keeps returning to contradiction in one of its forms in every category of the <em>Logic</em>. The constant return of what is repressed manifests, or resembles, the unconscious operation, which leads us to conclude, as Ruda did, “For the early Badiou, Hegel is an unconscious materialist as his thought embodies the contradiction between contradiction and the perpetual defense against it.”
            </p>
            <p>
              I end this talk with a retrospective glance at the relation of mature Badiou and his assessment of Hegel. The mature Badiou—Badiou of <em>Being and Event</em> and after—agrees with Hegel’s project in the <em>Logic</em>: to find the beginning. Badiou also agrees with Hegel that the proper beginning for philosophy is some notion of pure being. What differentiates Badiou and Hegel in my view is the latter’s commitment to the category of One: the de facto suturing of the thought of pure being to One. This slip is not particular to Hegel and has its pedigree in the entire philosophical history since Parmenides.
            </p>
            <p>
              Hegel as the last great metaphysician belongs to the long line of philosophers who believed that pure being is only thinkable as a metaphysical category, and it is by adopting this thought under the framework of metaphysics that it becomes equivocal to the thought of One. The genius of Hegel however was to take this equivocation of pure being and One to its final conclusion—that the thought of One alone must produce its own laws and its own progression; that there is no law of thought, no subject, outside of One that could write the history of One according to laws of logic. Logic and being are the same, and therefore the categories of logic themselves must be rewritten by the thought of One. One is not only the substance, but also the subject.
            </p>
            <p>
              This is why when Badiou proposes mathematics as the alternative paradigm to metaphysics to think pure being, he not only changes the underlying field of ontology from metaphysics to mathematics, he not only de-sutures pure being and One, he also abandons the need for dialectics, as the inner law of how the thought of One emerges as different truths. This is why Badiou’s ontology—that is mathematics—is not dialectical.
            </p>
            <p>
              Having said all that, it is important to briefly mention three more thoughts. Despite this difference, however significant, Badiou follows the same project as Hegel does in the <em>Logic</em>. Their logic and ontology produce different contents but start from the same premises and are dominated by the same concerns: it is the same project, with the same point of entry and same inquiries, but one takes this project forward under the framework of metaphysics, the category of One and the procedure of dialectic, and the other forwards the project under the framework of axiomatic set theory, the category of multiple and the procedure of generic. So, when Badiou says that he finally abandoned Hegel, one can see that the truth in fact is that he abandoned Hegel in order to preserve the Hegelian project of the beginning—or to save Hegel one must abandon his metaphysics and dialectics as the grounds for ontology.
            </p>
            <p>
              Perhaps that is why Badiou expressly tries to measure himself against Hegel and the <em>Logic</em>. Secondly, Badiou’s work in the two volumes of <em>Being and Event</em> (<em>Being and Event</em> and <em>Logics of Worlds</em>) may be more than just a parallel to the <em>Logic</em>; a more detailed analysis may be able to show a more intricate relation between the two—something that requires a different work altogether. Thirdly, as Badiou has mentioned, the untethering of pure being and metaphysics and tethering it to mathematics is an epochal decision—a decision that in our times will allow the resurrection of ontology from its rubble after deconstruction and the linguistic turn.
            </p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
