import type { ReactNode } from "react";
import { MaterialSymbol } from "./material-symbol";

export type ComparisonRow = {
  feature: string;
  /** What we offer, shown with a check. */
  ours: string;
  /** What the alternative offers, shown with a cross. */
  theirs: string;
};

export type ComparisonSectionProps = {
  /** Use "\n" to force a line break. */
  title: string;
  description?: ReactNode;
  columns: { feature: string; ours: string; theirs: string };
  rows: ComparisonRow[];
  id?: string;
  /** Rendered below the table, e.g. a <CtaBanner />. */
  children?: ReactNode;
};

// Below md the table stacks into one card per row; each cell shows its
// column name (from data-label) because the header row is hidden.
const stackedCellLabel =
  "max-md:before:mb-2 max-md:before:block max-md:before:font-mono max-md:before:text-[10px] max-md:before:font-bold max-md:before:tracking-[0.12em] max-md:before:uppercase max-md:before:content-[attr(data-label)]";

export function ComparisonSection({
  title,
  description,
  columns,
  rows,
  id = "comparison",
  children,
}: ComparisonSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-white px-5 py-16 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="text-center">
          <h2
            id={headingId}
            className="text-2xl leading-tight font-extrabold tracking-tight whitespace-pre-line text-zinc-950 uppercase sm:text-3xl lg:text-[2.375rem]"
          >
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-[44rem] text-base leading-relaxed text-[#4b4b4b]">
              {description}
            </p>
          )}
        </div>

        <div data-reveal className="mt-12 overflow-hidden rounded-2xl border border-redline sm:mt-14">
          <table className="w-full border-collapse text-left max-md:block">
            <thead className="max-md:hidden">
              <tr className="bg-[#191a1a] font-mono text-xs font-bold tracking-[0.12em] uppercase">
                <th scope="col" className="w-1/4 px-6 py-5 text-white">
                  {columns.feature}
                </th>
                <th scope="col" className="w-[39%] bg-[#1f2121] px-6 py-5 text-[#ff4a57]">
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block size-1.5 -translate-y-px rounded-full bg-current align-middle"
                  />
                  {columns.ours}
                </th>
                <th scope="col" className="px-6 py-5 text-[#8a8a8a]">
                  {columns.theirs}
                </th>
              </tr>
            </thead>
            <tbody className="max-md:block">
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-t border-redline first:border-t-0 max-md:block"
                >
                  <th
                    scope="row"
                    className="px-6 py-5 text-[15px] font-semibold text-[#090909] max-md:block max-md:px-5 max-md:pt-5 max-md:pb-3 max-md:text-base max-md:font-bold"
                  >
                    {row.feature}
                  </th>
                  <td
                    data-label={columns.ours}
                    className={`border-l border-redline bg-[#faf6f6] px-6 py-5 max-md:block max-md:border-l-0 max-md:px-5 max-md:py-4 max-md:before:text-[#c40a1b] ${stackedCellLabel}`}
                  >
                    <div className="flex gap-2.5">
                      <MaterialSymbol
                        name="check_circle"
                        size={18}
                        className="mt-px shrink-0 text-[#111]"
                      />
                      <span className="text-[15px] leading-snug font-semibold text-[#090909]">
                        {row.ours}
                      </span>
                    </div>
                  </td>
                  <td
                    data-label={columns.theirs}
                    className={`border-l border-redline px-6 py-5 max-md:block max-md:border-l-0 max-md:px-5 max-md:py-4 max-md:before:text-zinc-500 ${stackedCellLabel}`}
                  >
                    <div className="flex gap-2.5">
                      <MaterialSymbol
                        name="cancel"
                        size={18}
                        className="mt-px shrink-0 text-brand"
                      />
                      <span className="text-[15px] leading-snug text-[#555]">
                        {row.theirs}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {children && <div data-reveal className="mt-14 sm:mt-20">{children}</div>}
      </div>
    </section>
  );
}
