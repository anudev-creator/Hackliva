export type AiInsightCardProps = {
  title: string;
  description: string;
};

export default function AiInsightCard({
  title,
  description,
}: AiInsightCardProps) {
  return (
    <div className="h-full rounded-xl border border-[#F2D6D6] bg-white py-6 pr-6">
      <div className="h-full border-l-[3px] border-[#F00012] pl-6">
        <h3 className="text-base font-bold text-[#0A0A0A] lg:text-[17px]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-5 text-[#555555] lg:text-[14px] lg:leading-[21px]">
          {description}
        </p>
      </div>
    </div>
  );
}
