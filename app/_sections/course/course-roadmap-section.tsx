import { RoadmapSection } from "../../_components/roadmap-section";
import { courseRoadmaps } from "../../_data/course-roadmaps";

/** "Learn the basics" roadmap for the current course; renders nothing until that course has content. */
export async function CourseRoadmapSection({
  params,
}: {
  params: PageProps<"/courses/[slug]">["params"];
}) {
  const roadmap = courseRoadmaps[(await params).slug];
  return roadmap ? <RoadmapSection {...roadmap} /> : null;
}
