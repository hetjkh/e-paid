"use client";

import LogoLoop from "./LogoLoop";
import {
  partnerLogoLoopProps,
  partnerLogos,
} from "./partner-logos";

export default function HomePartnerLogos() {
  return (
    <section
      className="relative overflow-hidden bg-background pb-6 lg:pb-8"
      aria-label="Trusted partners"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(4,113,173,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(4,113,173,0.12)_0%,transparent_70%)]" />

      <LogoLoop
        {...partnerLogoLoopProps}
        logos={partnerLogos}
        direction="left"
        className="partner-logos-loop"
        ariaLabel="Partner logos scrolling left to right"
      />
    </section>
  );
}
