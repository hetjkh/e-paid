"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const viewport = { once: true, margin: "-80px" as const };

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
};

export function ScrollReveal({
  children,
  variant = fadeUp,
  delay = 0,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variant}
      transition={{ duration: 0.65, ease: easeOut, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  stagger?: number;
};

export function StaggerReveal({
  children,
  stagger = 0.1,
  ...props
}: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "words" | "chars";
  delay?: number;
};

export function AnimatedText({
  text,
  className,
  as: Tag = "span",
  splitBy = "words",
  delay = 0,
}: AnimatedTextProps) {
  const MotionTag = motion[Tag];
  const units =
    splitBy === "chars" ? text.split("") : text.split(/(\s+)/).filter(Boolean);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: splitBy === "chars" ? 0.02 : 0.06,
            delayChildren: delay,
          },
        },
      }}
    >
      {units.map((unit, index) => (
        <motion.span
          key={`${unit}-${index}`}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: easeOut }}
          className="inline-block"
          style={{ whiteSpace: unit.trim() === "" ? "pre" : undefined }}
        >
          {unit}
        </motion.span>
      ))}
    </MotionTag>
  );
}

type AnimatedLinesProps = {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
};

export function AnimatedLines({
  lines,
  className,
  as: Tag = "h2",
  delay = 0,
}: AnimatedLinesProps) {
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
    >
      {lines.map((line, index) => (
        <motion.span
          key={line}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: easeOut }}
          className="block"
        >
          {line}
          {index < lines.length - 1 ? <br /> : null}
        </motion.span>
      ))}
    </MotionTag>
  );
}
