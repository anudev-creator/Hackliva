import Image from "next/image";
import Link from "next/link";
import MenuBar from "./Components/Home/menuBar";
import HeroCard, { type HeroCardProps } from "./Components/Home/heroCard";
import CtaBanner from "./Components/Home/ctaBanner";
import TrainingTracks from "./Components/Home/trainingTracks";
import type { CourseCardProps } from "./Components/Home/courseCard";
import QuoteCallout from "./Components/Home/quoteCallout";
import AiInsightsSection from "./Components/Home/aiInsightsSection";
import type { AiInsightCardProps } from "./Components/Home/aiInsightCard";
import ProgramHighlights, {
  type ProgramHighlightsTab,
} from "./Components/Home/programHighlights";
import ServicesAccordion, {
  type ServiceAccordionItem,
} from "./Components/Home/servicesAccordion";
import ServicesOverview from "./Components/Home/servicesOverview";
import type { ServiceCardProps } from "./Components/Home/serviceCard";
import CareerSection from "./Components/Home/careerSection";
import type { CareerCardProps } from "./Components/Home/careerCard";
import FeaturedModuleCard from "./Components/Home/featuredModuleCard";
import InnovationSection from "./Components/Home/innovationSection";
import type { InnovationCardProps } from "./Components/Home/innovationCard";
import ConsultationBanner from "./Components/Home/consultationBanner";
import Footer from "./Components/Home/footer";

const heroCards: HeroCardProps[] = [
  {
    title: "Offensive Security Training and Certification",
    description:
      "Learn Ethical Hacking & Penetration Testing across web, API, cloud and applications.",
    imageSrc: "/HeroCards/Command Center.png",
    imageAlt: "Robot analysing a cybersecurity dashboard",
  },
  {
    title: "Redteaming & Compliance Solutions",
    subtitle: "Find Vulnerabilities Before Attackers Do",
    description:
      "Identify, validate and remediate security weaknesses through realistic offensive security assessments.",
    imageSrc: "/HeroCards/Course Enquiry interface.png",
    imageAlt: "Layered security shields blocking incoming network attacks",
  },
  {
    title: "Redteaming & Compliance Solutions",
    subtitle: "Find Vulnerabilities Before Attackers Do",
    description:
      "Identify, validate and remediate security weaknesses through realistic offensive security assessments.",
    imageSrc: "/HeroCards/Red Teaming Network Visualization.png",
    imageAlt: "Layered security shields blocking incoming network attacks",
  },
];

const ctaBanner = {
  description:
    "Master network fundamentals and professional recon to launch advanced exploits and pivot through complex systems like a pro.",
  buttonLabel: "View Course",
  href: "#",
};

const courses: CourseCardProps[] = [
  {
    code: "COSP AI+",
    duration: "06 Months",
    title: "Certified Offensive Security Professional + AI Red Teamer",
    buttonLabel: "View Cource",
    href: "#",
  },
  {
    code: "BHAI",
    duration: "03 Months",
    title: "Bug Hunting with AI Automation",
    buttonLabel: "View Cource",
    href: "#",
  },
  {
    code: "CCSS",
    duration: "03 Months",
    title: "Certified Container Security Specialist",
    buttonLabel: "View Cource",
    href: "#",
  },
  {
    code: "CWPTS",
    duration: "03 Months",
    title: "Certified Web Penetration Testing Specialist",
    buttonLabel: "View Cource",
    href: "#",
  },
];

const quote = {
  text: "Security is not an afterthought  it must be part of the product life cycle from day one. Learn and practice advanced exploitation Start your cyber security journey today.",
  buttonLabel: "View Syllabus",
  href: "#",
};

const aiInsightCards: AiInsightCardProps[] = [
  {
    title: "AI Red Teaming",
    description:
      "Workforce and adversary AI adoption outran security review. Models, agents, and prompts move through endpoints daily. Train to assess LLM attack surfaces, prompt injection, and jailbreaks.",
  },
  {
    title: "AI-Assisted Bug Hunting",
    description:
      "Sensitive data and logic flaws emerge in third-party AI workflows. Learn autonomous reconnaissance, automated fuzzing, and smart vulnerability triage at enterprise scale.",
  },
  {
    title: "AI Security Testing",
    description:
      "AI Agents have access, but not judgment. One poisoned tool call or indirect injection turns into unauthorized operations. Secure autonomous agentic frameworks and orchestration systems.",
  },
];

const programHighlightsTabs: ProgramHighlightsTab[] = [
  {
    label: "Structured Learning",
    cards: [
      {
        title: "Course Roadmaps",
        description:
          "Clear learning paths from beginner to advanced offensive cybersecurity.",
        icon: "map",
      },
      {
        title: "Highly Practical",
        description:
          "Learn by doing with real-world target simulations and live weaponized labs.",
        icon: "terminal",
      },
      {
        title: "AI-Powered Learning",
        description:
          "Master AI Red Teaming, automated recon, and cutting-edge security workflows.",
        icon: "cpu",
      },
    ],
  },
  {
    label: "Industry-Experienced Trainers",
    cards: [
      {
        title: "Experienced Trainers",
        description:
          "Learn from cybersecurity professionals with real-world industry experience.",
        icon: "cap",
      },
      {
        title: "Subject Matter Experts",
        description:
          "Gain insights from experts with years of domain expertise across red team disciplines.",
        icon: "shield",
      },
      {
        title: "Real-World Experience",
        description:
          "Built on real-world experience and practical knowledge sharing from offensive fronts.",
        icon: "globe",
      },
    ],
  },
  {
    label: "Mentorship & Career Support",
    cards: [
      {
        title: "Mentorship",
        description:
          "Personalized guidance to help you achieve your learning and career goals with clarity.",
        icon: "users",
      },
      {
        title: "Career Guidance",
        description:
          "Interview preparation, resume building, and placement support at top global firms.",
        icon: "briefcase",
      },
      {
        title: "Job-Ready Support",
        description:
          "Develop the skills, confidence, and validated certifications to succeed in technical rounds.",
        icon: "badge",
      },
    ],
  },
];

const serviceAccordionItems: ServiceAccordionItem[] = [
  {
    title: "The Astraliva LLP",
    points: [
      "Astraliva is a cybersecurity company delivering offensive security, compliance, and consulting services to help organizations build stronger security.",
      "We provide application security, cloud security, Red Team operations, compliance services, security assessments, and expert cybersecurity consulting.",
      "Hackliva is the training and education division of Astraliva, providing practical cybersecurity learning, mentorship, and career-focused certification programs.",
    ],
  },
  {
    title: "Red Team Operations",
    points: [
      "Simulate real-world attacks to identify security weaknesses before attackers do.",
      "Test your people, applications, networks, and cloud against realistic attack scenarios.",
      "Receive clear findings, practical recommendations, and remediation guidance to strengthen your security posture.",
    ],
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    points: [
      "Identify security vulnerabilities before they become business risks.",
      "Test your applications, APIs, cloud, network, and infrastructure using industry-standard methodologies.",
      "Receive detailed reports with risk ratings, remediation guidance, and support to strengthen your security posture.",
    ],
  },
  {
    title: "Automotive & IoT Security",
    points: [
      "Assess the security of connected devices, embedded systems, and automotive technologies.",
      "Identify vulnerabilities in firmware, hardware, communication protocols, and connected ecosystems.",
      "Strengthen device security with practical testing, risk assessments, and expert recommendations.",
    ],
  },
  {
    title: "Compliance Solutions",
    points: [
      "Support for ISO 27001, SOC 2, PCI DSS, HIPAA, and other compliance frameworks.",
      "Identify compliance gaps and receive clear remediation recommendations.",
      "Simplify your compliance journey with expert consulting and implementation support.",
    ],
  },
];

const serviceCards: ServiceCardProps[] = [
  { title: "Application Security", icon: "shield" },
  { title: "IoT Security", icon: "iot" },
  { title: "Cloud Security", icon: "cloud" },
  { title: "Critical Infrastructure", icon: "infrastructure" },
  { title: "Network Security", icon: "network" },
  { title: "Red Teaming", icon: "target", variant: "highlight-text" },
  { title: "ISO/IEC 27001", icon: "shieldCheck" },
  { title: "SOC 2 Readiness", icon: "radar" },
  { title: "GDPR Compliance", icon: "gdpr" },
  { title: "PCI-DSS", icon: "card" },
  { title: "HIPAA Compliance", icon: "medical" },
  { title: "Training && Awareness", icon: "users" },
];

const servicesHighlight = {
  imageSrc: "/Application Security.png",
  imageAlt: "Laptop displaying a cybersecurity application dashboard",
  title: "Application Security",
  description:
    "Identify and remediate vulnerabilities in web and mobile applications through comprehensive application security testing.",
  buttonLabel: "Read More",
  href: "#",
};

const careerCards: CareerCardProps[] = [
  {
    title: "Cybersecurity Resume",
    description:
      "Build a professional resume that highlights your security skills, certifications, projects and practical experience.",
    icon: "document",
  },
  {
    title: "Technical Mock Interviews",
    description:
      "Practice cybersecurity interviews covering networking, Linux, web security, penetration testing and security fundamentals.",
    icon: "interview",
  },
  {
    title: "Career Mentorship",
    description:
      "Get guidance on cybersecurity roles, learning paths and the skills employers are looking for.",
    icon: "briefcase",
  },
  {
    title: "Job Preparation",
    description:
      "Improve your interview confidence and prepare for real cybersecurity opportunities.",
    icon: "handshake",
  },
];

const featuredModule = {
  badgeLabel: "Featured Module",
  imageSrc: "/Bug_Hunting.png",
  imageAlt: "Robot analysing bug bounty automation dashboards",
  title: "Bug Hunting with AI Automation",
  description:
    "Learn AI-powered reconnaissance, vulnerability discovery, and bug bounty automation through hands-on labs.",
  tags: [
    { icon: "calendar" as const, label: "Starting October 2026" },
    { icon: "video" as const, label: "Live Online" },
    { icon: "lab" as const, label: "Hands-on Labs" },
  ],
  buttonLabel: "Course Details",
  href: "#",
};

const innovationCards: InnovationCardProps[] = [
  {
    boldText: "Hackliva Academy",
    text: "provides cybersecurity professionals with the key skills to protect organizations.",
    linkLabel: "Watch the video",
    linkIcon: "play",
    imageSrc: "/Innovation/image_01.png",
    imageAlt: "Security professional working on a laptop in an open office",
    href: "#",
  },
  {
    boldText: "Hackliva Academy",
    text: "provides cybersecurity professionals with the key skills to protect organizations.",
    linkLabel: "Read Case Study",
    linkIcon: "search",
    imageSrc: "/Innovation/image_02.png",
    imageAlt:
      "Trainer presenting to a group in a Hackliva Academy meeting room",
    href: "#",
  },
  {
    boldText: "Hackliva Academy",
    text: "provides cybersecurity professionals with the key skills to protect organizations.",
    linkLabel: "Watch the video",
    linkIcon: "play",
    imageSrc: "/Innovation/image_03.png",
    imageAlt:
      "Smiling cybersecurity professional standing in a security operations center",
    href: "#",
  },
];

const consultation = {
  heading: "Request a Free Consultation",
  description:
    "Schedule a free consultation or live demo to explore our courses, experience our training, and choose the right cybersecurity path for your career.",
  primaryLabel: "Schedule Demo",
  primaryHref: "#",
  secondaryLabel: "Enterprise Inquiry",
  secondaryHref: "#",
};

export default function Home() {
  return (
    <div>
      <section>
        <MenuBar />
      </section>
      <HeroSection />
      <TrainingTracks
        eyebrow="Training Tracks"
        eyebrowHref="/Training_Tracks"
        heading="Hackliva Offasive Security Cource"
        courses={courses}
      />
      <section className="w-full">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-8 lg:px-16">
          <QuoteCallout {...quote} />
        </div>
      </section>
      <section className="w-full">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
          <FeaturedModuleCard {...featuredModule} />
        </div>
      </section>
      <AiInsightsSection
        heading="AI is Everywhere. Your Controls Aren't."
        description="AI is changing how security teams discover vulnerabilities, analyze applications and respond to threats. Learn how to use AI responsibly across modern offensive security workflows."
        cards={aiInsightCards}
      />
      <ProgramHighlights tabs={programHighlightsTabs} />
      <ServicesOverview
        heading="Our Cybersecurity Services ?"
        description="We help organizations identify vulnerabilities, strengthen security and protect critical digital infrastructure through practical cybersecurity services."
        highlight={servicesHighlight}
        services={serviceCards}
      />
      <section className="w-full">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
          <CareerSection
            heading="Build Your Cybersecurity Career"
            description="Turn your cybersecurity skills into a professional career with practical guidance, interview preparation and industry-focused mentorship."
            buttonLabel="Start with OpusNexus"
            href="#"
            cards={careerCards}
          />
        </div>
      </section>
      <InnovationSection
        heading="Cyber Security Innovation at"
        highlight="Hackliva"
        cards={innovationCards}
      />
      <ServicesSection />
      <section className="w-full">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
          <ConsultationBanner {...consultation} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center p-4 justify-center">
      <h1 className="text-3xl font-bold text-center p-4 text-[#0A0A0A] lg:text-[47px] lg:leading-[51px] lg:tracking-[-0.025em] lg:pb-[14px]">
        Hackliva Offensive <br className="hidden lg:inline" />
        Security Academy
      </h1>
      <p className="text-center text-[#4B4B4B] lg:text-[0.95rem] lg:leading-[22px]">
        Whether you&apos;re just getting started in cybersecurity or looking to
        level up, Hackliva helps you <br className="hidden lg:inline" />
        build practical cyber securityskills through hands-on labs, experienced
        trainers, and one-on-one <br className="hidden lg:inline" />
        guidance.
      </p>
      <div className="mt-8 flex w-full flex-wrap justify-center gap-6">
        {heroCards.map((card, index) => (
          <HeroCard key={`${index}-${card.title}`} {...card} />
        ))}
      </div>
      <div className="mt-15 flex w-full justify-center">
        <CtaBanner {...ctaBanner} />
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold leading-tight text-[#0A0A0A] lg:text-[30px] lg:leading-[36px]">
              Build with confidence.
              <br />
              <span className="text-[#F00012]">
                Designed to protect your business.
              </span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#555555] lg:max-w-[400px] lg:text-[15px] lg:leading-[24px]">
              Protect your applications, cloud, and infrastructure with
              cybersecurity services, compliance assessments, and expert
              security consulting.
            </p>
            <Link
              href="/Contact"
              className="mt-6 inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-[#F00012] px-4 text-xs font-bold text-white transition-colors duration-300 hover:bg-[#D2000F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012] lg:px-5 lg:text-[14px]"
            >
              Get started for free
            </Link>
          </div>
          <ServicesAccordion
            items={serviceAccordionItems}
            defaultOpenIndex={1}
          />
        </div>
      </div>
    </section>
  );
}
