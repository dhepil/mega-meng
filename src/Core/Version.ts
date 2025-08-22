// <VERSION> IMPORT SECTION
// none

// <VERSION> LOGIC SECTION
export const version: string = (globalThis as any).__APP_VERSION__ ?? "0.1.0";
export const buildTime: string = new Date().toISOString();

// <VERSION> UI SECTION
// N/A
