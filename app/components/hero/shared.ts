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

export const heroMobileDescClassName =
  "w-full min-w-0 text-sm leading-relaxed text-black/90 dark:text-[#b8c9dc] sm:text-base lg:hidden";

export const heroDesktopDescClassName =
  "hidden min-w-0 max-w-[420px] text-base leading-relaxed text-black dark:text-[#b8c9dc] lg:block lg:pb-1 lg:text-lg";

export const heroCtaClassName =
  "btn-glow inline-flex w-full items-center justify-center gap-1.5 rounded-full border-2 border-solid border-epaid bg-epaid py-1.5 pl-4 pr-1 text-[11px] font-semibold uppercase leading-none tracking-normal text-white sm:w-auto sm:justify-start sm:gap-2 sm:border-[3px] sm:py-2 sm:pl-7 sm:pr-2 sm:text-sm lg:gap-3 lg:py-2 lg:pl-8 lg:text-base";

export const heroCtaWrapClassName =
  "flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3";

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};
