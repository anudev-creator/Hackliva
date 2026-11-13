import type { BatchesSectionProps } from "../_components/batches-section";

export const upcomingBatches: BatchesSectionProps = {
  id: "batches",
  title: "The Next Batch Is Open.\nJoin Now.",
  description:
    "Live sessions, Hands-on Labs, real instructors, small groups. Workshops. No learning alone.",
  mode: "Online",
  batches: [
    {
      schedule: "Mon, Tue & Fri",
      title: "Weekday",
      startDate: "2026-10-05",
      time: "8:00 pm – 11:00 pm",
      href: "/contact",
    },
    {
      schedule: "Sat & Sun",
      title: "Weekend",
      startDate: "2026-10-10",
      time: "10:00 am – 1:00 pm",
      href: "/contact",
    },
  ],
};
