import Image from "next/image";
import { assetPath } from "../assetPath";
import CurriculumIcon, { type CurriculumIconName } from "../Courses/curriculumIcons";

export type CourseHighlightCardProps = {
  eyebrow?: string;
  heading: string;
  subheading: string;
  courseDetails: {
    duration: string;
    durationHighlighted?: boolean;
    description: string;
  };
  aiAutomation: {
    title: string;
    tagline?: string;
    description: string;
    /** Specific icon to show. Pass `null` for an empty circle, omit for the default AI-brain image. */
    icon?: CurriculumIconName | null;
  };
  mentorship: {
    title: string;
    description: string;
    icon?: CurriculumIconName;
  };
  liveLabs: {
    title: string;
    description: string;
    descriptionHighlighted?: boolean;
    icon?: CurriculumIconName;
  };
};

export default function CourseHighlightCard({
  eyebrow,
  heading,
  subheading,
  courseDetails,
  aiAutomation,
  mentorship,
  liveLabs,
}: CourseHighlightCardProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#F2D6D6] bg-[#FAFAFA]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(242,214,214,0.6) 0%, rgba(242,214,214,0) 55%)",
        }}
      />
      <div className="relative mx-auto max-w-[1536px] px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        {eyebrow && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#F00012] px-3 py-1.5 text-xs font-bold uppercase tracking-[1.2px] text-[#F00012]">
            <span className="size-1.5 shrink-0 rounded-full bg-[#F00012]" />
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-[-0.9px] text-[#050505] lg:text-[36px] lg:leading-[40px]">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-[#555] lg:text-[16px] lg:leading-[24px]">
          {subheading}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="group flex flex-col items-center justify-center rounded-2xl border border-[#F2D6D6] bg-white px-6 py-10 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F00012]/40 hover:shadow-xl hover:shadow-black/5 lg:p-[33px]">
            <span className="flex size-16 items-center justify-center rounded-full border border-[#F2D6D6] transition-transform duration-300 ease-out group-hover:scale-110">
              <Image
                src={assetPath("/TrainingTracks/course-details-icon.png")}
                alt=""
                width={32}
                height={32}
              />
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-[-0.5px] text-[#050505] lg:text-[20px]">
              Course Details
            </h3>
            <p
              className={`mt-3 text-sm font-medium ${
                courseDetails.durationHighlighted
                  ? "font-bold uppercase tracking-[0.5px] text-[#F00012]"
                  : "text-[#050505]"
              }`}
            >
              {courseDetails.duration}
            </p>
            <p className="mt-1 text-sm font-medium text-[#050505]">
              {courseDetails.description}
            </p>
          </div>

          <div className="group flex flex-col items-center justify-center rounded-2xl border border-[#F2D6D6] bg-white px-6 py-10 text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F00012]/40 hover:shadow-xl hover:shadow-black/5 lg:p-[33px]">
            <span className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-[#F2D6D6] transition-transform duration-300 ease-out group-hover:scale-110">
              {aiAutomation.icon === undefined ? (
                <Image
                  src={assetPath("/TrainingTracks/ai-brain-icon.jpg")}
                  alt=""
                  width={40}
                  height={40}
                />
              ) : (
                aiAutomation.icon && (
                  <CurriculumIcon
                    name={aiAutomation.icon}
                    className="size-8 text-[#F00012]"
                  />
                )
              )}
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-[-0.5px] text-[#050505] lg:text-[20px]">
              {aiAutomation.title}
            </h3>
            {aiAutomation.tagline && (
              <p className="mt-3 text-sm font-medium text-[#050505]">
                {aiAutomation.tagline}
              </p>
            )}
            <p
              className={`text-sm font-medium text-[#050505] ${
                aiAutomation.tagline ? "mt-1" : "mt-3"
              }`}
            >
              {aiAutomation.description}
            </p>
          </div>

          <div className="group flex items-start gap-4 rounded-2xl border border-[#F2D6D6] bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F00012]/40 hover:shadow-xl hover:shadow-black/5 lg:col-span-2 lg:p-[25px]">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#F2D6D6] transition-transform duration-300 ease-out group-hover:scale-110">
              {mentorship.icon && (
                <CurriculumIcon
                  name={mentorship.icon}
                  className="size-6 text-[#F00012]"
                />
              )}
            </span>
            <div>
              <h4 className="text-base text-[#050505] lg:text-[16px]">
                {mentorship.title}
              </h4>
              <p className="mt-1 text-sm leading-[22.75px] text-[#050505]">
                {mentorship.description}
              </p>
            </div>
          </div>

          <div className="group flex items-start gap-4 rounded-2xl border border-[#F2D6D6] bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F00012]/40 hover:shadow-xl hover:shadow-black/5 lg:col-span-2 lg:p-[25px]">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-[#F2D6D6] transition-transform duration-300 ease-out group-hover:scale-110">
              {liveLabs.icon && (
                <CurriculumIcon
                  name={liveLabs.icon}
                  className="size-6 text-[#F00012]"
                />
              )}
            </span>
            <div>
              <h4 className="text-base text-[#050505] lg:text-[16px]">
                {liveLabs.title}
              </h4>
              <p
                className={`mt-1 text-sm font-medium leading-5 ${
                  liveLabs.descriptionHighlighted
                    ? "text-[#F00012]"
                    : "text-[#050505]"
                }`}
              >
                {liveLabs.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
