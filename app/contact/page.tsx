import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Contact Us — ePAiD",
  description:
    "Get in touch for reliable, secure, and smart POS solutions designed to simplify and grow your business operations.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground transition-colors duration-200">
      <ContactHero />
      <div className="flex flex-col gap-16 lg:gap-20">
        <ContactDetails />
        <ContactForm />
      </div>
      <WhatsAppButton />
    </main>
  );
}
