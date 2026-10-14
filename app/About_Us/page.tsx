import AboutMenuBar from "../Components/About/aboutMenuBar";
import AboutBodyBackground from "../Components/About/aboutBodyBackground";
import AboutHeroSection from "../Components/About/aboutHeroSection";
import AboutMainContent from "../Components/About/aboutMainContent";
import ConsultationBanner from "../Components/Home/consultationBanner";
import Footer from "../Components/Home/footer";

const whyWeStarted = {
  heading: "Why We Started",
  cardHeading:
    "We started Hackliva because we saw a gap in cybersecurity education.",
  paragraph1:
    "Many training programs focus mainly on theory. But cybersecurity is a practical field. You need to know how to test systems, find vulnerabilities, use security tools, and respond to real world challenges.",
  quote: "Hackliva was created to bridge that gap.",
  paragraph2:
    "Backed by the experience of Astraliva LLP, we turn real offensive security experience into practical training. Our programs combine hands on labs, real-world scenarios, industry tools, and AI-assisted security techniques.",
};

const visionMission = {
  heading: "Vision & Mission",
  cards: [
    {
      label: "Vision",
      title: "Transform how the world learns cybersecurity.",
      description:
        "Hackliva was founded to make offensive cybersecurity education more practical and relevant to the real world. Instead of focusing only on slides and theory, we help learners build skills through hands-on labs, real-world scenarios, and practical offensive security techniques. Our goal is to help students and professionals develop the skills they need to find vulnerabilities, think like attackers, use AI effectively, and build a strong career in cybersecurity.",
    },
    {
      label: "Mission",
      title:
        "Make practical, industry-driven, and AI-ready cybersecurity education accessible.",
      description:
        "Our mission is to make high-quality cybersecurity education accessible and affordable. We provide hands-on labs, practical offensive security training, and AI-assisted security workflows for students and working professionals. We help learners build real skills they can use in the workplace, without the high cost of traditional training.",
    },
  ],
};

const principlesGrid = {
  heading: "The 8 Principles That Define Hackliva",
  description:
    "Our curriculum, teaching, and culture are built around 8 principles designed to help learners develop practical, career-ready cybersecurity skills.",
  principles: [
    {
      title: "Learn by doing",
      description:
        "We believe cybersecurity is learned by doing. We move from fundamentals to implementation, testing, exploitation, and problem-solving through handson practice.",
    },
    {
      title: "Learn from industry experience",
      description:
        "We bring real-world industry experience into the classroom from technical security work and client communication to documentation, reporting, meetings, and professional practices.",
    },
    {
      title: "Make quality accessible",
      description:
        "Quality cybersecurity education shouldn't be out of reach. We aim to make practical, high quality, industry led training accessible without compromising on learning experience.",
    },
    {
      title: "Keep learning relevant",
      description:
        "Cybersecurity never stands still. We continuously evolve our training around emerging technologies, current threats, AI, automation, and the skills employers and security teams actually need.",
    },
    {
      title: "Develop the individual",
      description:
        "Every learner is different. We provide personalized guidance to identify skill gaps, strengthen capabilities, build confidence, and prepare for real career opportunities.",
    },
    {
      title: "Use AI effectively",
      description:
        "We teach learners and cybersecurity professionals to work effectively with AI for automation, security testing, research, and emerging areas such as AI red teaming.",
    },
    {
      title: "Prepare for the workplace",
      description:
        "Being technically skilled isn't enough. We prepare learners to communicate professionally, participate in meetings, write effective emails, document findings, handle interviews, work with clients, and operate confidently in professional environments.",
    },
    {
      title: "Use offensive skills ethically",
      description:
        "We teach learners to think like attackers while operating within authorized and responsible security boundaries using offensive skills to discover weaknesses and make systems safer.",
    },
  ],
};

const consultation = {
  heading: "Request a Free Consultation",
  description:
    "Schedule a free consultation or live demo to explore our courses, experience our training, and choose the right cybersecurity path for your career.",
  primaryLabel: "Schedule Demo",
  primaryHref: "#",
  secondaryLabel: "Enterprise Inquiry",
  secondaryHref: "#",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black">
      <AboutBodyBackground />
      <AboutMenuBar />
      <AboutHeroSection
        heading="Built for the Next Generation of Security Professionals"
        highlight="AI-Driven Threat Era"
        description="Build practical offensive security skills while learning how AI can improve reconnaissance, vulnerability discovery, testing, and security research."
      />
      <AboutMainContent
        whyWeStarted={whyWeStarted}
        visionMission={visionMission}
        principlesGrid={principlesGrid}
      />
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-8 lg:px-24">
          <ConsultationBanner {...consultation} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
