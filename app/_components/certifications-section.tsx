import type { ReactNode } from "react";
import { Carousel } from "./carousel";
import { CertificationCard, type Certification } from "./certification-card";

export type CertificationsSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  certifications: Certification[];
  id?: string;
};

export function CertificationsSection({
  title,
  description,
  certifications,
  id = "certifications",
}: CertificationsSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="bg-zinc-50 py-16 sm:py-24"
    >
      <Carousel
        label="Certifications"
        header={
          <div data-reveal className="text-center">
            <h2
              id={headingId}
              className="text-2xl leading-tight font-extrabold tracking-tight text-balance text-zinc-950 uppercase sm:text-3xl lg:text-[2.125rem]"
            >
              {title}
            </h2>
            {description && (
              <p className="mx-auto mt-3 max-w-[42rem] text-sm leading-relaxed text-[#4b4b4b]">
                {description}
              </p>
            )}
          </div>
        }
      >
        {certifications.map((certification) => (
          <CertificationCard key={certification.code} {...certification} />
        ))}
      </Carousel>
    </section>
  );
}
