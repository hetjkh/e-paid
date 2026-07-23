"use client";

import { motion } from "framer-motion";
import { easeOut, fadeUp } from "../motion/scroll-motion";
import { epaidSocialLinks, SocialIcon } from "../social-links";

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
      {epaidSocialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[#00000040] bg-white/90 text-black shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-epaid-yellow hover:bg-epaid-yellow hover:text-[#0c1424] hover:shadow-[0_0_18px_rgba(244,217,90,0.65),0_0_36px_rgba(244,217,90,0.4)] dark:border-white/40 dark:bg-white/10 dark:text-white dark:hover:text-[#0c1424] sm:h-11 sm:w-11"
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
          <SocialIcon path={social.path} className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.a>
      ))}
    </motion.div>
  );
}
