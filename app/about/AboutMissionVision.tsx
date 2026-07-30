"use client";

import { motion } from "framer-motion";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  StaggerReveal,
} from "../components/motion/scroll-motion";
import { DEFAULT_CMS } from "@/lib/cms";
import { useCmsBlock } from "@/lib/use-cms-block";

export default function AboutMissionVision() {
  const content = useCmsBlock(
    "about.missionVision",
    DEFAULT_CMS["about.missionVision"]
  );

  return (
    <section className="relative overflow-hidden bg-background py-10 lg:py-14">
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#0471AD]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-0">
          <motion.div
            className="lg:border-r lg:border-border-soft lg:pr-14 xl:pr-20"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <div className="relative inline-block">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[280%] w-[240%] -translate-x-[68%] -translate-y-1/2 blur-[80px] glow-blue"
                aria-hidden="true"
              />
              <AnimatedText
                text={content.missionLabel}
                as="h2"
                className="core-values-heading relative text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[2.75rem]"
              />
            </div>

            <div className="mt-6 h-1 w-16 rounded-full bg-epaid-yellow lg:mt-8" />

            <motion.p
              className="sf-pro-display-medium mt-8 max-w-lg text-xl font-medium leading-snug text-foreground sm:text-2xl lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            >
              {content.missionHeadline}
            </motion.p>

            <motion.p
              className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.18 }}
            >
              {content.missionBody}
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:pl-14 xl:pl-20"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.08 }}
          >
            <AnimatedText
              text={content.visionLabel}
              as="h2"
              className="core-values-heading text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[2.75rem]"
            />

            <div className="mt-6 h-1 w-16 rounded-full bg-epaid-yellow lg:mt-8" />

            <motion.p
              className="sf-pro-display-medium mt-8 max-w-lg text-xl font-medium leading-snug text-foreground sm:text-2xl lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
            >
              {content.visionHeadline}
            </motion.p>

            <motion.p
              className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.22 }}
            >
              {content.visionBody}
            </motion.p>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
  );
}
