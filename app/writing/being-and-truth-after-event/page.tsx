import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "Being and Truth, After Event",
  description:
    "A reflection on Badiou’s Event, rupture, generic truth, and the Theory of Discipline: what Event does in Being and Event, what its formal schema leaves unexplained, and why ToD can think rupture without Event.",
  alternates: { canonical: "/writing/being-and-truth-after-event" },
};

export default function BeingAndTruthAfterEventPage() {
  return (
    <>
      <SiteHeader showSubscribe />
      <main className="seminar-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/writing">← Writing</Link>
          <p className="eyebrow">Current writing</p>
          <h1>Being and Truth, After Event</h1>
          <div className="seminar-meta">
            <p>Badiou · Event · Theory of Discipline</p>
            <p>September 2026</p>
          </div>
          <p>
            <a href="https://mrnaderi.substack.com/p/being-and-truth-after-event" target="_blank" rel="noreferrer">
              Also published on Substack ↗
            </a>
          </p>
        </section>

        <section className="seminar-layout shell" style={{ gridTemplateColumns: "1fr", maxWidth: "920px" }}>
          <article className="seminar-prose course-notes-prose">
            <p>
              During a three-day conference in 2017, Badiou gave a talk titled “Being and Event, Constructing a New Place of Thought,” followed by a question-and-answer session. This is a very interesting talk, and the question-and-answer session that ensued made it even more interesting. These talks were particularly important to me from two perspectives. First, they supported my reading of <em>Being and Event</em> (<em>B&amp;E</em>) at the time. Second, looking back from the later development of ToD, they now give me a perspective on the relation ToD has with Badiou’s philosophy in general. These are the points that I would like to briefly address in this essay.
            </p>
            <p>
              In that seminar Badiou spoke of the circumstances surrounding the writing of <em>B&amp;E</em>: the “red years,” roughly the ten years following May 1968, which were the years of his intense political militancy, and the “melancholic years,” from 1982 to 1987, during which he wrote <em>B&amp;E</em>. He explicitly says that the book represents the melancholic state of mind. Badiou says that May ’68 and the subsequent red years had transformed him subjectively through politics and historical events. By the time he was writing <em>B&amp;E</em>, that sequence had ended. The book therefore belongs, retrospectively, to what he calls a politically negative sequence: history and politics were no longer proposing a “new life.” <em>B&amp;E</em> is his way of accepting that end without falling into nihilism.
            </p>
            <p>
              That is why, in this lecture, he linked melancholy and Event in a very specific way. The melancholy does not mean that the concept of Event is melancholic in itself. Rather, the concept of Event becomes the philosophical means by which he preserves what had been experienced politically during the red years after the political sequence itself had disappeared. He says that the “memory of the radical past” becomes concentrated under the concept of Event, and that Event is a synthesis, in conceptual form, of the experiences of those red years.
            </p>
            <p>So Badiou depicts almost a three-stage movement:</p>
            <pre>{`lived political rupture → end of the political sequence / melancholy → philosophical concept of Event`}</pre>
            <p>
              His own final formulation makes this almost explicit: Being is the “stopping place”; Event is the memory of the red years.
            </p>
            <p>
              That is an extraordinary retrospective admission, because it means that the architecture of <em>B&amp;E</em> can partly be read biographically and historically. Being corresponds to the necessity of stopping, reconstructing, establishing a stable intellectual “house” after the exhaustion of the militant sequence. Event, by contrast, prevents that stopping from becoming resignation. It carries forward, conceptually, the conviction acquired in May ’68 that something genuinely new can rupture the existing order.
            </p>
            <p>
              Nick Nesbitt puts the same point rather sharply in the preface. He describes <em>B&amp;E</em> as a philosophical “working-through” and mourning of the passing of the political fervor of the red years, while the theorization of Event becomes a kind of metaphysical fidelity to May ’68.
            </p>
            <p>
              This point is quite important for what I am going to contemplate in this essay. It seems to me that there are two quite different questions one can ask about Event. One is internal to Badiou’s system: what formal role does Event play in making a truth possible? But the other is genealogical: why did Event acquire this extraordinary philosophical importance for Badiou in the first place?
            </p>
            <p>
              The interaction of these questions addressed a nagging puzzle that I had about <em>B&amp;E</em>. Why did the concept of Event attract so much attention, both from Badiou—the name of the book carries the word “Event”—and from commentators who seem to be almost fixated on this concept? It is interesting that Badiou himself later complained about precisely this reception:
            </p>
            <blockquote>
              <p>“I have often been disappointed by the way that many commentators (erroneously) reduce my thinking to a theory of the event.”</p>
              <p>— <em>Sometimes, We Are Eternal</em>, p. 70</p>
            </blockquote>
            <p>
              His account of the red and melancholic years strongly suggests that the second question has a political history. Event is, at least in part, the philosophical preservation of an experience of radical novelty whose immediate political form had been lost. As Gabriel Tupinambá puts it in his question to Badiou, “we might be able to say that the concept of event in <em>Being and Event</em> embodies a militant commitment to not give up on the possibility of a truth, rather than truly contributing to the thinking on the concept of the [truth] as such.”
            </p>
            <p>
              Badiou responds by considerably reducing the role commonly attributed to Event. He explains that Event is not itself the creation of truth. It is close to nothingness. Its role is to open a new possibility, after which the process of truth can begin. Then this exchange happened between Badiou and me:
            </p>
            <blockquote>
              <p><strong>Reza Naderi:</strong> Concerning the last question, I agree with you that the concept of the event has been overplayed in the overall understanding of your project. Maybe if the book was not called <em>Being and Event</em>, but Being and “something else,” it would have helped a little bit.</p>
              <p><strong>Alain Badiou:</strong> Yes, maybe <em>Being and Truth</em>.</p>
            </blockquote>
            <p>
              If <em>Being and Event</em> could retrospectively be called <em>Being and Truth</em>, what becomes of Event? More precisely: what indispensable work is Event actually doing in the construction of truth?
            </p>

            <section id="two-logics">
              <h2>Two Logics of <em>Being and Event</em></h2>
              <p>
                Let’s examine what work the concept of Event performs within the overall project. As I have explained in <em>Badiou, Infinity and Subjectivity</em> (<em>BIS</em>), the structure of <em>B&amp;E</em> involves a detour when it comes to Event. There is a movement from ontology to philosophy and, when we later encounter the categories of generic and forcing, we come back to ontology. This movement from ontology to philosophy is an inevitable detour for Badiou. While the being of truth is thinkable by ontology, Event is not.
              </p>
              <p>
                But these two movements perform two different functions that are not fully thematized in <em>B&amp;E</em>. The first concerns the inauguration of a truth procedure. The second concerns the construction and being of the truth itself. Having established the ground for the possibility of a truth procedure through Event, Badiou returns to ontology in order to explain the schema of its construction, forcing, and the type of multiple that a truth must be, the generic multiple.
              </p>
              <p>
                This is essentially the distinction I tried to make in <em>BIS</em> between the disposition of the generic type and the composition of a particular generic token. Ontology tells us what type of being a truth would have if there were a truth. It does not tell us that a truth has actually occurred in a particular historical situation.
              </p>
              <p>
                A somewhat crude analogy may help. We may have a theory that tells us what a sentient being on Mars would have to look like. The theory could tell us what properties such a being must possess and what traces we should look for. None of this tells us that there actually is a sentient being on Mars. It gives us a type. We would still have to find a token of that type.
              </p>
              <p>
                Ontology does something similar for truth. It tells us that if there is a truth, its being is generic. Forcing gives a schema for constructing such a multiple. But this still does not tell us that this truth exists here, in this historical situation. Event enters at this second level.
              </p>
              <p>
                If this distinction is correct, a question immediately arises. Why does the production of a perfectly legitimate ontological being, the generic multiple, have to be inaugurated by something that ontology itself does not admit? Why does Badiou link the logic of a being prohibited by ontology to the logic of the legitimate being of truth?
              </p>
            </section>

            <section id="what-does-event-do">
              <h2>What Does Event Do?</h2>
              <p>
                The point of departure is an evental site. If <em>S</em> is a historical situation and <em>X</em> an evental site, then
              </p>
              <pre>{`X ∈ S,    X ∩ S = ∅`}</pre>
              <p>
                The site is therefore presented in the situation while none of its elements are themselves presented there. In Badiou’s terminology, it is at the edge of the void. The situation counts <em>X</em> as one, but has no access through its own presentation to what composes <em>X</em>.
              </p>
              <p>
                There is already something peculiar here. We can formally define what an evental site is. But from within the knowledge of the situation there is no way to determine that a particular presented multiple is an evental site. To do so would require precisely the knowledge of its elements that the situation does not possess.
              </p>
              <p>Badiou then defines the Event associated with the site <em>X</em> by the matheme</p>
              <pre>{`e_X = X ∪ {e_X}`}</pre>
              <p>The Event is composed of the elements of the site together with itself. It is at this point that self-belonging enters the theory:</p>
              <pre>{`e_X ∈ e_X`}</pre>
              <p>
                Because Foundation excludes such a multiple from ontology, Event becomes the first concept in <em>B&amp;E</em> that cannot be admitted as a legitimate multiple of being qua being.
              </p>
              <p>
                But it is important not to attribute too much to self-belonging. In particular, it does not seem to me that self-belonging is what makes Event undecidable. The undecidable question is whether the event-multiple belongs to the situation of its site:
              </p>
              <pre>{`e_X ∈ S ?`}</pre>
              <p>
                The resources of the situation cannot ratify this belonging. The elements of <em>X</em> do not help because none of them are presented in <em>S</em>. And <em>e</em><sub>X</sub>, the remaining term, is precisely the term whose belonging is in question.
              </p>
              <p>The belonging therefore cannot be established through knowledge. It has to be decided.</p>
              <p>
                This is the function of intervention. Badiou defines intervention as the procedure by which a multiple is recognized as an Event. Recognition has two parts. The multiple is first recognized as having the evental form. It is then decided that this multiple belongs to the situation. The second operation is not knowledge. It is a wager. Intervention does not demonstrate that an Event belongs to the situation. It decides that it does.
              </p>
              <p>
                The distinction is important because intervention does not subsequently convert the undecidable into knowledge. For those who do not intervene it may always remain doubtful whether an Event has taken place. The decision makes the name of the Event circulate in the situation. Fidelity and enquiries can then begin. Through these enquiries the body of the truth is gradually composed.
              </p>
              <p>So far this explains rather well what follows an Event. What remains much less clear is what precedes intervention.</p>
              <p>
                The evental site cannot be known in advance as an evental site. Its interior is, by definition, unavailable to the knowledge of the situation. Yet in all the examples through which Badiou makes Event intelligible, something happens at the site. Something that had not been available to the representation of the situation somehow becomes manifest.
              </p>
              <p>This manifestation is what gives intervention something upon which to intervene.</p>
              <p>
                The French Revolution, for example, is not produced simply because someone decides one morning that there has been a Revolution. There is first an occurrence. There are things happening that the existing political representation could not predict and could not properly count. Only then can “the Revolution” be declared, named and retrospectively treated as an Event.
              </p>
              <p>
                Here there seems to be a gap between the formal schema and the examples. Set theory tells us what an evental site would be. It tells us what form an Event associated with such a site would have. It also tells us why the belonging of the Event cannot be ratified by the resources of the situation. Philosophy then provides intervention as the wager through which this belonging is decided.
              </p>
              <p>
                But there is nothing in the set-theoretical schema that explains how the unpresented elements of the site become manifest enough to provoke intervention in the first place. The examples seem to rely upon another mode of manifestation, one that is neither presentation nor representation in the technical sense of <em>B&amp;E</em>. Something that the situation did not know suddenly becomes effective within it. But the formal theory does not tell us how this takes place.
              </p>
              <p>Badiou’s later remark in the 2017 lecture becomes quite interesting in this respect:</p>
              <blockquote>
                <p>“I cannot say much more on the concept of the event as such. I can only give examples and phenomenological descriptions, and it is true that in this case the most intuitive examples would probably originate in politics (although not exclusively).”</p>
                <p>— <em>Sometimes, We Are Eternal</em>, p. 71</p>
              </blockquote>
              <p>
                Perhaps this limitation should be taken more seriously than I had previously done. The theory gives us a formal determination of the conditions of Event and a detailed account of what happens after its subjective recognition. But the occurrence itself remains aleatory. There is no corresponding schema for the passage
              </p>
              <pre>{`what is unavailable to the representation of the situation
→ what becomes manifest enough to solicit intervention`}</pre>
              <p>It is at this point that the relation of ToD to Event becomes clearer.</p>
            </section>

            <section id="rupture-without-event">
              <h2>Rupture without Event</h2>
              <p>
                What becomes clearer to me from this discussion is that my departure from Event was never a departure from rupture. Rupture has always been central to my thinking. I was already a Bachelardian long before ToD took its present form. I always thought that disciplines do not develop simply by accumulating knowledge. They develop through breaks. At some point an existing organization of thought can no longer continue in the same way. Something has to change. This is what Bachelard calls an epistemological rupture. So the question for me was never whether rupture takes place. The question was how to think what happens in a rupture without reducing the new to what was already there, but also without treating it as something that comes from nowhere.
              </p>
              <p>
                Looking back at <em>BIS</em>, I think I was already trying to give this Bachelardian intuition a more precise form. I was still using the language of Event because I was trying to understand Badiou. But the resources I was using were not limited to Badiou. Lautman was very important to me. His ideas of dissociation, participation and axiomatic decision allowed me to think a point where a discipline has to make a decision that is not simply derived from the formal resources already available to it. Lacan and Badiou allowed me to think the real as cause, and also the relation of this cause to the production of a new consistency. In <em>BIS</em> I therefore tried to think Event as a point of rupture within a discipline. I did not really need <em>e</em> ∈ <em>e</em> for this. I was interested in what Event was doing, not in self-belonging as such.
              </p>
              <p>
                This is something I can see much more clearly now. I did not need <em>e</em> ∈ <em>e</em> to think Bachelardian rupture. Lautman did not need it either in order to think axiomatic decision. The same is true of the real as cause. None of these require a multiple that ontology prohibits. This does not mean that self-belonging does no work in <em>B&amp;E</em>. It clearly does. It gives Event its particular form. It makes Event an ultra-one. Through Foundation it also places Event outside ontology. But none of this seems necessary for thinking rupture itself. At least I never felt such a necessity in my own work.
              </p>
              <p>
                The problem became clearer later through mathematical logic. Tarski and Gödel gave me a more precise way of thinking the point where a discipline cannot continue by relying only on its existing resources. I eventually called this point an impasse. But impasse is not the same as rupture. I nearly collapsed the two in thinking through this essay. An impasse is only one moment of rupture. It is the point where the existing organization fails. If nothing follows from this failure, there is no rupture. Rupture is larger than impasse.
              </p>
              <p>A rough formulation would be:</p>
              <pre>{`rupture ≈ impasse + encounter with excess + composition`}</pre>
              <p>
                The impasse tells us where the existing organization of the discipline reaches its limit. Excess matters because the thought of the discipline does not exhaust being. Something that was not available under the existing organization can therefore become materially relevant at the point of the impasse. But even this does not produce a new consistency. The discipline still has to do something. It has to compose. The Idea, genericity and fidelity belong to this work of composition. So rupture is not one mysterious occurrence. It has different moments. There is a failure, there is an encounter, and there is work.
              </p>
              <p>
                This also helps me understand better what bothered me in the theory of Event. We saw that an evental site can be defined formally. But the situation cannot know that a particular multiple is an evental site, because knowledge has no access to its internal elements. Still, the examples of Event make sense only because something that was not represented suddenly becomes manifest. Something happens. It becomes impossible to continue as before. Then nomination and intervention can take place. But the set-theoretical schema does not really tell us how this manifestation occurs. The examples show it. The formal theory does not.
              </p>
              <p>
                ToD approaches this differently. It does not require the discipline to somehow look inside what its own count does not represent. Nor does it introduce another kind of knowledge that suddenly discovers what was hidden. Instead, something unavailable to the existing organization becomes effective at an impasse. This is what I mean by an encounter with excess. The encounter is not knowledge of some hidden object. It is the point where the insufficiency of the existing organization becomes materially consequential. The discipline then has to compose in response to it.
              </p>
              <p>
                Seen in this way, ToD does not replace Event with another single concept. There is no equivalent of <em>e</em>. What Badiou gathers under Event is distributed across several moments. Some of these moments were already there in my thinking before ToD. Others became clearer later. This may explain why Event gradually disappeared from my work without my feeling that rupture itself had disappeared. What mattered to me in Event could be thought through other concepts, and eventually, I think, through concepts that made the structure of rupture clearer to me.
              </p>
            </section>

            <section id="after-event">
              <h2>After Event</h2>
              <p>
                If the argument so far is right, then the departure of ToD from Event is perhaps less dramatic than it first appears. ToD does not reject the problem that Event was meant to address. It still needs rupture. It still needs a way to think how a discipline reaches a point where its existing resources are no longer sufficient, and how something new can be composed there. What changes is the way this problem is organized. Event is no longer the concept under which all of this has to be gathered.
              </p>
              <p>
                This also changes, at least for me, the way <em>Being and Event</em> can be read. There are two quite different logics at work in that book. One is the logic of ontology. Set theory gives the concepts of presentation, excess, genericity and forcing. It tells us what the being of a truth would have to look like. The other is the logic of Event. This second logic gives us the evental site, Event, nomination, intervention, fidelity and subject. It is supposed to explain how a particular truth procedure begins in a historical situation. The two logics eventually meet because the procedure inaugurated under an Event is what constructs the generic multiple that ontology recognizes as the being of truth. But they remain different logics.
              </p>
              <p>
                This distinction becomes even clearer in <em>Logics of Worlds</em>. There Badiou adds phenomenology to ontology and Event. We now have, roughly speaking, three regions:
              </p>
              <pre>{`Ontology    Phenomenology    Event`}</pre>
              <p>They are related, but they are not reducible to one another.</p>
              <p>
                ToD adds another logic to this arrangement: discipline. This is where composition takes place. A discipline has its own history, its knowledge, its impasses and its procedures. It is also where truths are composed and consequences are drawn. ToD therefore has no difficulty using the ontological resources of Badiou. Nor does it have difficulty with the phenomenological resources developed in <em>Logics of Worlds</em>. Both remain important. But the logic of Event gradually disappears. I did not set out to remove it. I simply found that I was no longer using it.
              </p>
              <p>
                This is perhaps the point that interests me most now. The disappearance of Event did not leave a hole in the theory. Rupture did not disappear with it. The problem of the new did not disappear either. These were taken up elsewhere, through impasse, excess and composition. Once that happened, the question became unavoidable: what indispensable work was Event still doing?
              </p>
              <p>
                I can now understand much better what it was doing for Badiou. It gives a formal structure to a rupture that knowledge cannot ratify. It makes intervention and the wager possible. It gives a historical point from which fidelity can begin. But I am less certain that any of this requires the peculiar being of Event itself.
              </p>
              <p>
                This brings me back to Badiou’s remark that perhaps <em>Being and Event</em> could have been called <em>Being and Truth</em>. I do not want to give too much importance to an improvised answer during a question-and-answer session. Still, the remark now seems more interesting to me than it did at the time. Event opens the possibility of the procedure, but what finally matters to Badiou is truth. The ontology of the generic explains the being of truth, and forcing provides the schema of its construction. Event stands at the beginning of this sequence. It is not its substance.
              </p>
              <p>
                Perhaps this is also why Badiou could later say that he was disappointed by the way his philosophy had been reduced to a theory of Event. Event is indispensable within the architecture of <em>B&amp;E</em>, but it is not the point toward which the architecture is finally directed. Truth is.
              </p>
              <p>
                In my own work, the distance between the two gradually became larger. I retained the ontology of the generic, and later the phenomenology of appearing, while the evental machinery became less and less necessary. The theory of discipline eventually occupied the space in which rupture, construction and the production of consequences could be thought without it.
              </p>
              <p>
                I am not sure this means that ToD is incompatible with Event. That would probably be too strong. A Badiouian Event can still be described as one possible form of rupture. What I think I can say is more limited. ToD does not require Event. It can think rupture without self-belonging, and it can think the construction of truth without making that construction post-evental in Badiou’s sense. In this respect ToD continues a large part of Badiou’s project while departing from one of its most recognizable concepts.
              </p>
              <p>
                There is something slightly ironic in this. I began by trying to understand why Event seemed to occupy such an enormous place in the reception of Badiou. I ended by discovering that, in my own work, I had already been moving away from it for a long time. I had not abandoned rupture. I had been trying to understand it through other means.
              </p>
              <p>
                Perhaps <em>Being and Truth, After Event</em> names exactly this relation: not a philosophy that has left Badiou behind, but one that continues to work with being and truth after Event has ceased to be the concept through which their relation must be inaugurated.
              </p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
