/**
 * Google Material Symbols (Outlined), loaded from Google Fonts.
 * Only the icons listed here are downloaded, so add a name here before using it.
 */
const ICON_NAMES = [
  "analytics",
  "arrow_back",
  "arrow_forward",
  "arrow_outward",
  "arrow_upward",
  "calendar_today",
  "cancel",
  "check_circle",
  "chevron_left",
  "chevron_right",
  "code",
  "database",
  "desktop_windows",
  "gpp_good",
  "language",
  "lock_open",
  "notifications",
  "paid",
  "person",
  "person_search",
  "schedule",
  "school",
  "smart_toy",
  "support",
  "sync",
  "terminal",
  "trending_up",
  "verified",
  "work",
] as const;

export type MaterialSymbolName = (typeof ICON_NAMES)[number];

// Google Fonts requires `icon_names` in alphabetical order.
const STYLESHEET_URL =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" +
  `&icon_names=${[...ICON_NAMES].sort().join(",")}&display=block`;

type MaterialSymbolProps = {
  name: MaterialSymbolName;
  /** Rendered size in pixels. */
  size?: number;
  className?: string;
};

export function MaterialSymbol({
  name,
  size = 24,
  className = "",
}: MaterialSymbolProps) {
  return (
    <>
      {/* React hoists this into <head> once, however many icons render. */}
      <link rel="stylesheet" href={STYLESHEET_URL} precedence="default" />
      <span
        aria-hidden="true"
        className={`material-symbols-outlined select-none ${className}`}
        // Inline so it wins over the size set by Google's stylesheet.
        style={{ fontSize: size }}
      >
        {name}
      </span>
    </>
  );
}
