import AboutMenuBar from "../Components/About/aboutMenuBar";
import ContactMain from "../Components/Contact/contactMain";
import Footer from "../Components/Home/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutMenuBar />
      <ContactMain
        heading="Build Your Offensive Security Journey With Hackliva"
        highlight="Let's Talk"
        paragraphs={[
          "Whether you’re starting out in cybersecurity, looking to sharpen your offensive security skills, or want to take your learning to the next level, we’d love to hear from you.",
          "Tell us what you’re looking to learn, where you’re stuck, or what you want to achieve. Our team can help you find the right path and turn your interest in cybersecurity into practical, real-world skills.",
          "Have a question? Want to know more about the program? Let’s connect.",
        ]}
        form={{
          interestOptions: [
            "Training Tracks",
            "Corporate Training & Awareness",
            "Red Team Operations",
            "Compliance & Audits",
            "Careers at Hackliva",
            "Something else",
          ],
          consentText:
            "I agree to be contacted by the Hackliva team about my enquiry.",
          submitLabel: "Submit",
        }}
        info={{
          headquarters: {
            title: "Headquarters",
            location: "Kozhikode, Kerala",
          },
          sales: {
            title: "Sales-Related Queries",
            email: "sales@hackliva.com",
          },
          hr: {
            title: "HR Related Queries",
            phone: "+91 90379 81682",
            email: "hr@hackliva.com",
          },
          recruitment: {
            title: "Recruitment & Open Positions",
            buttonLabel: "Careers",
            href: "#",
          },
          callCard: {
            label: "Want to talk to us?",
            text: "Book a free call with the Astraliva team to discuss your project, security needs, and the right approach to strengthening your applications and infrastructure.",
            buttonLabel: "Book a Call",
            href: "#",
          },
        }}
      />
      <Footer />
    </div>
  );
}
