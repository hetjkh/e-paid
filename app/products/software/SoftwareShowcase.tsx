"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  easeOut,
  fadeUp,
  scaleIn,
  StaggerReveal,
} from "@/app/components/motion/scroll-motion";

export default function SoftwareShowcase() {
  return (
    <section className="relative overflow-x-clip bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <StaggerReveal className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-epaid sm:text-sm">
              Merchant &amp; shopper
            </p>
            <h2 className="mt-4 max-w-xl sf-pro-display-semibold text-[1.875rem] font-semibold uppercase leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
              One platform. Two experiences.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Retailers run orders, earnings, and store performance from the
              Satocci dashboard. Shoppers scan, pay, and walk out with the
              mobile wallet — powered alongside ePaid POS infrastructure.
            </p>
          </motion.div>

          <motion.p
            className="text-sm leading-relaxed text-muted-foreground lg:pb-2 lg:text-right"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            Explore the full experience on{" "}
            <a
              href="https://www.satocci.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-epaid underline-offset-2 hover:underline"
            >
              satocci.com
            </a>
          </motion.p>
        </StaggerReveal>

        <StaggerReveal
          className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14"
          stagger={0.12}
        >
          <motion.figure
            variants={scaleIn}
            transition={{ duration: 0.65, ease: easeOut }}
            className="flex flex-col items-center"
          >
            <Image
              src="/satocci-laptop.png"
              alt="Satocci merchant dashboard with orders and earnings"
              width={1100}
              height={720}
              className="h-auto w-full max-w-[640px] object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <figcaption className="mt-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Merchant dashboard
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Orders, earnings, returns, and store share — live.
              </p>
            </figcaption>
          </motion.figure>

          <motion.figure
            variants={scaleIn}
            transition={{ duration: 0.65, ease: easeOut }}
            className="flex flex-col items-center"
          >
            <Image
              src="/satocci-mobile.png"
              alt="Satocci shopper app wallet and latest transactions"
              width={720}
              height={1280}
              className="h-auto w-full max-w-[320px] object-contain sm:max-w-[360px]"
              sizes="(max-width: 1024px) 320px, 360px"
            />
            <figcaption className="mt-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                Shopper wallet
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Cards, stores, offers, and digital receipts.
              </p>
            </figcaption>
          </motion.figure>
        </StaggerReveal>
      </div>
    </section>
  );
}
