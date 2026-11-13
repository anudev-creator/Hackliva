import type { ReactNode } from "react";

/** Look of the rounded near-black panel, shared with pinned panels (e.g. StackCards). */
export const darkPanelSurface =
  "mx-auto max-w-7xl rounded-3xl bg-[#0d0e11] px-5 text-white sm:px-10 lg:px-12";

type DarkPanelSectionProps = {
  id?: string;
  /** id of the heading inside, used as the section's accessible name. */
  labelledBy?: string;
  children?: ReactNode;
};

/** White section holding a full-width, rounded near-black panel. */
export function DarkPanelSection({
  id,
  labelledBy,
  children,
}: DarkPanelSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className="bg-white px-5 py-16 sm:px-10 sm:py-24"
    >
      <div
        className={`${darkPanelSurface} py-16 sm:py-24 ${
          // Placeholder height until content is added.
          children ? "" : "min-h-[40rem]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
