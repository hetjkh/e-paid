"use client";

import { motion } from "framer-motion";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  StaggerReveal,
} from "../components/motion/scroll-motion";

const milestones = [
  {
    year: "1981",
    title: "ITS founded",
    description:
      "Established by Kuwait Finance House, beginning a legacy in payments and technology.",
  },
  {
    year: "1992",
    title: "POS in Saudi Arabia",
    description:
      "ITS Saudi begins delivering POS services across the Kingdom.",
  },
  {
    year: "2019",
    title: "Saudi independence",
    description:
      "ITS Saudi Computer Systems becomes an independent, locally owned company.",
  },
  {
    year: "2024",
    title: "ePaid launches",
    description:
      "ePaid spins off as a focused MSP POS company for modern merchants.",
  },
];

export default function AboutHeritage() {
  return (
    <section className="section-tone relative overflow-hidden bg-background py-8 lg:py-12">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="relative max-w-md">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280%] w-[240%] -translate-x-[68%] -translate-y-1/2 blur-[80px] glow-blue" />
            <AnimatedText
              text="OUR HERITAGE"
              as="h2"
              className="relative text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[2.75rem]"
            />
          </div>

          <motion.p
            className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Four decades of payment expertise — from ITS to ePaid, built on
            reliability, innovation, and merchant success.
          </motion.p>
        </StaggerReveal>

        <div className="relative mt-14 lg:mt-16">
          <div
            className="pointer-events-none absolute bottom-0 left-[5px] top-0 w-px bg-border-soft lg:bottom-auto lg:left-0 lg:right-0 lg:top-2 lg:h-px lg:w-auto"
            aria-hidden="true"
          />

          <StaggerReveal
            className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6"
            stagger={0.1}
          >
            {milestones.map((item) => (
              <motion.article
                key={item.year}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: easeOut }}
                className="group relative pl-8 lg:pl-0 lg:pt-8"
              >
                <span
                  className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-epaid ring-4 ring-background lg:top-0 lg:translate-x-0"
                  aria-hidden="true"
                />

                <p className="text-3xl font-bold leading-none text-foreground transition-colors duration-300 group-hover:text-epaid sm:text-4xl">
                  {item.year}
                </p>
                <h3 className="mt-3 text-base font-bold text-foreground sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
