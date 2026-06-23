"use client";

import LogoLoop from "./LogoLoop";
import {
  partnerLogoLoopProps,
  partnerLogos,
} from "./partner-logos";
import { useTheme } from "./ThemeProvider";

export default function HomePartnerLogos() {
  const { theme } = useTheme();
  const fadeOutColor = theme === "dark" ? "#0c1424" : "#FAF9F6";

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
        fadeOutColor={fadeOutColor}
        ariaLabel="Partner logos scrolling left to right"
      />
    </section>
  );
}
