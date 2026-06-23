import PartnershipAnnouncement from "./PartnershipAnnouncement";
import PartnershipsHero from "./PartnershipsHero";
import SatocciPartnership from "./SatocciPartnership";

export const metadata = {
  title: "Partnerships — ePAiD",
  description:
    "Powering growth through smart partnerships. Smart digital solutions, secure payment systems, and expert advisory services.",
};

export default function PartnershipsPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground transition-colors duration-200">
      <PartnershipsHero />
      <PartnershipAnnouncement />
      <SatocciPartnership />
    </main>
  );
}
