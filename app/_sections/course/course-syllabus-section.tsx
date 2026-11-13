import { SyllabusSection } from "../../_components/syllabus-section";
import { courseSyllabi } from "../../_data/course-syllabi";

/** Comprehensive syllabus for the current course; renders nothing until that course has content. */
export async function CourseSyllabusSection({
  params,
}: {
  params: PageProps<"/courses/[slug]">["params"];
}) {
  const syllabus = courseSyllabi[(await params).slug];
  return syllabus ? <SyllabusSection {...syllabus} /> : null;
}
