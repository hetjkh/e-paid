"use client";

import { motion } from "framer-motion";
import {
  easeOut,
  fadeUp,
  scaleIn,
  StaggerReveal,
} from "@/app/components/motion/scroll-motion";

const features = [
  {
    title: "Flexible Payment Solutions",
    note: "Installment payments, all credit cards, crypto, and loyalty program in pipeline",
  },
  {
    title: "Plug & Play Solution — No Investment",
    note: "Deploy quickly without heavy upfront cost or complex infrastructure projects",
  },
  {
    title: "Marketing & Upsell Opportunities",
    note: "Personalized marketing, cross-reference marketing, and geo-based marketing",
  },
  {
    title: "Cost Efficiency & Automations",
    note: "Cut queue friction and automate checkout workflows from floor to back office",
  },
  {
    title: "Consumer Data & Analytics",
    note: "Turn every Scan & Pay journey into insights that grow basket size and loyalty",
  },
  {
    title: "Consumer Loyalty Opportunities",
    note: "Rewards, referrals, and seamless loyalty experiences that keep shoppers coming back",
  },
] as const;

export default function SoftwareFeatures() {
  return (
    <section
      id="software-features"
      className="relative overflow-x-clip bg-background py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <StaggerReveal className="max-w-3xl">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.24em] text-epaid sm:text-sm"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            Built for modern retail
          </motion.p>
          <motion.h2
            className="mt-4 sf-pro-display-semibold text-[1.875rem] font-semibold uppercase leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Everything retailers need to go cashless
          </motion.h2>
        </StaggerReveal>

        <StaggerReveal
          className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-12"
          stagger={0.07}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              variants={scaleIn}
              transition={{ duration: 0.55, ease: easeOut }}
              className="border-t border-[#00000030] pt-5 dark:border-white/20"
            >
              <span className="text-xs font-semibold tracking-wider text-epaid">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold uppercase leading-snug text-foreground sm:text-xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {feature.note}
              </p>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
