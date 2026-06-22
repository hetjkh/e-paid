"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  AnimatedLines,
  easeOut,
  fadeUp,
  StaggerReveal,
} from "../components/motion/scroll-motion";

const values = [
  {
    title: "Innovation that keeps our solutions ahead",
    description:
      "We embrace change and continuously evolve, ensuring our solutions stay ahead in a dynamic world.",
  },
  {
    title: "Reliable POS solutions built for business growth",
    description:
      "Our systems are designed for stability and scalability, helping businesses expand with confidence.",
  },
  {
    title: "Seamless technology that simplifies daily operations",
    description:
      "We build intuitive tools that reduce complexity and keep teams focused on what matters most.",
  },
  {
    title: "Customer support focused on long-term business success",
    description:
      "We partner with clients beyond launch, providing ongoing guidance and responsive support.",
  },
];

export default function CoreValues() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-10 lg:pt-12 lg:pb-14">
      <div className="pointer-events-none absolute right-0 top-1/3 h-48 w-48 rounded-full bg-yellow-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-16">
          <StaggerReveal className="min-w-0 w-full max-w-full lg:pt-1">
            <AnimatedLines
              lines={[
                "Core Values That Shape",
                "Every Project And",
                "Partnership",
              ]}
              as="h2"
              className="core-values-heading text-[2.125rem] font-semibold leading-tight tracking-normal text-foreground sm:text-4xl lg:text-[2.75rem] lg:[&>span:first-child]:whitespace-nowrap"
            />
          </StaggerReveal>

          <StaggerReveal className="space-y-4 lg:space-y-5" stagger={0.08}>
          {values.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: easeOut }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(4, 113, 173, 0.1)",
                }}
                className={`overflow-hidden rounded-[24px] border bg-card-muted transition-colors duration-300 ${
                  isOpen
                    ? "border-epaid/40"
                    : "border-border-soft hover:border-epaid/25"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full min-h-[72px] items-center justify-between gap-5 px-7 py-6 text-left lg:min-h-[84px] lg:px-10 lg:py-8"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`core-values-card-title text-xl leading-snug transition-colors duration-300 sm:text-[1.375rem] lg:text-2xl ${
                      isOpen ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.title}
                  </span>

                  <motion.span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-elevated shadow-sm lg:h-11 lg:w-11"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(4, 113, 173, 0.12)",
                    }}
                    transition={{ duration: 0.25, ease: easeOut }}
                  >
                    {isOpen ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-foreground"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 text-foreground"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 6v12M6 12h12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: easeOut }}
                  className="overflow-hidden"
                >
                  <p className="core-values-card-answer px-7 pb-7 pt-0 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:px-10 lg:pb-8 lg:text-[1.375rem]">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
