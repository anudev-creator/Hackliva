// next/image does not prepend basePath to files served from /public, so do it here.
export function assetPath(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
