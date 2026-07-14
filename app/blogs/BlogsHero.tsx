"use client";

import { motion } from "framer-motion";
import EpaidButton from "../components/EpaidButton";
import Header from "../components/Header";
import HeroSocialLinks from "../components/hero/HeroSocialLinks";
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
  HERO_VIDEO_SRC,
} from "../components/hero/shared";
import { ArrowUpRightIcon } from "../components/ButtonIconBadge";
import { easeOut, fadeUp } from "../components/motion/scroll-motion";

const HERO_DESCRIPTION =
  "Insights and updates on POS technology, secure payments, and digital solutions from ePaid.";

export default function BlogsHero() {
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
              className={`${heroHeadingNowrapLgClassName} text-balance`}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              Insights &amp; Updates
            </motion.h1>

            <motion.p
              className={heroMobileDescClassName}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {HERO_DESCRIPTION}
            </motion.p>

            <motion.div
              className={heroCtaWrapClassName}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              <EpaidButton
                href="#blog-posts"
                size="hero"
                icon={<ArrowUpRightIcon />}
              >
                READ ARTICLES
              </EpaidButton>
            </motion.div>

            <HeroSocialLinks className="lg:hidden" animateOnMount />
          </div>

          <div className="hidden min-w-0 max-w-[420px] lg:block lg:pb-1">
            <motion.p
              className="text-base leading-relaxed text-black dark:text-[#b8c9dc] lg:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {HERO_DESCRIPTION}
            </motion.p>

            <HeroSocialLinks className="mt-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
