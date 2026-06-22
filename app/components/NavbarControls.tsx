"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ButtonIconBadge,
  OnboardingIcon,
  UserIcon,
} from "./ButtonIconBadge";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

type Language = "en" | "ar";

type NavbarControlsProps = {
  variant?: "hero" | "page";
  layout?: "row" | "stack";
  onNavigate?: () => void;
};

function applyLanguage(language: Language) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  localStorage.setItem("epaid-language", language);
}

export default function NavbarControls({
  variant = "hero",
  layout = "row",
  onNavigate,
}: NavbarControlsProps) {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState<Language>("en");
  const isPage = variant === "page";
  const isStack = layout === "stack";

  useEffect(() => {
    const stored = localStorage.getItem("epaid-language") as Language | null;
    const initial = stored ?? "en";
    setLanguage(initial);
    applyLanguage(initial);
  }, []);

  const toggleLanguage = () => {
    setLanguage((current) => {
      const next = current === "en" ? "ar" : "en";
      applyLanguage(next);
      return next;
    });
  };

  const iconButtonClassName = cn(
    "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
    isPage
      ? "text-foreground hover:bg-epaid/10 hover:text-epaid"
      : "text-white hover:text-epaid-yellow"
  );

  const textButtonClassName = cn(
    "px-2 text-xs font-semibold uppercase leading-none tracking-normal transition-colors sm:text-sm",
    isPage ? "text-foreground hover:text-epaid" : "text-white hover:text-epaid-yellow"
  );

  const authButtonClassName = cn(
    "btn-glow inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-solid border-epaid bg-epaid font-semibold uppercase leading-none tracking-normal text-white",
    isStack
      ? "w-full py-3 pl-6 pr-3 text-sm"
      : "gap-1.5 py-1.5 pl-3 pr-1 text-[13px] sm:gap-2 sm:py-2 sm:pl-4 sm:pr-1 sm:text-sm lg:py-2 lg:pl-5 lg:pr-1.5 lg:text-base"
  );

  return (
    <div
      className={cn(
        "items-center",
        isStack
          ? "flex w-full flex-col gap-4"
          : "flex flex-wrap justify-end gap-2 sm:gap-3 lg:gap-4"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          isStack && "w-full justify-center border-b border-border-soft pb-4"
        )}
      >
        <button
          type="button"
          onClick={toggleLanguage}
          className={textButtonClassName}
          aria-label={`Switch language, current ${language.toUpperCase()}`}
        >
          {language.toUpperCase()}
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          className={iconButtonClassName}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-[18px] w-[18px]"
              aria-hidden="true"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-[18px] w-[18px]"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </button>
      </div>

      <Link href="#login" className={authButtonClassName} onClick={onNavigate}>
        LOGIN
        <ButtonIconBadge size="sm">
          <UserIcon className="h-3.5 w-3.5 text-epaid sm:h-4 sm:w-4" />
        </ButtonIconBadge>
      </Link>
      <Link href="#onboarding" className={authButtonClassName} onClick={onNavigate}>
        ONBOARDING
        <ButtonIconBadge size="sm">
          <OnboardingIcon className="h-3.5 w-3.5 text-epaid sm:h-4 sm:w-4" />
        </ButtonIconBadge>
      </Link>
    </div>
  );
}
