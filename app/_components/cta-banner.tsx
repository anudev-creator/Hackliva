import Link from "next/link";
import type { ReactNode } from "react";
import { MaterialSymbol, type MaterialSymbolName } from "./material-symbol";

export type CtaBannerProps = {
  title: string;
  description?: ReactNode;
  icon?: MaterialSymbolName;
  cta: { label: string; href: string };
};

/** Red call-to-action strip. Place it inside any section. */
export function CtaBanner({ title, description, icon, cta }: CtaBannerProps) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-3xl bg-brand px-6 py-8 text-white sm:flex-row sm:items-center sm:gap-8 sm:px-10 sm:py-10">
      {icon && (
        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
          <MaterialSymbol name={icon} size={34} />
        </span>
      )}
      <div className="min-w-0 flex-1">
        <h3 className="text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-3xl">
          {title}
        </h3>
        {description && (
          <p className="mt-2 max-w-[38rem] text-[15px] leading-relaxed text-white/90">
            {description}
          </p>
        )}
      </div>
      <Link
        href={cta.href}
        className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-8 text-sm font-bold tracking-wide text-brand uppercase transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
      >
        {cta.label}
        <MaterialSymbol name="arrow_forward" size={18} />
      </Link>
    </div>
  );
}
