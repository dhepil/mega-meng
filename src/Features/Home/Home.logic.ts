// <HOME LOGIC> IMPORT SECTION
import { api } from "@/Core/API/client";
import { useUiStore } from "@/Core/State/store";

// <HOME LOGIC> LOGIC SECTION
export async function pingHealth(): Promise<"ok" | "error"> {
  try {
    const res = await api<{ status: string }>({ path: "/health" });
    return res.status === "ok" ? "ok" : "error";
  } catch {
    return "error";
  }
}
export function useClicks() {
  const clicks = useUiStore(s => s.clicks);
  const inc = useUiStore(s => s.inc);
  return { clicks, inc };
}
export function useStatus() {
  const status = useUiStore(s => s.status);
  const setStatus = useUiStore(s => s.setStatus);
  return { status, setStatus };
}

// <HOME LOGIC> UI SECTION
// N/A
