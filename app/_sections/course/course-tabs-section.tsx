import { notFound } from "next/navigation";
import { CourseTabs } from "../../_components/course-tabs";
import { offensiveSecurityCertifications } from "../../_data/certifications";

// Pill order from the Figma course page; any course not listed follows in data order.
const TAB_ORDER = ["COSPAI+", "BHAI", "CWPTS", "CNPTS", "CMASS", "CAIRTS", "CCSS", "CRES"];
const rank = (code: string) => {
  const index = TAB_ORDER.indexOf(code);
  return index === -1 ? TAB_ORDER.length : index;
};

const tabs = [...offensiveSecurityCertifications.certifications]
  .sort((a, b) => rank(a.code) - rank(b.code))
  .map((c) => ({ label: c.tabLabel ?? c.name, href: c.href }));

/** Static placeholder (no active pill) shown while the route's params resolve. */
export function CourseTabsFallback() {
  return <CourseTabs tabs={tabs} />;
}

/** Course switcher with the current course highlighted; 404s on an unknown slug. */
export async function CourseTabsSection({
  params,
}: {
  params: PageProps<"/courses/[slug]">["params"];
}) {
  const activeHref = `/courses/${(await params).slug}`;
  if (!tabs.some((tab) => tab.href === activeHref)) notFound();
  return <CourseTabs tabs={tabs} activeHref={activeHref} />;
}
