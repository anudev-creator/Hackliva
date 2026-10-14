import ContactForm, { type ContactFormProps } from "./contactForm";
import ContactInfoCards, {
  type ContactInfoCardsProps,
} from "./contactInfoCards";

export type ContactMainProps = {
  heading: string;
  highlight: string;
  paragraphs: string[];
  form: ContactFormProps;
  info: ContactInfoCardsProps;
};

export default function ContactMain({
  heading,
  highlight,
  paragraphs,
  form,
  info,
}: ContactMainProps) {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-8 lg:px-16 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_368px] lg:items-start">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-[-0.9px] text-[#050505] sm:text-4xl lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.4px]">
              {heading}
            </h1>
            <p className="mt-2 text-3xl font-extrabold leading-tight tracking-[-0.9px] text-[#F00012] sm:text-4xl lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.4px]">
              {highlight}
            </p>

            <div className="mt-10 flex flex-col gap-4 lg:mt-16">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-5 text-[#555]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 lg:mt-16">
              <ContactForm {...form} />
            </div>
          </div>

          <ContactInfoCards {...info} />
        </div>
      </div>
    </section>
  );
}
