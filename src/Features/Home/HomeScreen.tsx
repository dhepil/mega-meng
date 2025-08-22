// <HOME SCREEN> IMPORT SECTION
import React, { useState } from "react";
import Card from "@/Core/UI/components/Card";
import Button from "@/Core/UI/components/Button";
import { RefreshCw } from "@/Core/UI/icons";
import { useClicks, useStatus, pingHealth } from "./Home.logic";
import { version } from "@/Core/Version";
import { Link } from "react-router-dom";

// <HOME SCREEN> LOGIC SECTION
function StatusPill({ status }: { status: "idle" | "ok" | "error" }) {
  const map = { idle: "bg-gray-500", ok: "bg-emerald-500", error: "bg-rose-500" } as const;
  return <span className={`inline-block h-2 w-2 rounded-full ${map[status]}`} />;
}

// <HOME SCREEN> UI SECTION
const HomeScreen: React.FC = () => {
  const { clicks, inc } = useClicks();
  const { status, setStatus } = useStatus();
  const [busy, setBusy] = useState(false);
  return (
    <div className="grid gap-6">
      <Card title="Welcome" footer={<div className="text-xs text-gray-400">Version {version}</div>}>
        <p>
          This is your foundation. Routing is set, state wired, and an optional API ready.
          Head to <Link to="/yuzha" className="underline">Yuzha</Link> to see the Launcher.
        </p>
      </Card>
      <Card title="Demo actions" footer={
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2"><StatusPill status={status}/> status</span>
          <span>{clicks} clicks</span>
        </div>
      }>
        <div className="flex gap-3">
          <Button onClick={inc}>Increment</Button>
          <Button variant="ghost" onClick={async () => {
            setBusy(true);
            const s = await pingHealth();
            setStatus(s);
            setBusy(false);
          }}>
            <RefreshCw size={16} className={busy ? "animate-spin" : ""}/> Check health
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default HomeScreen;
