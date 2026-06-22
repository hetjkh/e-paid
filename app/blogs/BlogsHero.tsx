"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSocialLinks from "../components/hero/HeroSocialLinks";
import {
  heroBottomGradientClassName,
  heroContainerVariants,
  heroContentInnerClassName,
  heroContentOuterClassName,
  heroCtaClassName,
  heroCtaWrapClassName,
  heroDesktopDescClassName,
  heroHeadingNowrapLgClassName,
  heroLeftColumnClassName,
  heroMobileDescClassName,
  heroTopGradientClassName,
  HERO_VIDEO_SRC,
} from "../components/hero/shared";
import { ArrowUpRightIcon, ButtonIconBadge } from "../components/ButtonIconBadge";
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
              className={heroHeadingNowrapLgClassName}
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
              <Link href="#blog-posts" className={heroCtaClassName}>
                READ ARTICLES
                <ButtonIconBadge size="sm">
                  <ArrowUpRightIcon className="h-3.5 w-3.5 text-epaid sm:h-4 sm:w-4" />
                </ButtonIconBadge>
              </Link>
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
