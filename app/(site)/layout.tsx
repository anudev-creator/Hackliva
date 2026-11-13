import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter bannerTone="grey" />
    </>
  );
}
