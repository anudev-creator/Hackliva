import type { NextConfig } from "next";

// The site is served from https://anudev-creator.github.io/hackliva_website_v1/,
// so production builds live under a sub-path. Dev stays at "/".
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? "/hackliva_website_v1" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Static export has no image optimizer. next/image does not add basePath to
  // public/ files itself, so image src values go through assetPath().
  images: { unoptimized: true },
};

export default nextConfig;
