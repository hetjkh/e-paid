"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  StaggerReveal,
} from "./motion/scroll-motion";
import SectionTitleGlow from "./SectionTitleGlow";

const steps = [
  {
    title: "CONSULTATION",
    description:
      "We understand your business goals, challenges, and audience to define the right digital direction.",
    icon: "/icons/Cunsultant 1.png",
    alt: "Consultation icon",
  },
  {
    title: "DEVELOP",
    description:
      "We design and develop secure, high-performing digital solutions tailored to your business needs.",
    icon: "/icons/Cunsultant 1 (1).png",
    alt: "Develop icon",
  },
  {
    title: "OPERATE",
    description:
      "Our cross-country field engineers ensure smooth operations, on-ground support, and reliable nationwide service delivery.",
    icon: "/icons/Cunsultant 1 (3).png",
    alt: "Operate icon",
  },
  {
    title: "MAINTAIN",
    description:
      "We provide ongoing maintenance, performance optimization, updates, and dedicated support to keep systems running smoothly.",
    icon: "/icons/Cunsultant 1 (2).png",
    alt: "Maintain icon",
  },
];

export default function HowWeDoIt() {
  return (
    <section className="section-tone relative overflow-x-clip bg-background pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <SectionTitleGlow>
            <AnimatedText
              text="HOW WE DO IT"
              as="h2"
              className="sf-pro-display-semibold text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[2.75rem]"
            />
          </SectionTitleGlow>

          <motion.p
            className="relative z-10 max-w-sm text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            We follow a structured, collaborative approach to plan, build,
            operate, and continuously improve digital solutions for long-term
            business success.
          </motion.p>
        </StaggerReveal>

        <StaggerReveal
          className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5"
          stagger={0.12}
        >
          {steps.map((step) => (
            <motion.article
              key={step.title}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: easeOut }}
              className="relative flex flex-col rounded-[20px] border border-border-soft bg-card px-6 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:dark-card-shadow"
            >
              <div className="relative z-10 mb-6 flex justify-center">
                <Image
                  src={step.icon}
                  alt={step.alt}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <AnimatedText
                text={step.title}
                as="h3"
                className="relative z-10 text-xl font-semibold uppercase leading-none tracking-normal text-epaid dark:text-white lg:text-2xl"
              />
              <motion.p
                className="relative z-10 mt-4 text-sm leading-relaxed text-muted-foreground dark:text-white"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: easeOut, delay: 0.15 }}
              >
                {step.description}
              </motion.p>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
