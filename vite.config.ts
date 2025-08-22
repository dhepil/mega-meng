import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// <BUILD> IMPORT SECTION
// none

// <BUILD> LOGIC SECTION
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    outDir: "build"
  },
  server: {
    port: 5173
  },
  preview: {
    port: 5173
  },
  define: {
    __APP_VERSION__: JSON.stringify("0.1.0")
  }
});

// <BUILD> UI SECTION
// N/A
