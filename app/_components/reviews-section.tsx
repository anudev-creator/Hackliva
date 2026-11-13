import { ReviewCard, StarIcon, type Review } from "./review-card";
import { ReviewsCarousel } from "./reviews-carousel";

export type ReviewsSectionProps = {
  title: string;
  /** Overall rating line, e.g. { score: "4.5/5", source: "Trustpilot", note: "Based on 3,987 reviews" }. */
  summary?: { score: string; source: string; note?: string };
  /** Shown beside the cards; use "\n" for line breaks. */
  intro: string;
  reviews: Review[];
  id?: string;
};

export function ReviewsSection({
  title,
  summary,
  intro,
  reviews,
  id = "reviews",
}: ReviewsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="bg-[#f9f9f9] py-16 sm:py-24">
      <div data-reveal className="px-5 text-center sm:px-10">
        <h2
          id={headingId}
          className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        {summary && (
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm">
            <span className="font-semibold text-zinc-900">{summary.score}</span>
            <StarIcon className="size-4 text-zinc-900" />
            <span className="font-semibold text-zinc-900">{summary.source}</span>
            {summary.note && <span className="text-zinc-500">{summary.note}</span>}
          </p>
        )}
      </div>

      <div data-reveal className="mt-12 sm:mt-16">
        <ReviewsCarousel
          label={title}
          intro={
            <p className="text-2xl leading-tight font-bold tracking-tight whitespace-pre-line text-zinc-950 sm:text-3xl">
              {intro}
            </p>
          }
        >
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </ReviewsCarousel>
      </div>
    </section>
  );
}
