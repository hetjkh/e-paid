"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarControls from "./NavbarControls";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "/products" },
  { label: "BLOGS", href: "/blogs" },
  { label: "CONTACT US", href: "/contact" },
  { label: "PARTNERSHIPS", href: "/partnerships" },
];

const SCROLL_THRESHOLD = 40;

type HeaderProps = {
  variant?: "hero" | "page";
};

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Header({ variant = "hero" }: HeaderProps) {
  const isPage = variant === "page";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const isSolid = scrolled || menuOpen;
  const usePageStyle = isPage || scrolled || menuOpen;

  const linkClassName = (mobile = false) =>
    cn(
      "font-semibold uppercase leading-none tracking-normal transition-colors",
      mobile
        ? "block w-full rounded-xl px-4 py-3.5 text-base hover:bg-epaid/10 hover:text-epaid"
        : "whitespace-nowrap text-xs xl:text-sm 2xl:text-base",
      usePageStyle
        ? "text-foreground hover:text-epaid"
        : cn(
            "text-white hover:text-epaid-yellow",
            !mobile && "drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]"
          )
    );

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "inset-x-0 top-0 z-50 w-full transition-[background-color,box-shadow,border-color] duration-300",
          isPage ? "sticky" : "fixed",
          isSolid
            ? "border-b border-border-soft bg-background shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
            : "border-b border-transparent bg-transparent shadow-none"
        )}
      >
        <div className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-4 overflow-visible px-4 py-2.5 sm:px-6 lg:gap-6 lg:px-10 lg:py-3">
          <Link href="/" className="shrink-0" onClick={closeMenu}>
            <Image
              src="/Group.png"
              alt="ePAiD"
              width={186}
              height={73}
              priority
              className="h-10 w-auto sm:h-11 lg:h-14"
            />
          </Link>

          <nav className="hidden min-w-0 flex-1 px-2 lg:block xl:px-4">
            <ul className="flex min-w-0 items-center justify-center gap-3 xl:gap-5 2xl:gap-7">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClassName()}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 overflow-visible lg:block">
            <NavbarControls variant={usePageStyle ? "page" : "hero"} />
          </div>

          <button
            type="button"
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors lg:hidden",
              usePageStyle
                ? "text-foreground hover:bg-epaid/10 hover:text-epaid"
                : "text-white hover:bg-white/10 hover:text-epaid-yellow"
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/50"
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <aside
            id="mobile-nav"
            className="absolute inset-y-0 right-0 flex w-full max-w-[360px] flex-col bg-background shadow-[-8px_0_32px_rgba(0,0,0,0.12)]"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border-soft px-5 py-4">
              <span className="text-sm font-semibold uppercase tracking-wide text-epaid">
                Menu
              </span>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-epaid/10 hover:text-epaid"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <MenuIcon open />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={linkClassName(true)}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-border-soft px-5 py-6">
              <NavbarControls
                variant="page"
                layout="stack"
                onNavigate={closeMenu}
              />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
