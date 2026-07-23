import WhatsAppButton from "@/app/components/WhatsAppButton";
import SoftwareHero from "./SoftwareHero";
import SoftwareIntro from "./SoftwareIntro";
import SoftwareHowItWorks from "./SoftwareHowItWorks";
import SoftwareFeatures from "./SoftwareFeatures";
import SoftwareShowcase from "./SoftwareShowcase";
import SoftwareCta from "./SoftwareCta";

export const metadata = {
  title: "Software — Satocci Scan & Pay | ePAiD",
  description:
    "Choose your favorite items, scan & pay via mobile with Satocci. Skip the line and shop smart — powered with ePaid.",
};

export default function SoftwareProductsPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground transition-colors duration-200">
      <SoftwareHero />
      <SoftwareIntro />
      <SoftwareHowItWorks />
      <SoftwareFeatures />
      <SoftwareShowcase />
      <SoftwareCta />
      <WhatsAppButton />
    </main>
  );
}
