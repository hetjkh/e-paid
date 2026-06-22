"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getStoredToken } from "@/lib/admin-api";

export default function AdminIndexPage() {
  const router = useRouter();

  useEffect(() => {
    const token = getStoredToken();
    router.replace(token ? "/admin/dashboard" : "/admin/login");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">Redirecting…</p>
    </main>
  );
}
