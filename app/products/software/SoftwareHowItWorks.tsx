"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  easeOut,
  fadeUp,
  scaleIn,
  StaggerReveal,
} from "@/app/components/motion/scroll-motion";

const steps = [
  {
    number: "01",
    title: "Scan",
    description:
      "Quickly scan items as you shop. No need to wait in line or find a cashier. Just scan and add to your cart instantly.",
  },
  {
    number: "02",
    title: "Pay",
    description:
      "Pay securely with your preferred method. Apple Pay, cards, or BNPL options — all in one seamless checkout experience.",
  },
  {
    number: "03",
    title: "Go",
    description:
      "Walk out as soon as you finish. No lines, no waiting. Just complete your purchase and go — freedom to enjoy your day.",
  },
] as const;

export default function SoftwareHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-x-clip bg-[#0c1424] py-16 text-white sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#0471AD]/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <StaggerReveal className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12 xl:gap-16">
          <motion.div
            variants={scaleIn}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:mx-0 lg:max-w-[480px]"
          >
            <Image
              src="/satocci-mobile.png"
              alt="Satocci mobile app — wallet, scan, and transactions"
              width={720}
              height={1280}
              className="h-auto w-full object-contain"
              sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 480px"
            />
          </motion.div>

          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.24em] text-epaid-yellow sm:text-sm"
              variants={fadeUp}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              See how it works
            </motion.p>

            <motion.h2
              className="mt-4 sf-pro-display-semibold text-[1.875rem] font-semibold uppercase leading-[1.1] sm:text-4xl lg:text-[2.75rem]"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              Say goodbye to
              <span className="block">stressful shopping</span>
            </motion.h2>

            <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6"
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    ease: easeOut,
                    delay: 0.08 * index,
                  }}
                >
                  <span className="pt-1 font-mono text-sm font-semibold tracking-wider text-epaid-yellow sm:text-base">
                    {step.number}
                  </span>
                  <div className="border-t border-white/15 pt-4 sm:pt-5">
                    <h3 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
