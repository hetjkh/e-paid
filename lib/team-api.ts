const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type TeamImage = {
  url: string;
  publicId: string;
};

export type TeamMember = {
  _id: string;
  name: string;
  role: string;
  image: TeamImage;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

/** Static fallbacks used when the API is empty or offline. */
export const FALLBACK_TEAM_MEMBERS: TeamMember[] = [
  {
    _id: "fallback-1",
    name: "Chittullintavida Muneer",
    role: "Treasury & Budgeting",
    image: { url: "/1.png", publicId: "fallback-1" },
    sortOrder: 0,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "fallback-2",
    name: "Al Sadek kamal",
    role: "Operation Manager",
    image: { url: "/2.png", publicId: "fallback-2" },
    sortOrder: 1,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "fallback-3",
    name: "Nouf Alrbaia",
    role: "Marketing and PR manager",
    image: { url: "/3.png", publicId: "fallback-3" },
    sortOrder: 2,
    createdAt: "",
    updatedAt: "",
  },
];

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(`${API_URL}/api/team`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return FALLBACK_TEAM_MEMBERS;

    const data = await res.json();
    const members: TeamMember[] = data.members ?? [];
    return members.length > 0 ? members : FALLBACK_TEAM_MEMBERS;
  } catch {
    return FALLBACK_TEAM_MEMBERS;
  }
}

export async function fetchTeamMembersClient(): Promise<TeamMember[]> {
  try {
    const res = await fetch(`${API_URL}/api/team`);

    if (!res.ok) return FALLBACK_TEAM_MEMBERS;

    const data = await res.json();
    const members: TeamMember[] = data.members ?? [];
    return members.length > 0 ? members : FALLBACK_TEAM_MEMBERS;
  } catch {
    return FALLBACK_TEAM_MEMBERS;
  }
}

/** Admin list — returns empty array when API is empty (no fallbacks). */
export async function fetchTeamMembersAdmin(): Promise<TeamMember[]> {
  const res = await fetch(`${API_URL}/api/team`);

  if (!res.ok) {
    throw new Error("Failed to fetch team members");
  }

  const data = await res.json();
  return data.members ?? [];
}

export async function fetchTeamMemberByIdClient(
  id: string
): Promise<TeamMember | null> {
  const res = await fetch(`${API_URL}/api/team/${id}`);

  if (!res.ok) return null;

  const data = await res.json();
  return data.member ?? null;
}

export async function createTeamMember(
  token: string,
  formData: FormData
): Promise<TeamMember> {
  const res = await fetch(`${API_URL}/api/team`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to create team member");
  }

  return data.member;
}

export async function updateTeamMember(
  token: string,
  id: string,
  formData: FormData
): Promise<TeamMember> {
  const res = await fetch(`${API_URL}/api/team/${id}`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to update team member");
  }

  return data.member;
}

export async function deleteTeamMember(
  token: string,
  id: string
): Promise<void> {
  const res = await fetch(`${API_URL}/api/team/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete team member");
  }
}
