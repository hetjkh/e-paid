"use client";

import { motion } from "framer-motion";
import EpaidButton from "../components/EpaidButton";
import Header from "../components/Header";
import { ArrowUpRightIcon } from "../components/ButtonIconBadge";
import {
  heroBottomGradientClassName,
  heroContainerVariants,
  heroContentInnerClassName,
  heroContentOuterClassName,
  heroCtaWrapClassName,
  heroDesktopDescClassName,
  heroHeadingNowrapLgClassName,
  heroLeftColumnClassName,
  heroMobileDescClassName,
  heroTopGradientClassName,
  HERO_DESCRIPTION_LINES,
  HERO_VIDEO_SRC,
} from "../components/hero/shared";
import { easeOut, fadeUp } from "../components/motion/scroll-motion";
import { DEFAULT_CMS } from "@/lib/cms";
import { useCmsBlock } from "@/lib/use-cms-block";

export default function AboutHero() {
  const hero = useCmsBlock("about.hero", DEFAULT_CMS["about.hero"]);
  const descriptionLines =
    hero.descriptionLines?.length > 0
      ? hero.descriptionLines
      : [...HERO_DESCRIPTION_LINES];

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
            <motion.h1
              className={heroHeadingNowrapLgClassName}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {hero.title}
            </motion.h1>

            <motion.p
              className={heroMobileDescClassName}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {descriptionLines.map((line) => (
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
                href={hero.ctaHref || "#contact"}
                size="hero"
                icon={<ArrowUpRightIcon />}
              >
                {hero.ctaLabel || "CONTACT US"}
              </EpaidButton>
            </motion.div>
          </div>

          <motion.p
            className={heroDesktopDescClassName}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {descriptionLines.map((line) => (
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
