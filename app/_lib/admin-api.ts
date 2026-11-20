/**
 * Base URL of the admin_penal API (no trailing slash), e.g. http://localhost:3001.
 * Inlined at build time. When empty, the site uses its static content and the
 * contact form reports that it is not connected.
 */
export const ADMIN_API_URL = (process.env.NEXT_PUBLIC_ADMIN_API_URL ?? "").replace(/\/+$/, "");

// Only noisy while developing; production visitors never see these.
function warn(message: string) {
  if (process.env.NODE_ENV !== "production") console.warn(`[admin API] ${message}`);
}

/** GET JSON from the public API; resolves to null on any failure so callers can keep their static fallback. */
export async function fetchPublic(path: string, signal?: AbortSignal): Promise<unknown | null> {
  if (!ADMIN_API_URL) {
    warn("NEXT_PUBLIC_ADMIN_API_URL is not set (see Hackliva/.env.local); restart `npm run dev` after adding it. Showing the default content.");
    return null;
  }
  const url = `${ADMIN_API_URL}/api/public/${path}`;
  try {
    const res = await fetch(url, { signal });
    if (!res.ok) {
      warn(`${url} answered ${res.status}; showing the default content.`);
      return null;
    }
    return await res.json();
  } catch (error) {
    if ((error as Error)?.name !== "AbortError") {
      warn(
        `Could not reach ${url} (${(error as Error)?.message}). Is the admin running, and is this page's address (${location.origin}) listed in the admin's ALLOWED_ORIGINS? Showing the default content.`,
      );
    }
    return null;
  }
}
