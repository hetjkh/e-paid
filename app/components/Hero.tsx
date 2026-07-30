"use client";

import { motion } from "framer-motion";
import EpaidButton from "./EpaidButton";
import Header from "./Header";
import { ArrowUpRightIcon, ProductsIcon } from "./ButtonIconBadge";
import {
  heroBottomGradientClassName,
  heroContainerVariants,
  heroContentInnerClassName,
  heroContentOuterClassName,
  heroCtaWrapClassName,
  heroDesktopDescClassName,
  heroHeadingClassName,
  heroLeftColumnClassName,
  heroMobileDescClassName,
  heroTopGradientClassName,
  HERO_DESCRIPTION_LINES,
  HERO_VIDEO_SRC,
} from "./hero/shared";
import { easeOut, fadeUp } from "./motion/scroll-motion";
import { DEFAULT_CMS } from "@/lib/cms";
import { useCmsBlock } from "@/lib/use-cms-block";

export default function Hero() {
  const hero = useCmsBlock("home.hero", DEFAULT_CMS["home.hero"]);
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
              className={heroHeadingClassName}
              variants={fadeUp}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              <span className="block">{hero.titleLine1}</span>
              <span className="block">{hero.titleLine2}</span>
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
                href={hero.ctaPrimaryHref || "/products/hardware"}
                size="hero"
                icon={<ProductsIcon />}
              >
                {hero.ctaPrimaryLabel || "VIEW PRODUCTS"}
              </EpaidButton>
              <EpaidButton
                href={hero.ctaSecondaryHref || "/contact"}
                size="hero"
                icon={<ArrowUpRightIcon />}
              >
                {hero.ctaSecondaryLabel || "CONTACT US"}
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
