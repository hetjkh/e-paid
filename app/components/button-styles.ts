import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/** Standard site CTA — same pill shape & padding as LOGIN / ONBOARDING. */
export const primaryButtonClassName = buttonVariants({
  variant: "epaidOutline",
  size: "nav",
});

/** Hero row CTAs — full width on mobile, same pill padding as navbar. */
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

export const heroBadgeClassName = cn(
  outlineBadgeClassName,
  "h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
);

/** @deprecated Use outlineBadgeClassName for standard CTAs */
export const iconBadgeClassName =
  "btn-icon-badge flex shrink-0 items-center justify-center rounded-full bg-white transition-all duration-300";
