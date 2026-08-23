import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site";

export const metadata: Metadata = {
  title: "Dark Enlightenment — Accelerationism and the Collapse of Transition",
};

const toc = [
  ["abstract", "Abstract"],
  ["claim", "The Accelerationist Claim"],
  ["premise", "The Hidden Premise"],
  ["inconsistency", "Structural Inconsistency"],
  ["right", "The Right-Accelerationist Response"],
  ["left", "The Left-Accelerationist Response"],
  ["discipline", "Discipline and the Postwar Impasse"],
];

export default function DarkEnlightenmentPartTwoPage() {
  return (
    <>
      <SiteHeader />
      <main className="seminar-page">
        <section className="seminar-header shell">
          <Link className="seminar-back" href="/teaching">← Teaching & Talks</Link>
          <p className="eyebrow">Talk · Part II</p>
          <h1>Dark Enlightenment</h1>
          <div className="seminar-meta">
            <p>Accelerationism and the Collapse of Transition</p>
            <p>May 22, 2026</p>
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
            <section id="abstract">
              <h2>Abstract</h2>
              <p>This seminar examines accelerationism as a response to a deeper political and historical impasse that emerged after the Second World War: the progressive collapse of the intelligibility of transition itself. Earlier socialist and revolutionary frameworks still possessed a relatively coherent image of how capitalism might be overcome through political mediation, organization, and collective subjectivity. In the postwar period, however, capitalism increasingly appeared not as a rigid structure approaching terminal contradiction, but as a continuously adaptive and recompositional system capable of reorganizing itself through crisis, technological transformation, and social destabilization.</p>
              <p>It is this transformation that the work of Deleuze and Guattari diagnoses with exceptional force. Yet once capitalism is understood primarily through its capacities for continuous variation, recombination, and systemic adaptation, a new problem emerges: how can one still think political novelty in a stronger sense rather than mere recomposition internal to capitalism itself?</p>
              <p>The seminar argues that accelerationism emerges from this unresolved tension. Both right and left accelerationist orientations attempt to recover a trajectory of transformation from within a framework centered on process, production, and immanent recomposition. Right accelerationism ultimately abandons the expectation of rupture altogether in favor of optimization, technological governance, and adaptive management. Left accelerationism attempts to recover transition through planning, coordination, infrastructure, and technological organization, yet in doing so reintroduces forms of mediation that the underlying ontology struggles to ground.</p>
              <p>The seminar situates these developments within a broader distinction between ideology and discipline. Ideological formations respond to political impasses by reconfiguring the problem so that the impasse no longer constrains the sequence itself. A disciplinary sequence, by contrast, attempts to sustain the impasse long enough to compose a genuinely new political consistency. From this standpoint, the contemporary problem is no longer simply how to accelerate capitalist processes, but how forms of political composition capable of producing novelty can still be constructed after the collapse of the historical image of transition.</p>
              <p>The seminar concludes by briefly examining the work developed within STP as one contemporary attempt to rethink militancy, organization, and political articulation under these altered conditions.</p>
            </section>

            <section id="claim">
              <h2>The Accelerationist Claim</h2>
              <p>Let us begin with a claim that has become increasingly common across a wide range of contemporary political and theoretical orientations.</p>
              <p>Capitalism is often described as a system defined not by stability, but by continuous transformation. It absorbs crises, reorganizes institutions, restructures social relations, and continuously reshapes the technological and economic conditions under which it operates. What appeared, at earlier moments, as limits to the system have repeatedly become conditions for its reorganization and continuation.</p>
              <p>This adaptability gives rise to a distinctive intuition. But this intuition does not emerge in isolation. As we saw in the previous seminar, it becomes possible only within a broader historical and theoretical shift in which the problem of transformation increasingly moves away from contradiction, mediation, and political intervention and toward process, production, and immanent recomposition. Once change is no longer understood primarily through the interruption of a system by a subject, the possibility emerges that transformation might instead arise from the dynamics of the system itself.</p>
              <p>If capitalism already operates through processes of transformation, then perhaps the question is no longer how to oppose these processes, but how to intensify them. Rather than resisting the movement of the system, one might attempt to push its dynamics further—accelerating technological development, productive capacity, automation, informational systems, and social recomposition to the point where the system itself undergoes a qualitative transformation.</p>
              <p>This intuition appears in different forms across a wide range of contemporary orientations. In some cases, it takes a rightward form associated with figures such as Nick Land and later currents connected to the Dark Enlightenment. In others, it appears in left-accelerationist projects associated with Nick Srnicek and Alex Williams, particularly after the 2008 financial crisis and the exhaustion of earlier forms of horizontal political organization.</p>
              <p>Despite their differences, these orientations share a common problematic.</p>
              <p>They begin from the assumption that capitalism’s own processes contain the possibility of transformation.</p>
              <p>At first glance, this intuition appears plausible. After all, capitalism undeniably changes. It constantly reorganizes production, technology, labor, communication, and social life. But it is precisely here that a more difficult question emerges.</p>
              <p>In what sense can we think beyond capitalism at all?</p>
              <p>If “beyond” simply means further transformation, then capitalism itself already seems capable of producing this endlessly. The problem, therefore, cannot simply be change.</p>
              <p>It requires a more precise distinction.</p>
              <p>By change, I mean variation and recomposition within an existing consistency. By novelty, I mean the emergence of a new consistency irreducible to the ongoing transformations of the existing system itself.</p>
              <p>The question, then, is not whether capitalism changes. The question is whether continuous transformation can ever produce novelty in this stronger sense.</p>
              <p>This is the problem that gives accelerationism its force.</p>
              <p>Because accelerationism ultimately depends on a specific expectation: that the intensification of capitalist processes will not merely produce further recomposition within the system, but will eventually generate a qualitative transformation of the system itself.</p>
              <p>The difficulty, however, is that this expectation already presupposes something that has not yet been justified.</p>
              <p>It assumes that intensification carries within itself a principle of transition—that “more” can become “different in kind.”</p>
              <p>It is this assumption that we must now examine more closely.</p>
            </section>

            <section id="premise">
              <h2>The Hidden Premise</h2>
              <p>At first glance, the accelerationist intuition appears plausible.</p>
              <p>If capitalism already operates through continuous transformation, then it seems reasonable to assume that intensifying these dynamics might eventually produce a transformation of the system itself. The more capitalism develops its productive, technological, and organizational capacities, the more it appears to push against its own limits.</p>
              <p>Yet this intuition already depends upon a further assumption.</p>
              <p>In order for intensification to produce transformation, the processes in question must be more than merely continuous or dynamic. They must also be directional. That is, they must contain within themselves a tendency toward a qualitative transition rather than mere continuation.</p>
              <p>This assumption is rarely stated explicitly. It operates in the background as a condition of intelligibility for the accelerationist claim itself.</p>
              <p>Without it, there would be no reason to believe that accelerating capitalist processes produces anything other than further capitalist development.</p>
              <p>We can now state the assumption more clearly.</p>
              <p>Accelerationism presupposes that quantitative intensification can produce qualitative transformation—that beyond a certain threshold, the ongoing movement of the system ceases to reproduce the same organizational logic and instead generates a different one.</p>
              <p>We can think here, for example, of a simplified economic system organized around a monopoly. Because the monopoly controls a necessary service, it can continuously raise prices while simultaneously expanding its own organizational structure. More and more people become dependent upon the system not only as consumers, but also as employees whose livelihoods are tied to its continued expansion.</p>
              <p>For a time, this expansion appears self-sustaining. The system grows by intensifying its own operations. But beyond a certain point, the very logic that drives the expansion begins to undermine the conditions that sustain it. Prices rise faster than the capacity of those within the system to participate in it. What initially appeared as continuous expansion begins to generate instability internal to its own operation.</p>
              <p>Accelerationism relies upon an intuition of this kind: that capitalism, by intensifying its own processes, may eventually reach a point at which the continuation of those processes no longer reproduces the system in the same form, but instead generates a qualitatively different configuration.</p>
              <p>At this point, the attraction of accelerationism becomes easier to understand.</p>
              <p>It promises a way of thinking transition without relying upon the classical framework of contradiction, negation, and political mediation. Transformation would emerge from within the dynamics of the system itself rather than through interruption by an external agent or organized subject.</p>
              <p>This is what gives accelerationism much of its contemporary force.</p>
              <p>It appears to preserve the possibility of systemic transformation while remaining within the broader shift toward process, production, and immanent recomposition that we examined in the previous seminar.</p>
              <p>But this immediately raises a more difficult question.</p>
              <p>What, exactly, within the framework being invoked guarantees that intensification produces transition rather than merely further recomposition?</p>
              <p>It is this question that we must now examine more closely.</p>
            </section>

            <section id="inconsistency">
              <h2>Structural Inconsistency</h2>
              <p>We can now examine more closely the framework that accelerationism inherits.</p>
              <p>Up to this point, we have identified a central assumption underlying the accelerationist problematic: namely, that the intensification of capitalist processes can eventually produce a qualitative transformation of the system itself. The question we must now ask is whether the ontology invoked by accelerationism can adequately ground this expectation.</p>
              <p>I will approach this in a minimal way.</p>
              <p>At the center of the framework associated with Deleuze and Guattari lies the concept of production. Reality is understood not as a collection of fixed identities or stable substances, but as a field of continuous differentiation, variation, and becoming. What exists are processes, relations, flows, and co-variations unfolding immanently, without reference to transcendent order or external principle.</p>
              <p>What follows from this is decisive.</p>
              <p>If production is continuous and immanent in this way, then it does not contain within itself any intrinsic principle of rupture. Intensification means only further variation: more connections, more transformations, more differentiation, more recombination. The process does not, simply by continuing, compel its own transition into something qualitatively different.</p>
              <p>In other words:</p>
              <p>At the level of production, “more” does not necessarily become “different in kind.” It becomes further variation within the ongoing movement of production itself.</p>
              <p>At the same time, however, this framework does not simply describe a formless flux without organization. Deleuze and Guattari repeatedly emphasize that productive flows become organized into relatively stable configurations. Social formations, institutions, codes, markets, and regimes of desire are all ways in which production becomes locally stabilized and reproduced.</p>
              <p>We can think here, for example, of the way pathways emerge across an open field. Movement initially occurs in multiple directions, without fixed organization. But as certain routes become more frequently traversed, relatively stable paths begin to form. These pathways are not imposed externally upon movement; they emerge from the movement itself and are continuously reproduced through it. Once established, they channel and reinforce subsequent movement, making certain trajectories easier, more efficient, and therefore more likely to persist.</p>
              <p>This point is crucial because it clarifies the actual difficulty confronting accelerationism.</p>
              <p>The problem is not that production fails to generate organization. Capitalism itself already operates as a productive organizational regime. Its historical specificity lies precisely in its extraordinary capacity to dissolve existing configurations and continuously reorganize productive and social relations through new forms of recomposition.</p>
              <p>The difficulty is rather that nothing within the framework clearly establishes why the intensification of capitalism’s productive dynamics would necessarily produce a qualitatively different regime rather than further capitalist recomposition.</p>
              <p>Indeed, the ontology seems to suggest the opposite. Since capitalism continuously reorganizes itself through processes of deterritorialization and reterritorialization, intensification appears fully compatible with the ongoing mutation and reproduction of capitalism itself. More production may generate more variation, more recombination, and more adaptive reorganization without ever producing rupture in the stronger sense.</p>
              <p>We can now state the impasse directly.</p>
              <p>At the center of this structural tension lies a difficulty that follows from the shift we examined in the previous seminar. Once transformation is relocated from intervention, mediation, and contradiction to automatic process itself, the problem becomes how to think a transition beyond capitalism without reintroducing precisely those elements that had been displaced.</p>
              <p>This is the impasse inherited by accelerationism.</p>
              <p>Within the framework associated with Deleuze and Guattari, capitalism appears as a continuously adaptive and recompositional process. Its movement produces variation, reorganization, and continual transformation. But these transformations remain internal to the ongoing movement of the process itself. The framework can theorize continuous recomposition, yet it struggles to theorize rupture in the stronger sense: the emergence of a qualitatively distinct consistency irreducible to the reproduction and mutation of capitalism itself.</p>
              <p>The political ambition of accelerationism, however, clearly exceeds mere recomposition. It seeks a transition beyond capitalism rather than simply further transformations within it.</p>
              <p>The impasse, then, is how to think a transformation beyond capitalism solely through the movement of process and flow, without reintroducing intervention, mediation, contradiction, or subject as the operators of rupture.</p>
              <p>What follows are two distinct attempts to respond to this impasse.</p>
            </section>

            <section id="right">
              <h2>The Right-Accelerationist Response</h2>
              <p>One response to this impasse emerges in the work of Nick Land and the Cybernetic Culture Research Unit (CCRU) during the 1990s.</p>
              <p>What becomes decisive here is that the unresolved problem of rupture is no longer treated as a difficulty to be solved. Instead, the adaptive and self-transformative capacities of capitalism themselves increasingly become the object of affirmation.</p>
              <p>This marks an important shift.</p>
              <p>Rather than asking how capitalism might give rise to a qualitatively different social organization, right accelerationism increasingly treats capitalism as the very medium of continuous transformation. Capitalism is no longer approached primarily as a system structured by contradiction and destined toward supersession, but as an open-ended machinic process whose capacity for recomposition exceeds every attempt to stabilize or contain it.</p>
              <p>From this perspective, capitalism appears less as a historical stage than as an intelligent and continuously mutating system of production, technological innovation, and social reorganization. Crisis no longer functions as the point at which the system encounters its limit. Instead, crises themselves become moments through which capitalism reorganizes and intensifies its own operations.</p>
              <p>This orientation also produces a distinct cultural and political imagination. Rather than calling for collective rupture or revolutionary transformation, right accelerationist and Dark Enlightenment tendencies increasingly celebrate technological disruption, adaptive competition, and infrastructural optimization as historical forces in their own right. The emphasis falls on accelerating innovation, artificial intelligence, automation, platform systems, crypto-networks, and technological experimentation while treating political mediation and democratic deliberation as obstacles to systemic adaptation.</p>
              <p>This helps explain why many of these orientations spread less through traditional political organizations than through online technological and cultural spaces. What emerges is a broader sensibility organized around speed, disruption, scalability, optimization, and inevitability. Political language increasingly gives way to the language of systems, infrastructure, networks, and technological evolution. Social problems no longer appear as contradictions requiring collective transformation, but as inefficiencies requiring technical solutions.</p>
              <p>Within this horizon, democracy itself increasingly appears outdated: too slow, too procedural, too constrained to keep pace with technological change. Figures such as Curtis Yarvin openly propose replacing democratic governance with more centralized and technocratic forms of administration modeled on corporate management. More diffuse currents within Silicon Valley culture similarly imagine society less as a political community than as a system to be continuously optimized through data, algorithms, infrastructure, and adaptive technological coordination.</p>
              <p>We increasingly encounter this orientation far beyond explicitly accelerationist theory. It appears throughout contemporary AI discourse, startup culture, techno-futurism, and the broader ideology of disruption associated with Silicon Valley. The emphasis on “moving fast,” scaling systems, removing friction, and accelerating innovation increasingly displaces older political languages centered on mediation, representation, or collective transformation. Technological development itself begins to appear as the primary agent of history.</p>
              <p>It is in this context that Slavoj Žižek’s provocative observation becomes philosophically interesting: that contemporary China may represent the future horizon of capitalism more clearly than Western liberal democracies themselves. What matters here is not China’s official ideological identity, but the apparent compatibility between large-scale technological acceleration, infrastructural planning, centralized coordination, and capitalist dynamism. The older liberal assumption that capitalism naturally tends toward democratic mediation increasingly becomes difficult to sustain.</p>
              <p>Figures such as Alex Karp similarly articulate a world in which technological systems, AI infrastructures, predictive coordination, and strategic optimization increasingly become the central terrain of politics itself. Governance appears less as collective political deliberation and more as the management of complex adaptive systems operating at planetary scale.</p>
              <p>At this point, the transition toward the orientations associated with the Dark Enlightenment becomes easier to understand.</p>
              <p>Once capitalism is accepted as the permanent horizon of recomposition, the political problem is no longer how to move beyond the system, but how to manage its ongoing transformations more effectively than existing democratic institutions appear capable of doing. Governance increasingly becomes a question of optimization, administration, and technological coordination rather than collective political mediation.</p>
              <p>The impasse is therefore resolved not by grounding rupture, but by abandoning the expectation of rupture altogether.</p>
              <p>What emerges is not simply a political doctrine, but a displacement of the original problem itself.</p>
              <p>The question of transformation gives way to the continuous management of recomposition.</p>
              <p>Capitalism no longer appears as a system to be overcome, but as the horizon within which all future organization must take place.</p>
            </section>

            <section id="left">
              <h2>The Left-Accelerationist Response</h2>
              <p>A very different response to this impasse emerges in the aftermath of the 2008 financial crisis and the exhaustion of earlier forms of horizontal political organization such as Occupy.</p>
              <p>It is within this context that left accelerationism appears explicitly as an attempt to recover the question of transition without returning fully to the classical framework of contradiction, negation, and revolutionary mediation. The most influential articulation of this orientation appears in the 2013 manifesto by Nick Srnicek and Alex Williams, later expanded in their broader discussions of post-work society, automation, infrastructure, and political organization.</p>
              <p>Unlike right accelerationism, left accelerationism does not simply celebrate capitalism’s adaptive capacities. In fact, one of its central claims is that earlier accelerationist orientations misunderstood the difference between speed and acceleration.</p>
              <p>Capitalism already produces enormous speed: rapid technological development, financial circulation, informational overload, endless innovation, and continuous disruption. Yet this movement remains confined within the horizon of capitalism’s own reproduction. The system moves faster and faster without changing direction.</p>
              <p>For this reason, left accelerationism insists that acceleration cannot mean mere intensification alone. Acceleration must also involve navigation. It must involve a change in direction capable of reorganizing the system itself rather than simply reproducing its dynamics more intensely.</p>
              <p>This marks an important shift.</p>
              <p>Where right accelerationism increasingly abandons the expectation of rupture, left accelerationism attempts to recover transition by reintroducing questions of coordination, planning, infrastructure, and systemic organization. The problem is no longer how to intensify capitalism blindly, but how to redirect its productive and technological capacities toward a post-capitalist future.</p>
              <p>This is why left accelerationism places such strong emphasis on abstraction, modeling, and infrastructure.</p>
              <p>One of the concepts that becomes increasingly important in this context is the Marxist notion of “real abstraction,” associated especially with Alfred Sohn-Rethel and later developed by figures such as Alberto Toscano. The central intuition is that abstraction is not merely something that occurs in thought. Capitalism itself already operates through abstractions that are materially real: money, logistics, financial systems, data infrastructures, algorithmic coordination, supply chains, and technological platforms. These abstractions are not external representations of social life; they actively organize and structure social reality itself.</p>
              <p>For left accelerationism, this becomes decisive.</p>
              <p>If capitalism already operates through large-scale abstract infrastructures, then political transformation cannot remain at the level of local resistance, immediacy, or spontaneous horizontal organization alone. The terrain of politics increasingly becomes the terrain of infrastructure, coordination, modeling, planning, and technological systems themselves.</p>
              <p>This is also why left accelerationism sharply criticizes what it calls “folk politics”: forms of political organization centered on immediacy, localism, horizontality, temporary occupations, and small-scale resistance. For thinkers such as Srnicek and Williams, these forms of politics remain structurally incapable of confronting the scale and abstraction of contemporary capitalism itself. Globalized technological and economic systems cannot be transformed through purely local or spontaneous gestures alone.</p>
              <p>What must be confronted instead are the large-scale abstract infrastructures through which contemporary social life is already organized.</p>
              <p>This is why the social horizon implied by left accelerationism increasingly resembles a technologically mediated post-scarcity socialism. Automation, artificial intelligence, algorithmic coordination, and advanced productive systems are imagined not merely as instruments of capitalist accumulation, but as capacities that could potentially reduce labor, expand social provision, and reorganize collective life beyond market dependency.</p>
              <p>The central wager of left accelerationism is that the productive and organizational capacities already developed within capitalism need not remain subordinated to market reproduction alone. Technologies that currently intensify capitalist accumulation—automation, artificial intelligence, logistical systems, data infrastructures, and algorithmic coordination—could instead be reorganized toward different social ends. This is why left accelerationism places such strong emphasis on planning, technological coordination, universal basic income, and the possibility of a post-work society organized around collective access to increasingly automated productive capacities.</p>
              <p>In this sense, left accelerationism attempts to preserve the possibility of novelty without abandoning the broader historical shift toward process, production, and immanent organization that we examined earlier. It seeks to think a transformation beyond capitalism while remaining within a framework no longer grounded primarily in contradiction, negation, or classical revolutionary subjectivity.</p>
              <p>And yet, it is precisely here that the original impasse begins to reappear.</p>
              <p>Because once acceleration is understood not merely as intensification but as directional transformation, questions of mediation quietly return. Direction requires selection. Navigation requires coordination. Planning requires intervention at the level of organization itself.</p>
              <p>What begins to re-emerge, therefore, are precisely the kinds of operators that the earlier shift away from contradiction and political mediation had attempted to displace.</p>
              <p>This does not mean that left accelerationism simply returns to classical Marxism. Far from it. Its conceptual horizon remains deeply shaped by the ontology of process, production, networks, and systems inherited from the post-structuralist moment. But in attempting to recover transition beyond capitalism, it is increasingly compelled to introduce forms of coordination and intervention that the original framework could not fully ground internally.</p>
              <p>The impasse is therefore not resolved here either.</p>
              <p>It is reorganized.</p>
            </section>

            <section id="discipline">
              <h2>Discipline and the Postwar Impasse</h2>
              <p>At this point, the problem confronting accelerationism can be situated within a broader historical horizon.</p>
              <p>The central political impasse that emerged after the Second World War was not simply the defeat of particular revolutionary movements or the temporary failure of socialist projects. What progressively collapsed was the intelligibility of transition itself.</p>
              <p>Prior to the postwar period, socialist politics still possessed a relatively coherent image of transformation. Capitalism appeared historically finite. Structural tensions could be identified and organized. A revolutionary subject appeared historically intelligible. Political mediation connected analysis, organization, and transformation into a sequence. Whatever the disagreements internal to Marxism, the question of transition still retained operational clarity.</p>
              <p>What gradually disintegrated was not conflict itself, but the capacity to organize conflict into a coherent political sequence.</p>
              <p>Capitalism did not simply survive crisis. It increasingly reorganized itself through crisis. It absorbed technological transformations, integrated mass consumption, reorganized labor, incorporated forms of cultural and subjective destabilization that earlier revolutionary frameworks had treated as external pressures, and continuously reconstructed its own conditions of reproduction. Contradictions did not disappear, but they became increasingly diffuse, mobile, and difficult to stabilize politically.</p>
              <p>It is this transformation that Deleuze and Guattari diagnose with remarkable precision.</p>
              <p>Capitalism no longer appears here as a rigid structure approaching terminal contradiction, but as a continuously adaptive and recompositional system. Crisis increasingly functions less as a limit than as a mechanism of systemic reorganization. Capitalism survives by decoding and recomposing its own arrangements.</p>
              <p>This diagnosis remains extraordinarily powerful because it captures something fundamental about postwar capitalism: its exceptional capacity to metabolize instability.</p>
              <p>But this transformation also generates a decisive impasse.</p>
              <p>If capitalism is defined precisely by its ability to continuously transform and reorganize itself, then the question of transition becomes increasingly difficult to formulate. The issue is no longer whether capitalism changes. Capitalism changes constantly. The problem becomes how a qualitatively distinct political consistency could emerge from within a system whose defining characteristic is its capacity for continuous recomposition.</p>
              <p>At this point, different responses become possible.</p>
              <p>One response attempts to remain within the impasse and rethink the conditions under which a new political sequence could be composed. Another response reconfigures the problem itself so that the impasse no longer constrains how transformation is thought.</p>
              <p>This distinction allows us to specify what is meant here by ideology.</p>
              <p>Ideology does not simply mean illusion, propaganda, error, or false consciousness. Nor is it reducible to a set of beliefs or representations. An ideological configuration is defined structurally by how it relates to an impasse.</p>
              <p>A discipline attempts to pass through the impasse by constructing a new consistency under the very conditions generated by that impasse. An ideological configuration proceeds differently. It reconfigures the problem in such a way that the impasse no longer binds the development of the sequence itself.</p>
              <p>The distinction is therefore not between movement and stasis. Both disciplines and ideologies generate sequences, practices, and forms of subjectivity. The difference lies in whether the sequence remains constrained by the conditions that generated the impasse in the first place.</p>
              <p>This distinction allows us to situate the postwar trajectory more precisely.</p>
              <p>The framework developed by Deleuze and Guattari does not simply describe capitalism differently. It reformulates the problem of transformation itself. The instability of political mediation and the weakening of revolutionary subjectivity no longer appear as problems requiring recomposition at the political level. Transformation is increasingly relocated into process, production, flows, decoding, recombination, and systemic variation itself.</p>
              <p>This is why their framework functions as what we may call an internal ideology.</p>
              <p>It emerges from within a real historical impasse and theorizes that impasse with extraordinary sophistication. But it does not remain bound to the conditions that generated the impasse. Instead, the problem is reorganized so that transformation no longer depends on the reconstruction of political mediation, disciplined organization, or the composition of a sequence capable of producing a new collective consistency.</p>
              <p>The impasse is not denied. It is displaced.</p>
              <p>This displacement has an important consequence.</p>
              <p>Once transformation is detached from the mediation of a political sequence, novelty increasingly becomes difficult to distinguish from recomposition itself. Continuous variation, mutation, deterritorialization, and systemic transformation begin to occupy the conceptual space previously reserved for political novelty.</p>
              <p>It is precisely here that accelerationism emerges.</p>
              <p>Accelerationism attempts to recover a directional problem from within a framework organized around process. It accepts the basic ontology of continuous systemic transformation, but introduces an additional expectation: that the intensification of these processes will eventually force a qualitative reorganization.</p>
              <p>But the framework itself does not supply a principle explaining why intensification would produce a new political consistency rather than further recomposition internal to capitalism itself.</p>
              <p>This produces the structural instability we examined earlier.</p>
              <p>Right accelerationism and the orientations associated with the Dark Enlightenment eventually abandon the expectation of rupture altogether. Capitalism itself becomes the enduring horizon of organization. What remains is the optimization, management, acceleration, and infrastructural regulation of systemic processes.</p>
              <p>Left accelerationism attempts a different response. It tries to recover planning, coordination, infrastructure, and political direction. But this recovery takes place within a framework that still largely understands transformation through productive and systemic process. As a result, the problem reappears at a different level. The question becomes how organization itself could produce novelty rather than merely manage recomposition more efficiently.</p>
              <p>What all of these trajectories inherit is the same unresolved postwar impasse: how to think political novelty once the historical intelligibility of revolutionary transition has collapsed.</p>
              <p>A disciplinary response does not simply remain attached to an impasse at the level of persistence or refusal. It proceeds differently because it encounters something that cannot be fully accommodated within the existing consistency itself.</p>
              <p>Every social and conceptual order organizes what can be recognized, integrated, and stabilized within its own terms. But certain encounters exceed those available forms of registration. The issue then becomes how this excess is handled.</p>
              <p>Pre-capitalist formations largely resolve excess through transcendence, hierarchy, and external closure. Capitalism operates differently. Rather than suppressing excess, it continuously reintegrates it through recomposition. Destabilization becomes material for further adaptation and variation within the system itself.</p>
              <p>A disciplinary truth proceeds otherwise. It neither covers over excess nor simply reintegrates it into recomposition. It attempts to compose a new consistency from the consequences of that encounter. Novelty, in this sense, is not mere change within an existing order, but the construction of a consistency irreducible to the previous one.</p>
              <p>This distinction corresponds, in a general way, to different historical universes: the covering-over universe associated with transcendence, the singular universe associated with capitalist recomposition, and the absolute universe in which truths can be composed without being reduced either to closure or to endless variation.</p>
              <p>What follows from this diagnosis is not the immediate construction of a new political program in the classical sense. The problem is more elementary. If the postwar impasse consisted in the collapse of the intelligibility of transition itself, then the first task becomes the reconstruction of forms of political thinking and organization capable of operating under these altered conditions.</p>
              <p>It is in this context that the work developed within STP becomes relevant.</p>
              <p>The starting point of this work is the claim that the contemporary left is defined not only by defeat or fragmentation in a general sense, but by the absence of stable forms of articulation between heterogeneous political processes. Different organizations, struggles, and movements operate within distinct social spaces, with different grammars, scales, and forms of political intelligibility. Under these conditions, no single organizational form, political language, or strategic model can simply be projected universally onto every situation.</p>
              <p>The proposal developed within STP is therefore organizational and experimental rather than teleological. Its central hypothesis is that political processes themselves function as forms of investigation. Organizations do not merely apply theory to reality; through struggle, experimentation, and interaction with concrete social constraints, they produce situated forms of political intelligibility.</p>
              <p>This is why practices such as political listening, militant investigation, and collective elaboration become central. The task is not simply to criticize organizations externally, nor to subordinate them to a unified doctrine, but to understand how different political forms think, where their practices possess real efficacy, what limits they encounter, and how distinct processes might become capable of articulation without erasing their singularity.</p>
              <p>From this standpoint, the central political problem is no longer how to derive transition automatically from crisis, contradiction, or technological development. Nor is it to celebrate recomposition and adaptive variation as ends in themselves. The problem becomes how heterogeneous political sequences can compose forms of organization capable of producing consequences irreducible to the recompositional logic of the existing order.</p>
              <p>This does not provide a completed image of post-capitalist society. It proposes, instead, a different orientation toward politics itself: one centered on experimentation, articulation, investigation, and disciplined composition under conditions where no pre-given image of transition remains available.</p>
              <p>The question, therefore, is no longer whether capitalism changes, accelerates, or adapts. The question is whether forms of political composition capable of producing genuine novelty can still be constructed under contemporary conditions.</p>
            </section>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
