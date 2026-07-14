"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitleGlow from "./SectionTitleGlow";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  scaleIn,
  StaggerReveal,
} from "./motion/scroll-motion";

type TimelineEvent = {
  year: string;
  title?: string;
  description: string;
  image?: string;
  logo?: string;
};

const timelineEvents: TimelineEvent[] = [
  {
    year: "1981",
    title: "The beginning",
    description: "ITS was established by Kuwait Finance House (KFH).",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1.png",
  },
  {
    year: "1987",
    description: "ITS opened its first office outside Kuwait in Bahrain.",
  },
  {
    year: "1988",
    description:
      "Before 1988, ITS was a small operation with around 60 employees and US$ 5 million of revenue, totally dependent on Tandem hardware sales. ITS management changed and a new era in ITS started by a group of young managers.",
  },
  {
    year: "1991",
    description:
      "ITS re-opened its HQ office in Kuwait after the country's liberation.",
  },
  {
    year: "2000",
    description: "ITS opened its Development Center in Cairo, Egypt.",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (1).png",
  },
  {
    year: "2001",
    description: "ITS revenues crossed 100$ million.",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (2).png",
  },
  {
    year: "2008",
    description: "ITS rebranded to 'ITS Group'.",
  },
  {
    year: "2019",
    description:
      "By March 2019, ITS Saudi Computer systems branch became an independent company with local experienced ownership.",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (3).png",
  },
  {
    year: "2024",
    description:
      "ePaid Company is spind off ITS Saudi computer systems in 2024",
    image: "/timeline/AxBHUIoR-Kuwait-Finance-House-2 1 (4).png",
    logo: "/Group.png",
  },
];

const cardHover = {
  y: -6,
  scale: 1.02,
  boxShadow: "0 16px 44px rgba(4, 113, 173, 0.16)",
  transition: { duration: 0.3, ease: easeOut },
};

const cardEntrance = {
  up: {
    hidden: { opacity: 0, y: 32, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -28, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  right: {
    hidden: { opacity: 0, x: 28, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
} as const;

const contentStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

function TimelineCard({
  event,
  compact = false,
  entrance = "up",
  animationDelay = 0,
}: {
  event: TimelineEvent;
  compact?: boolean;
  entrance?: keyof typeof cardEntrance;
  animationDelay?: number;
}) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardEntrance[entrance]}
      transition={{ duration: 0.62, ease: easeOut, delay: animationDelay }}
      whileHover={cardHover}
      whileTap={{ scale: 0.98 }}
      className={`w-full rounded-2xl border border-solid border-[#00000040] bg-card shadow-[0_10px_38px_rgba(0,0,0,0.10)] transition-colors duration-300 hover:border-epaid/40 ${
        compact ? "p-2.5 sm:p-3" : "p-4 sm:p-5"
      }`}
    >
      {event.image && (
        <motion.div
          className={`relative mb-3 overflow-hidden rounded-xl ${
            compact ? "aspect-[4/3]" : "mb-4 aspect-[4/3]"
          }`}
          initial={{ opacity: 0, y: 18, scale: 1.04 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: easeOut, delay: animationDelay + 0.05 }}
        >
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <Image
              src={event.image}
              alt={`${event.year} milestone`}
              fill
              className="object-cover"
              sizes={compact ? "(max-width: 640px) 44vw, 320px" : "(max-width: 640px) 100vw, 320px"}
            />
          </motion.div>
        </motion.div>
      )}

      <motion.div variants={contentStagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}>
        {event.logo && (
          <motion.div
            className="mb-2 flex justify-center sm:mb-3"
            variants={scaleIn}
            transition={{ duration: 0.45, ease: easeOut }}
          >
            <Image
              src={event.logo}
              alt="ePAiD logo"
              width={120}
              height={40}
              className="h-6 w-auto object-contain sm:h-8"
            />
          </motion.div>
        )}

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: easeOut }}
          className={`font-bold leading-none text-foreground ${
            compact
              ? "text-lg sm:text-2xl"
              : "text-[1.75rem] sm:text-3xl"
          }`}
        >
          {event.year}
        </motion.p>

        {event.title && (
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: easeOut }}
            className={`font-bold text-foreground ${
              compact ? "mt-1 text-[11px] sm:text-sm" : "mt-1.5 text-sm"
            }`}
          >
            {event.title}
          </motion.p>
        )}

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: easeOut }}
          className={`leading-relaxed text-muted-foreground ${
            compact
              ? `text-[11px] leading-snug sm:text-xs ${event.title ? "mt-0.5" : "mt-1.5"}`
              : `text-sm ${event.title ? "mt-1" : "mt-2"}`
          }`}
        >
          {event.description}
        </motion.p>
      </motion.div>
    </motion.article>
  );
}

function TimelineDot({ animationDelay = 0 }: { animationDelay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: easeOut, delay: animationDelay }}
      whileHover={{ scale: 1.35, borderColor: "#0471ad" }}
      className="relative z-20 h-3 w-3 shrink-0 rounded-full border-2 border-black bg-background dark:border-white dark:bg-background"
    />
  );
}

function MobileAlternatingTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="relative lg:hidden">
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 top-4 z-0 w-px -translate-x-1/2 bg-black"
        aria-hidden="true"
      />

      <div className="relative z-[1] flex flex-col gap-8">
        {events.map((event, index) => {
          const onLeft = index % 2 === 0;

          return (
            <div
              key={event.year}
              className="grid grid-cols-[minmax(0,1fr)_12px_minmax(0,1fr)] items-start gap-x-2 sm:gap-x-3"
            >
              <div
                className={
                  onLeft
                    ? "flex justify-end pr-1 sm:pr-2"
                    : "pointer-events-none invisible"
                }
                aria-hidden={!onLeft}
              >
                {onLeft ? (
                  <div className="w-full max-w-[168px] sm:max-w-[220px]">
                    <TimelineCard
                      event={event}
                      compact
                      entrance="left"
                      animationDelay={index * 0.04}
                    />
                  </div>
                ) : null}
              </div>

              <div className="flex justify-center pt-5">
                <TimelineDot animationDelay={index * 0.04 + 0.08} />
              </div>

              <div
                className={
                  !onLeft
                    ? "flex justify-start pl-1 sm:pl-2"
                    : "pointer-events-none invisible"
                }
                aria-hidden={onLeft}
              >
                {!onLeft ? (
                  <div className="w-full max-w-[168px] sm:max-w-[220px]">
                    <TimelineCard
                      event={event}
                      compact
                      entrance="right"
                      animationDelay={index * 0.04}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineColumn({
  top,
  bottom,
  columnIndex = 0,
}: {
  top: TimelineEvent;
  bottom?: TimelineEvent;
  columnIndex?: number;
}) {
  const connector = "h-6 w-px shrink-0 bg-black";
  const baseDelay = columnIndex * 0.1;

  return (
    <div className="grid min-w-0 grid-rows-[auto_12px_auto] lg:min-h-[640px] lg:grid-rows-[minmax(0,1fr)_12px_minmax(0,1fr)]">
      <div className="flex min-h-0 flex-col items-center lg:justify-end">
        <div className="w-full max-w-[300px]">
          <TimelineCard
            event={top}
            entrance="up"
            animationDelay={baseDelay}
          />
        </div>
        <div className={connector} aria-hidden="true" />
      </div>

      <div className="relative z-20 flex items-center justify-center">
        <TimelineDot animationDelay={baseDelay + 0.25} />
      </div>

      <div className="flex min-h-0 flex-col items-center lg:justify-start">
        {bottom ? (
          <>
            <div className={connector} aria-hidden="true" />
            <div className="w-full max-w-[300px]">
              <TimelineCard
                event={bottom}
                entrance="up"
                animationDelay={baseDelay + 0.15}
              />
            </div>
          </>
        ) : (
          <div className={connector} aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

function pairEvents(events: TimelineEvent[]) {
  const pairs: { top: TimelineEvent; bottom?: TimelineEvent }[] = [];
  for (let i = 0; i < events.length; i += 2) {
    pairs.push({
      top: events[i],
      bottom: events[i + 1],
    });
  }
  return pairs;
}

export default function HowItBegan() {
  const columns = pairEvents(timelineEvents);

  return (
    <section
      id="history"
      className="relative overflow-x-clip bg-background py-20 lg:py-28"
    >
      <motion.div
        className="pointer-events-none absolute left-0 top-1/4 h-56 w-56 rounded-full bg-[#0471AD]/8 blur-3xl"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: easeOut }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionTitleGlow className="pb-2 lg:pb-0">
            <AnimatedText
              text="HOW IT BEGAN"
              as="h2"
              className="sf-pro-display-semibold text-2xl font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[3.5rem]"
            />
          </SectionTitleGlow>
          <motion.p
            className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:max-w-sm lg:pb-1 lg:text-right lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <span className="block">
              ePaid Company is a spind off ITS Saudi Computers
            </span>
            <span className="block">
              Systems Co. W.L.L is a Leading MSP, providing
            </span>
            <span className="block">
              POS services since 1992 in the Kingdom.
            </span>
          </motion.p>
        </StaggerReveal>

        <div className="relative mt-10 sm:mt-14 lg:mt-16">
          <MobileAlternatingTimeline events={timelineEvents} />

          <div className="relative hidden lg:block lg:min-h-[640px]">
            {/* Center spine behind dots */}
            <div
              className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2"
              aria-hidden="true"
              style={{ borderTop: "1px solid #000000" }}
            />

            <div className="relative z-10 grid grid-cols-3 gap-5 xl:grid-cols-5">
              {columns.map((column, columnIndex) => (
                <TimelineColumn
                  key={column.top.year}
                  top={column.top}
                  bottom={column.bottom}
                  columnIndex={columnIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
