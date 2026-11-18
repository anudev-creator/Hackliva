import { BenefitsSection } from "../../_components/benefits-section";
import { additionalBenefits } from "../../_data/benefits";
import { courseBenefits } from "../../_data/course-benefits";

/** "Additional Benefits" for the current course: its own layout when it has one, otherwise the default. */
export async function CourseBenefitsSection({
  params,
}: {
  params: PageProps<"/courses/[slug]">["params"];
}) {
  const benefits = courseBenefits[(await params).slug] ?? additionalBenefits;
  return <BenefitsSection {...benefits} />;
}
