"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { OFFICE_ADDRESS } from "@/lib/office-address";
import EpaidButton from "../components/EpaidButton";
import { ArrowUpRightIcon } from "./ButtonIconBadge";
import { newsletterInputClassName } from "../components/form-styles";
import { epaidSocialLinks, SocialIcon } from "./social-links";

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

export default function Footer() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setEmail("");
    setSuccessMessage("Successfully sent!");
  };

  return (
    <footer className="mt-auto">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e6f3fa] via-background to-[#e8f4fc] py-12 dark:from-[#0f1a2e] dark:via-[#0c1424] dark:to-[#0f1a2e] sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#0471AD]/8 blur-3xl" />
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
            className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:mt-10 sm:flex-row sm:items-stretch sm:gap-0"
            onSubmit={handleNewsletterSubmit}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (successMessage) setSuccessMessage("");
              }}
              placeholder="ENTER EMAIL"
              className={newsletterInputClassName}
            />
            <EpaidButton
              type="submit"
              className="h-12 w-full shrink-0 justify-center sm:h-[3.25rem] sm:w-auto sm:justify-start sm:rounded-l-none"
              icon={<ArrowUpRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            >
              Subscribe
            </EpaidButton>
          </form>

          {successMessage ? (
            <p
              className="mx-auto mt-4 max-w-3xl text-center text-sm font-semibold text-epaid sm:text-base"
              role="status"
              aria-live="polite"
            >
              {successMessage}
            </p>
          ) : null}
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
                {epaidSocialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition-colors hover:text-epaid-yellow"
                  >
                    <SocialIcon path={social.path} />
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
                  {OFFICE_ADDRESS.line1}
                  <br />
                  {OFFICE_ADDRESS.line2}
                  <br />
                  {OFFICE_ADDRESS.line3}
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
