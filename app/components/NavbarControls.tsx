"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import EpaidButton from "./EpaidButton";
import { OnboardingIcon, UserIcon } from "./ButtonIconBadge";
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
  variant: _variant = "hero",
  layout = "row",
  onNavigate,
}: NavbarControlsProps) {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState<Language>("en");
  const isStack = layout === "stack";
  const navSize = isStack ? "navStack" : "nav";

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

  return (
    <div
      className={cn(
        "items-center",
        isStack
          ? "flex w-full flex-col gap-4"
          : "flex flex-wrap justify-end gap-2 overflow-visible sm:gap-3 lg:gap-4"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          isStack && "w-full justify-center border-b border-border-soft pb-4"
        )}
      >
        <Button
          type="button"
          variant="epaidOutline"
          size="navPill"
          className="relative z-10"
          onClick={toggleLanguage}
          aria-label={`Switch language, current ${language.toUpperCase()}`}
        >
          {language.toUpperCase()}
        </Button>

        <Button
          type="button"
          variant="epaidOutline"
          size="navRound"
          className="relative z-10"
          onClick={toggleTheme}
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
        </Button>
      </div>

      <EpaidButton
        href="#login"
        size={navSize}
        className="relative z-10"
        onClick={onNavigate}
        icon={<UserIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
      >
        LOGIN
      </EpaidButton>

      <EpaidButton
        href="/onboarding"
        size={navSize}
        className="relative z-10"
        onClick={onNavigate}
        icon={<OnboardingIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
      >
        ONBOARDING
      </EpaidButton>
    </div>
  );
}
