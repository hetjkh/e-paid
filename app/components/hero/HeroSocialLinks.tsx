"use client";

import { motion } from "framer-motion";
import { easeOut, fadeUp } from "../motion/scroll-motion";

export const heroSocialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M14 3.5h-3a3.5 3.5 0 0 0-3.5 3.5V10H5v3.5h2.5V21h3.5v-7.5H14l.5-3.5h-3V7a1 1 0 0 1 1-1h2V3.5z" />
    ),
  },
  {
    label: "X",
    href: "https://twitter.com",
    icon: (
      <path d="M16.5 4.5L9.2 12.8 4.5 19.5h2.2l5.3-6.9 4.3 6.9h5.5l-7.7-8.8 6.2-8h-2.2l-4.8 6.2-3.9-6.2H4.5l7 8z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M6.5 9.5h3v10.5h-3V9.5zm1.5-4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM11 9.5h2.9v1.4h.05c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.65 2 3.65 4.65v5.5H17.5v-4.9c0-1.15-.02-2.65-1.6-2.65-1.65 0-1.9 1.25-1.9 2.55v4.95h-3V9.5z" />
    ),
  },
];

type HeroSocialLinksProps = {
  className?: string;
  animateOnMount?: boolean;
};

export default function HeroSocialLinks({
  className = "",
  animateOnMount = false,
}: HeroSocialLinksProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      {heroSocialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/90 text-black shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-epaid-yellow hover:bg-epaid-yellow hover:text-[#0c1424] hover:shadow-[0_0_18px_rgba(244,217,90,0.65),0_0_36px_rgba(244,217,90,0.4)] dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:text-[#0c1424] sm:h-11 sm:w-11"
          initial={animateOnMount ? { opacity: 0, y: 12 } : undefined}
          animate={animateOnMount ? { opacity: 1, y: 0 } : undefined}
          transition={
            animateOnMount
              ? {
                  duration: 0.45,
                  ease: easeOut,
                  delay: 0.5 + index * 0.08,
                }
              : undefined
          }
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 sm:h-5 sm:w-5"
            aria-hidden="true"
          >
            {social.icon}
          </svg>
        </motion.a>
      ))}
    </motion.div>
  );
}
