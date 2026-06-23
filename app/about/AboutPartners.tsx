"use client";

import LogoLoop from "../components/LogoLoop";
import {
  aboutBottomRowLogos,
  aboutTopRowLogos,
  partnerLogoLoopProps,
} from "../components/partner-logos";

export default function AboutPartners() {
  return (
    <section
      className="section-tone relative overflow-hidden bg-background py-10 lg:py-14"
      aria-label="Trusted partners"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(4,113,173,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(4,113,173,0.12)_0%,transparent_70%)]" />

      <div className="relative flex flex-col gap-5 lg:gap-6">
        <LogoLoop
          {...partnerLogoLoopProps}
          logos={aboutTopRowLogos}
          direction="left"
          ariaLabel="Partner logos scrolling left"
        />
        <LogoLoop
          {...partnerLogoLoopProps}
          logos={aboutBottomRowLogos}
          direction="right"
          ariaLabel="Partner logos scrolling right"
        />
      </div>
    </section>
  );
}
