import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "From Structuralism to Deleuze: Determination, the Idea, and the Problem of Novelty",
};

const toc = [
  ["opening", "1. Opening"],
  ["meaning-as-structure", "2. Structuralism: Meaning as Structure"],
  ["structuralism-in-practice", "3. Structuralism in Practice"],
  ["loss-of-guarantee", "4. The Loss of Guarantee"],
  ["problem-of-determination", "5. The Limit of Structuralism: The Problem of Determination"],
  ["idea-as-problem", "6. The Idea as Problem: Internalizing Determination"],
  ["differential-multiplicity", "7. From Structure to Differential Multiplicity"],
  ["actualization", "8. Actualization: How Structure Emerges"],
  ["closing-transition", "9. Closing Transition"],
];

export default function StructuralismSeminarPage() {
  return (
    <>
      <SiteHeader />
      <main className="seminar-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/teaching">← Teaching & Talks</Link>
          <p className="eyebrow">Seminar text</p>
          <h1>From Structuralism to Deleuze: Determination, the Idea, and the Problem of Novelty</h1>
          <div className="seminar-meta">
            <p>Seminar 1 · Adventures of French Structuralism</p>
            <p>Toronto Psychoanalytic Society & Institute · April 16, 2026</p>
            <a href="https://torontopsychoanalysis.com/extension-program/course-thirteen-adventures-in-french-structuralism/">
              Course page ↗
            </a>
          </div>
        </section>

        <section className="seminar-layout shell">
          <nav className="seminar-toc" aria-label="Seminar contents">
            <p>Contents</p>
            {toc.map(([href, label]) => (
              <a key={href} href={`#${href}`}>{label}</a>
            ))}
          </nav>

          <article className="seminar-prose">
            <section id="opening">
              <h2>1. Opening</h2>
              <p>Let me begin in a slightly unusual way. Instead of asking what structuralism is, I would like to ask a different question. Not: What is structuralism? But: What had to change in our understanding of meaning for structuralism to become possible at all? This may seem like a detour, but I think it is the only way to see what is really at stake. Because structuralism is not simply a method, or a school of thought, or a set of concepts that we can list and define. It is a transformation in how meaning itself is located. So, what I would like to do today, at least in the first part of this session, is to trace a shift. A shift in where meaning is thought to reside.</p>
              <p>Let us begin from a very familiar assumption. We tend to think that meaning begins with us. That when something has meaning, it is because it is meaningful for a subject—because it is experienced, interpreted, or understood by someone. When we ask what something means, we usually ask:</p>
              <ul>
                <li>What does it mean for us?</li>
                <li>How do we understand it?</li>
                <li>How is it given in our experience?</li>
              </ul>
              <p>In all of these cases, meaning appears to be tied to the subject—to a being that perceives, interprets, and understands.</p>
              <p>Now, this way of thinking is so familiar that it can seem almost self-evident. It is not usually presented as a theory. It feels more like a starting point. And yet, if we take a step back, we can see that this orientation has a history. In earlier forms of thought, meaning was not always located in the subject. It was often grounded in something that lay beyond it—in something that exceeded human experience. Meaning could be anchored in:</p>
              <ul>
                <li>a divine order</li>
                <li>a cosmic structure</li>
                <li>a rational principle that organizes the world</li>
              </ul>
              <p>In all of these cases, meaning did not begin with us. It was already there, in some sense, and the task of thought was to access it, to understand it, to align with it.</p>
              <p>So, we can say that meaning was once thought to be grounded in something transcendent—something that stands beyond the subject.</p>
              <p>At some point, however, this begins to change. Meaning is no longer placed outside, in a transcendent order. It is brought closer. It is relocated. Instead of asking what grounds meaning beyond us, philosophy begins to ask: Under what conditions does meaning appear to us? This is a decisive shift.</p>
              <p>Because now meaning is no longer something that exists independently of our relation to it. It becomes tied to the conditions under which it can be experienced, understood, or thought. In this sense, meaning becomes bound to the subject.</p>
              <p>But it is important to be precise here. This does not mean that the subject is understood in a naïve or simplistic way. On the contrary, modern philosophy refines the concept of the subject in increasingly complex ways. In Kant, for example, meaning is tied to the conditions of possible experience. In phenomenology, it is tied to the structures of appearance—to how things are given to consciousness. In existentialism, it is tied to existence—to action, decision, and situation.</p>
              <p>So, the subject is not treated as a simple center. It is analyzed, complicated, and sometimes even destabilized. And yet, despite all these refinements, something remains constant. Meaning is still tied to a finite point of view—to the conditions under which something appears within experience or existence.</p>
              <p>Now, at this point, we can begin to see a tension. Because while meaning is tied to a finite subject, it does not seem to behave as something purely finite. Meaning is not entirely private. It is shared. It is communicable. It has a certain stability.</p>
              <p>When we speak to one another, we do not assume that meaning is entirely confined to individual experience. We assume that it can be understood, that it can circulate, that it can be recognized. In other words: meaning seems to require a certain form of universality. And this creates a difficulty. Because if meaning is grounded in a finite subject—if it is tied to experience, to situation, to a limited perspective—then how can it also be universal?</p>
              <p>How can something that depends on a finite point of view also be shared, stable, and communicable across different subjects?</p>
              <p>Now, different philosophical approaches respond to this difficulty in different ways. Some attempt to refine the notion of experience, to show how it already contains structures that are not purely individual. Others appeal to shared practices, to forms of life, to linguistic rules, in order to explain how meaning can be stabilized. Still others emphasize the play of interpretation, suggesting that meaning is never fixed, but always deferred, always shifting.</p>
              <p>But what is interesting is that in all these cases, a similar pattern appears. Even when transcendence is explicitly rejected, something like it tends to return. Not as God, or as a metaphysical principle, but in a more subtle form:</p>
              <ul>
                <li>as a horizon that exceeds any individual</li>
                <li>as a structure that guarantees intelligibility</li>
                <li>as a background that stabilizes meaning</li>
              </ul>
              <p>In other words: transcendence is not simply eliminated—it is displaced.</p>
              <p>At the same time, another pressure begins to emerge. If we look not only at philosophical theories, but at how meaning actually operates, we notice something striking. Language does not begin with us. We do not invent it individually. We enter into it. A system of distinctions, rules, and relations is already there before any individual speaks. And when we speak, we do not simply express a meaning that is already fully formed within us. We operate within this system. We select from it. We rely on its distinctions. We follow its rules.</p>
              <p>So, language does not simply carry meaning—it shapes it.</p>
              <p>The same can be said of other domains. Social systems, cultural forms, symbolic structures—these do not originate in individual subjects. They precede them. They organize the space in which meaning becomes possible.</p>
              <p>So, we arrive at a new possibility. What if meaning does not begin with the subject at all?</p>
              <p>What if meaning is not produced by the subject, but the subject emerges within structures of meaning?</p>
              <p>This is the point at which structuralism becomes possible. Not as a doctrine, and not as a method, but as a shift in orientation. Instead of grounding meaning in transcendence, or in the subject, structuralism asks: Can meaning be understood as immanent to a system?</p>
              <p>A system that has no outside. A system in which elements are defined not by their intrinsic properties, but by their relations.</p>
              <p>Let me put this as clearly as possible. Structuralism does not simply reject transcendence.</p>
              <p>And it does not simply reduce meaning to finitude. What it does is something more radical. It relocates what once appeared as transcendence into the structure itself. What seemed to come from outside—from a higher order, from a grounding principle—now appears as an effect of relations within a system. Meaning is no longer above us. It is no longer inside us.</p>
              <p>It is between elements, within a structure.</p>
              <p>And this is where we will begin the next part of the lecture. Now that we have reached the point where structuralism becomes necessary, we can finally ask: What is a structure? And how can it carry meaning?</p>
            </section>

            <section id="meaning-as-structure">
              <h2>2. Structuralism: Meaning as Structure</h2>
              <p>Let us now turn to structuralism itself.</p>
              <p>We have arrived at a point where a certain shift has become necessary. We can no longer simply assume that meaning is grounded in the subject. And we can no longer appeal to a transcendent order that guarantees meaning from outside. So, the question becomes: If meaning is neither grounded in transcendence nor in the subject, where is it located?</p>
              <p>Structuralism begins by answering this question in a very precise way. It proposes that meaning is not something that belongs to individual elements—whether those elements are things, ideas, or subjects—but something that arises from a system of relations.</p>
              <p>In order to see what this means, let us begin with a familiar point of reference: language. Structuralism, in its classical form, is often associated with the work of Ferdinand de Saussure. But what is important here is not the historical detail, but the conceptual shift that his work makes possible. Saussure suggests that language is not simply a collection of words that refer to things in the world. It is not a list of names attached to objects. Instead, language is a system. A system in which each element—each word—has meaning only through its relation to other elements within the system.</p>
              <p>Let me slow this down. If we take a word—any word—we might be tempted to think that it has a meaning because it corresponds to something, or because it expresses an idea. But structuralism asks us to look differently. It asks us to consider that a word has meaning not because of what it is in itself, but because of what it is not. A word is what it is because it differs from other words. “cat” is not “bat.” It is not “dog.” It is not “rat.” Its identity is not a positive essence, but a position within a network of differences. And this applies not just to isolated examples, but to the system as a whole. Language is a network of differences without positive terms.</p>
              <p>Now, this may at first seem like a technical point about linguistics. But in fact, it has much broader implications. Because if meaning is differential—if it arises from relations rather than from intrinsic properties—then meaning cannot be located in any single element. It cannot be located in a word. It cannot be located in a thing. And crucially, it cannot be located in the subject. Meaning belongs to the system.</p>
              <p>Let me state this more directly. If meaning is produced by relations within a system, then the subject does not create meaning; the subject operates within a system that already structures meaning. This is a decisive reversal. We are no longer saying: first, there is a subject; then, there is meaning. We are saying: there is a system of relations and the subject takes its place within that system.</p>
              <p>At this point, we can begin to define more clearly what we mean by a structure.</p>
              <p>A structure is not simply a collection of elements. It is not a set of things that happen to be grouped together. A structure is a system in which:</p>
              <ul>
                <li>elements are defined only by their relations</li>
                <li>no element has meaning in isolation</li>
                <li>the system as a whole determines the value of each position</li>
              </ul>
              <p>And most importantly: a structure has no outside.</p>
              <p>Now, this last point is crucial, and we have to be careful with it. To say that a structure has no outside does not mean that it has no limits at all. It does not mean that anything goes.</p>
              <p>A structure has constraints. It has rules. It has internal distinctions. But these limits are not external boundaries. They are internal to the system itself. In other words: a structure does not encounter an external limit; its limits are internal differences.</p>
              <p>This allows us to make a more precise claim about what structuralism is doing.</p>
              <p>Structuralism is not simply rejecting transcendence. It is not simply saying that there is no outside. What it is doing is showing that what we took to be outside may in fact be an effect of internal relations.</p>
              <p>Let me put this carefully. In earlier forms of thought, meaning appeared to require something beyond the system: a ground, a foundation, a principle that guarantees coherence. But structuralism shows that coherence can arise from within. That meaning can be generated by the relations between elements, without reference to anything outside the system.</p>
              <p>At this point, we can return to a question that has been hovering in the background. Not in order to introduce something new, but to clarify what has already been assumed.</p>
              <p>We have said that a structure has no outside, that its limits are internal, and that its operation does not terminate in a final ground. But this raises a more fundamental issue.</p>
              <p>What makes such a system possible in the first place? Because if we compare this to the earlier orientation we discussed, a striking difference appears. In the philosophies centered on the subject, finitude is not simply a consequence—it is part of the definition. The subject is finite by nature. It is situated, limited, and bound by the conditions under which experience is possible. And it is precisely this finitude that generates the difficulty we encountered earlier.</p>
              <p>If meaning is tied to a finite subject, then it cannot fully sustain the universality that meaning seems to require. As a result, something like transcendence tends to return—if not explicitly, then in a concealed form, as a horizon, a background, or a condition that exceeds any individual perspective. Now, structuralism takes a different path.</p>
              <p>It does not begin from a finite subject. It begins from a system of relations. And in doing so, it silently abandons the assumption that finitude must define the field in which meaning operates.</p>
              <p>Let me put this carefully.</p>
              <p>Structuralism does not explicitly claim that structures are infinite. But it operates as if they are not finite in the way a subject is. A system such as language does not reach a final limit. It does not terminate in a last element that would ground all others. Its operation is not bounded by a horizon in the way experience is. And this is not an accidental feature. It is what allows structure to carry meaning without appealing to anything outside itself.</p>
              <p>This, of course, does not mean that languages are infinite: every language has, for example, a finite vocabulary. What makes languages infinite is not that they are extensionally infinite, but that they are intensionally infinite. That is, languages do not have an internal limit on the derivation of new forms and rules. In this sense, languages, like any other structured fields, have an infinite capacity for differentiation. The possibility of infinite differentiation is a grounding hypothesis of every form of structure.</p>
              <p>In this sense, what earlier thought placed in transcendence—an unbounded ground, a guarantee of intelligibility—is no longer located outside the system. It is internalized. Not as a transcendent infinity, but as a system whose operation does not come to an end.</p>
              <p>We can summarize the structuralist move.</p>
              <p>Structuralism proposes that meaning is:</p>
              <ul>
                <li>not grounded in transcendence</li>
                <li>not grounded in the subject</li>
                <li>but immanent to a system of relations</li>
              </ul>
              <p>And this system:</p>
              <ul>
                <li>has no outside</li>
                <li>has only internal limits</li>
                <li>and operates in an open-ended way from within</li>
              </ul>
              <p>Now, this is a powerful idea. It allows structuralism to resolve the difficulty we encountered earlier. If meaning requires a certain universality—if it must be shared, stable, and communicable—then grounding it in individual subjects is not sufficient. But grounding it in a structure makes this possible. Because the structure is not private. It is not tied to any one subject. It is what makes communication possible in the first place.</p>
              <p>At the same time, structuralism avoids returning to transcendence. It does not appeal to an external ground. It does not rely on a principle that stands outside the system. Instead, it shows how coherence can be produced internally.</p>
              <p>So, we can say, in a very condensed form: structuralism discovers that meaning is immanent. Not immanent to the subject. But immanent to structure.</p>
              <p>Now, at this point, everything may seem to fall into place. We have moved beyond transcendence. We have moved beyond the subject. We have located meaning within a system that can account for its stability and its communicability. So, we might be tempted to think that the problem has been solved. But this is precisely where a new question begins to emerge. And it is this question that will guide us into the next part of the lecture.</p>
              <p>Because if meaning is entirely structural—if it is fully determined by a system of relations—then we have to ask: what happens when something new appears? What happens when something emerges that cannot be fully accounted for by the existing structure?</p>
              <p>Where does novelty come from?</p>
              <p>Where does change come from?</p>
              <p>What allows a structure to be transformed?</p>
              <p>Structuralism gives us a powerful account of how meaning is organized. But it leaves open the question of how something can occur within a structure that exceeds its existing relations. And it is this question—this tension within structuralism itself—that will lead us further.</p>
              <p>At this point, we have to pause. Because before we move beyond structuralism, we need to understand more clearly how this internal logic operates, and where its limits begin to appear. And that will be the task of the next section.</p>
            </section>

            <section id="structuralism-in-practice">
              <h2>3. Structuralism in Practice</h2>
              <p>At this point, what we have described may still appear somewhat abstract. We have said that meaning is not grounded in the subject, and not grounded in transcendence, but in structure. But we should now ask: where do we actually see this at work?</p>
              <p>Because structuralism was not only a philosophical orientation. It was a set of concrete practices, developed across different domains. And what is remarkable is that, despite their differences, these domains all operate according to the same principle: meaning is produced by relations within a system, not by the elements themselves.</p>
              <p>Let us begin again with language, but now in a slightly more concrete way.</p>
              <p>What Saussure showed is not simply that language is structured, but that the elements of language have no meaning outside that structure. A word does not carry meaning as a property. It has meaning only because it occupies a position within a system of differences.</p>
              <p>This is why Saussure can say that in language there are only differences, without positive terms. And this has a radical consequence. It means that what we take to be the most immediate and intuitive units—words, sounds, meanings—are not primary. They are effects. They are produced by the structure.</p>
              <p>This idea is extended and formalized further by figures like Roman Jakobson. Jakobson shows that even the most basic elements of language—sounds themselves—are defined purely by opposition. A phoneme is not something with an intrinsic identity. It is a position within a system of differences. It is what it is only because it is not something else.</p>
              <p>Now, what is important here is not the technical detail. It is the general principle that emerges. Even at its most basic level, meaning does not belong to elements—it belongs to structure.</p>
              <p>This same principle is then carried into anthropology, most notably in the work of Claude Lévi-Strauss. Here, the object is no longer language, but myth, kinship, and social relations.</p>
              <p>And yet, the same logic applies. A myth is not understood by interpreting its content. It is understood by analyzing its structure. What matters is not what a myth says, but how its elements are arranged, how they oppose one another, and how they transform across different versions. Lévi-Strauss shows that myths form systems. And within these systems, individual stories are not isolated. They are variations within a larger structure.</p>
              <p>The same is true of kinship systems. Marriage rules, for example, are not simply social customs. They are structured systems of exchange, governed by rules that operate independently of individual intentions. Here again, what appears as a human decision is in fact an effect of a system.</p>
              <p>In psychoanalysis, particularly in the work of Jacques Lacan, the same structural logic is applied to the unconscious. Lacan’s well-known claim is that: the unconscious is structured like a language. What this means is that even our most intimate thoughts—dreams, slips of the tongue, symptoms—are not expressions of a private interiority. They follow rules. They operate through relations. They are structured.</p>
              <p>We can extend this structural logic even further, into the domain of social and political life. In the work of Louis Althusser, structuralism is applied to the analysis of ideology. Althusser’s starting point is a critique of the idea that individuals are the origin of their beliefs, actions, or social roles. Instead, he argues that what we call “ideology” is not simply a set of ideas that individuals hold, but a structure that shapes how individuals relate to the world. Ideology, in this sense, is not something we consciously adopt. It is something we are already within. It defines what can be seen, what can be thought, and what appears as natural or self-evident.</p>
              <p>From this perspective, the subject is no longer the source of meaning or action. It is produced. Althusser famously describes this through the concept of interpellation: individuals become subjects by being positioned within a system of relations that precedes them. In other words, the subject is not prior to the structure. It is an effect of it.</p>
              <p>At this point, we can see that structuralism is not confined to one field. It is a general method. A way of approaching phenomena by treating them as systems of relations. Whether we are dealing with language, myth, social systems, or the unconscious, the same shift occurs.</p>
              <p>We move:</p>
              <ul>
                <li>from elements to relations</li>
                <li>from substance to position</li>
                <li>from subject to structure</li>
              </ul>
              <p>And this allows us to restate the central claim of structuralism in a more concrete way.</p>
              <p>Structuralism attributes explanatory power not to things, and not to subjects, but to structures.</p>
              <p>Or, to put it more strongly: elements are not the basis of structure; they are the effects of structure.</p>
              <p>Now, we can return to the point we made earlier.</p>
              <p>If structure can account for meaning across all these domains—language, culture, subjectivity—then it seems that the problem has been resolved. We no longer need to appeal to transcendence. We no longer need to ground meaning in the subject. Structure appears to be sufficient.</p>
              <p>But precisely at this point, a new difficulty begins to emerge. Because if everything is structured—if meaning is entirely determined by relations within a system—then we must ask:</p>
              <p>What can happen that is not already accounted for by the structure?</p>
              <p>Where does change come from?</p>
              <p>Where does novelty come from?</p>
              <p>What allows something new to appear within a system that already defines all positions?</p>
              <p>And it is this question that will take us beyond structuralism.</p>
            </section>

            <section id="loss-of-guarantee">
              <h2>4. The Loss of Guarantee</h2>
              <p>We can now identify more precisely what was at stake in the shift we described earlier. One of the major consequences of the movement from transcendence as the locus of meaning to the subject was the loss of a guarantee of common meaning. When meaning was grounded in something that lay beyond the human subject it did not depend solely on human beings. It was anchored in something that exceeded them.</p>
              <p>Now, I do not want to enter into theological or metaphysical debates here. What matters for us is not the content of these beliefs, but their function.</p>
              <p>The function of transcendence was to provide a kind of guarantee. A guarantee that meaning is not arbitrary. A guarantee that there is, in some sense, a ground—a foundation—that secures intelligibility.</p>
              <p>But what happens when this guarantee is no longer available? What happens when meaning can no longer be anchored in anything that stands outside the world, or beyond human practices?</p>
              <p>This is the situation that modern thought increasingly confronts. A situation in which:</p>
              <ul>
                <li>there is no unquestioned external ground</li>
                <li>no ultimate reference point</li>
                <li>no transcendent guarantee</li>
              </ul>
              <p>This situation is sometimes described, in more dramatic terms, as the “death of God,” a phrase associated with Friedrich Nietzsche. But again, what matters for us is not the phrase itself, but what it points to. It points to a transformation in the conditions of thought.</p>
              <p>Let me try to state this as clearly as possible. If meaning can no longer rely on a transcendent guarantee, then it must be thought differently. It must be thought without reference to anything outside the field in which it appears. In other words: meaning must be thought immanently.</p>
              <p>Now, I want to move slowly here, because this is a crucial step. To say that meaning must be thought immanently is not yet to say how it is produced.</p>
              <p>It is only to say that:</p>
              <ul>
                <li>it cannot be grounded in something beyond</li>
                <li>it cannot rely on an external foundation</li>
              </ul>
              <p>So, we find ourselves in a new situation.</p>
              <p>Let me describe it in a slightly different way. We have lost two possible grounds:</p>
              <ul>
                <li>we can no longer fully ground meaning in the subject</li>
                <li>and we can no longer ground it in transcendence</li>
              </ul>
              <p>This creates a kind of gap. A space in which the question of meaning becomes more pressing. Because if meaning is neither secured by the subject nor guaranteed by something beyond the world, then: how is it possible at all?</p>
              <p>Let me repeat that. How is meaning possible, if it has no external guarantee and no stable origin in the subject?</p>
              <p>This is not a rhetorical question. It is a real problem. A problem that demands a response.</p>
              <p>We can now see structuralism from a slightly different perspective. It is not only a method for analyzing systems of relations. It is also a response to a more fundamental philosophical problem: how can meaning be produced within a field that has no external guarantee?</p>
              <p>Structuralism answers this question by locating the production of meaning within the immanent relations of a structure. But once the problem is formulated in this way, another question immediately appears: if the structure itself has no external guarantee, what determines the structure?</p>
            </section>

            <section id="problem-of-determination">
              <h2>5. The Limit of Structuralism: The Problem of Determination</h2>
              <p>Let us begin again from where we left off.</p>
              <p>Before the break, we saw that structuralism allows us to think meaning without recourse to either the subject or transcendence. Meaning is no longer grounded in an external order, nor in individual experience. It is immanent to a structure—a system of relations whose elements are defined by their positions within it.</p>
              <p>And this was a decisive step. Because it allowed structuralism to avoid the difficulties we encountered earlier, especially the return of transcendence within philosophies of finitude.</p>
              <p>But now we must ask a different question. Not how structure organizes meaning, but: what allows structure itself to be determined as a structure?</p>
              <p>Let me explain what I mean.</p>
              <p>Structuralism gives us a system of relations. It tells us how elements differ, how positions are organized, and how meaning emerges from these relations. But in doing so, it begins from a structure that is already determined. It takes the system as given.</p>
              <p>Now again, this is not a flaw—it is a methodological decision. Structuralism analyzes the functioning of constituted systems. Its explanatory power begins from relations that are already structurally determined. It is not that no structuralist ever asks about genesis; it is that the structuralist mode of explanation, as we are defining it here, operates on an already constituted relational field.</p>
              <p>But precisely because of this, a difficulty appears that structuralism cannot resolve from within its own framework. Because if we ask: how are the relations themselves determined? then structuralism has no internal answer.</p>
              <p>Let us be precise.</p>
              <p>A structure defines relations. But it does not contain within itself an account of how those relations are themselves produced or determined. It operates at the level of what we might call: the determined. That is, a system in which relations are already fixed and can be analyzed. Structuralism is not inadequate because it gives us relations. It is inadequate because it gives us relations already constituted as a structure.</p>
              <p>But it does not provide a structure for:</p>
              <ul>
                <li>what is not yet determined</li>
                <li>what is determinable</li>
                <li>or how determination takes place</li>
              </ul>
              <p>So, we arrive at a more precise formulation of the problem. Structuralism describes a system of relations. But it does not provide: a structure of determination itself.</p>
              <p>At this point, it is helpful to recall a parallel difficulty in an earlier philosophical framework.</p>
              <p>In Kant, for example, we find a distinction between:</p>
              <ul>
                <li>what is given in intuition</li>
                <li>what is determined by concepts</li>
                <li>and what is thought as an Idea</li>
              </ul>
              <p>But these remain separated. The conditions of knowledge are given, but the process by which determination itself occurs is not fully internalized. As a result, Kant provides a theory of conditions, but not a theory of genesis.</p>
              <p>What we are now facing is a similar problem, but at a different level. Structuralism gives us the organization of a determined relational field. But it does not give us the process through which that field becomes determined as the structure it is.</p>
              <p>So, the question becomes: Can we think a structure that includes within itself the process of its own determination?</p>
              <p>It is at this point that we can begin to understand the move made by Gilles Deleuze.</p>
            </section>

            <section id="idea-as-problem">
              <h2>6. The Idea as Problem: Internalizing Determination</h2>
              <p>Deleuze’s proposal is not to abandon structure, but to deepen it.</p>
              <p>He asks whether what we call a structure can be understood not simply as a system of relations, but as something that includes within itself the process by which relations are determined.</p>
              <p>To do this, he rethinks what he calls the Idea.</p>
              <p>But here, the term “Idea” must be understood in a very specific way. It does not refer to a concept in the ordinary sense. Nor does it refer to a representation. Instead, the Idea is: a structure of determination.</p>
              <p>Let us approach this step by step.</p>
              <p>Deleuze identifies three moments that are usually treated separately:</p>
              <ul>
                <li>what is not yet determined</li>
                <li>what can be determined</li>
                <li>what is determined</li>
              </ul>
              <p>We can express this schematically as:</p>
              <p className="seminar-formula">(dx, dy) → dy/dx → determinate values</p>
              <p>Now, this notation is only a guide, but it allows us to see something important.</p>
              <p>The first moment—what we can call (dx, dy)—does not represent fixed elements. It represents something undetermined. Not nothing, but not yet determined as a specific thing.</p>
              <p>The second moment—dy/dx—represents a relation. But not a relation between already given elements. Rather, a relation that determines how something can be determined.</p>
              <p>And finally, we have determinate values—actual forms, structures, elements that we can identify.</p>
              <p>Now, what is decisive in Deleuze is that these three moments are not separated. They are not distributed across different faculties, or different domains. They are all contained within the Idea itself.</p>
              <p>So, the Idea is not:</p>
              <ul>
                <li>something abstract opposed to reality</li>
                <li>nor a general concept</li>
              </ul>
              <p>It is: a system of relations that produces determination.</p>
              <p>Take again the case of language. In structuralism, language is a system of differences. Words are defined by their position within that system. But from a Deleuzian perspective, this system is not primary. It is the result of a deeper structure.</p>
              <p>The differential relations—what we have described schematically as (dx, dy) and their relation, dy/dx—define a field of possible determinations. A language, then, is not simply a system of relations. It is an actualization of a differential structure.</p>
              <p>Or consider myth. Structuralism analyzes myths as transformations within a system.</p>
              <p>But from this perspective, the system itself must be produced. The relations that define the structure of a myth are not simply given. They emerge from a differential field that determines how elements can be related.</p>
              <p>And we can say the same of the subject. If structuralism shows that the subject is an effect of structure, Deleuze asks how such structures are themselves produced. In this sense, the subject is not only structured, but is the result of a process of determination that exceeds any given structure.</p>
              <p>So, what structuralism describes as a system, Deleuze reinterprets as: a solution. A solution to a problem defined by a differential structure.</p>
            </section>

            <section id="differential-multiplicity">
              <h2>7. From Structure to Differential Multiplicity</h2>
              <p>We can now return to our earlier problem.</p>
              <p>Structuralism gives us relations. But it treats them as already given within a system.</p>
              <p>Deleuze asks us to think something more fundamental. Not relations between elements, but: relations that generate elements. This means that relations do not connect pre-existing elements. There are no elements first, and relations between them. Rather, the relations are primary, and what we call elements are the result of those relations.</p>
              <p>This is what we can call: relation without relata. Relations that do not presuppose fixed terms, but give rise to them.</p>
              <p>This leads to a different conception of structure. No longer a fixed system, but what Deleuze calls a multiplicity. A multiplicity is not a collection of elements. It is a system of differential relations that are in the process of determining themselves.</p>
              <p>So, we move from: structure as system to: structure as process of determination.</p>
              <p>At this point, we can make a crucial distinction. Structuralism operates at the level of: already constituted structures. Deleuze, by contrast, operates at the level of: the constitution of structure itself.</p>
              <p>And this is why the differential is so important. We must be careful here. The differential is not:</p>
              <ul>
                <li>an infinitesimal quantity</li>
                <li>not something infinitely small</li>
                <li>not zero</li>
              </ul>
              <p>It is: a pure relation. A relation that is not yet attached to fixed terms, but determines how such terms can emerge.</p>
            </section>

            <section id="actualization">
              <h2>8. Actualization: How Structure Emerges</h2>
              <p>Let us now take the final step.</p>
              <p>If the Idea is a structure of determination, then we must explain how determinate structures arise from it. This is what Deleuze calls actualization. Actualization is the process by which a differential system gives rise to concrete forms.</p>
              <p>So, we can now restate the entire movement.</p>
              <p>We begin with:</p>
              <ul>
                <li>a differential multiplicity</li>
                <li>a system of relations that are not yet fully determined</li>
              </ul>
              <p>From this, through processes of determination, we obtain:</p>
              <ul>
                <li>structures</li>
                <li>systems</li>
                <li>elements</li>
              </ul>
              <p>In other words: what structuralism describes as a structure is the result of a deeper process.</p>
              <p>So, we can say: Structuralism tells us what a system is. Deleuze asks: how such a system comes to be.</p>
            </section>

            <section id="closing-transition">
              <h2>9. Closing Transition</h2>
              <p>At this point, we can see that we have moved from one level of analysis to another.</p>
              <p>From:</p>
              <ul>
                <li>the organization of meaning within structures</li>
              </ul>
              <p>to:</p>
              <ul>
                <li>the production of structures themselves</li>
              </ul>
              <p>This does not invalidate structuralism. It situates it. It shows that structural analysis describes a level of reality that presupposes something more fundamental.</p>
              <p>A process of determination that is internal to the system, and not imposed from outside.</p>
              <p>And it is this process—this differential structure of the Idea—that we will need to examine more closely in the next session.</p>
              <p>Because it is here that Deleuze develops:</p>
              <ul>
                <li>a new concept of difference</li>
                <li>a new understanding of repetition</li>
                <li>and a critique of psychoanalysis that follows directly from this ontology</li>
              </ul>
              <p>If structure is the result of a process of determination, then we can no longer begin from structure itself. We must begin from what makes structure possible.</p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
