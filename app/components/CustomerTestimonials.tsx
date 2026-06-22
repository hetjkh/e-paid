"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimatedLines,
  AnimatedText,
  easeOut,
  fadeUp,
  StaggerReveal,
} from "./motion/scroll-motion";
import SectionTitleGlow from "./SectionTitleGlow";
import { useEffect, useMemo, useRef, useState } from "react";

const testimonials = [
  {
    name: "Melodi Askelöf",
    role: "Consumer",
    text: "ePaid delivers a fast, reliable POS experience with smooth payments, modern hardware, and excellent support. Perfect for retail businesses wanting simplicity, security, and seamless daily transactions without any hidden hassles.",
    avatar: "/review/1.png",
  },
  {
    name: "Fatima Hassan Ali",
    role: "Consumer",
    text: "Using ePaid POS has improved checkout speed and customer satisfaction. The system is intuitive, stable, and affordable, making it ideal for growing shops and service-based businesses across multiple retail environments.",
    avatar: "/review/3.png",
  },
  {
    name: "Ahmad bin Khalid",
    role: "Consumer",
    text: "ePaid stands out for its sleek POS design, secure transactions, and responsive support team. Setup was quick, training was easy, and daily operations now run smoothly with minimal technical issues.",
    avatar: "/review/2.png",
  },
  {
    name: "Sara Almutairi",
    role: "Retail Owner",
    text: "Switching to ePaid reduced checkout time and made daily reconciliation much easier. The terminals are stable, and the support team is quick when we need help.",
    avatar: "/review/3.png",
  },
  {
    name: "Omar Alharbi",
    role: "Operations Manager",
    text: "We rolled out ePaid across multiple locations with zero downtime. Reporting is clear, onboarding was smooth, and the experience feels modern from day one.",
    avatar: "/review/4.png",
  },
  {
    name: "Noura Fahad",
    role: "Store Supervisor",
    text: "Payments are fast and consistent, even during peak hours. Staff training was simple, and customers love the contactless flow.",
    avatar: "/review/3.png",
  },
];

function StarRating() {
  return (
    <div className="flex shrink-0 gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20" className="h-5 w-5 fill-epaid-yellow" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z"/>
        </svg>
      ))}
    </div>
  );
}

function useCarouselPages({
  total,
  perPage,
  autoplayMs,
}: {
  total: number;
  perPage: number;
  autoplayMs: number;
}) {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(total / perPage));

  useEffect(() => {
    const id = window.setInterval(() => {
      setPage((p) => (p + 1) % pages);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [autoplayMs, pages]);

  return { page, pages, setPage };
}

export default function CustomerTestimonials() {
  // Always show 3 cards at once (desktop). On smaller screens it will naturally stack/scroll.
  const perPage = 3;
  const { page, pages, setPage } = useCarouselPages({
    total: testimonials.length,
    perPage,
    autoplayMs: 5000,
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (!trackRef.current) return;
    const el = trackRef.current;

    const ro = new ResizeObserver(() => {
      setTrackWidth(el.getBoundingClientRect().width);
    });

    ro.observe(el);
    setTrackWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const pageWidth = trackWidth || 1;

  const visibleStart = page * perPage;
  const visible = useMemo(() => {
    // We render all slides in the track and translate by page width.
    // Keep keys stable by original item name.
    return testimonials;
  }, []);

  return (
    <section className="relative overflow-x-clip bg-background pb-20 pt-0 lg:pb-28 lg:pt-0">
      <div className="relative mx-auto max-w-[1400px] px-6 pt-6 lg:px-10 lg:pt-8">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <SectionTitleGlow>
            <AnimatedLines
              lines={["WHAT OUR", "CUSTOMERS SAY"]}
              as="h2"
              className="sf-pro-display-semibold text-3xl font-semibold uppercase leading-tight text-epaid sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            />
          </SectionTitleGlow>

          <motion.p
            className="relative z-10 max-w-sm text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Real voices. Real experiences. Hear how epaid is transforming
            shopping for people and businesses around the world.
          </motion.p>
        </StaggerReveal>

        <div className="relative z-10 mt-12 lg:mt-14">
          <div className="overflow-hidden" ref={trackRef}>
            <motion.div
              className="flex gap-6 lg:gap-5"
              animate={{ x: -page * pageWidth }}
              transition={{ duration: 0.7, ease: easeOut }}
              style={{ width: `${pages * 100}%` }}
            >
              {Array.from({ length: pages }).map((_, pageIndex) => (
                <div
                  key={`page-${pageIndex}`}
                  className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
                  style={{ width: `${100 / pages}%` }}
                >
                  {visible
                    .slice(pageIndex * perPage, pageIndex * perPage + perPage)
                    .map((item) => (
                      <motion.article
                        key={item.name}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: easeOut }}
                        className="flex min-h-[280px] flex-col rounded-[24px] border border-border-soft bg-card px-7 py-8 sm:min-h-[300px] lg:min-h-[320px] lg:px-9 lg:py-10"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                              <Image
                                src={item.avatar}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            </div>
                            <div>
                              <AnimatedText
                                text={item.name}
                                as="p"
                                className="text-lg font-bold text-foreground"
                              />
                              <AnimatedText
                                text={item.role}
                                as="p"
                                className="text-base text-muted-foreground"
                                delay={0.06}
                              />
                            </div>
                          </div>
                          <StarRating />
                        </div>

                        <motion.p
                          className="mt-6 flex-1 text-base leading-relaxed text-muted-foreground lg:text-lg"
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.55,
                            ease: easeOut,
                            delay: 0.12,
                          }}
                        >
                          {item.text}
                        </motion.p>
                      </motion.article>
                    ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => {
              const active = i === page;
              return (
                <button
                  key={`dot-${i}`}
                  type="button"
                  onClick={() => setPage(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    active ? "bg-epaid" : "bg-border-soft"
                  }`}
                  aria-label={`Go to testimonials page ${i + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
