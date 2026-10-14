import Link from "next/link";

type FooterLink = { label: string; href: string };

const trainingLinks: FooterLink[] = [
  { label: "All Courses", href: "/Training_Tracks" },
  { label: "Certification Path", href: "#" },
  { label: "Lab Access", href: "#" },
];

const resourceLinks: FooterLink[] = [
  { label: "Threat Blog", href: "#" },
  { label: "Community", href: "#" },
  { label: "Documentation", href: "#" },
];

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "/About_Us" },
  { label: "Contact", href: "/Contact" },
  { label: "Partners", href: "#" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Responsible Disclosure", href: "#" },
];

function FooterNavColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-[1.4px] text-[#050505]">
        {heading}
      </h4>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-base text-[#555] transition-colors duration-300 hover:text-[#0A0A0A]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TrainingTracksFooter() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-[1536px] px-4 py-16 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[368px_1fr]">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-[-0.5px] text-[#F00012]"
            >
              HACKLIVA
            </Link>
            <p className="mt-3 max-w-[320px] text-sm leading-[22.75px] text-[#555]">
              Empowering the next generation of cybersecurity experts through
              radical innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <FooterNavColumn heading="Training" links={trainingLinks} />
            <FooterNavColumn heading="Resources" links={resourceLinks} />
            <FooterNavColumn heading="Company" links={companyLinks} />
          </div>
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[1.4px] text-[#555]">
            Global HQ Coordinates
          </p>
          <p className="mt-2 text-sm text-[#050505]">
            Cyberpark Kozhikode, Kerala 673016, IN
          </p>
          <p className="font-mono mt-1 text-xs text-[#555]">
            11.2858° N, 75.8711° E
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[#F2D6D6] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#555] opacity-60">
            © 2026 HACKLIVA OFFANSIVE SECURITY ACADEMY
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-[#555] transition-colors duration-300 hover:text-[#0A0A0A]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
