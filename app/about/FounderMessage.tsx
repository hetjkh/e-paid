"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  slideFromLeft,
  slideFromRight,
  StaggerReveal,
} from "../components/motion/scroll-motion";

export default function FounderMessage() {
  return (
    <section className="relative overflow-hidden bg-background pb-8 pt-10 lg:pb-12 lg:pt-14">
      <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-[#0471AD]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-yellow-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <AnimatedText
            text="Founder's Message"
            as="h2"
            className="text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-foreground sm:text-4xl lg:text-[2.75rem]"
          />

          <motion.p
            className="max-w-md text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Hear from our founder on the vision, values, and commitment behind
            ePaid&apos;s mission to deliver reliable payment and fintech
            solutions worldwide.
          </motion.p>
        </StaggerReveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-14 lg:mt-14 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-20 xl:gap-28">
          <motion.div
            className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-[480px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideFromLeft}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <motion.div
              className="group rounded-[20px] border border-border-soft bg-card p-3.5 transition-colors duration-300 hover:border-epaid/35 lg:p-4"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <div className="overflow-hidden rounded-[16px]">
                <Image
                  src="/meh.png"
                  alt="Mr. Mahboob Al-Abdulrahman, Founder and CEO"
                  width={480}
                  height={576}
                  className="aspect-[4/5] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="founder-quote-font font-medium max-w-xl lg:max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={slideFromRight}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          >
            <motion.blockquote
              className="font-medium text-2xl leading-relaxed text-foreground sm:text-[1.625rem] lg:text-[1.875rem] lg:leading-[1.65] xl:text-[2rem]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: easeOut, delay: 0.15 }}
            >
              &ldquo;At ePaid, we started with one simple belief:{" "}
              <span className="text-epaid">
                Payments should never slow a business down.
              </span>{" "}
              What began as a small idea is now a growing global network. Our
              team builds reliable &amp; Innovative{" "}
              <span className="text-epaid">
                Reliable Payment Solution &amp; Fintech solutions with care,
              </span>{" "}
              listening to real merchants and growing together, every single day
              with honesty, trust, and purpose.&rdquo;
            </motion.blockquote>

            <motion.div
              className="mt-8 lg:mt-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.25 }}
            >
              <p className="font-medium text-[1.75rem] text-foreground sm:text-[1.875rem] lg:text-[2.125rem]">
                Mr. Mahboob Al-Abdulrahman
              </p>
              <p className="font-medium mt-1.5 text-[1.375rem] text-epaid sm:text-[1.625rem] lg:text-2xl">
                Founder &amp; CEO
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
