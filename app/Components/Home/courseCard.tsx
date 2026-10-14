import Link from "next/link";

export type CourseCardProps = {
  code: string;
  duration: string;
  title: string;
  buttonLabel: string;
  href: string;
};

export default function CourseCard({
  code,
  duration,
  title,
  buttonLabel,
  href,
}: CourseCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-[246px] w-[320px] shrink-0 flex-col overflow-hidden rounded-xl border border-[#F2D6D6] bg-white transition-colors duration-300 hover:border-[#F00012]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012]"
    >
      <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-[#F0F0F0] px-3 py-1.5 text-[10px] font-semibold uppercase text-[#F00012]">
        {duration}
      </span>
      <div className="flex h-full flex-col px-[34px] pb-[34px] pt-12">
        <p className="text-[16px] font-medium text-[#555555]">{code}</p>
        <h3 className="mt-[16px] text-[25px] font-bold leading-[30px] text-[#0A0A0A]">
          {title}
        </h3>
        <div className="mt-[31px] flex items-center justify-between">
          <span className="text-[13px] font-semibold uppercase tracking-[0.5px] text-[#555555]">
            {buttonLabel}
          </span>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="size-4 shrink-0 text-[#F00012] transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            <path
              d="M1 8h14M8 1l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
