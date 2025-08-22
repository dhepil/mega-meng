// <LAUNCHER REGISTRY> IMPORT SECTION
export type Permission = "none" | "local" | "network" | "storage";
export interface FeatureEntry {
  id: string; slug: string; title: string; iconKey?: string; routeBase: string;
  permissions?: Permission[]; enabled: boolean;
}
// <LAUNCHER REGISTRY> LOGIC SECTION
export const registry: FeatureEntry[] = [];
export function getBySlug(slug: string): FeatureEntry | undefined { return registry.find(r => r.slug === slug); }
// <LAUNCHER REGISTRY> UI SECTION
// N/A
