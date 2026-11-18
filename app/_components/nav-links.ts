export type NavLink = {
  href: string;
  label: string;
  featured?: boolean;
  /** Small pill shown above the label, e.g. "We're Hiring". */
  badge?: string;
};

export const navLinks: NavLink[] = [
  { href: "/ai-security", label: "AI Security", featured: true },
  { href: "/#certifications", label: "Courses" },
  { href: "/#why-hackliva", label: "Our Work" },
  { href: "/#innovation", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
];

/** Links for the header used on course pages. */
export const courseNavLinks: NavLink[] = [
  { href: "/people", label: "People" },
  { href: "/clients", label: "Clients" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/gen-ai", label: "Gen AI" },
  { href: "/academy", label: "Academy" },
  { href: "/careers", label: "Careers", badge: "We're Hiring" },
];
