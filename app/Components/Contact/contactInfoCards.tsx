import Link from "next/link";

export type ContactInfoCardsProps = {
  headquarters: { title: string; location: string };
  sales: { title: string; email: string };
  hr: { title: string; phone: string; email: string };
  recruitment: { title: string; buttonLabel: string; href: string };
  callCard: {
    label: string;
    text: string;
    buttonLabel: string;
    href: string;
  };
};

function Arrow() {
  return (
    <svg viewBox="0 0 8 8" fill="none" aria-hidden="true" className="size-2">
      <path
        d="M1 7 7 1M7 1H2M7 1v5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const blockTitle = "text-sm font-bold text-[#050505]";
const blockText = "text-sm leading-5 text-[#555]";
const blockLink =
  "text-sm leading-5 text-[#F00012] transition-colors duration-300 hover:text-[#D2000F]";

export default function ContactInfoCards({
  headquarters,
  sales,
  hr,
  recruitment,
  callCard,
}: ContactInfoCardsProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 rounded-2xl border border-[#F2D6D6] bg-white p-8">
        <div className="border-b border-[#F2D6D6] pb-8">
          <h3 className={blockTitle}>{headquarters.title}</h3>
          <p className={`mt-2 ${blockText}`}>{headquarters.location}</p>
        </div>

        <div className="border-b border-[#F2D6D6] pb-8">
          <h3 className={blockTitle}>{sales.title}</h3>
          <Link
            href={`mailto:${sales.email}`}
            className={`mt-2 inline-block ${blockLink}`}
          >
            {sales.email}
          </Link>
        </div>

        <div className="border-b border-[#F2D6D6] pb-8">
          <h3 className={blockTitle}>{hr.title}</h3>
          <Link
            href={`tel:${hr.phone.replace(/\s/g, "")}`}
            className={`mt-2 block ${blockText} transition-colors duration-300 hover:text-[#050505]`}
          >
            {hr.phone}
          </Link>
          <Link
            href={`mailto:${hr.email}`}
            className={`mt-2 inline-block ${blockLink}`}
          >
            {hr.email}
          </Link>
        </div>

        <div>
          <h3 className={blockTitle}>{recruitment.title}</h3>
          <Link
            href={recruitment.href}
            className="mt-4 flex h-[38px] w-full items-center justify-center gap-3 rounded-lg border border-[#F2D6D6] text-sm font-medium text-[#050505] transition-colors duration-300 hover:border-[#F00012] hover:text-[#F00012]"
          >
            {recruitment.buttonLabel}
            <Arrow />
          </Link>
        </div>
      </div>

      <div className="rounded-2xl bg-[#DF0A16] p-8 text-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]">
        <p className="text-xs font-bold uppercase tracking-[1.2px] text-white/80">
          {callCard.label}
        </p>
        <p className="mt-3 text-lg font-bold leading-[30px]">{callCard.text}</p>
        <Link
          href={callCard.href}
          className="mt-8 flex h-[46px] w-full items-center justify-center gap-3 rounded-lg bg-white text-sm font-bold text-[#DF0A16] transition-colors duration-300 hover:bg-white/90"
        >
          {callCard.buttonLabel}
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
