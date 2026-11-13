import Link from "next/link";
import { MaterialSymbol, type MaterialSymbolName } from "./material-symbol";

export type ServiceTileData = {
  title: string;
  description: string;
  icon: MaterialSymbolName;
  href: string;
};

/** Compact dark service card for grids. Turns brand red on hover or keyboard focus. */
export function ServiceTile({ title, description, icon, href }: ServiceTileData) {
  return (
    <article className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-[#16181d] px-6 py-8 text-center transition-colors duration-300 focus-within:border-brand focus-within:bg-brand hover:border-brand hover:bg-brand">
      <span className="flex size-12 items-center justify-center rounded-full bg-white/10 text-brand transition-colors duration-300 group-focus-within:bg-white/15 group-focus-within:text-white group-hover:bg-white/15 group-hover:text-white">
        <MaterialSymbol name={icon} size={22} />
      </span>
      <h3 className="mt-5 text-sm font-bold tracking-wide text-white uppercase">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/60 transition-colors duration-300 group-focus-within:text-white/90 group-hover:text-white/90">
        {description}
      </p>
      <div className="mt-auto pt-6">
        <Link
          href={href}
          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-brand/50 px-4 font-mono text-[11px] text-white transition-colors duration-300 group-focus-within:border-white group-focus-within:bg-white group-focus-within:text-brand group-hover:border-white group-hover:bg-white group-hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Learn more
          <span className="sr-only"> about {title}</span>
          <MaterialSymbol name="arrow_outward" size={14} />
        </Link>
      </div>
    </article>
  );
}
