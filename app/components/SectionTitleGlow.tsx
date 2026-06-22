import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const sectionTitleGlowClassName =
  "pointer-events-none absolute left-1/2 top-[68%] z-0 h-[280%] w-[280%] -translate-x-[68%] -translate-y-1/2 blur-[80px] glow-blue";

type SectionTitleGlowProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function SectionTitleGlow({
  children,
  className,
  innerClassName,
}: SectionTitleGlowProps) {
  return (
    <div className={cn("relative max-w-md pt-8 pb-4 lg:pt-10 lg:pb-6", className)}>
      <div className={cn("relative inline-block max-w-md", innerClassName)}>
        <div className={sectionTitleGlowClassName} aria-hidden="true" />
        <div className="relative z-[1]">{children}</div>
      </div>
    </div>
  );
}
