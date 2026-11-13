import { ToolCard, type Tool } from "./tool-card";

export type ToolGroup = {
  title: string;
  tools: Tool[];
};

export type ToolsSectionProps = {
  /** Use "\n" for the design's line breaks (applied from lg up). */
  title: string;
  description?: string;
  groups: ToolGroup[];
  id?: string;
};

/** Dark rounded panel (Figma 425:2694) with a centered heading and one glass card of tools per group. */
export function ToolsSection({ title, description, groups, id = "tools" }: ToolsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-white px-5 pt-10 font-jakarta sm:px-8 lg:pt-[58px]"
    >
      <div className="relative mx-auto max-w-[1216px] overflow-clip rounded-[32px] border border-white/20 bg-[#080512] px-5 py-14 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:px-12 lg:py-20">
        {/* Soft glows from the design: warm in the top-right corner, violet behind the heading. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 size-[480px] blur-[40px]"
          style={{
            backgroundImage:
              "radial-gradient(678.82px circle at 100% 0%, rgba(234,179,8,0.14) 0px, rgba(201,132,128,0.11) 118.8px, rgba(168,85,247,0.08) 237.6px, rgba(168,85,247,0) 475.2px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[52.5px] left-1/2 h-[420px] w-[750px] max-w-full -translate-x-1/2 blur-[60px]"
          style={{
            backgroundImage:
              "radial-gradient(530.33px 296.98px at 50% 50%, rgba(139,92,246,0.08) 0%, rgba(139,92,246,0) 70%)",
          }}
        />

        <div data-reveal className="relative mx-auto mb-12 flex max-w-[768px] flex-col items-center gap-[15.5px] text-center lg:mb-16">
          <h2
            id={headingId}
            className="pb-[0.69px] text-4xl font-extrabold tracking-[-1.3px] text-white sm:text-[52px] sm:leading-[59.8px] lg:whitespace-pre-line"
          >
            {title}
          </h2>
          {description && (
            <p className="text-base leading-7 text-[rgba(209,213,219,0.8)] sm:text-lg lg:whitespace-pre-line">
              {description}
            </p>
          )}
        </div>

        <div className="relative mx-auto flex max-w-[1152px] flex-col gap-10 lg:flex-row lg:items-start">
          {groups.map((group) => (
            <div
              key={group.title}
              data-reveal
              className="flex min-w-0 flex-1 flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[12px] sm:p-7"
            >
              <h3 className="border-b border-white/10 pb-4 text-lg leading-7 font-bold tracking-[-0.45px] text-white">
                {group.title}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="min-w-0">
                    <ToolCard {...tool} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
