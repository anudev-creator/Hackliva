import Image from "next/image";
import discord from "../_assets/footer/discord.svg";
import github from "../_assets/footer/github.svg";
import telegram from "../_assets/footer/telegram.svg";
import youtube from "../_assets/footer/youtube.svg";

// 16px marks exported from the Figma footer.
const marks = { github, discord, telegram, youtube };

export type SocialNetwork = "linkedin" | "x" | keyof typeof marks;

// X logo from Simple Icons (https://simpleicons.org, CC0).
const X_PATH =
  "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z";

/** Small brand mark for the footer's social links. */
export function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "linkedin") {
    return (
      <span
        aria-hidden="true"
        className="flex size-4 shrink-0 items-center justify-center rounded-[4px] bg-[#0f172a] font-jakarta text-[10px] leading-4 font-bold text-white"
      >
        in
      </span>
    );
  }
  if (network === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-3.5 shrink-0 text-[#0f172a]">
        <path d={X_PATH} />
      </svg>
    );
  }
  return <Image src={marks[network]} alt="" unoptimized className="shrink-0" />;
}
