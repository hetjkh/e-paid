"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/products/hardware", label: "Hardware" },
  { href: "/products/software", label: "Software" },
] as const;

export default function ProductCategoryTabs({
  active,
  tone = "light",
}: {
  active: "hardware" | "software";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className="flex flex-wrap items-center gap-2"
      role="tablist"
      aria-label="Product categories"
    >
      {tabs.map((tab) => {
        const isActive = tab.href.endsWith(active);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            role="tab"
            aria-selected={isActive}
            className={cn(
              "rounded-full border border-solid px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:px-5 sm:text-sm",
              isActive
                ? "border-epaid bg-epaid text-white"
                : tone === "dark"
                  ? "border-white/40 bg-white/10 text-white hover:border-epaid-yellow hover:text-epaid-yellow"
                  : "border-[#00000040] bg-card text-foreground hover:border-epaid/40 hover:text-epaid dark:border-white/30"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
