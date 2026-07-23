"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import EpaidButton from "@/app/components/EpaidButton";
import { ArrowUpRightIcon } from "@/app/components/ButtonIconBadge";
import {
  heroBottomGradientClassName,
  heroContainerVariants,
  heroContentInnerClassName,
  heroContentOuterClassName,
  heroCtaWrapClassName,
  heroDesktopDescClassName,
  heroLeftColumnClassName,
  heroMobileDescClassName,
  heroTopGradientClassName,
  HERO_VIDEO_SRC,
} from "@/app/components/hero/shared";
import { easeOut, fadeUp } from "@/app/components/motion/scroll-motion";

const SOFTWARE_DESCRIPTION_LINES = [
  "Satocci makes shopping seamless by letting you scan and pay",
  "instantly — so you skip the line and enjoy faster, smarter,",
  "sustainable shopping.",
] as const;

export default function SoftwareHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      <div className={heroTopGradientClassName} />
      <div className={heroBottomGradientClassName} />

      <Header />

      <div className={heroContentOuterClassName}>
        <motion.div
          className={heroContentInnerClassName}
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
        >
          <div className={heroLeftColumnClassName}>
            <motion.p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-epaid sm:text-base lg:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              Satocci × ePaid
            </motion.p>

            <motion.h1
              className="sf-pro-display-semibold text-[2.25rem] font-semibold uppercase leading-[1.1] text-black text-balance dark:text-white sm:text-4xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.05]"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              <span className="block">Skip the line</span>
              <span className="block">&amp; shop smart</span>
            </motion.h1>

            <motion.p
              className={heroMobileDescClassName}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {SOFTWARE_DESCRIPTION_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.p>

            <motion.div
              className={heroCtaWrapClassName}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              <EpaidButton
                href="#how-it-works"
                size="hero"
                icon={<ArrowUpRightIcon />}
              >
                SEE HOW IT WORKS
              </EpaidButton>
              <EpaidButton
                href="https://www.satocci.com/"
                size="hero"
                icon={<ArrowUpRightIcon />}
              >
                FREE DEMO
              </EpaidButton>
            </motion.div>
          </div>

          <motion.p
            className={heroDesktopDescClassName}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {SOFTWARE_DESCRIPTION_LINES.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
