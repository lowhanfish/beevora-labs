"use client";

import { useState } from "react";
import {
  Cpu,
  ShieldCheck,
  Globe2,
  Code2,
  Sparkles,
  Lock
} from "lucide-react";
import TiltCard from "./ui/TiltCard";
import BorderBeam from "./ui/BorderBeam";

export default function Features() {
  const [activeCodeTab, setActiveCodeTab] = useState<"curl" | "typescript">("typescript");

  return (
    <section id="features" className="section-spacing relative">
      {/* Background Ambience */}
      <div className="hidden dark:block absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/10 dark:bg-yellow-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="site-container relative z-10">

        {/* Section Header */}
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-yellow-400/15 border border-amber-500/25 dark:border-yellow-400/25 text-amber-700 dark:text-yellow-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENTERPRISE ARCHITECTURE MATRIX</span>
          </div>

          <h2 className="section-title">
            <span className="text-foreground">Engineered for Scale,</span>{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-400 bg-clip-text text-transparent glow-text">
              Zero Compromise
            </span>
          </h2>

          <p className="text-foreground/75 text-base lg:text-lg">
            Every layer of Beevora Labs is designed from the metal up to sustain high-concurrency
            workloads with microsecond telemetry and self-healing infrastructure.
          </p>
        </div>

        {/* 21st.dev Style Cyber Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Bento Card 1: AI Engine (Span 8) */}
          <div className="md:col-span-8">
            <TiltCard glowColor="rgba(250, 204, 21, 0.25)" maxRotation={7} className="h-full">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <BorderBeam size={220} duration={8} colorFrom="#fef08a" colorTo="#facc15" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/15 dark:bg-yellow-400/20 border border-amber-500/30 dark:border-yellow-400/35 flex items-center justify-center text-amber-700 dark:text-yellow-300">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-card-bg border border-card-border text-amber-700 dark:text-yellow-300">
                      AUTONOMOUS AGENTS
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Predictive AI & Automated Handoff
                  </h3>
                  <p className="text-foreground/70 text-sm max-w-xl mb-6">
                    Harness fine-tuned models to triage customer inquiries, classify lead urgency,
                    and draft context-aware resolutions in milliseconds without human friction.
                  </p>
                </div>

                {/* Interactive Simulated AI Workflow Node Map */}
                <div className="rounded-2xl bg-foreground/5 border border-card-border p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-foreground/65 pb-2 mb-3 border-b border-card-border">
                    <span>PIPELINE_ORCHESTRATOR.LOG</span>
                    <span className="text-amber-700 dark:text-yellow-300">STATUS: 420 TOKENS/SEC</span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2.5 text-center">
                    <div className="p-3 rounded-xl bg-card-bg border border-card-border">
                      <p className="text-[10px] text-foreground/65">INPUT EVENT</p>
                      <p className="text-xs font-bold text-foreground mt-1">Multi-Channel Ingest</p>
                      <span className="text-[10px] text-amber-700 dark:text-yellow-400 font-mono">1.2ms latency</span>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-500/15 dark:bg-yellow-400/15 border border-amber-500/40 dark:border-yellow-400/35">
                      <p className="text-[10px] text-amber-700 dark:text-yellow-300">AI INFERENCE</p>
                      <p className="text-xs font-bold text-foreground mt-1">Sentiment & Intent</p>
                      <span className="text-[10px] text-amber-700 dark:text-yellow-300 font-mono">99.4% precision</span>
                    </div>

                    <div className="p-3 rounded-xl bg-card-bg border border-card-border">
                      <p className="text-[10px] text-foreground/65">ACTION DISPATCH</p>
                      <p className="text-xs font-bold text-foreground mt-1">CRM Sync & Reply</p>
                      <span className="text-[10px] text-orange-700 dark:text-yellow-400 font-mono">Zero drops</span>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Bento Card 2: Edge Network (Span 4) */}
          <div className="md:col-span-4">
            <TiltCard glowColor="rgba(250, 204, 21, 0.25)" maxRotation={7} className="h-full">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <BorderBeam size={180} duration={10} colorFrom="#facc15" colorTo="#f59e0b" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 dark:bg-yellow-400/20 border border-orange-500/30 dark:border-yellow-400/35 flex items-center justify-center text-orange-700 dark:text-yellow-300">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-card-bg border border-card-border text-orange-700 dark:text-yellow-300">
                      GLOBAL EDGE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Sub-15ms Edge Fabric
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Distributed across global POPs ensuring instant data synchronization and low-latency packet routing.
                  </p>
                </div>

                {/* Ping table */}
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { node: "Jakarta (CGK)", ping: "8ms", color: "text-amber-700 dark:text-yellow-300" },
                    { node: "Singapore (SIN)", ping: "12ms", color: "text-amber-700 dark:text-yellow-300" },
                    { node: "Tokyo (NRT)", ping: "28ms", color: "text-amber-700 dark:text-yellow-400" },
                    { node: "US-West (SFO)", ping: "72ms", color: "text-orange-700 dark:text-yellow-400" },
                  ].map((item) => (
                    <div
                      key={item.node}
                      className="flex items-center justify-between p-2 rounded-lg bg-card-bg/60 border border-card-border"
                    >
                      <span className="text-foreground/80">{item.node}</span>
                      <span className={`font-bold ${item.color}`}>{item.ping}</span>
                    </div>
                  ))}
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Bento Card 3: Security & Cryptography (Span 4) */}
          <div className="md:col-span-4">
            <TiltCard glowColor="rgba(250, 204, 21, 0.25)" maxRotation={7} className="h-full">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 dark:bg-yellow-400/20 border border-amber-500/30 dark:border-yellow-400/35 flex items-center justify-center text-amber-700 dark:text-yellow-300 mb-4">
                    <Lock className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Enterprise Zero-Trust
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6">
                    End-to-end encrypted tunnels, cryptographic role-based ACLs, and automated audit trails.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-card-bg/60 border border-card-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/15 dark:bg-yellow-400/20 flex items-center justify-center text-amber-700 dark:text-yellow-300 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">AES-256 GCM In-Transit</p>
                    <p className="text-[11px] font-mono text-foreground/65">Immutable Audit Logs</p>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Bento Card 4: Developer APIs (Span 8) */}
          <div className="md:col-span-8">
            <TiltCard glowColor="rgba(250, 204, 21, 0.25)" maxRotation={7} className="h-full">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/15 dark:bg-yellow-400/20 flex items-center justify-center text-amber-700 dark:text-yellow-300">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        Developer-First APIs & Webhooks
                      </h3>
                    </div>
                    <p className="text-foreground/70 text-xs sm:text-sm">
                      Integrate with Next.js, Python, or Go using type-safe SDKs and instant event webhooks.
                    </p>
                  </div>

                  {/* Code Language Switch */}
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-card-bg border border-card-border text-xs font-mono shrink-0">
                    <button
                      onClick={() => setActiveCodeTab("typescript")}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        activeCodeTab === "typescript"
                          ? "bg-amber-500/20 dark:bg-yellow-400/25 text-amber-700 dark:text-yellow-300 font-semibold"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      TypeScript
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("curl")}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        activeCodeTab === "curl"
                          ? "bg-orange-500/20 dark:bg-yellow-400/25 text-orange-700 dark:text-yellow-300 font-semibold"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      cURL
                    </button>
                  </div>
                </div>

                {/* Code Block Snippet */}
                <div className="rounded-2xl bg-[#090704] dark:bg-[#070602] border border-amber-500/20 dark:border-yellow-400/30 p-4 font-mono text-xs overflow-x-auto text-left shadow-inner">
                  {activeCodeTab === "typescript" ? (
                    <pre className="text-white/85 leading-relaxed">
                      <code>
                        <span className="text-orange-400 dark:text-yellow-400">import</span> &#123; BeevoraClient &#125; <span className="text-orange-400 dark:text-yellow-400">from</span> <span className="text-amber-400 dark:text-yellow-300">&apos;@beevora/sdk&apos;</span>;{"\n\n"}
                        <span className="text-amber-300 dark:text-yellow-300">const</span> beevora = <span className="text-amber-300 dark:text-yellow-300">new</span> <span className="text-yellow-300">BeevoraClient</span>(&#123; apiKey: process.env.BEEVORA_KEY &#125;);{"\n\n"}
                        <span className="text-white/40">// Dispatch message across WhatsApp & Orbit CRM in one call</span>{"\n"}
                        <span className="text-amber-300 dark:text-yellow-300">await</span> beevora.omnichannel.<span className="text-yellow-300">dispatch</span>(&#123;{"\n"}
                        {"  "}channel: <span className="text-amber-400 dark:text-yellow-300">&apos;whatsapp&apos;</span>,{"\n"}
                        {"  "}recipient: <span className="text-amber-400 dark:text-yellow-300">&apos;+6282291662895&apos;</span>,{"\n"}
                        {"  "}payload: &#123; template: <span className="text-amber-400 dark:text-yellow-300">&apos;enterprise_onboarding&apos;</span>, aiAutopilot: <span className="text-yellow-400">true</span> &#125;{"\n"}
                        &#125;);
                      </code>
                    </pre>
                  ) : (
                    <pre className="text-white/85 leading-relaxed">
                      <code>
                        <span className="text-amber-400 dark:text-yellow-300">curl</span> -X POST https://api.beevora.com/v1/omnichannel/dispatch \{"\n"}
                        {"  "}-H <span className="text-amber-400 dark:text-yellow-300">&quot;Authorization: Bearer $BEEVORA_API_KEY&quot;</span> \{"\n"}
                        {"  "}-H <span className="text-amber-400 dark:text-yellow-300">&quot;Content-Type: application/json&quot;</span> \{"\n"}
                        {"  "}-d &apos;&#123; <span className="text-yellow-300">&quot;channel&quot;</span>: <span className="text-amber-400 dark:text-yellow-300">&quot;whatsapp&quot;</span>, <span className="text-yellow-300">&quot;auto_crm_sync&quot;</span>: <span className="text-orange-400 dark:text-yellow-400">true</span> &#125;&apos;
                      </code>
                    </pre>
                  )}
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
