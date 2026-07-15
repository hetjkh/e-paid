import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/** Standard site CTA — same pill shape & padding as LOGIN / ONBOARDING. */
export const primaryButtonClassName = buttonVariants({
  variant: "epaidOutline",
  size: "nav",
});

/** Hero row CTAs — content-width pills, same padding as navbar. */
export const heroButtonClassName = buttonVariants({
  variant: "epaidOutline",
  size: "hero",
});

/** Alias — same as primary across the site. */
export const secondaryButtonClassName = buttonVariants({
  variant: "epaidOutline",
  size: "nav",
});

/** Alias — same onboarding-style button. */
export const yellowButtonClassName = buttonVariants({
  variant: "epaidOutline",
  size: "nav",
});

export const outlineBadgeClassName =
  "outline-badge flex shrink-0 items-center justify-center rounded-full bg-black text-white transition-all duration-300";

/** Shared icon badge for navbar + hero CTAs */
export const ctaBadgeClassName = cn(
  outlineBadgeClassName,
  "h-7 w-7 sm:h-8 sm:w-8"
);

export const ctaIconClassName = "h-3 w-3 text-current sm:h-3.5 sm:w-3.5";

/** @deprecated Use ctaBadgeClassName */
export const heroBadgeClassName = ctaBadgeClassName;

/** @deprecated Use outlineBadgeClassName for standard CTAs */
export const iconBadgeClassName =
  "btn-icon-badge flex shrink-0 items-center justify-center rounded-full bg-white transition-all duration-300";
