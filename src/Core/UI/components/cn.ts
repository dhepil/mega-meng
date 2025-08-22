// <CN> IMPORT SECTION
// none

// <CN> LOGIC SECTION
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}

// <CN> UI SECTION
// N/A
