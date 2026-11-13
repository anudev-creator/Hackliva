import Link from "next/link";

export type ConsultationAction = {
  label: string;
  href: string;
  /** "light": white button; "dark": deep red button. */
  variant: "light" | "dark";
};

export type ConsultationBannerProps = {
  title: string;
  /** Use "\n" for the design's line break (applied from lg up). */
  description?: string;
  actions: ConsultationAction[];
};

const actionStyles = {
  light: "bg-white text-[#dc2626] hover:bg-red-50",
  dark: "border border-[rgba(248,113,113,0.3)] bg-[rgba(153,27,27,0.8)] text-white hover:bg-[#991b1b]",
};

/** Wide red call-to-action card with up to two buttons (Figma 425:3288). */
export function ConsultationBanner({ title, description, actions }: ConsultationBannerProps) {
  return (
    <div
      data-reveal
      className="flex flex-col gap-8 rounded-[24px] bg-[#dc2626] px-6 py-10 font-jakarta shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] sm:p-16 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold tracking-[-0.9px] text-black sm:text-[36px] sm:leading-10">
          {title}
        </h2>
        {description && (
          <p className="text-base leading-6 text-white/90 lg:whitespace-pre-line">{description}</p>
        )}
      </div>
      <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row sm:items-center">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm leading-5 font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${actionStyles[action.variant]}`}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
