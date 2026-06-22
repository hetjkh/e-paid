import type { ReactNode } from "react";

export function ButtonIconBadge({
  children,
  size = "md",
}: {
  children: ReactNode;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-white ${
        size === "sm" ? "h-8 w-8" : "h-10 w-10"
      }`}
    >
      {children}
    </span>
  );
}

export function ArrowUpRightIcon({ className = "h-4 w-4 text-epaid" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductsIcon({ className = "h-4 w-4 text-epaid" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 7.5L12 3l8 4.5v9L12 21l-8-4.5v-9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 12v9M4 7.5L12 12l8-4.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function UserIcon({ className = "h-4 w-4 text-epaid" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OnboardingIcon({ className = "h-4 w-4 text-epaid" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 3v12M8 11l4 4 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
