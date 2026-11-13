import Image, { type StaticImageData } from "next/image";

export type Service = {
  title: string;
  description: string;
  /** Decorative photo; the title carries the meaning. */
  image: StaticImageData;
};

type ServiceCardProps = Service & {
  /** Position in the list, shown as "Service 01". */
  number: number;
};

/** Dark card: text on the left, photo in an inset rounded frame on the right (stacked on phones). */
export function ServiceCard({ number, title, description, image }: ServiceCardProps) {
  return (
    <article className="grid min-h-[22rem] gap-8 rounded-3xl border border-white/10 bg-[#16181d] p-7 sm:p-10 md:grid-cols-2 md:items-stretch">
      <div className="flex flex-col justify-center">
        <p className="font-mono text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
          Service {String(number).padStart(2, "0")}
        </p>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-white/60">
          {description}
        </p>
      </div>
      <div className="relative min-h-40 overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={image}
          alt=""
          fill
          placeholder="blur"
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
