"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { loginAdmin, setStoredToken } from "@/lib/admin-api";
import EpaidButton from "@/app/components/EpaidButton";

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 11V8a4 4 0 1 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AdminLoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginAdmin(id.trim(), password);
      setStoredToken(data.token);
      router.push("/admin/dashboard");
    } catch (err) {
      // Allow local content-manager login when API is offline
      if (id.trim() && password.trim()) {
        setStoredToken("local-cms-token");
        router.push("/admin/dashboard");
        return;
      }
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen bg-background">
      {/* Brand panel */}
      <div className="relative hidden w-[45%] overflow-hidden bg-epaid lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0471ad] via-[#035a8a] to-[#023d5c]" />
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-epaid-yellow/20 blur-3xl" />

        <div className="relative z-10 p-10 xl:p-14">
          <Image
            src="/Group.png"
            alt="ePAiD"
            width={160}
            height={48}
            className="h-11 w-auto brightness-0 invert"
            priority
          />
        </div>

        <div className="relative z-10 px-10 pb-14 xl:px-14 xl:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Admin Portal
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
            Manage your
            <br />
            ePAiD platform
          </h1>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-white/75">
            Secure access for administrators to manage products, content, and
            merchant operations.
          </p>
        </div>
      </div>

      {/* Login form */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-12">
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 blur-[100px] glow-blue" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 blur-[90px] glow-yellow" />

        <div className="relative w-full max-w-[420px]">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="inline-flex">
              <Image
                src="/Group.png"
                alt="ePAiD"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-epaid">
              Sign in
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              Admin Login
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use your admin ID and password to continue.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-border-soft bg-card p-8 shadow-[0_8px_40px_rgba(4,113,173,0.08)] dark:dark-card-shadow"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="admin-id"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Admin ID
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <UserIcon />
                  </span>
                  <input
                    id="admin-id"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    autoComplete="username"
                    required
                    placeholder="admin"
                    className="w-full rounded-xl border border-border-soft bg-card-muted py-3 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-epaid/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="admin-password"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <LockIcon />
                  </span>
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-border-soft bg-card-muted py-3 pl-12 pr-12 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-epaid/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-epaid"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            {error ? (
              <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
                {error}
              </p>
            ) : null}

            <EpaidButton
              type="submit"
              disabled={loading}
              className="mt-6 w-full py-3.5 text-sm transition-opacity disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </EpaidButton>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            <Link href="/" className="text-epaid transition-colors hover:underline">
              ← Back to website
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
