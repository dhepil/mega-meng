// <ROUTER> IMPORT SECTION
import HomeScreen from "@/Features/Home/HomeScreen";
import LauncherScreen from "@/Features/Launcher/LauncherScreen";

// <ROUTER> LOGIC SECTION
export const routes = {
  nav: [
    { path: "/", label: "Home" },
    { path: "/yuzha", label: "Yuzha" }
  ],
  items: [
    { path: "/", element: HomeScreen },
    { path: "/yuzha", element: LauncherScreen },
    { path: "/yuzha/apps", element: LauncherScreen },
    { path: "/yuzha/apps/:slug", element: LauncherScreen }
  ]
} as const;

// <ROUTER> UI SECTION
// N/A
