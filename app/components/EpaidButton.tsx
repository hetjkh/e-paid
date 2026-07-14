"use client";

import Link from "next/link";
import { cloneElement, isValidElement, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ctaBadgeClassName, ctaIconClassName } from "./button-styles";

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
  const badge = icon ? (
    <span className={badgeClassName ?? ctaBadgeClassName}>
      {isValidElement<{ className?: string }>(icon)
        ? cloneElement(icon, {
            className: cn(ctaIconClassName, icon.props.className),
          })
        : icon}
    </span>
  ) : null;

  const content = (
    <>
      {children}
      {badge}
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
