"use client";

import { useEffect, useState } from "react";
import { fetchPublic } from "../_lib/admin-api";
import type { Batch } from "./batch-card";
import { BatchesSection, type BatchesSectionProps } from "./batches-section";

type ApiBatch = { title: string; schedule: string; startDate: string; time: string; mode: string };

function isApiBatch(b: unknown): b is ApiBatch {
  if (!b || typeof b !== "object") return false;
  const o = b as Record<string, unknown>;
  return (
    typeof o.title === "string" &&
    typeof o.schedule === "string" &&
    typeof o.time === "string" &&
    typeof o.mode === "string" &&
    typeof o.startDate === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(o.startDate)
  );
}

/**
 * Renders the static batches immediately (the site is a static export), then swaps in the
 * live batches from the admin panel. If the API is unreachable the static ones stay.
 */
export function LiveBatchesSection(props: BatchesSectionProps) {
  const [live, setLive] = useState<{ batches: Batch[]; mode?: string } | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchPublic("batches", controller.signal).then((data) => {
      const list = (data as { batches?: unknown } | null)?.batches;
      if (!Array.isArray(list) || !list.every(isApiBatch)) return;
      setLive({
        batches: list.map((b) => ({
          title: b.title,
          schedule: b.schedule,
          startDate: b.startDate,
          time: b.time,
          href: "/contact",
        })),
        mode: list[0]?.mode,
      });
    });
    return () => controller.abort();
  }, []);

  if (!live) return <BatchesSection {...props} />;
  if (live.batches.length === 0) {
    return (
      <BatchesSection
        {...props}
        batches={[]}
        description="No batch is open right now. Contact us and we will let you know when the next one starts."
      />
    );
  }
  return <BatchesSection {...props} batches={live.batches} mode={live.mode ?? props.mode} />;
}
