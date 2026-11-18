"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { scrollToSection } from "./scroll";

/**
 * A link that, when it points at a section of the page you're already on ("/#certifications"),
 * glides there instead of jumping. Everywhere else it's a normal link.
 */
export function ScrollLink({ href, onClick, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || typeof href !== "string") return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

    const [path, hash] = href.split("#");
    if (!hash || (path || pathname) !== pathname) return;
    if (scrollToSection(hash)) {
      event.preventDefault();
      history.replaceState(null, "", `#${hash}`);
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
