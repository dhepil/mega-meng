// <API CLIENT> IMPORT SECTION
import { getApiBaseUrl } from "@/Core/Utils/env";

// <API CLIENT> LOGIC SECTION
export type FetchOptions = RequestInit & { path: string };
export async function api<T = unknown>({ path, ...init }: FetchOptions): Promise<T> {
  const base = getApiBaseUrl();
  const url = base ? `${base}${path}` : path;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(init.headers ?? {}) },
    ...init
  });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  return (await res.json()) as T;
}

// <API CLIENT> UI SECTION
// N/A
