import type { ReactNode } from "react";

export type SocialLink = {
  label: string;
  href: string;
  /** SVG path `d` for a 24×24 viewBox icon */
  path: string;
};

/**
 * Official ePaid social profiles.
 * @see https://www.linkedin.com/company/epaid
 * @see https://x.com/ePaid_
 */
export const epaidSocialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/epaid",
    path: "M6.5 9.5h3v10.5h-3V9.5zm1.5-4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM11 9.5h2.9v1.4h.05c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.65 2 3.65 4.65v5.5H17.5v-4.9c0-1.15-.02-2.65-1.6-2.65-1.65 0-1.9 1.25-1.9 2.55v4.95h-3V9.5z",
  },
  {
    label: "X",
    href: "https://x.com/ePaid_",
    path: "M16.5 4.5L9.2 12.8 4.5 19.5h2.2l5.3-6.9 4.3 6.9h5.5l-7.7-8.8 6.2-8h-2.2l-4.8 6.2-3.9-6.2H4.5l7 8z",
  },
];

export function SocialIcon({
  path,
  className = "h-4 w-4",
}: {
  path: string;
  className?: string;
}): ReactNode {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}
