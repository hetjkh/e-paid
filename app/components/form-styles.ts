/** Shared form field styles — black border/text in light, white in dark. */
export const formFieldBorderClassName =
  "border border-solid border-[#000000] dark:border-white focus:outline-none focus:ring-2 focus:ring-epaid/30";

export const formFieldTextClassName =
  "text-foreground dark:text-white placeholder:text-muted-foreground/60 dark:placeholder:text-white/55";

export const formInputClassName = `min-h-12 w-full rounded-full bg-card py-3 pl-4 pr-10 text-base sm:py-3.5 sm:pl-5 sm:pr-11 sm:text-sm ${formFieldBorderClassName} ${formFieldTextClassName}`;

export const newsletterInputClassName = `min-h-12 w-full rounded-full bg-card px-5 text-sm uppercase tracking-wide sm:min-h-[3.25rem] sm:flex-1 sm:rounded-r-none sm:border-r-0 sm:px-6 sm:text-base ${formFieldBorderClassName} ${formFieldTextClassName}`;
