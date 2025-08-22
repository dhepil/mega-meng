// <ENV> IMPORT SECTION
// none

// <ENV> LOGIC SECTION
const env = { apiBaseUrl: import.meta.env.VITE_API_BASE_URL as string | undefined };
export function getApiBaseUrl(): string | undefined { return env.apiBaseUrl; }

// <ENV> UI SECTION
// N/A
