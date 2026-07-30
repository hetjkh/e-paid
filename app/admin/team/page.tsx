"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getStoredToken } from "@/lib/admin-api";
import {
  deleteTeamMember,
  fetchTeamMembersAdmin,
  type TeamMember,
} from "@/lib/team-api";
import AdminCmsShell from "@/app/admin/content/AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";

export default function AdminTeamPage() {
  const router = useRouter();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    fetchTeamMembersAdmin()
      .then(setMembers)
      .catch(() => setMembers([]))
      .finally(() => setLoading(false));
  }, [router]);

  async function handleDelete(id: string) {
    const token = getStoredToken();
    if (!token) return;

    if (!window.confirm("Delete this team member?")) return;

    setDeletingId(id);
    try {
      await deleteTeamMember(token, id);
      setMembers((prev) => prev.filter((m) => m._id !== id));
    } catch {
      alert("Failed to delete team member");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <AdminCmsShell
      title="Team"
      description="Manage team members shown on the About page."
      actions={
        <EpaidButton
          href="/admin/team/add"
          className="px-5 py-2 text-sm normal-case"
        >
          + Add member
        </EpaidButton>
      }
    >
      {loading ? (
        <p className="text-muted-foreground">Loading team…</p>
      ) : members.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#00000040] bg-card p-12 text-center">
          <p className="text-muted-foreground">No team members yet.</p>
          <Link
            href="/admin/team/add"
            className="mt-4 inline-block text-epaid hover:underline"
          >
            Add your first member
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member._id}
              className="overflow-hidden rounded-2xl border border-solid border-[#00000040] bg-card shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              <div className="relative aspect-square bg-card-muted">
                <Image
                  src={member.image.url}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h2 className="font-bold text-foreground">{member.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-epaid/10 px-2.5 py-1 text-xs font-semibold text-epaid">
                    #{member.sortOrder}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link
                    href={`/admin/team/${member._id}/edit`}
                    className="text-sm font-semibold text-epaid hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(member._id)}
                    disabled={deletingId === member._id}
                    className="text-sm text-red-600 hover:underline disabled:opacity-50"
                  >
                    {deletingId === member._id ? "Deleting…" : "Delete"}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </AdminCmsShell>
  );
}
