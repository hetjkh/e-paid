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
  heroHeadingNowrapLgClassName,
  heroLeftColumnClassName,
  heroMobileDescClassName,
  heroTopGradientClassName,
  HERO_VIDEO_SRC,
} from "../components/hero/shared";
import { ButtonIconBadge, ProductsIcon } from "../components/ButtonIconBadge";
import { easeOut, fadeUp } from "../components/motion/scroll-motion";

const HERO_DESCRIPTION =
  "We deliver smart digital solutions, secure payment systems, and expert advisory services that help businesses grow, streamline operations, and scale confidently.";

export default function ProductsHero() {
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
              Browse our Products
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
              <Link href="#products" className={heroCtaClassName}>
                VIEW PRODUCTS
                <ButtonIconBadge size="sm">
                  <ProductsIcon className="h-3.5 w-3.5 text-epaid sm:h-4 sm:w-4" />
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
