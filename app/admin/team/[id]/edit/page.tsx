"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getStoredToken } from "@/lib/admin-api";
import {
  fetchTeamMemberByIdClient,
  updateTeamMember,
} from "@/lib/team-api";
import AdminCmsShell from "@/app/admin/content/AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";

function FilePreview({
  file,
  existingUrl,
  onClear,
}: {
  file: File | null;
  existingUrl?: string;
  onClear: () => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const src = preview ?? existingUrl;

  if (!src) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-border-soft bg-card-muted text-xs text-muted-foreground">
        Photo
      </div>
    );
  }

  return (
    <div className="relative aspect-square overflow-hidden rounded-xl border border-border-soft">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Team member"
        className="h-full w-full object-cover object-top"
      />
      {file ? (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white"
        >
          Remove new
        </button>
      ) : null}
    </div>
  );
}

export default function EditTeamMemberPage() {
  const router = useRouter();
  const params = useParams();
  const memberId = params.id as string;

  const [loadingMember, setLoadingMember] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [sortOrder, setSortOrder] = useState("0");
  const [existingImageUrl, setExistingImageUrl] = useState<string | undefined>();
  const [newImage, setNewImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!getStoredToken()) {
      router.replace("/admin/login");
      return;
    }

    fetchTeamMemberByIdClient(memberId)
      .then((member) => {
        if (!member) {
          router.replace("/admin/team");
          return;
        }
        setName(member.name);
        setRole(member.role);
        setSortOrder(String(member.sortOrder ?? 0));
        setExistingImageUrl(member.image.url);
      })
      .catch(() => router.replace("/admin/team"))
      .finally(() => setLoadingMember(false));
  }, [memberId, router]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const token = getStoredToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("role", role.trim());
      formData.append("sortOrder", sortOrder.trim() || "0");
      if (newImage) {
        formData.append("image", newImage);
      }

      await updateTeamMember(token, memberId, formData);
      router.push("/admin/team");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update team member"
      );
    } finally {
      setLoading(false);
    }
  }

  if (loadingMember) {
    return (
      <AdminCmsShell title="Edit team member" description="Loading…">
        <p className="text-muted-foreground">Loading member…</p>
      </AdminCmsShell>
    );
  }

  return (
    <AdminCmsShell
      title="Edit team member"
      description="Update details or replace the photo."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Details</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-border-soft bg-card-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
              />
            </div>
            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium">
                Role
              </label>
              <input
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full rounded-xl border border-border-soft bg-card-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
              />
            </div>
            <div>
              <label
                htmlFor="sortOrder"
                className="mb-2 block text-sm font-medium"
              >
                Sort order
              </label>
              <input
                id="sortOrder"
                type="number"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full rounded-xl border border-border-soft bg-card-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-8">
          <h2 className="text-lg font-bold text-foreground">Photo</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Upload a new file to replace the current photo.
          </p>
          <div className="mt-5 max-w-sm">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewImage(e.target.files?.[0] ?? null)}
              className="mb-3 block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-epaid file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
            />
            <FilePreview
              file={newImage}
              existingUrl={existingImageUrl}
              onClear={() => setNewImage(null)}
            />
          </div>
        </section>

        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
            {error}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3">
          <EpaidButton
            type="submit"
            disabled={loading}
            className="px-12 py-3.5 text-sm disabled:opacity-60"
          >
            {loading ? "Saving…" : "Save changes"}
          </EpaidButton>
          <EpaidButton
            href="/admin/team"
            className="px-8 py-3.5 text-sm normal-case"
          >
            Cancel
          </EpaidButton>
        </div>
      </form>
    </AdminCmsShell>
  );
}
