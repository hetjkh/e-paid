import type { LogoItem } from "./LogoLoop";

export const partnerLogos: LogoItem[] = [
  { src: "/logos/1.png", alt: "FEITIAN" },
  { src: "/logos/2 (1).png", alt: "Alinma Bank" },
  { src: "/logos/3.png", alt: "The Saudi Investment Bank" },
  { src: "/logos/4.png", alt: "Saudi Central Bank" },
  { src: "/logos/5.png", alt: "SNB AlAhli" },
  { src: "/logos/6.png", alt: "Arab National Bank" },
  { src: "/logos/8.png", alt: "neo leap" },
  { src: "/logos/9.png", alt: "stc" },
  { src: "/logos/10.png", alt: "Al Rajhi Bank" },
];

export const partnerLogoLoopProps = {
  speed: 60,
  logoHeight: 176,
  gap: 48,
  hoverSpeed: 0,
  fadeOut: true,
  scaleOnHover: false,
} as const;

export const aboutTopRowLogos = partnerLogos.slice(0, 5);
export const aboutBottomRowLogos = [
  ...partnerLogos.slice(5),
  ...partnerLogos.slice(0, 2),
];
