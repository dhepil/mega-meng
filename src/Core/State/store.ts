// <STATE> IMPORT SECTION
import { create } from "zustand";

// <STATE> LOGIC SECTION
interface UiState {
  clicks: number;
  status: "idle" | "ok" | "error";
  inc(): void;
  setStatus(s: UiState["status"]): void;
}
export const useUiStore = create<UiState>((set) => ({
  clicks: 0,
  status: "idle",
  inc: () => set(s => ({ clicks: s.clicks + 1 })),
  setStatus: (status) => set({ status })
}));

// <STATE> UI SECTION
// N/A
