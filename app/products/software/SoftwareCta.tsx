"use client";

import { motion } from "framer-motion";
import EpaidButton from "@/app/components/EpaidButton";
import { ArrowUpRightIcon } from "@/app/components/ButtonIconBadge";
import {
  easeOut,
  fadeUp,
  StaggerReveal,
} from "@/app/components/motion/scroll-motion";

export default function SoftwareCta() {
  return (
    <section className="relative overflow-hidden bg-[#0471ad] py-16 text-white sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#f0d461]/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.24em] text-epaid-yellow sm:text-sm"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              Ready to launch
            </motion.p>
            <motion.h2
              className="mt-4 sf-pro-display-semibold text-[1.875rem] font-semibold uppercase leading-[1.1] sm:text-4xl lg:text-[2.75rem]"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              Bring Scan &amp; Pay to your stores
            </motion.h2>
            <motion.p
              className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              Pair ePaid&apos;s SAMA-certified POS infrastructure with
              Satocci&apos;s Scan &amp; Pay technology — and give shoppers a
              faster way to choose, scan, pay, and go.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-3"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <EpaidButton
              href="https://www.satocci.com/"
              icon={<ArrowUpRightIcon />}
              className="border-white bg-white text-[#0c1424] hover:border-epaid-yellow hover:bg-epaid-yellow"
            >
              VISIT SATOCCI
            </EpaidButton>
            <EpaidButton
              href="/contact"
              icon={<ArrowUpRightIcon />}
              className="border-white/80 bg-transparent text-white"
            >
              CONTACT EPAID
            </EpaidButton>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
  );
}
