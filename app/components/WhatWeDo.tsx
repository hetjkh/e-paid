"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EpaidButton from "./EpaidButton";
import { ArrowUpRightIcon } from "./ButtonIconBadge";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  ScrollReveal,
  slideFromRight,
  StaggerReveal,
} from "./motion/scroll-motion";
import SectionTitleGlow from "./SectionTitleGlow";
import { DEFAULT_CMS } from "@/lib/cms";
import { useCmsBlock } from "@/lib/use-cms-block";

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
  const content = useCmsBlock("home.whatWeDo", DEFAULT_CMS["home.whatWeDo"]);
  const services =
    content.services?.length > 0
      ? content.services
      : DEFAULT_CMS["home.whatWeDo"].services;

  return (
    <section id="about" className="relative overflow-x-clip bg-background pt-12 pb-8 lg:pt-16 lg:pb-28">
      <div className="pointer-events-none absolute right-0 top-1/4 z-0 h-[300px] w-[300px] translate-x-1/4 blur-[90px] glow-blue lg:h-[380px] lg:w-[380px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <ScrollReveal>
            <SectionTitleGlow>
              <AnimatedText
                text={content.eyebrow}
                as="p"
                className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-epaid sm:text-base lg:mb-4 lg:text-lg"
              />
              <AnimatedText
                text={content.title}
                as="h2"
                className="sf-pro-display-semibold text-4xl font-semibold uppercase leading-none tracking-normal text-epaid sm:text-5xl lg:text-[3.5rem]"
              />
            </SectionTitleGlow>
          </ScrollReveal>

          <motion.p
            className="relative z-10 max-w-xl text-base leading-relaxed text-muted-foreground lg:max-w-md lg:pb-1 lg:text-left lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            {content.blurbLines.map((line) => (
              <span key={line} className="block sm:whitespace-nowrap">
                {line}
              </span>
            ))}
          </motion.p>
        </StaggerReveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-5 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,580px)] xl:gap-20">
          <StaggerReveal className="flex flex-col gap-8">
            <motion.p
              className="max-w-xl text-base font-bold leading-snug text-foreground sm:text-lg lg:text-xl lg:leading-[1.45]"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              {content.highlightLines.map((line) => (
                <span key={line} className="block sm:whitespace-nowrap">
                  {line}
                </span>
              ))}
            </motion.p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
              {services.map((service) => (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: easeOut }}
                  className="group flex gap-4 rounded-[20px] border-2 border-border-soft bg-card px-5 py-5 transition-colors hover:border-epaid/40 dark:dark-card-shadow"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-epaid/10">
                    <ServiceIcon />
                  </span>
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-wide text-epaid sm:text-lg lg:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground dark:text-white sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div className="hidden pt-2 lg:block" variants={fadeUp}>
              <EpaidButton
                href={content.knowMoreHref || "/about"}
                size="hero"
                className="py-2.5 pl-6 pr-2 text-sm sm:py-3 sm:pl-7 sm:pr-2.5 sm:text-base lg:text-lg"
                badgeClassName="outline-badge flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white transition-all duration-300 sm:h-9 sm:w-9"
                icon={<ArrowUpRightIcon className="h-3.5 w-3.5 text-current sm:h-4 sm:w-4" />}
              >
                {content.knowMoreLabel || "Know More"}
              </EpaidButton>
            </motion.div>
          </StaggerReveal>

          <div className="flex flex-col gap-4 lg:contents">
            <ScrollReveal
              variant={slideFromRight}
              className="relative mx-auto w-full max-w-[580px] lg:mx-0 lg:max-w-none"
            >
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 blur-[90px] glow-blue sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]"
                aria-hidden="true"
              />
              <div className="relative z-[1] mx-auto aspect-square w-full max-w-full sm:max-w-none lg:aspect-[5/6] lg:max-w-none">
                <Image
                  src="/image1.png"
                  alt="Customer making a card payment on a POS terminal"
                  fill
                  className="object-contain object-center max-lg:object-bottom"
                  sizes="(max-width: 1024px) 100vw, 580px"
                />
              </div>
            </ScrollReveal>

            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <EpaidButton
                href={content.knowMoreHref || "/about"}
                size="hero"
                className="py-2.5 pl-6 pr-2 text-sm sm:py-3 sm:pl-7 sm:pr-2.5 sm:text-base lg:text-lg"
                badgeClassName="outline-badge flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white transition-all duration-300 sm:h-9 sm:w-9"
                icon={<ArrowUpRightIcon className="h-3.5 w-3.5 text-current sm:h-4 sm:w-4" />}
              >
                {content.knowMoreLabel || "Know More"}
              </EpaidButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
