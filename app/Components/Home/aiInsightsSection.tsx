import AiInsightCard, { type AiInsightCardProps } from "./aiInsightCard";

export type AiInsightsSectionProps = {
  heading: string;
  description: string;
  cards: AiInsightCardProps[];
};

export default function AiInsightsSection({
  heading,
  description,
  cards,
}: AiInsightsSectionProps) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
        <h2 className="text-2xl font-extrabold text-[#0A0A0A] lg:text-[28.2px]">
          {heading}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[#555555] lg:text-[15px] lg:leading-[22px]">
          {description}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <AiInsightCard key={`${index}-${card.title}`} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
