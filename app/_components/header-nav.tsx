"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { NavLink } from "./nav-links";
import { ScrollLink } from "./scroll-link";

/** The id a link like "/#certifications" points at on the home page, or null. */
const sectionOf = (href: string) => (href.startsWith("/#") ? href.slice(2) : null);

/** Move an indicator element onto a link's box. */
function place(indicator: HTMLElement, link: HTMLElement, inset = 0) {
  indicator.style.width = `${link.offsetWidth - inset * 2}px`;
  indicator.style.transform = `translate3d(${link.offsetLeft + inset}px, ${link.offsetTop}px, 0)`;
}

/**
 * Desktop menu. A soft pill glides between links as you hover them, and a red underline
 * follows the section you're reading (for links that point at a part of the home page).
 */
export function HeaderNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const list = useRef<HTMLUListElement>(null);
  const pill = useRef<HTMLSpanElement>(null);
  const underline = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const linkFor = useCallback(
    (href: string) => list.current?.querySelector<HTMLElement>(`a[data-href="${href}"]`) ?? null,
    [],
  );

  // Scroll-spy: the link whose section crosses a line 40% down the screen is "current".
  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }
    const targets = links.flatMap((link) => {
      const id = sectionOf(link.href);
      return id ? [{ href: link.href, id }] : [];
    });
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      const hit = targets.find(({ id }) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect ? rect.top <= line && rect.bottom > line : false;
      });
      setActive(hit?.href ?? null);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname, links]);

  // Park the underline under the current link (and re-fit it when the window resizes).
  useLayoutEffect(() => {
    const bar = underline.current;
    if (!bar) return;
    const fit = () => {
      const link = active ? linkFor(active) : null;
      if (!link) {
        bar.style.opacity = "0";
        return;
      }
      // The first placement jumps into position; later ones glide.
      if (!bar.dataset.ready) {
        bar.style.transition = "none";
        place(bar, link, 12);
        void bar.offsetWidth;
        bar.style.transition = "";
        bar.dataset.ready = "1";
      } else {
        place(bar, link, 12);
      }
      bar.style.opacity = "1";
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [active, linkFor]);

  const showPill = (link: HTMLElement) => {
    const el = pill.current;
    if (!el) return;
    if (!el.dataset.ready) {
      el.style.transition = "opacity 150ms";
      place(el, link);
      el.dataset.ready = "1";
      void el.offsetWidth;
      el.style.transition = "";
    } else {
      place(el, link);
    }
    el.style.opacity = "1";
  };
  const hidePill = () => {
    if (pill.current) pill.current.style.opacity = "0";
    if (pill.current) delete pill.current.dataset.ready;
  };

  return (
    <ul
      ref={list}
      onPointerLeave={hidePill}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) hidePill();
      }}
      className="relative flex items-center gap-1 text-[15px]"
    >
      <span
        ref={pill}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full rounded-full bg-brand/8 opacity-0 transition-[transform,width,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
      />
      <span
        ref={underline}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 mt-[33px] h-0.5 rounded-full bg-brand opacity-0 transition-[transform,width,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
      />
      {links.map((link, index) => (
        <li key={link.href} className="header-item" style={{ "--i": index } as React.CSSProperties}>
          <ScrollLink
            href={link.href}
            data-href={link.href}
            aria-current={active === link.href ? "location" : undefined}
            onPointerEnter={(event) => showPill(event.currentTarget)}
            onFocus={(event) => showPill(event.currentTarget)}
            className={`relative block rounded-full px-3 py-2 transition-colors duration-200 ${
              link.featured
                ? "font-medium text-brand-navy hover:text-brand"
                : active === link.href
                  ? "text-brand"
                  : "text-zinc-900 hover:text-brand"
            }`}
          >
            {link.label}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}
