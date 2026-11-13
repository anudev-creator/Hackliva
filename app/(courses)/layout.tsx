import type { ReactNode } from "react";
import { SiteFooter } from "../_components/site-footer";
import { CourseHeader } from "../_components/course-header";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CourseHeader />
      {children}
      <SiteFooter />
    </>
  );
}
