// <LAUNCHER LOGIC> IMPORT SECTION
import { registry, getBySlug } from "./registry";
// <LAUNCHER LOGIC> LOGIC SECTION
export function useRegistry() { return { items: registry }; }
export function resolveFeature(slug: string) { return getBySlug(slug); }
// <LAUNCHER LOGIC> UI SECTION
// N/A
