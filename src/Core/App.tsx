// <APP SHELL> IMPORT SECTION
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from "@/Core/Routes";
import { Github, Heart } from "@/Core/UI/icons";
import { version, buildTime } from "@/Core/Version";

// <APP SHELL> LOGIC SECTION
const LinkBase: React.FC<React.PropsWithChildren<{ to: string }>> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl text-sm ${isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:text-white"}`
    }
  >
    {children}
  </NavLink>
);

// <APP SHELL> UI SECTION
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-100">
      <header className="safe-container flex items-center justify-between py-4">
        <nav className="flex gap-2">
          {routes.nav.map(n => (
            <LinkBase key={n.path} to={n.path}>{n.label}</LinkBase>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1"><Github size={16}/> Repo</a>
          <span>v{version}</span>
          <span className="hidden sm:inline">build {buildTime}</span>
        </div>
      </header>

      <main className="safe-container py-8">
        <Routes>
          {routes.items.map(r => (
            <Route key={r.path} path={r.path} element={<r.element />} />
          ))}
        </Routes>
      </main>

      <footer className="safe-container py-8 text-center text-xs text-gray-500">
        Made with mild chaos and <Heart size={14} className="inline"/>.
      </footer>
    </div>
  );
};

export default App;
