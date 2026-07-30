"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AnimatedLines,
  easeOut,
  fadeUp,
  StaggerReveal,
} from "./motion/scroll-motion";
import SectionTitleGlow from "./SectionTitleGlow";
import { DEFAULT_CMS } from "@/lib/cms";
import { useCmsBlock } from "@/lib/use-cms-block";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqContent = useCmsBlock("faq.items", DEFAULT_CMS["faq.items"]);
  const faqIntro = useCmsBlock("home.faqIntro", DEFAULT_CMS["home.faqIntro"]);
  const faqs =
    faqContent.items?.length > 0
      ? faqContent.items
      : DEFAULT_CMS["faq.items"].items;

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section id="faq" className="relative overflow-x-clip bg-background pb-24 pt-0 lg:pb-32 lg:pt-0">
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[280px] w-[320px] translate-x-[10%] translate-y-[25%] blur-[80px] glow-yellow lg:h-[320px] lg:w-[420px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-6 lg:px-10 lg:pt-8">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <SectionTitleGlow>
            <AnimatedLines
              lines={[faqIntro.titleLine1, faqIntro.titleLine2]}
              as="h2"
              className="sf-pro-display-semibold text-3xl font-semibold uppercase leading-tight text-epaid sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            />
          </SectionTitleGlow>

          <motion.p
            className="relative z-10 max-w-sm text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            {faqIntro.intro}
          </motion.p>
        </StaggerReveal>

        <StaggerReveal className="relative z-10 mt-12 space-y-4 lg:mt-14" stagger={0.08}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={`${faq.question}-${index}`}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: easeOut }}
                className="overflow-hidden rounded-[20px] border border-solid border-[#00000040] bg-card-muted transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left lg:px-8 lg:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold uppercase leading-snug text-foreground sm:text-base lg:text-lg">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-elevated shadow-sm dark:shadow-none">
                    {isOpen ? (
                      <svg
                        viewBox="0 0 24 24" className="h-4 w-4 text-foreground" aria-hidden="true">
                        <path
                          d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24" className="h-4 w-4 text-foreground" aria-hidden="true">
                        <path
                          d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 lg:px-8 lg:pb-8">
                      <ol className="list-none space-y-3 lg:space-y-4">
                        {faq.answer.map((point, pointIndex) => (
                          <li
                            key={point.slice(0, 40)}
                            className="flex gap-3 text-sm leading-relaxed lg:text-base"
                          >
                            <span className="shrink-0 font-semibold text-epaid">
                              {pointIndex + 1}.
                            </span>
                            <span className="text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
