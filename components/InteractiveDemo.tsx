"use client";

import { useState } from "react";
import {
  Terminal,
  MessageSquare,
  Cpu,
  Database,
  Send,
  Zap,
  RefreshCw
} from "lucide-react";
import TiltCard from "./ui/TiltCard";
import BorderBeam from "./ui/BorderBeam";

type DemoAction = "whatsapp" | "lead_score" | "broadcast";

export default function InteractiveDemo() {
  const [activeAction, setActiveAction] = useState<DemoAction>("whatsapp");
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<Array<{ time: string; text: string; type: "info" | "success" | "ai" }>>([
    { time: "00:00.01", text: "Beevora Architecture initialized in standby mode.", type: "info" },
    { time: "00:00.02", text: "Active channels: WhatsApp API, Telegram, Instagram, Web Chat.", type: "info" },
    { time: "00:00.03", text: "Ready for live simulation trigger.", type: "success" },
  ]);

  const runSimulation = (action: DemoAction) => {
    setActiveAction(action);
    setIsRunning(true);

    const now = () => {
      const d = new Date();
      return `${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}`;
    };

    if (action === "whatsapp") {
      setLogs([
        { time: now(), text: "[INGEST] Inbound webhook received from WhatsApp Business API (+62822...)", type: "info" },
        { time: now(), text: "[AI_ANALYSIS] Sentiment score: 0.94 (High Purchase Intent). Classification: ENTERPRISE_UPGRADE", type: "ai" },
        { time: now(), text: "[TOTO-L] Dispatched auto-response with tailored feature comparison.", type: "success" },
        { time: now(), text: "[ORBIT-TRACE] Deal card auto-created in CRM Pipeline under 'Qualified Leads' ($36k ARR).", type: "success" },
      ]);
    } else if (action === "lead_score") {
      setLogs([
        { time: now(), text: "[ORBIT-TRACE] Analyzing behavioral telemetry for Account: 'PT Mitra Solusi'.", type: "info" },
        { time: now(), text: "[PREDICTION] Win probability updated from 64% -> 91% based on decision-maker engagement.", type: "ai" },
        { time: now(), text: "[NOTIFICATION] Slack & Email alert dispatched to Lead Account Exec.", type: "success" },
      ]);
    } else {
      setLogs([
        { time: now(), text: "[BROADCAST] Multi-channel blast payload generated (10,400 target recipients).", type: "info" },
        { time: now(), text: "[EDGE_ROUTER] Distributed across 4 global POPs with rate-limit dampeners.", type: "info" },
        { time: now(), text: "[DELIVERY] 10,394 messages delivered in 1.4 seconds. 0 drops detected.", type: "success" },
      ]);
    }

    setTimeout(() => {
      setIsRunning(false);
    }, 400);
  };

  return (
    <section id="demo" className="section-spacing relative overflow-hidden bg-foreground/[0.015]">
      <div className="site-container relative z-10">

        {/* Header */}
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-yellow-400/15 border border-amber-500/25 dark:border-yellow-400/25 text-amber-700 dark:text-yellow-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURE SANDBOX</span>
          </div>

          <h2 className="section-title">
            <span className="text-foreground">Experience The Flow</span>{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-400 bg-clip-text text-transparent glow-text">
              In Real Time
            </span>
          </h2>

          <p className="text-foreground/75 text-base lg:text-lg">
            Test how Beevora Labs routes incoming high-volume events seamlessly between our
            communication gateway and intelligent CRM backend.
          </p>
        </div>

        {/* Sandbox Board */}
        <TiltCard maxRotation={5} glowColor="rgba(250, 204, 21, 0.25)">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-sm dark:shadow-2xl">
            <BorderBeam size={280} duration={8} colorFrom="#fef08a" colorTo="#facc15" />

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-card-border">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-foreground/60 uppercase">Simulation Scenario:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => runSimulation("whatsapp")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                      activeAction === "whatsapp"
                        ? "bg-stone-200 dark:bg-yellow-400 text-black font-bold shadow-sm dark:shadow-lg"
                        : "bg-card-bg border border-card-border text-foreground hover:border-amber-500/40 dark:hover:border-yellow-400/40"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inbound</span>
                  </button>

                  <button
                    onClick={() => runSimulation("lead_score")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                      activeAction === "lead_score"
                        ? "bg-stone-200 dark:bg-yellow-300 text-black font-bold shadow-sm dark:shadow-lg"
                        : "bg-card-bg border border-card-border text-foreground hover:border-amber-500/40 dark:hover:border-yellow-400/40"
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>AI Lead Scoring</span>
                  </button>

                  <button
                    onClick={() => runSimulation("broadcast")}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                      activeAction === "broadcast"
                        ? "bg-stone-200 dark:bg-yellow-500 text-black font-bold shadow-sm dark:shadow-lg"
                        : "bg-card-bg border border-card-border text-foreground hover:border-orange-500/40 dark:hover:border-yellow-400/40"
                    }`}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Global Broadcast</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                <span className="w-2 h-2 rounded-full bg-stone-200 dark:bg-yellow-400 animate-pulse" />
                <span>ENVIRONMENT: STABLE (0% LOSS)</span>
              </div>
            </div>

            {/* Visual Node Flow & Terminal Output */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">

              {/* Architecture Node Diagram */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-card-bg/70 border border-card-border flex items-center gap-4 transition-transform hover:scale-[1.02]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 dark:bg-yellow-400/15 text-amber-700 dark:text-yellow-300 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground/65 uppercase">Step 01: Client Trigger</p>
                    <p className="text-sm font-bold text-foreground">Omnichannel Ingestion</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-amber-700 dark:text-yellow-300">ACTIVE</span>
                </div>

                <div className="flex justify-center text-amber-700 dark:text-yellow-400 py-1">
                  <Zap className="w-4 h-4 animate-bounce" />
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/15 dark:bg-yellow-400/15 border border-amber-500/35 dark:border-yellow-400/40 flex items-center gap-4 transition-transform hover:scale-[1.02]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/25 dark:bg-yellow-400/25 text-amber-700 dark:text-yellow-300 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-amber-700 dark:text-yellow-300 uppercase">Step 02: AI Brain</p>
                    <p className="text-sm font-bold text-foreground">Beevora Core Intelligence</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-amber-700 dark:text-yellow-300">&lt;2ms</span>
                </div>

                <div className="flex justify-center text-orange-700 dark:text-yellow-400 py-1">
                  <Zap className="w-4 h-4 animate-bounce" />
                </div>

                <div className="p-4 rounded-2xl bg-card-bg/70 border border-card-border flex items-center gap-4 transition-transform hover:scale-[1.02]">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 dark:bg-yellow-400/15 text-orange-700 dark:text-yellow-300 flex items-center justify-center shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground/65 uppercase">Step 03: CRM Sync</p>
                    <p className="text-sm font-bold text-foreground">Orbit-Trace Ledger</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-orange-700 dark:text-yellow-300">COMMITTED</span>
                </div>
              </div>

              {/* Real-time Simulated Terminal Output */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#090704] dark:bg-[#070602] border border-amber-500/20 dark:border-yellow-400/30 p-5 shadow-sm dark:shadow-2xl font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/40">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-amber-700 dark:text-yellow-400" />
                      <span>live-stream-logger.sh</span>
                    </div>
                    <button
                      onClick={() => runSimulation(activeAction)}
                      className="flex items-center gap-1.5 text-[11px] text-amber-700 dark:text-yellow-300 hover:underline"
                    >
                      <RefreshCw className={`w-3 h-3 ${isRunning ? "animate-spin" : ""}`} />
                      <span>Re-run Test</span>
                    </button>
                  </div>

                  {/* Logs list */}
                  <div className="space-y-2.5 min-h-[220px] max-h-[260px] overflow-y-auto">
                    {logs.map((log, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-white/30 shrink-0">[{log.time}]</span>
                        <span
                          className={`${
                            log.type === "success"
                              ? "text-amber-400 dark:text-yellow-300"
                              : log.type === "ai"
                              ? "text-orange-700 dark:text-yellow-400"
                              : "text-white/80"
                          }`}
                        >
                          {log.text}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-white/30 pt-2">
                      <span className="w-1.5 h-3 bg-stone-200 dark:bg-yellow-300 animate-pulse" />
                      <span>Listening for incoming telemetry...</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
