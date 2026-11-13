import { CourseOverview } from "../../_components/course-overview";
import { courseOverviews } from "../../_data/course-overviews";

/** Overview band for the current course; renders nothing until that course has content. */
export async function CourseOverviewSection({
  params,
}: {
  params: PageProps<"/courses/[slug]">["params"];
}) {
  const overview = courseOverviews[(await params).slug];
  return overview ? <CourseOverview {...overview} /> : null;
}
