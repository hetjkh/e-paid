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
  HERO_VIDEO_SRC,
} from "./hero/shared";
import { easeOut, fadeUp } from "./motion/scroll-motion";

const HERO_DESCRIPTION =
  "We deliver smart digital solutions, secure payment systems, and expert advisory services that help businesses grow, streamline operations, and scale confidently.";

export default function Hero() {
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
              <span className="block">MSP POS service</span>
              <span className="block">provider company</span>
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
                href="/products"
                size="hero"
                icon={<ProductsIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
              >
                VIEW PRODUCTS
              </EpaidButton>
              <EpaidButton
                href="/contact"
                size="hero"
                icon={<ArrowUpRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
              >
                CONTACT US
              </EpaidButton>
            </motion.div>
          </div>

          <motion.p
            className={heroDesktopDescClassName}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {HERO_DESCRIPTION}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
