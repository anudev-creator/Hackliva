import { PillarsSection } from "../../_components/pillars-section";
import { buildingAttackers } from "../../_data/building-attackers";
import { coursePillars } from "../../_data/course-pillars";

/** "Building Attackers" for the current course: its own pillar text when it has one, otherwise the default. */
export async function CoursePillarsSection({
  params,
}: {
  params: PageProps<"/courses/[slug]">["params"];
}) {
  const pillars = coursePillars[(await params).slug] ?? buildingAttackers.pillars;
  return <PillarsSection {...buildingAttackers} pillars={pillars} />;
}
