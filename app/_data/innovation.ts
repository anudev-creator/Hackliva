import expertLed from "../_assets/innovation/expert-led.jpg";
import labSession from "../_assets/innovation/lab-session.jpg";
import caseStudy from "../_assets/innovation/case-study.jpg";
import type { InnovationSectionProps } from "../_components/innovation-section";

const text = "provides cybersecurity professionals with the key skills to protect organizations.";

export const cyberSecurityInnovation: InnovationSectionProps = {
  id: "innovation",
  title: "Cyber Security Innovation at",
  highlight: "Hackliva",
  cards: [
    { brand: "Hackliva Academy", text, kind: "video", cta: "Watch the video", href: "#", image: labSession },
    { brand: "Hackliva Academy", text, kind: "case-study", cta: "Read Case Study", href: "#", image: caseStudy },
    { brand: "Hackliva Academy", text, kind: "video", cta: "Watch the video", href: "#", image: expertLed },
  ],
};
