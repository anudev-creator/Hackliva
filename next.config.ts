import type { NextConfig } from "next";

// Deployed as a static site to GitHub Pages under /<repo>. The deploy workflow
// passes NEXT_PUBLIC_BASE_PATH; production builds fall back to "/Hackliva".
// Dev stays at "/".
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/Hackliva" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Static export has no image optimizer.
  images: { unoptimized: true },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  // cacheComponents / partialPrefetching are off: PPR cannot run in export mode.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
