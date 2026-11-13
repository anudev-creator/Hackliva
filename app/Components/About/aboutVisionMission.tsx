export type AboutVisionMissionCard = {
  label: string;
  title: string;
  description: string;
};

export type AboutVisionMissionProps = {
  heading: string;
  cards: AboutVisionMissionCard[];
};

export default function AboutVisionMission({
  heading,
  cards,
}: AboutVisionMissionProps) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-extrabold tracking-[-0.9px] text-[#171717] lg:text-[36px] lg:leading-[40px]">
        {heading}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-[rgba(229,229,229,0.9)] bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)] lg:p-[33px]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.6px] text-[#DF0A16]">
              {card.label}
            </p>
            <h3 className="mt-3 text-xl font-bold tracking-[-0.6px] text-[#171717] lg:text-[24px] lg:leading-[33px]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-[22.75px] text-[#525252]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
