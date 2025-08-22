// <APP BOOT> IMPORT SECTION
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/Core/App";
import "@/Core/index.css";

// <APP BOOT> LOGIC SECTION
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// <APP BOOT> UI SECTION
// N/A
