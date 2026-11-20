"use client";

import { useEffect, useState } from "react";
import { fetchPublic } from "../_lib/admin-api";
import type { Review } from "./review-card";
import { ReviewsSection, type ReviewsSectionProps } from "./reviews-section";

type ApiReview = { name: string; rating: number; text: string; createdAt: string };

function isApiReview(r: unknown): r is ApiReview {
  if (!r || typeof r !== "object") return false;
  const o = r as Record<string, unknown>;
  return (
    typeof o.name === "string" &&
    typeof o.text === "string" &&
    typeof o.createdAt === "string" &&
    typeof o.rating === "number" &&
    o.rating >= 1 &&
    o.rating <= 5
  );
}

const relative = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

function timeAgo(iso: string) {
  const seconds = Math.round((new Date(iso).getTime() - Date.now()) / 1000);
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["week", 604800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];
  for (const [unit, size] of units) {
    if (Math.abs(seconds) >= size) return relative.format(Math.round(seconds / size), unit);
  }
  return "just now";
}

/**
 * Shows the static reviews first, then replaces them with the reviews published in the admin
 * panel. If none are published the section is hidden; if the API is unreachable the static ones stay.
 */
export function LiveReviewsSection(props: ReviewsSectionProps) {
  const [live, setLive] = useState<ApiReview[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchPublic("reviews", controller.signal).then((data) => {
      const list = (data as { reviews?: unknown } | null)?.reviews;
      if (Array.isArray(list) && list.every(isApiReview)) setLive(list);
    });
    return () => controller.abort();
  }, []);

  if (!live) return <ReviewsSection {...props} />;
  if (live.length === 0) return null;

  const average = live.reduce((sum, r) => sum + r.rating, 0) / live.length;
  const reviews: Review[] = live.map((r) => ({
    name: r.name,
    when: timeAgo(r.createdAt),
    rating: r.rating,
    text: r.text,
  }));
  return (
    <ReviewsSection
      {...props}
      reviews={reviews}
      summary={{
        score: `${average.toFixed(1)}/5`,
        source: "Hackliva students",
        note: `Based on ${live.length} ${live.length === 1 ? "review" : "reviews"}`,
      }}
    />
  );
}
