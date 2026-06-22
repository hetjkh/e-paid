import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import CoreValues from "./CoreValues";
import FounderMessage from "./FounderMessage";
import MeetTeam from "./MeetTeam";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "About — ePAiD",
  description:
    "More than POS systems. We deliver smart digital solutions, secure payment systems, and expert advisory services.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground transition-colors duration-200">
      <AboutHero />
      <div className="flex flex-col gap-12 lg:gap-16">
        <AboutStats />
        <div className="flex flex-col">
          <CoreValues />
          <FounderMessage />
        </div>
        <MeetTeam />
      </div>
      <WhatsAppButton />
    </main>
  );
}
