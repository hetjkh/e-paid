"use client";

import { motion } from "framer-motion";
import ProductCategoryTabs from "../ProductCategoryTabs";
import {
  easeOut,
  fadeUp,
  StaggerReveal,
} from "@/app/components/motion/scroll-motion";

export default function SoftwareIntro() {
  return (
    <section className="relative overflow-x-clip bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <StaggerReveal className="mx-auto max-w-4xl text-center">
          <motion.div
            className="mb-8 flex justify-center sm:mb-10"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <ProductCategoryTabs active="software" />
          </motion.div>

          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.24em] text-epaid sm:text-sm"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            Scan &amp; Pay
          </motion.p>

          <motion.h2
            className="mt-4 sf-pro-display-semibold text-balance text-[1.75rem] font-semibold uppercase leading-[1.15] text-foreground sm:text-3xl lg:text-[2.75rem]"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Choose your favorite items. Scan &amp; pay via mobile. It&apos;s
            that simple!
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            With Satocci you scan and pay in seconds and skip the line — so
            shopping becomes faster, smarter, and easier using only your mobile.
          </motion.p>
        </StaggerReveal>
      </div>
    </section>
  );
}
