"use client";

import { motion } from "framer-motion";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  StaggerReveal,
} from "../components/motion/scroll-motion";

export default function AboutMissionVision() {
  return (
    <section className="relative overflow-hidden bg-background py-8 lg:py-12">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
          <motion.div
            className="lg:border-r lg:border-border-soft lg:pr-14 xl:pr-20"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <div className="relative inline-block">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280%] w-[240%] -translate-x-[68%] -translate-y-1/2 blur-[80px] glow-blue" />
              <AnimatedText
                text="OUR MISSION"
                as="h2"
                className="relative whitespace-nowrap text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[2.75rem]"
              />
            </div>

            <motion.p
              className="mt-8 max-w-lg text-lg font-semibold leading-snug text-foreground sm:text-xl lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
            >
              Empower every merchant to grow with confidence.
            </motion.p>

            <motion.p
              className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.18 }}
            >
              We deliver secure, reliable POS and payment solutions that simplify
              daily operations, reduce friction at checkout, and help businesses
              across Saudi Arabia scale without compromise.
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:pl-14 xl:pl-20"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut, delay: 0.08 }}
          >
            <AnimatedText
              text="OUR VISION"
              as="h2"
              className="whitespace-nowrap text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[2.75rem]"
            />

            <motion.p
              className="mt-8 max-w-lg text-lg font-semibold leading-snug text-foreground sm:text-xl lg:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
            >
              Lead cashless retail transformation across the region.
            </motion.p>

            <motion.p
              className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.22 }}
            >
              To become the most trusted MSP POS partner — combining deep
              technical expertise, nationwide support, and innovative fintech to
              shape the future of in-store commerce.
            </motion.p>
          </motion.div>
        </StaggerReveal>
      </div>
    </section>
  );
}
