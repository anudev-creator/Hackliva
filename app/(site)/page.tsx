import { CertificationsSection } from "../_components/certifications-section";
import { HeroBackdrop } from "../_components/hero-backdrop";
import { LiveInnovationSection } from "../_components/live-innovation-section";
import { LiveBatchesSection } from "../_components/live-batches-section";
import { LiveReviewsSection } from "../_components/live-reviews-section";
import { ComparisonSection } from "../_components/comparison-section";
import { CtaBanner } from "../_components/cta-banner";
import { CurriculumSection } from "../_components/curriculum-section";
import { SkillsSection } from "../_components/skills-section";
import { aiRedTeamingCurriculum } from "../_data/ai-red-teaming-curriculum";
import { upcomingBatches } from "../_data/batches";
import { offensiveSecurityCertifications } from "../_data/certifications";
import { cyberSecurityInnovation } from "../_data/innovation";
import { customerReviews } from "../_data/reviews";
import { skillsYouWillMaster } from "../_data/skills";
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
      <div className="relative isolate">
        <HeroBackdrop />
        <HeroSection />
        <OfferingsSection />
      </div>
      <CurriculumSection {...aiRedTeamingCurriculum} />
      <CertificationsSection {...offensiveSecurityCertifications} />
      <LiveBatchesSection {...upcomingBatches} />
      <ComparisonSection {...whyHacklivaComparison}>
        <CtaBanner {...placementAssistanceCta} />
      </ComparisonSection>
      <WhatWeDoSection />
      <SkillsSection {...skillsYouWillMaster} />
      <LiveInnovationSection {...cyberSecurityInnovation} />
      <LiveReviewsSection {...customerReviews} />
    </main>
  );
}
