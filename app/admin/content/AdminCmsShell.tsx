"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import {
  clearStoredToken,
  getStoredToken,
  logoutAdmin,
} from "@/lib/admin-api";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin/dashboard", label: "Overview" },
  { href: "/admin/content/home", label: "Home page" },
  { href: "/admin/content/about", label: "About page" },
  { href: "/admin/content/faq", label: "FAQ" },
  { href: "/admin/content/products", label: "Products catalog" },
  { href: "/admin/team", label: "Team" },
  { href: "/admin/team/add", label: "Add team member" },
  { href: "/admin/products", label: "Manage products" },
  { href: "/admin/products/add", label: "Add product" },
];

const PAGES_COUNT = 5;
const TEAM_COUNT = 2;

export default function AdminCmsShell({
  title,
  description,
  children,
  actions,
}: {
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (!getStoredToken()) {
      router.replace("/admin/login");
    }
  }, [router]);

  async function handleLogout() {
    setLoggingOut(true);
    const token = getStoredToken();
    try {
      if (token) await logoutAdmin(token);
    } catch {
      // ignore
    } finally {
      clearStoredToken();
      router.replace("/admin/login");
    }
  }

  const sidebar = (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-border-soft bg-card">
      <div className="border-b border-border-soft px-5 py-5">
        <Link href="/admin/dashboard" className="inline-flex items-center">
          <Image
            src="/Group.png"
            alt="ePAiD"
            width={110}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-epaid">
          Content manager
        </p>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Pages
        </p>
        {NAV.slice(0, PAGES_COUNT).map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/admin/dashboard" &&
              pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-epaid text-white"
                  : "text-foreground hover:bg-card-muted"
              )}
            >
              {item.label}
            </Link>
          );
        })}

        <p className="mt-5 px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Team
        </p>
        {NAV.slice(PAGES_COUNT, PAGES_COUNT + TEAM_COUNT).map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/admin/team" &&
              /^\/admin\/team\/[^/]+\/edit$/.test(pathname));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-epaid text-white"
                  : "text-foreground hover:bg-card-muted"
              )}
            >
              {item.label}
            </Link>
          );
        })}

        <p className="mt-5 px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Catalog
        </p>
        {NAV.slice(PAGES_COUNT + TEAM_COUNT).map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/admin/products" &&
              /^\/admin\/products\/[^/]+\/edit$/.test(pathname));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-epaid text-white"
                  : "text-foreground hover:bg-card-muted"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-2 border-t border-border-soft p-4">
        <Link
          href="/"
          className="block rounded-xl border border-border-soft px-3 py-2 text-center text-sm font-medium text-foreground hover:border-epaid/40"
        >
          View website
        </Link>
        <button
          type="button"
          disabled={loggingOut}
          onClick={handleLogout}
          className="w-full rounded-xl bg-foreground px-3 py-2 text-sm font-medium text-background disabled:opacity-60"
        >
          {loggingOut ? "Signing out…" : "Sign out"}
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64">
        {sidebar}
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full shadow-xl">{sidebar}</div>
        </div>
      ) : null}

      <div className="flex min-h-screen flex-1 flex-col lg:pl-64">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border-soft bg-card/95 px-4 py-3 backdrop-blur sm:px-6">
          <button
            type="button"
            className="rounded-lg border border-border-soft px-3 py-1.5 text-sm font-medium lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            Menu
          </button>
          <div className="hidden min-w-0 lg:block">
            <p className="truncate text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex items-center gap-2">{actions}</div>
        </header>

        <div className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-epaid">
              Content
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground lg:hidden">
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
