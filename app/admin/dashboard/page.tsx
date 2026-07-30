"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  fetchAdminProfile,
  getStoredToken,
  type AdminUser,
} from "@/lib/admin-api";
import {
  getCmsBlock,
  resetCmsToDefaults,
  seedCmsDefaults,
} from "@/lib/cms";
import { getAllFallbackProducts } from "@/lib/fallback-products";
import AdminCmsShell from "@/app/admin/content/AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [seeded, setSeeded] = useState(false);

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    setSeeded(Boolean(getCmsBlock("contentSeeded")));

    fetchAdminProfile(token)
      .then((data) => setAdmin(data.admin))
      .catch(() => {
        setAdmin({ id: "admin", role: "admin" });
      })
      .finally(() => setLoading(false));
  }, [router]);

  function handleSeed() {
    seedCmsDefaults();
    setSeeded(true);
    const count = getAllFallbackProducts().length;
    setMessage(
      `Defaults loaded for Home, About, and FAQ. ${count} products available in catalog.`
    );
  }

  function handleReset() {
    resetCmsToDefaults();
    setSeeded(false);
    setMessage("All content restored to defaults.");
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading dashboard…</p>
      </main>
    );
  }

  const cards = [
    {
      title: "Home page",
      desc: "Hero, What We Do, services, FAQ intro",
      href: "/admin/content/home",
    },
    {
      title: "About page",
      desc: "Hero, mission, and vision copy",
      href: "/admin/content/about",
    },
    {
      title: "FAQ",
      desc: "Questions and answer paragraphs",
      href: "/admin/content/faq",
    },
    {
      title: "Team",
      desc: "Add and edit About page team members",
      href: "/admin/team",
    },
    {
      title: "Products catalog",
      desc: "Preview hardware products",
      href: "/admin/content/products",
    },
    {
      title: "Manage products",
      desc: "Create, edit, and delete products",
      href: "/admin/products",
    },
    {
      title: "Add product",
      desc: "Upload a new POS device",
      href: "/admin/products/add",
    },
  ];

  return (
    <AdminCmsShell
      title="Overview"
      description={`Signed in as ${admin?.id}. Manage website content and product catalog.`}
    >
      <div className="mb-8 overflow-hidden rounded-2xl border border-solid border-[#00000040] bg-gradient-to-br from-[#e8f4fc] via-card to-[#fef8eb] p-6 dark:from-[#131e32] dark:via-card dark:to-[#1a1820] sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-epaid">
              Quick setup
            </p>
            <h2 className="mt-2 text-xl font-bold text-foreground">
              Load default website content
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Populate Home, About, and FAQ with the current site copy so you
              can start editing immediately.
              {seeded ? " Defaults are already loaded in this browser." : ""}
            </p>
            {message ? (
              <p className="mt-3 text-sm font-medium text-epaid">{message}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3">
            <EpaidButton
              type="button"
              onClick={handleSeed}
              className="px-5 py-2.5 text-sm normal-case"
            >
              Load defaults
            </EpaidButton>
            <EpaidButton
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 text-sm normal-case"
            >
              Reset content
            </EpaidButton>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-2xl border border-solid border-[#00000040] bg-card p-6 transition-all hover:border-epaid/40 hover:shadow-[0_12px_32px_rgba(4,113,173,0.1)]"
          >
            <h2 className="text-lg font-bold text-foreground group-hover:text-epaid">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.desc}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-epaid">
              Open →
            </p>
          </Link>
        ))}
      </div>
    </AdminCmsShell>
  );
}
