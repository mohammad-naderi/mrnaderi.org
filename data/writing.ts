export type WritingEntry = {
  id: string;
  area: string;
  title: string;
  text: string;
  href?: string;
};

export const writings: WritingEntry[] = [
  {
    id: "what-is-a-truth",
    area: "Truth · Theory of Discipline",
    title: "What Is a Truth?",
    text: "Working backward from Greek tragedy, this essay asks what a truth is in its being and distinguishes truth from consistency, disciplinary state, consequence, and novelty.",
    href: "https://mrnaderi.substack.com/p/what-is-a-truth",
  },
  {
    id: "rimbaud",
    area: "Poetry · Discipline",
    title: "The Subject Called “Rimbaud”",
    text: "Rimbaud names at least three distinct things: an event in poetry, a poet, and a new consistency in poetic art. Distinguishing them makes it possible to see why the biographical individual is not identical with the subject of the discipline.",
    href: "https://mrnaderi.substack.com/p/the-subject-called-rimbaud",
  },
  {
    id: "crisis-of-novelty",
    area: "The Present · Truth",
    title: "Why the crisis of truth appears as a crisis of novelty",
    text: "Truth is not directly available in everyday experience. What becomes visible is a blockage in the production and recognition of radical novelty—and only philosophy draws from it the deeper crisis of truth.",
  },
  {
    id: "naturalization",
    area: "Politics · Diagnosis",
    title: "The present made permanent",
    text: "The recurrent enemy of novelty is naturalization: the transformation of a contingent arrangement into the horizon of the possible. Even thought that denaturalizes one order can reproduce the same error elsewhere.",
  },
  {
    id: "ethos",
    area: "Discipline · Subjectivity",
    title: "The ethos of a discipline",
    text: "How the orientation of a discipline—covering, regulating, or affirming—shapes its relation to excess, novelty, and truth.",
  },
  {
    id: "phenomenology",
    area: "Novelty · Philosophy",
    title: "Novelty as the phenomenology of truth",
    text: "A compact statement of the route from the diagnosis of the present to the possibility of truth: novelty is how the life of truth becomes philosophically legible.",
  },
];
