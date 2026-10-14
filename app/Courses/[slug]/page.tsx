import { notFound } from "next/navigation";
import CourseNavBar from "../../Components/Courses/courseNavBar";
import CourseHero from "../../Components/Courses/courseHero";
import CourseSelectorTabs from "../../Components/Courses/courseSelectorTabs";
import CourseHighlightCard from "../../Components/TrainingTracks/courseHighlightCard";
import TrainingTracksPillars from "../../Components/TrainingTracks/trainingTracksPillars";
import CurriculumSection from "../../Components/Courses/curriculumSection";
import CertificationBanner from "../../Components/Courses/certificationBanner";
import AdditionalFeaturesBar from "../../Components/Courses/additionalFeaturesBar";
import TrainingTracksFooter from "../../Components/TrainingTracks/trainingTracksFooter";
import { courses, courseTabs } from "../../Components/Courses/courseData";

export function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({ slug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses[slug];

  if (!course) {
    notFound();
  }

  const tabs = courseTabs.map((tab) => ({
    ...tab,
    active: tab.label === course.tabLabel,
  }));

  return (
    <div className="min-h-screen bg-white">
      <CourseNavBar />
      <CourseHero {...course.hero} />

      <TrainingTracksPillars
        heading="Building Attackers"
        description="Cybersecurity is learned differently when you stop watching and start doing. Hackliva is built around practical learning, hands-on labs and real-world security challenges with AI Automation."
        pillars={course.pillars}
      />

      <CourseSelectorTabs tabs={tabs} />

      <CourseHighlightCard {...course.overview} />

      <CurriculumSection {...course.curriculum} />

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1536px] px-4 pb-12 sm:px-8 lg:px-16">
          <CertificationBanner {...course.certification} />
        </div>
      </section>

      <AdditionalFeaturesBar {...course.additional} />

      <TrainingTracksFooter />
    </div>
  );
}
