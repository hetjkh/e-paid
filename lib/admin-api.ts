const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export type AdminUser = {
  id: string;
  role: string;
};

export type LoginResponse = {
  message: string;
  token: string;
  admin: AdminUser;
};

const TOKEN_KEY = "epaid_admin_token";

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function loginAdmin(id: string, password: string): Promise<LoginResponse> {
  let res: Response;

  try {
    res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, password }),
    });
  } catch {
    throw new Error(
      "Cannot reach the API. Start the backend: cd e-paid-back && npm run dev"
    );
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export async function fetchAdminProfile(token: string): Promise<{ admin: AdminUser }> {
  const res = await fetch(`${API_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Unauthorized");
  }

  return data;
}

export async function logoutAdmin(token: string): Promise<void> {
  await fetch(`${API_URL}/api/auth/logout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
}
