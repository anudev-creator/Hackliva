import Image from "next/image";
import { assetPath } from "@/app/lib/paths";

export type CourseHighlightCardProps = {
  heading: string;
  subheading: string;
  courseDetails: {
    duration: string;
    description: string;
  };
  aiAutomation: {
    title: string;
    tagline: string;
    description: string;
  };
  mentorship: {
    title: string;
    description: string;
  };
  liveLabs: {
    title: string;
    description: string;
  };
};

export default function CourseHighlightCard({
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
      <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <h2 className="text-2xl font-bold tracking-[-0.9px] text-[#050505] lg:text-[36px] lg:leading-[40px]">
          {heading}
        </h2>
        <p className="mt-2 text-sm text-[#555] lg:text-[16px] lg:leading-[24px]">
          {subheading}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#F2D6D6] bg-white px-6 py-10 text-center lg:p-[33px]">
            <span className="flex size-16 items-center justify-center rounded-full border border-[#F2D6D6]">
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
            <p className="mt-3 text-sm font-medium text-[#050505]">
              {courseDetails.duration}
            </p>
            <p className="mt-1 text-sm font-medium text-[#050505]">
              {courseDetails.description}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-[#F2D6D6] bg-white px-6 py-10 text-center lg:p-[33px]">
            <span className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-[#F2D6D6]">
              <Image
                src={assetPath("/TrainingTracks/ai-brain-icon.jpg")}
                alt=""
                width={40}
                height={40}
              />
            </span>
            <h3 className="mt-4 text-lg font-bold tracking-[-0.5px] text-[#050505] lg:text-[20px]">
              {aiAutomation.title}
            </h3>
            <p className="mt-3 text-sm font-medium text-[#050505]">
              {aiAutomation.tagline}
            </p>
            <p className="mt-1 text-sm font-medium text-[#050505]">
              {aiAutomation.description}
            </p>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[#F2D6D6] bg-white p-6 lg:col-span-2 lg:p-[25px]">
            <Image
              src={assetPath("/TrainingTracks/mentor-icon.svg")}
              alt=""
              width={18}
              height={25}
              className="mt-0.5 shrink-0"
            />
            <div>
              <h4 className="text-base text-[#050505] lg:text-[16px]">
                {mentorship.title}
              </h4>
              <p className="mt-1 text-sm leading-[22.75px] text-[#050505]">
                {mentorship.description}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[#F2D6D6] bg-white p-6 lg:col-span-2 lg:p-[25px]">
            <Image
              src={assetPath("/TrainingTracks/labs-icon.svg")}
              alt=""
              width={19}
              height={25}
              className="mt-0.5 shrink-0"
            />
            <div>
              <h4 className="text-base text-[#050505] lg:text-[16px]">
                {liveLabs.title}
              </h4>
              <p className="mt-1 text-sm font-medium leading-5 text-[#050505]">
                {liveLabs.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
