import type { Metadata } from "next";
import { Suspense } from "react";
import { BenefitsSection } from "../../../_components/benefits-section";
import { CurriculumSection } from "../../../_components/curriculum-section";
import { PillarsSection } from "../../../_components/pillars-section";
import { aiRedTeamingCurriculum } from "../../../_data/ai-red-teaming-curriculum";
import { offensiveSecurityCertifications } from "../../../_data/certifications";
import { additionalBenefits } from "../../../_data/benefits";
import { buildingAttackers } from "../../../_data/building-attackers";
import { CourseBenefitsSection } from "../../../_sections/course/course-benefits-section";
import { CourseModulesSection } from "../../../_sections/course/course-modules-section";
import { CoursePillarsSection } from "../../../_sections/course/course-pillars-section";
import { CourseOverviewSection } from "../../../_sections/course/course-overview-section";
import { CourseRoadmapSection } from "../../../_sections/course/course-roadmap-section";
import { CourseSyllabusSection } from "../../../_sections/course/course-syllabus-section";
import {
  CourseTabsFallback,
  CourseTabsSection,
} from "../../../_sections/course/course-tabs-section";

const { certifications } = offensiveSecurityCertifications;

function findCourse(slug: string) {
  return certifications.find((c) => c.href === `/courses/${slug}`);
}

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.href.split("/").pop()! }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const course = findCourse((await params).slug);
  return { title: course ? `${course.code} · ${course.name} | Hackliva` : "Course not found" };
}

export default function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  return (
    <main className="flex-1">
      <CurriculumSection {...aiRedTeamingCurriculum} />
      <Suspense fallback={<PillarsSection {...buildingAttackers} />}>
        <CoursePillarsSection params={params} />
      </Suspense>
      <Suspense fallback={<CourseTabsFallback />}>
        <CourseTabsSection params={params} />
      </Suspense>
      <Suspense fallback={null}>
        <CourseOverviewSection params={params} />
      </Suspense>
      <Suspense fallback={null}>
        <CourseRoadmapSection params={params} />
      </Suspense>
      <Suspense fallback={null}>
        <CourseSyllabusSection params={params} />
      </Suspense>
      <Suspense fallback={null}>
        <CourseModulesSection params={params} />
      </Suspense>
      <Suspense fallback={<BenefitsSection {...additionalBenefits} />}>
        <CourseBenefitsSection params={params} />
      </Suspense>
    </main>
  );
}
