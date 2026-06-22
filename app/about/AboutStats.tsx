"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  easeOut,
  scaleIn,
  StaggerReveal,
} from "../components/motion/scroll-motion";

const stats = [
  {
    value: "295+",
    title: "Stores Integrated",
    description: "across retail, F&B, and service industries",
  },
  {
    value: "50+",
    title: "Enterprise Clients",
    description: "Serving large scale businesses worldwide",
  },
  {
    value: "99.9%",
    title: "System Uptime",
    description: "Reliable transactions without interruptions",
  },
  {
    value: "24/7",
    title: "Technical Support",
    description: "Always available for business continuity",
  },
  {
    value: "15+",
    title: "Industry Experience",
    description: "Proven expertise in payment solutions",
  },
];

function CountUpValue({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(() => getInitialDisplay(value));

  useEffect(() => {
    if (!inView) return;

    let timeoutId: number | undefined;
    let controls: { stop: () => void } | undefined;

    const start = () => {
      if (value === "24/7") {
        controls = animate(0, 24, {
          duration: 1.2,
          ease: easeOut,
          onUpdate: (v) => setDisplay(`${Math.round(v)}/7`),
        });
        return;
      }

      const match = value.match(/^([\d.]+)(.*)$/);
      if (!match) {
        setDisplay(value);
        return;
      }

      const end = parseFloat(match[1]);
      const suffix = match[2];
      const decimals = match[1].includes(".")
        ? (match[1].split(".")[1]?.length ?? 0)
        : 0;

      controls = animate(0, end, {
        duration: 1.6,
        ease: easeOut,
        onUpdate: (v) => {
          setDisplay(
            decimals > 0
              ? `${v.toFixed(decimals)}${suffix}`
              : `${Math.round(v)}${suffix}`
          );
        },
      });
    };

    if (delay > 0) {
      timeoutId = window.setTimeout(start, delay * 1000);
    } else {
      start();
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      controls?.stop();
    };
  }, [delay, inView, value]);

  return (
    <motion.span
      ref={ref}
      className="sf-pro-display-semibold inline-block text-4xl font-semibold text-foreground sm:text-5xl lg:text-[3rem] xl:text-[3.25rem]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: easeOut, delay }}
    >
      {display}
    </motion.span>
  );
}

function getInitialDisplay(value: string) {
  if (value === "24/7") return "0/7";
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return value;
  const suffix = match[2];
  const decimals = match[1].includes(".")
    ? (match[1].split(".")[1]?.length ?? 0)
    : 0;
  return decimals > 0 ? `0.${"0".repeat(decimals)}${suffix}` : `0${suffix}`;
}

export default function AboutStats() {
  return (
    <section className="relative z-0 bg-background pb-10 pt-6 lg:pb-12 lg:pt-8">
      <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#0471AD]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal
          className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8 xl:gap-10"
          stagger={0.1}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={scaleIn}
              transition={{ duration: 0.55, ease: easeOut }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="cursor-default rounded-2xl px-3 py-6 text-center transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(4,113,173,0.12)] lg:px-4 lg:py-8"
            >
              <CountUpValue value={stat.value} delay={index * 0.08} />
              <p className="sf-pro-display-medium mt-4 text-base font-medium text-foreground transition-colors duration-300 group-hover:text-epaid sm:text-lg lg:mt-5 lg:text-xl">
                {stat.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base lg:mt-4">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
