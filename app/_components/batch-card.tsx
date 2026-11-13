import Link from "next/link";
import { MaterialSymbol } from "./material-symbol";

export type Batch = {
  /** Days the batch meets, e.g. "Mon, Tue & Fri". */
  schedule: string;
  title: string;
  /** Start date as YYYY-MM-DD. */
  startDate: string;
  /** Session time range, e.g. "8:00 pm – 11:00 pm". */
  time: string;
  href: string;
};

// UTC so the calendar date never shifts with the server's time zone.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeZone: "UTC",
});

export function BatchCard({ schedule, title, startDate, time, href }: Batch) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)] sm:p-8">
      <p className="border-b border-zinc-100 pb-5 font-mono text-[11px] font-bold tracking-wide text-[#533734] uppercase">
        {schedule}
      </p>

      <h3 className="mt-7 text-2xl font-bold tracking-tight text-[#191a1a] uppercase">
        {title}
      </h3>

      <dl className="mt-7 space-y-4 rounded-xl border border-zinc-100 bg-[#f7f7f7] px-5 py-5 text-base text-[#191a1a]">
        <div className="flex items-center gap-3">
          <dt>
            <MaterialSymbol name="calendar_today" size={20} className="text-[#4b4b4b]" />
            <span className="sr-only">Starts</span>
          </dt>
          <dd>
            <time dateTime={startDate}>
              {dateFormatter.format(new Date(startDate))}
            </time>
          </dd>
        </div>
        <div className="flex items-center gap-3">
          <dt>
            <MaterialSymbol name="schedule" size={20} className="text-[#4b4b4b]" />
            <span className="sr-only">Time</span>
          </dt>
          <dd>{time}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-8">
        <div className="border-t border-zinc-100 pt-4">
          <Link
            href={href}
            className="flex h-14 items-center justify-center gap-1 rounded-xl bg-[#191a1a] text-base font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Request a Callback
            <span className="sr-only"> for the {title.toLowerCase()} batch</span>
            <MaterialSymbol name="chevron_right" size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
}
