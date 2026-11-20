"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: StaticImageData | string;
  /** Used if `src` fails to load (e.g. YouTube has no HD thumbnail for a video). */
  fallback?: string;
};

// YouTube answers a missing HD thumbnail with a tiny grey placeholder (120px wide), not an error.
const PLACEHOLDER_WIDTH = 120;

export function InnovationCardImage({ src, fallback }: Props) {
  const [current, setCurrent] = useState(src);
  const ref = useRef<HTMLImageElement>(null);

  // Uses the browser's own load/error events on the element (rather than the framework's
  // callbacks), and also checks an image that finished loading before this effect ran.
  useEffect(() => {
    const img = ref.current;
    if (!img || !fallback || current === fallback) return;

    const switchToBackup = () => setCurrent(fallback);
    const checkLoaded = () => {
      if (img.complete && img.naturalWidth > 0 && img.naturalWidth <= PLACEHOLDER_WIDTH) switchToBackup();
    };

    img.addEventListener("load", checkLoaded);
    img.addEventListener("error", switchToBackup);
    checkLoaded();
    return () => {
      img.removeEventListener("load", checkLoaded);
      img.removeEventListener("error", switchToBackup);
    };
  }, [current, fallback]);

  return (
    <Image
      ref={ref}
      src={current}
      alt=""
      fill
      sizes="(min-width: 1024px) 390px, 85vw"
      className="object-cover"
    />
  );
}
