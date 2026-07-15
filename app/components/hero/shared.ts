export const HERO_VIDEO_SRC =
  "/FEITIAN Payment Terminals Video 2025 - FEITIAN Technologies (720p, h264)_1.mp4";

export const heroTopGradientClassName =
  "pointer-events-none absolute inset-x-0 top-0 z-[1] h-44 bg-gradient-to-b from-black/75 via-black/45 to-transparent lg:h-52";

export const heroBottomGradientClassName =
  "pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[70%] bg-gradient-to-t from-background from-30% via-background/85 to-transparent dark:from-[#0c1424] dark:from-25% dark:via-[#0c1424]/90 dark:to-transparent sm:h-[62%] lg:h-[55%] lg:from-25% lg:via-background/60 dark:lg:via-[#0c1424]/80";

export const heroContentOuterClassName =
  "absolute inset-x-0 bottom-0 z-10 pb-6 pt-24 sm:pb-10 sm:pt-32 lg:pb-14";

export const heroContentInnerClassName =
  "mx-auto flex min-w-0 w-full max-w-[1400px] flex-col gap-5 px-4 sm:gap-7 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-10";

export const heroLeftColumnClassName =
  "flex min-w-0 w-full flex-col gap-4 sm:gap-5 lg:max-w-2xl lg:gap-7";

export const heroHeadingClassName =
  "sf-pro-display-semibold text-[1.625rem] font-semibold uppercase leading-[1.2] text-black text-balance dark:text-white sm:text-3xl sm:leading-[1.15] lg:text-5xl";

export const heroHeadingNowrapLgClassName =
  `${heroHeadingClassName} lg:whitespace-nowrap`;

export const HERO_DESCRIPTION_LINES = [
  "We deliver smart digital solutions, secure payment systems",
  "and expert advisory services that help businesses grow,",
  "streamline operations, and scale confidently.",
] as const;

export const heroMobileDescClassName =
  "w-full min-w-0 text-xs leading-relaxed text-black/90 dark:text-[#b8c9dc] sm:text-sm lg:hidden";

export const heroDesktopDescClassName =
  "hidden min-w-0 max-w-[34rem] text-sm leading-relaxed text-black dark:text-[#b8c9dc] lg:block lg:pb-1 lg:text-base";

export const heroCtaWrapClassName =
  "flex w-full flex-row flex-wrap items-center gap-2 sm:gap-3";

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};
