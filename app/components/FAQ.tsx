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

const faqs = [
  {
    question: "HOW DO I USE EPAID TO SCAN AND PAY FOR ITEMS IN-STORE?",
    answer: [
      "With ePaid, paying for your shopping is instantaneous — no waiting in lines or fumbling with cash. The moment you check out in the app, your payment is processed and a digital receipt is issued instantly, securely stored in your account.",
      "Unlike traditional paper receipts that fade, tear, or get lost, your Satocci receipts are always safe, accessible, and trackable. Need to share one? Do it in a single tap — no more awkwardly photographing long, oddly sized receipts that never fit properly in the camera frame.",
      "With Satocci, you enjoy a frictionless, eco-friendly, and clutter-free shopping experience, where your payments are faster and your receipts never disappear.",
    ],
  },
  {
    question:
      "HOW DOES PAYMENT WORK — WHICH PAYMENT METHODS ARE SUPPORTED?",
    answer: [
      "ePaid supports a wide range of secure payment methods including credit and debit cards, NFC contactless payments, magstripe and chip cards, as well as QR code payments.",
      "All transactions are processed through encrypted channels, ensuring your payment data remains protected at every step of the checkout process.",
    ],
  },
  {
    question:
      "WHEN I PAY WITH EPAID, HOW DO I SHOW PROOF OF PURCHASE IF ASKED BY STORE STAFF?",
    answer: [
      "Every ePaid transaction generates a digital receipt stored directly in your app. Simply open the receipt from your transaction history and show it to store staff if requested.",
      "Each receipt includes a unique transaction ID, timestamp, and item details, providing full proof of purchase without needing a paper copy.",
    ],
  },
  {
    question: "IS MY PAYMENT INFORMATION SECURE IN THE SATOCCI APP?",
    answer: [
      "Yes. ePaid uses industry-standard encryption and tokenization to protect your payment information. Your card details are never stored on your device or shared with merchants.",
      "All transactions comply with PCI DSS security standards, and multi-factor authentication adds an extra layer of protection to your account.",
    ],
  },
  {
    question:
      "CAN I STILL COLLECT LOYALTY POINTS, COUPONS, OR DISCOUNTS WHEN USING EPAID?",
    answer: [
      "Absolutely. ePaid integrates with store loyalty programs, allowing you to earn and redeem points, apply coupons, and access member discounts seamlessly at checkout.",
      "Simply link your loyalty account in the app settings, and your rewards will be automatically applied to every eligible purchase.",
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
              lines={["FREQUENTLY ASKED", "QUESTIONS"]}
              as="h2"
              className="sf-pro-display-semibold text-3xl font-semibold uppercase leading-tight text-epaid sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            />
          </SectionTitleGlow>

          <motion.p
            className="relative z-10 max-w-sm text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Got questions? We&apos;ve got answers. Explore the most common
            queries about Satocci, how it works, and how it makes your
            shopping experience easier.
          </motion.p>
        </StaggerReveal>

        <StaggerReveal className="relative z-10 mt-12 space-y-4 lg:mt-14" stagger={0.08}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: easeOut }}
                className="overflow-hidden rounded-[20px] border border-border-soft bg-card-muted transition-all"
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
