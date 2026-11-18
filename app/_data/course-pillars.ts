import type { Pillar } from "../_components/pillars-section";

/** Pillar cards for courses whose text differs from the default in building-attackers.ts, keyed by the /courses/<slug> segment. */
const practicalPillars: Pillar[] = [
  {
    title: "Learning Through Real Systems",
    description:
      "Hackliva takes students beyond theory and into environments where security concepts become tangible.",
  },
  {
    title: "Think Like an Attacker",
    description:
      "Understand how applications, networks, APIs, cloud platforms, and operating systems behave and learn to question the assumptions behind them.",
  },
  {
    title: "Break. Investigate. Understand.",
    description:
      "Work through practical challenges, analyse what happened, trace the root cause, and understand how seemingly small weaknesses lead to larger problems.",
  },
];

export const coursePillars: Record<string, Pillar[]> = {
  cwpts: practicalPillars,
  cairts: practicalPillars,
  cnpts: practicalPillars,
  cmass: practicalPillars,
  cres: practicalPillars,
};
