// <LAUNCHER SCREEN> IMPORT SECTION
import React from "react";
import Card from "@/Core/UI/components/Card";
import Button from "@/Core/UI/components/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRegistry, resolveFeature } from "./Launcher.logic";

// <LAUNCHER SCREEN> LOGIC SECTION
function LauncherHome() {
  const { items } = useRegistry();
  return (
    <Card title="Yuzha Launcher" footer={<div className="text-xs text-gray-400">/yuzha/apps</div>}>
      {items.length === 0 ? (
        <p>No apps registered yet. Add entries to <code>src/Features/Launcher/registry.ts</code>.</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {items.map(app => (
            <Link key={app.id} to={app.routeBase} className="block">
              <div className="rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/30">
                <div className="font-semibold">{app.title}</div>
                <div className="text-xs text-gray-400">/{app.slug}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="mt-4">
        <Link to="/yuzha/apps"><Button variant="ghost">Open Apps Grid</Button></Link>
      </div>
    </Card>
  );
}
function AppsGrid() {
  const { items } = useRegistry();
  return (
    <Card title="Apps" footer={<div className="text-xs text-gray-400">Registry-backed grid</div>}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.length === 0 ? <p className="text-gray-400">No apps yet.</p> : items.map(app => (
          <Link key={app.id} to={app.routeBase} className="block">
            <div className="rounded-xl p-4 ring-1 ring-white/10 hover:ring-white/30">
              <div className="font-semibold">{app.title}</div>
              <div className="text-xs text-gray-400">/{app.slug}</div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
}
function AppHost() {
  const { slug = "" } = useParams();
  const entry = resolveFeature(slug);
  if (!entry) return <Card title="App not found"><p>Unknown app: <code>{slug}</code></p></Card>;
  return <Card title={`Feature: ${entry.title}`} footer={<div className="text-xs text-gray-400">{entry.routeBase}</div>}>
    <p>This is where the feature app mounts.</p>
  </Card>;
}

// <LAUNCHER SCREEN> UI SECTION
const LauncherScreen: React.FC = () => {
  const loc = useLocation();
  if (loc.pathname === "/yuzha") return <LauncherHome />;
  if (loc.pathname === "/yuzha/apps") return <AppsGrid />;
  if (loc.pathname.startsWith("/yuzha/apps/")) return <AppHost />;
  return <LauncherHome />;
};
export default LauncherScreen;
