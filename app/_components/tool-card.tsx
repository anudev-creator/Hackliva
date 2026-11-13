import Image, { type StaticImageData } from "next/image";

export type Tool = {
  name: string;
  /** One-line use case; ellipsized when it doesn't fit. */
  description: string;
  icon: {
    /** Classes for the 44px icon tile (background, border, padding). */
    box: string;
    /** Logo and its classes inside the tile; omit for a tile without a logo. */
    image?: { src: StaticImageData; className: string };
    /** The MCP tile shows a tilted white square instead of a logo. */
    mark?: "tilted-square";
  };
};

/** Tool tile from the Figma "Master the tools" grid (74px tall, 44px icon). */
export function ToolCard({ name, description, icon }: Tool) {
  return (
    <div className="flex h-[74px] min-w-0 items-center gap-3.5 rounded-xl border border-white/[0.07] bg-[linear-gradient(162.49deg,rgba(34,27,56,0.95)_0%,rgba(34,27,56,0)_100%)] p-3.5">
      <span
        className={`relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg ${icon.box}`}
      >
        {icon.image && <Image src={icon.image.src} alt="" className={icon.image.className} />}
        {icon.mark === "tilted-square" && (
          <span className="size-4 rotate-12 rounded-[2px] bg-white/90" />
        )}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm leading-5 font-semibold text-white">{name}</span>
        <span className="block truncate text-xs leading-4 text-[#9ca3af]">{description}</span>
      </span>
    </div>
  );
}
