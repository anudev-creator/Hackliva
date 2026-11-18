import { CourseModules } from "../../_components/course-modules";
import { courseModules } from "../../_data/course-modules";

/** Module grid for the current course; renders nothing for courses that use the roadmap and syllabus instead. */
export async function CourseModulesSection({
  params,
}: {
  params: PageProps<"/courses/[slug]">["params"];
}) {
  const modules = courseModules[(await params).slug];
  return modules ? <CourseModules {...modules} /> : null;
}
