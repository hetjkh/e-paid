"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroBadgeClassName, outlineBadgeClassName } from "./button-styles";

type EpaidButtonProps = {
  href?: string;
  className?: string;
  badgeClassName?: string;
  size?: "default" | "nav" | "hero" | "navStack" | "sm" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const navBadgeClassName = cn(outlineBadgeClassName, "h-7 w-7 sm:h-8 sm:w-8");

export default function EpaidButton({
  href,
  className,
  badgeClassName,
  size = "nav",
  children,
  icon,
  onClick,
  type = "button",
  disabled,
}: EpaidButtonProps) {
  const resolvedBadgeClassName =
    badgeClassName ??
    (size === "hero" ? heroBadgeClassName : navBadgeClassName);
  const content = (
    <>
      {children}
      {icon ? <span className={resolvedBadgeClassName}>{icon}</span> : null}
    </>
  );

  if (href) {
    return (
      <Button variant="epaidOutline" size={size} className={className} asChild>
        <Link href={href} onClick={onClick}>
          {content}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant="epaidOutline"
      size={size}
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </Button>
  );
}
