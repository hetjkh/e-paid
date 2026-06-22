"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRightIcon, ButtonIconBadge } from "./ButtonIconBadge";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  ScrollReveal,
  slideFromRight,
  StaggerReveal,
} from "./motion/scroll-motion";

const services = [
  {
    title: "Digital Solutions",
    description:
      "Modern platforms and software built to streamline operations and scale with your business.",
  },
  {
    title: "Payment Solutions",
    description:
      "Secure POS devices, terminals, and payment infrastructure for reliable in-store checkout.",
  },
  {
    title: "Advisory Services",
    description:
      "Expert guidance to help merchants adopt the right technology and grow with confidence.",
  },
];

const highlights = [
  { label: "POS devices & services" },
  { label: "Spin-off from Saudi Computer Systems (ITS)" },
  { label: "Trusted across Saudi Arabia" },
];

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-epaid" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.8L12 15.6 6.4 19.6l2.1-6.8L3 8.8h6.8L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatWeDo() {
  return (
    <section id="about" className="relative overflow-hidden bg-background pt-12 pb-20 lg:pt-16 lg:pb-28">
      <div className="pointer-events-none absolute right-0 top-1/4 z-0 h-[300px] w-[300px] translate-x-1/4 blur-[90px] glow-blue lg:h-[380px] lg:w-[380px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <ScrollReveal className="relative inline-block max-w-md overflow-hidden py-4 lg:py-6">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320%] w-[280%] -translate-x-[68%] -translate-y-1/2 blur-[80px] glow-blue" />
            <AnimatedText
              text="About ePaid"
              as="p"
              className="relative mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-epaid sm:text-base lg:mb-5 lg:text-lg"
            />
            <AnimatedText
              text="WHAT WE DO"
              as="h2"
              className="sf-pro-display-semibold relative text-4xl font-semibold uppercase leading-none tracking-normal text-epaid sm:text-5xl lg:text-[3.5rem]"
            />
          </ScrollReveal>

          <motion.p
            className="relative z-10 max-w-md text-base leading-relaxed text-muted-foreground lg:max-w-sm lg:pt-8 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            A spin-off from Saudi Computer Systems (ITS), delivering smart
            digital, payment, and advisory solutions for modern enterprises.
          </motion.p>
        </StaggerReveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,580px)] xl:gap-20">
          <StaggerReveal className="flex flex-col gap-8">
            <motion.p
              className="max-w-xl text-xl font-bold leading-snug text-foreground sm:text-2xl lg:text-[1.75rem] lg:leading-[1.4]"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              We help businesses grow with secure payment systems, digital
              platforms, and hands-on expert support.
            </motion.p>

            <motion.div className="flex flex-wrap gap-2.5" variants={fadeUp}>
              {highlights.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-border-soft bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:text-[13px]"
                >
                  {item.label}
                </span>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: easeOut }}
                  className="group flex gap-4 rounded-[20px] border border-border-soft bg-card px-5 py-5 transition-colors hover:border-epaid/40 dark:dark-card-shadow"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-epaid/10">
                    <ServiceIcon />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-epaid sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground dark:text-white sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div className="pt-2" variants={fadeUp}>
              <Link
                href="/about"
                className="btn-glow inline-flex items-center gap-4 rounded-full border-[3px] border-solid border-epaid bg-epaid py-2 pl-8 pr-2 text-base font-semibold uppercase leading-none tracking-normal text-white"
              >
                Know More
                <ButtonIconBadge>
                  <ArrowUpRightIcon />
                </ButtonIconBadge>
              </Link>
            </motion.div>
          </StaggerReveal>

          <ScrollReveal variant={slideFromRight} className="relative mx-auto w-full max-w-[580px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[5/6]">
              <Image
                src="/image1.png"
                alt="Customer making a card payment on a POS terminal"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
