"use client";

import { useEffect, useState } from "react";
import caseStudyImage from "../_assets/innovation/case-study.jpg";
import expertLedImage from "../_assets/innovation/expert-led.jpg";
import labSessionImage from "../_assets/innovation/lab-session.jpg";
import { fetchPublic } from "../_lib/admin-api";
import { InnovationSection, type InnovationCard, type InnovationSectionProps } from "./innovation-section";

type ApiPost = {
  brand: string;
  text: string;
  kind: "VIDEO" | "CASE_STUDY" | "IMAGE";
  ctaLabel: string | null;
  linkUrl: string;
  imageUrl: string | null;
  imageFallbackUrl?: string | null;
};

const isWebUrl = (v: unknown): v is string => typeof v === "string" && /^https?:\/\//i.test(v);

function isApiPost(p: unknown): p is ApiPost {
  if (!p || typeof p !== "object") return false;
  const o = p as Record<string, unknown>;
  return (
    typeof o.brand === "string" &&
    typeof o.text === "string" &&
    (o.kind === "VIDEO" || o.kind === "CASE_STUDY" || o.kind === "IMAGE") &&
    (o.ctaLabel === null || typeof o.ctaLabel === "string") &&
    isWebUrl(o.linkUrl) &&
    (o.imageUrl === null || isWebUrl(o.imageUrl)) &&
    (o.imageFallbackUrl == null || isWebUrl(o.imageFallbackUrl))
  );
}

// Photos used when a post has no image of its own, alternating so cards don't all look alike.
const fallbackImages = [labSessionImage, caseStudyImage, expertLedImage];

/**
 * Renders the default cards at once (the site is a static export), then swaps in the posts
 * published in the admin panel. With none published, or the API unreachable, the defaults stay.
 */
export function LiveInnovationSection(props: InnovationSectionProps) {
  const [cards, setCards] = useState<InnovationCard[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchPublic("blog", controller.signal).then((data) => {
      const list = (data as { posts?: unknown } | null)?.posts;
      if (!Array.isArray(list) || list.length === 0 || !list.every(isApiPost)) return;
      setCards(
        list.map((post, i) => ({
          brand: post.brand,
          text: post.text,
          kind: post.kind === "VIDEO" ? "video" : post.kind === "IMAGE" ? "image" : "case-study",
          cta: post.ctaLabel || (post.kind === "VIDEO" ? "Watch the video" : post.kind === "IMAGE" ? "View image" : "Read Case Study"),
          href: post.linkUrl,
          image: post.imageUrl ?? fallbackImages[i % fallbackImages.length],
          imageFallback: post.imageFallbackUrl ?? undefined,
        })),
      );
    });
    return () => controller.abort();
  }, []);

  return <InnovationSection {...props} cards={cards ?? props.cards} />;
}
