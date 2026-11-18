import Image from "next/image";
import Link from "next/link";
import mailIcon from "../_assets/footer/mail.svg";
import phoneIcon from "../_assets/footer/phone.svg";
import { consultationCta, footer, type FooterGroup } from "../_data/footer";
import { ConsultationBanner } from "./consultation-banner";
import { SocialIcon } from "./social-icon";

const groupHeading = "text-[11px] leading-[16.5px] font-bold tracking-[0.55px] text-[#dc2626] uppercase";
const labelHeading = "text-[10px] leading-[15px] font-bold tracking-[0.5px] text-[#dc2626] uppercase";

/**
 * Consultation card plus the global footer (Figma 425:3286).
 * `bannerTone` "grey" continues the grey section above for the top padding only, so the card sits fully on white;
 * course pages use plain white.
 */
export function SiteFooter({ bannerTone = "white" }: { bannerTone?: "grey" | "white" }) {
  return (
    <>
      <div
        className={`${
          bannerTone === "grey"
            ? "bg-[linear-gradient(to_bottom,#f9f9f9_40px,#ffffff_40px)] pt-20"
            : "bg-white pt-10"
        } px-5 sm:px-8`}
      >
        <div className="mx-auto max-w-[1216px]">
          <ConsultationBanner {...consultationCta} />
        </div>
      </div>

      <footer className="bg-white px-5 pt-16 pb-10 font-jakarta sm:px-8">
        <div className="mx-auto max-w-[1216px] pt-2">
          <div className="grid gap-x-6 gap-y-10 border-b border-[#f3f4f6] pb-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-6">
            <BrandColumn />
            {footer.columns.map((groups, index) => (
              <div key={index} data-reveal className="flex flex-col gap-[19.25px] lg:col-span-2">
                {groups.map((group, i) => (
                  <LinkGroup key={group.title ?? i} group={group} primary={i === 0} />
                ))}
              </div>
            ))}
            <div data-reveal className="flex flex-col gap-[19.25px] lg:col-span-2">
              <div className="flex flex-col gap-[11px]">
                <h2 className={groupHeading}>{footer.nodes.title}</h2>
                <ul className="flex flex-col gap-[9px] text-[11px] leading-[16.5px]">
                  {footer.nodes.items.map((node) => (
                    <li key={node.name}>
                      <span className="block font-semibold text-[#334155]">{node.name}</span>
                      <span className="text-[#64748b]">{node.address}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {footer.companyGroups.map((group, i) => (
                <LinkGroup key={group.title ?? i} group={group} primary={false} />
              ))}
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-3 py-5 text-xs leading-4">
            {footer.socials.map((social) => (
              <li key={social.network} className="flex">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#475569] transition-colors hover:text-ink"
                >
                  <SocialIcon network={social.network} />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 border-t border-[#f3f4f6] pt-5 text-[11px] text-[#64748b] lg:flex-row lg:items-center lg:justify-between lg:gap-[18.92px]">
            <p className="leading-[17.88px]">{footer.copyright}</p>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 leading-[16.5px]">
              {footer.legal.map((link, i) => (
                <li key={link.label} className="flex items-center gap-4">
                  <Link href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </Link>
                  {i < footer.legal.length - 1 && (
                    <span aria-hidden="true" className="text-[#cbd5e1]">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

function BrandColumn() {
  const { about, parentCompany, accreditations, contact } = footer;
  return (
    <div data-reveal className="flex flex-col gap-6 sm:col-span-2 lg:col-span-4 lg:pr-6">
      <div className="flex flex-col gap-3">
        <Link href="/" className="w-fit text-2xl leading-8 font-extrabold tracking-[1.2px] text-[#dc2626]">
          HACKLIVA
        </Link>
        <p className="text-xs leading-[19.5px] text-[#64748b]">
          {about} <span className="font-semibold text-[#334155]">{parentCompany}</span>.
        </p>
      </div>

      <div className="flex flex-col gap-[7.44px] pt-1">
        <h2 className={labelHeading}>{accreditations.title}</h2>
        <p className="text-[11px] leading-[17.88px] font-medium text-[#64748b] lg:whitespace-pre-wrap">
          {accreditations.text}
        </p>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <h2 className={labelHeading}>{contact.title}</h2>
        <ul className="flex flex-col gap-1.5 text-xs leading-4 text-[#475569]">
          <li>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-ink">
              <Image src={mailIcon} alt="" unoptimized />
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-ink"
            >
              <Image src={phoneIcon} alt="" unoptimized />
              {contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/** A column's first group is spaced a little looser than the groups stacked under it. */
function LinkGroup({ group, primary }: { group: FooterGroup; primary: boolean }) {
  return (
    <div className={`flex flex-col ${primary ? "gap-[13px]" : "gap-[9px]"} ${group.title ? "" : "pt-1"}`}>
      {group.title && <h2 className={groupHeading}>{group.title}</h2>}
      <ul className={`flex flex-col text-[11px] leading-[16.5px] ${primary ? "gap-[7px]" : "gap-[5px]"}`}>
        {group.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`transition-colors ${
                link.highlight ? "font-medium text-[#dc2626] hover:text-[#b91c1c]" : "text-[#64748b] hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
