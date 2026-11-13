import Image, { type StaticImageData } from "next/image";

export type Review = {
  name: string;
  /** When it was posted, e.g. "3 days ago". */
  when: string;
  /** Stars out of 5. */
  rating: number;
  text: string;
  /** Optional photo; initials are shown without one. */
  avatar?: StaticImageData;
};

export function ReviewCard({ name, when, rating, text, avatar }: Review) {
  return (
    <figure className="flex h-full flex-col">
      <div className="flex flex-1 flex-col rounded-2xl bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <blockquote className="flex-1 text-sm leading-relaxed text-zinc-600">
          {text}
        </blockquote>
        <StarRating rating={rating} />
      </div>
      <figcaption className="mt-5 flex items-center gap-3">
        {avatar ? (
          <Image
            src={avatar}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-white"
          >
            {initials(name)}
          </span>
        )}
        <span>
          <span className="block text-sm font-semibold text-[#484a4a]">{name}</span>
          <span className="block text-xs text-[#7f8080]">{when}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mt-6 flex gap-1" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`flex size-5 items-center justify-center rounded-[3px] ${
            star <= rating ? "bg-black" : "bg-zinc-300"
          }`}
        >
          <StarIcon className="size-3.5 text-white" />
        </span>
      ))}
    </div>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.5l2.94 6.26 6.86.75-5.12 4.63 1.43 6.76L12 17.43 5.89 20.9l1.43-6.76L2.2 9.51l6.86-.75z" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
