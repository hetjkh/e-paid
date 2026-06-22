"use client";

import { motion } from "framer-motion";
import {
  AnimatedLines,
  AnimatedText,
  easeOut,
  fadeUp,
  scaleIn,
  StaggerReveal,
} from "../components/motion/scroll-motion";

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=King+Fahd+Road,+Olaya+District,+Riyadh,+Saudi+Arabia&hl=en&z=15&output=embed";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=King+Fahd+Road,+Olaya+District,+Riyadh,+Saudi+Arabia";

const contactChannels = [
  {
    title: "Sales Inquiries",
    value: "sales@epaid.com",
    detail: "POS devices, pricing, and enterprise packages",
    href: "mailto:sales@epaid.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Technical Support",
    value: "+966 11 000 0000",
    detail: "24/7 assistance for terminals and integrations",
    href: "tel:+966110000000",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M8 3h2l1 4-2 1a11 11 0 0 0 5 5l1-2 4 1v2a2 2 0 0 1-2 2A15 15 0 0 1 6 5a2 2 0 0 1 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Head Office",
    value: "Riyadh, Saudi Arabia",
    detail: "King Fahd Road, Olaya District",
    href: MAP_LINK,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Business Hours",
    value: "Sun – Thu, 9 AM – 6 PM",
    detail: "Friday & Saturday: closed",
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const supportHighlights = [
  "Free consultation for new merchants",
  "On-site installation and staff training",
  "Dedicated account manager for enterprise clients",
  "Fast response within 24 business hours",
];

export default function ContactDetails() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-12 lg:pt-10 lg:pb-16">
      <div className="pointer-events-none absolute -right-20 top-1/4 h-48 w-48 rounded-full bg-[#0471AD]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="relative max-w-lg">
            <AnimatedText
              text="GET IN TOUCH"
              as="p"
              className="relative text-sm font-semibold uppercase tracking-[0.2em] text-epaid"
            />
            <AnimatedLines
              lines={["WE'RE HERE", "TO HELP"]}
              as="h2"
              className="relative mt-3 text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-foreground sm:text-4xl lg:text-[2.75rem]"
            />
          </div>
          <motion.p
            className="max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Reach our team for sales, support, or partnership inquiries. We
            respond quickly and guide you through every step.
          </motion.p>
        </StaggerReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-10 xl:gap-12">
          <div className="flex flex-col gap-8">
            <StaggerReveal
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              stagger={0.08}
            >
              {contactChannels.map((channel) => (
                <motion.article
                  key={channel.title}
                  variants={scaleIn}
                  transition={{ duration: 0.55, ease: easeOut }}
                  whileHover={{ y: -4 }}
                  className="group rounded-[20px] border border-border-soft bg-card p-5 transition-shadow duration-300 hover:border-epaid/30 hover:shadow-[0_12px_32px_rgba(4,113,173,0.12)] lg:p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-epaid/10 text-epaid transition-colors duration-300 group-hover:bg-epaid group-hover:text-white">
                    {channel.icon}
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-epaid">
                    {channel.title}
                  </p>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-2 block text-base font-bold text-foreground transition-colors hover:text-epaid lg:text-lg"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base font-bold text-foreground lg:text-lg">
                      {channel.value}
                    </p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {channel.detail}
                  </p>
                </motion.article>
              ))}
            </StaggerReveal>

            <motion.div
              className="rounded-[24px] border border-border-soft bg-card-muted px-6 py-7 lg:px-8 lg:py-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              <h3 className="text-lg font-bold text-foreground lg:text-xl">
                What you can expect from our team
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {supportHighlights.map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      ease: easeOut,
                      delay: index * 0.07,
                    }}
                  >
                    <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-epaid/15">
                      <svg
                        viewBox="0 0 12 12"
                        className="h-2.5 w-2.5 text-epaid"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="flex h-full min-h-[360px] flex-col lg:min-h-[520px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <div className="flex flex-1 flex-col overflow-hidden rounded-[24px] border border-border-soft bg-card shadow-[0_8px_32px_rgba(4,113,173,0.08)] dark:shadow-[0_8px_32px_rgba(4,113,173,0.15)]">
              <div className="border-b border-border-soft px-5 py-4 lg:px-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-epaid">
                  Find us
                </p>
                <p className="mt-1 text-base font-bold text-foreground">
                  King Fahd Road, Olaya District
                </p>
                <p className="text-sm text-muted-foreground">Riyadh, Saudi Arabia</p>
              </div>

              <div className="relative min-h-[280px] flex-1 bg-card-muted lg:min-h-[380px]">
                <iframe
                  title="ePaid head office location on Google Maps"
                  src={MAP_EMBED_URL}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="border-t border-border-soft px-5 py-4 lg:px-6">
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-epaid transition-colors hover:text-epaid-dark"
                >
                  Open in Google Maps
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17L17 7M17 7H9M17 7v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
