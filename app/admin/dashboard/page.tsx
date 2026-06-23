"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  clearStoredToken,
  fetchAdminProfile,
  getStoredToken,
  logoutAdmin,
  type AdminUser,
} from "@/lib/admin-api";
import EpaidButton from "@/app/components/EpaidButton";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const token = getStoredToken();

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    fetchAdminProfile(token)
      .then((data) => setAdmin(data.admin))
      .catch(() => {
        clearStoredToken();
        router.replace("/admin/login");
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleLogout() {
    const token = getStoredToken();
    if (!token) return;

    setLoggingOut(true);
    try {
      await logoutAdmin(token);
    } catch {
      // Clear local session even if API call fails
    } finally {
      clearStoredToken();
      router.replace("/admin/login");
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading dashboard…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border-soft bg-card">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/Group.png" alt="ePAiD" width={120} height={36} className="h-9 w-auto" />
          </Link>
          <EpaidButton
            type="button"
            disabled={loggingOut}
            onClick={handleLogout}
            className="px-5 py-2 text-sm normal-case disabled:opacity-60"
          >
            {loggingOut ? "Logging out…" : "Logout"}
          </EpaidButton>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-epaid">Dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground lg:text-4xl">
          Welcome, {admin?.id}
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          You are signed in as an administrator. Session is stored in MongoDB via
          the e-paid-back API.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Products",
              desc: "View and manage product catalog",
              href: "/admin/products",
            },
            {
              title: "Add Product",
              desc: "Upload images and add a new POS device",
              href: "/admin/products/add",
            },
            { title: "Blogs", desc: "Publish news and updates", href: "/blogs" },
            { title: "Contact", desc: "View contact page", href: "/contact" },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-[24px] border border-border-soft bg-card-muted p-6 transition-colors hover:border-epaid/30 hover:shadow-[0_12px_32px_rgba(4,113,173,0.1)]"
            >
              <h2 className="text-lg font-bold text-epaid">{card.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
