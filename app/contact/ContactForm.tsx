"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  ScrollReveal,
  StaggerReveal,
} from "../components/motion/scroll-motion";
import EpaidButton from "../components/EpaidButton";
import CountryCodeSelect from "../components/CountryCodeSelect";
import { outlineBadgeClassName } from "../components/button-styles";
import {
  formFieldBorderClassName,
  formFieldTextClassName,
  formInputClassName,
} from "../components/form-styles";
import { cn } from "@/lib/utils";

const formRowTwoColClassName =
  "grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 min-[360px]:gap-3 min-[480px]:gap-5";

const formRowPhoneClassName = "flex items-start gap-3 min-[480px]:gap-5";

const inputClassName = formInputClassName;

function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -top-2.5 left-3 max-w-[calc(100%-1rem)] truncate bg-card px-1 text-[10px] text-muted-foreground sm:left-5 sm:max-w-none sm:text-xs">
      {children}
    </span>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#bbb]" fill="currentColor" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#bbb]" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#bbb]" fill="none" aria-hidden="true">
      <path
        d="M8 3h2l1 4-2 1a11 11 0 0 0 5 5l1-2 4 1v2a2 2 0 0 1-2 2A15 15 0 0 1 6 5a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FormField({
  label,
  icon,
  type = "text",
  placeholder,
  required,
  className,
}: {
  label: string;
  icon?: ReactNode;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`relative block min-w-0 ${className ?? ""}`}>
      <FieldLabel>{label}</FieldLabel>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClassName}
      />
      {icon && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 sm:right-4">
          {icon}
        </span>
      )}
    </label>
  );
}

const inquiryTypes = [
  "Product Demo",
  "POS Installation",
  "Technical Support",
  "Partnership",
  "General Inquiry",
];

export default function ContactForm() {
  return (
    <section id="contact-form" className="relative overflow-hidden bg-background py-10 sm:py-12 lg:py-16">
      <div className="pointer-events-none absolute -left-10 top-0 h-48 w-48 rounded-full bg-[#0471AD]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ScrollReveal>
            <AnimatedText
              text="CONTACT FORM"
              as="h2"
              className="text-2xl font-bold uppercase text-foreground sm:text-3xl lg:text-4xl"
            />

            <motion.p
              className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.1 }}
            >
              Tell us about your business and we&apos;ll recommend the right POS
              setup, pricing, and rollout plan for your stores.
            </motion.p>

            <form className="mt-8 sm:mt-10" onSubmit={(e) => e.preventDefault()}>
              <StaggerReveal className="space-y-4 sm:space-y-5" stagger={0.08}>
                <motion.div
                  className={formRowTwoColClassName}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: easeOut }}
                >
                  <FormField
                    label="Full Name (mandatory)"
                    icon={<UserIcon />}
                    placeholder="Enter full name"
                    required
                  />
                  <FormField
                    label="Store name (Optional)"
                    icon={<UserIcon />}
                    placeholder="Enter store name"
                  />
                </motion.div>

                <motion.div
                  className={formRowTwoColClassName}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: easeOut }}
                >
                  <FormField
                    label="Email (mandatory)"
                    type="email"
                    icon={<EnvelopeIcon />}
                    placeholder="Enter email"
                    required
                  />
                  <FormField
                    label="Address (Optional)"
                    icon={<EnvelopeIcon />}
                    placeholder="Enter address"
                  />
                </motion.div>

                <motion.div
                  className={formRowPhoneClassName}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: easeOut }}
                >
                  <label className="relative w-[7.25rem] shrink-0 sm:w-[7.75rem]">
                    <FieldLabel>Code</FieldLabel>
                    <CountryCodeSelect defaultDialCode="+966" />
                  </label>
                  <FormField
                    label="Phone (mandatory)"
                    type="tel"
                    icon={<PhoneIcon />}
                    placeholder="Enter phone"
                    required
                    className="min-w-0 flex-1"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: easeOut }}
                >
                  <FormField
                    label="Company URL (Optional)"
                    icon={<PhoneIcon />}
                    placeholder="Enter company URL"
                  />
                </motion.div>

                <motion.div
                  className={formRowTwoColClassName}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: easeOut }}
                >
                  <label className="relative block min-w-0">
                    <FieldLabel>Inquiry Type (Optional)</FieldLabel>
                    <select
                      defaultValue=""
                      className={`${inputClassName} appearance-none`}
                    >
                      <option value="" disabled>
                        Select inquiry type
                      </option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                  <FormField
                    label="Number of branches (Optional)"
                    placeholder="e.g. 3 stores"
                  />
                </motion.div>

                <motion.div
                  className={formRowTwoColClassName}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: easeOut }}
                >
                  <FormField
                    label="What POS do you use? (Optional)"
                    placeholder="Enter POS system"
                  />
                  <FormField
                    label="Range of daily customers (Optional)"
                    placeholder="Enter range"
                  />
                </motion.div>

                <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: easeOut }}>
                  <FormField label="Referral (Optional)" placeholder="Enter referral" />
                </motion.div>

                <motion.label
                  className="relative block"
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: easeOut }}
                >
                  <FieldLabel>Message</FieldLabel>
                  <textarea
                    rows={5}
                    placeholder="Write your message"
                    className={`min-h-[8.5rem] w-full resize-none rounded-[28px] bg-card px-4 py-4 text-base sm:px-5 sm:text-sm ${formFieldBorderClassName} ${formFieldTextClassName}`}
                  />
                </motion.label>

                <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: easeOut }}>
                  <EpaidButton
                    type="submit"
                    className="w-full sm:inline-flex sm:w-auto sm:justify-start"
                    badgeClassName={cn(outlineBadgeClassName, "h-10 w-10")}
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 12l16-7-7 16-2-7-7-7z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  >
                    SUBMIT
                  </EpaidButton>
                </motion.div>
              </StaggerReveal>
            </form>
          </ScrollReveal>

          <ScrollReveal variant={fadeUp} className="mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none lg:pt-12">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/image1.png"
                alt="Customer making a card payment on a POS terminal"
                width={640}
                height={480}
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
