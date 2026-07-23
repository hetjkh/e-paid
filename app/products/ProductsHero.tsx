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
  heroHeadingNowrapLgClassName,
  heroLeftColumnClassName,
  heroMobileDescClassName,
  heroTopGradientClassName,
  HERO_DESCRIPTION_LINES,
  HERO_VIDEO_SRC,
} from "../components/hero/shared";
import { ArrowUpRightIcon, ProductsIcon } from "../components/ButtonIconBadge";
import { easeOut, fadeUp } from "../components/motion/scroll-motion";

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
              {HERO_DESCRIPTION_LINES.map((line) => (
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
                href="#products"
                size="hero"
                icon={<ProductsIcon />}
              >
                VIEW HARDWARE
              </EpaidButton>
              <EpaidButton
                href="/products/software"
                size="hero"
                icon={<ArrowUpRightIcon />}
              >
                VIEW SOFTWARE
              </EpaidButton>
            </motion.div>

            <HeroSocialLinks className="lg:hidden" animateOnMount />
          </div>

          <div className="hidden min-w-0 max-w-[34rem] lg:block lg:pb-1">
            <motion.p
              className="text-sm leading-relaxed text-black dark:text-[#b8c9dc] lg:text-base"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {HERO_DESCRIPTION_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.p>

            <HeroSocialLinks className="mt-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
