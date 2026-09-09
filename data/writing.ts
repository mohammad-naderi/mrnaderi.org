export type WritingEntry = {
  id: string;
  area: string;
  title: string;
  text: string;
  href?: string;
};

export const writings: WritingEntry[] = [
  {
    id: "being-and-truth-after-event",
    area: "Badiou · Event · Theory of Discipline",
    title: "Being and Truth, After Event",
    text: "A reflection on what Event does in Being and Event, what its formal schema leaves unexplained, and why the Theory of Discipline can retain rupture without requiring Event.",
    href: "https://mrnaderi.substack.com/p/being-and-truth-after-event",
  },
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
    id: "absoluteness-of-truth",
    area: "Truth · Absoluteness · Theory of Discipline",
    title: "The Absoluteness of Truth",
    text: "The next essay asks what it means for a truth to be independent of a particular count or presentation, and how invariance, compossibility, elementarity, and j bear on that question.",
  },
];
