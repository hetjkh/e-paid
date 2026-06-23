"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const landingLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Join Us", href: "/contact" },
  { label: "News", href: "/blogs" },
  { label: "FAQs", href: "/#faq" },
];

const legalLinks = [
  { label: "Retailer T&Cs", href: "#" },
  { label: "Privacy", href: "#" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M14 3.5h-3a3.5 3.5 0 0 0-3.5 3.5V10H5v3.5h2.5V21h3.5v-7.5H14l.5-3.5h-3V7a1 1 0 0 1 1-1h2V3.5z" />
    ),
  },
  {
    label: "X",
    href: "https://twitter.com",
    icon: (
      <path d="M16.5 4.5L9.2 12.8 4.5 19.5h2.2l5.3-6.9 4.3 6.9h5.5l-7.7-8.8 6.2-8h-2.2l-4.8 6.2-3.9-6.2H4.5l7 8z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M6.5 9.5h3v10.5h-3V9.5zm1.5-4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM11 9.5h2.9v1.4h.05c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.65 2 3.65 4.65v5.5H17.5v-4.9c0-1.15-.02-2.65-1.6-2.65-1.65 0-1.9 1.25-1.9 2.55v4.95h-3V9.5z" />
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <path d="M10 8.5v7l6-3.5-6-3.5zm8.2-4.8a2 2 0 0 1 1.4 1.4c.3 1.1.3 3.4.3 3.4s0 2.3-.3 3.4a2 2 0 0 1-1.4 1.4C17.3 13 12 13 12 13s-5.3 0-6.5-.1a2 2 0 0 1-1.4-1.4C4.2 10.4 4.2 8.1 4.2 8.1s0-2.3.3-3.4a2 2 0 0 1 1.4-1.4C6.7 3.2 12 3.2 12 3.2s5.3 0 6.5.1z" />
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-auto">
      <section className="bg-gradient-to-r from-[#e6f3fa] via-background to-[#fef8eb] py-12 dark:from-[#0f1a2e] dark:via-[#0c1424] dark:to-[#121a28] sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-20">
            <h2 className="text-balance text-2xl font-bold uppercase leading-tight text-foreground sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1]">
              Subscribe to ePaid Newsletter
            </h2>

            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base lg:pt-1 lg:text-lg">
              Got questions? We&apos;ve got answers. Explore the most common
              queries about ePaid, how it works, and how it makes your shopping
              experience easier.
            </p>
          </div>

          <form
            className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL"
              className="min-h-12 w-full rounded-full border border-foreground/25 bg-card px-5 text-sm uppercase tracking-wide text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-epaid/30 sm:min-h-[3.25rem] sm:flex-1 sm:rounded-r-none sm:border-r-0 sm:px-6 sm:text-base"
            />
            <button
              type="submit"
              className="min-h-12 shrink-0 rounded-full bg-foreground px-8 text-sm font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-90 sm:min-h-[3.25rem] sm:rounded-l-none sm:px-10 sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-12 text-white sm:py-14 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
            <div className="flex flex-col gap-6">
              <Link href="/" className="inline-flex w-fit">
                <Image
                  src="/Group.png"
                  alt="ePAiD"
                  width={186}
                  height={73}
                  className="h-12 w-auto sm:h-14"
                />
              </Link>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition-colors hover:text-epaid-yellow"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-white sm:text-lg">
                Landing Pages
              </h3>
              <ul className="mt-4 space-y-2.5 sm:mt-5">
                {landingLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white sm:text-lg">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5 sm:mt-5">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-white sm:text-lg">
                Contact Us
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/80 sm:mt-5 sm:text-base">
                <p>
                  <span className="font-semibold text-white">Address:</span>
                  <br />
                  King Fahd Road, Olaya District
                  <br />
                  Riyadh, Saudi Arabia
                </p>
                <p>
                  <a
                    href="tel:+966110000000"
                    className="transition-colors hover:text-white"
                  >
                    +966 11 000 0000
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:sales@epaid.com"
                    className="transition-colors hover:text-white"
                  >
                    sales@epaid.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
