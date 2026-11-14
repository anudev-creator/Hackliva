import { BatchesSection } from "../_components/batches-section";
import { CertificationsSection } from "../_components/certifications-section";
import { ComparisonSection } from "../_components/comparison-section";
import { CtaBanner } from "../_components/cta-banner";
import { InnovationSection } from "../_components/innovation-section";
import { ReviewsSection } from "../_components/reviews-section";
import { SkillsSection } from "../_components/skills-section";
import { ToolsSection } from "../_components/tools-section";
import { upcomingBatches } from "../_data/batches";
import { offensiveSecurityCertifications } from "../_data/certifications";
import { cyberSecurityInnovation } from "../_data/innovation";
import { customerReviews } from "../_data/reviews";
import { skillsYouWillMaster } from "../_data/skills";
import { masterTheTools } from "../_data/tools";
import {
  placementAssistanceCta,
  whyHacklivaComparison,
} from "../_data/why-hackliva";
import { HeroSection } from "../_sections/home/hero-section";
import { OfferingsSection } from "../_sections/home/offerings-section";
import { WhatWeDoSection } from "../_sections/home/what-we-do-section";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <OfferingsSection />
      <ToolsSection {...masterTheTools} className="pb-16 sm:pb-24" />
      <CertificationsSection {...offensiveSecurityCertifications} />
      <BatchesSection {...upcomingBatches} />
      <ComparisonSection {...whyHacklivaComparison}>
        <CtaBanner {...placementAssistanceCta} />
      </ComparisonSection>
      <WhatWeDoSection />
      <SkillsSection {...skillsYouWillMaster} />
      <InnovationSection {...cyberSecurityInnovation} />
      <ReviewsSection {...customerReviews} />
    </main>
  );
}
