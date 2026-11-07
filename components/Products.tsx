"use client";

import { useState } from "react";
import {
  Layers,
  Globe,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Bot,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  BarChart2
} from "lucide-react";
import TiltCard from "./ui/TiltCard";
import BorderBeam from "./ui/BorderBeam";

export default function Products() {
  const [activeTab, setActiveTab] = useState<"toto-l" | "orbit-trace">("toto-l");

  return (
    <section id="products" className="section-spacing relative overflow-hidden">
      {/* Background glow */}
      <div className="hidden dark:block absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 dark:bg-yellow-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-10 right-0 w-96 h-96 bg-orange-500/10 dark:bg-yellow-300/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">

        {/* Section Header */}
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-yellow-400/10 border border-amber-500/25 dark:border-yellow-400/25 text-amber-700 dark:text-yellow-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLAGSHIP PRODUCT ECOSYSTEM</span>
          </div>

          <h2 className="section-title">
            <span className="text-foreground">Engineered for Maximum</span>{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-400 bg-clip-text text-transparent glow-text">
              Business Velocity
            </span>
          </h2>

          <p className="text-foreground/75 text-base lg:text-lg">
            Whether unifying customer conversations across ten channels or scaling sales pipelines
            with algorithmic precision, Beevora delivers uncompromising reliability.
          </p>

          {/* Interactive Switcher */}
          <div className="inline-flex flex-wrap justify-center items-center gap-1 p-1.5 mt-8 rounded-full bg-card-bg border border-card-border shadow-inner">
            <button
              onClick={() => setActiveTab("toto-l")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "toto-l"
                  ? "bg-gradient-to-r from-stone-200 to-amber-100 dark:from-yellow-300 dark:to-yellow-400 text-black shadow-sm dark:shadow-lg font-bold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>TotO-L Omni-Channel</span>
            </button>

            <button
              onClick={() => setActiveTab("orbit-trace")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "orbit-trace"
                  ? "bg-gradient-to-r from-stone-200 to-amber-100 dark:from-yellow-400 dark:to-amber-400 text-black shadow-sm dark:shadow-lg font-bold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Orbit-Trace CRM</span>
            </button>
          </div>
        </div>

        {/* 3D Showcase Card */}
        <div className="relative">
          {activeTab === "toto-l" ? (
            <TiltCard maxRotation={8} glowColor="rgba(250, 204, 21, 0.25)">
              <div className="glass-panel rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden">
                <BorderBeam size={300} duration={9} colorFrom="#fef08a" colorTo="#facc15" />

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Left Content */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 dark:bg-yellow-400/15 text-amber-700 dark:text-yellow-300 text-xs font-mono font-medium">
                      <Layers className="w-3.5 h-3.5" />
                      <span>OMNI-CHANNEL PLATFORM</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                      TotO-L <span className="text-amber-700 dark:text-yellow-400">Unified Hub</span>
                    </h3>

                    <p className="text-foreground/75 leading-relaxed text-base">
                      Eliminate fragmented communications. TotO-L connects WhatsApp Business API,
                      Telegram, Instagram Direct, and website live chat into a single high-speed dashboard,
                      augmented with automated AI triage and sentiment analytics.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      {[
                        "Zero-latency WebSocket delivery",
                        "Automated AI Bot & Human Handoff",
                        "Multi-agent routing & SLA metrics",
                        "Custom Webhook & CRM sync",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-yellow-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <button className="px-6 py-3 rounded-full btn-cyber-primary text-xs sm:text-sm font-semibold flex items-center gap-2">
                        <span>Deploy TotO-L</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono text-foreground/60 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-700 dark:text-yellow-400" /> 14-day zero commitment trial
                      </span>
                    </div>
                  </div>

                  {/* Right: Live Interactive Mockup Console */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl bg-[#090704] dark:bg-[#070602] border border-amber-500/20 dark:border-yellow-400/30 p-4 sm:p-6 shadow-sm dark:shadow-2xl text-left font-sans">

                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          <span className="text-xs font-mono text-white/50 ml-2">totol-console://live-feed</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 dark:bg-yellow-400/20 text-amber-400 dark:text-yellow-300">
                          SYNCED 100%
                        </span>
                      </div>

                      {/* Mockup Chat Feed */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white">WhatsApp Business</span>
                                <span className="text-[10px] text-white/40">10s ago</span>
                              </div>
                              <p className="text-xs text-white/70 mt-1">
                                &quot;Can we upgrade our enterprise tier to support 50,000 monthly active users?&quot;
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 dark:bg-yellow-400/20 text-amber-400 dark:text-yellow-300 font-mono">
                            HIGH PRIORITY
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 dark:bg-yellow-400/20 text-amber-400 dark:text-yellow-300 flex items-center justify-center shrink-0">
                              <Bot className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-white">Beevora AI Assistant</span>
                                <span className="text-[10px] text-white/40">Automated</span>
                              </div>
                              <p className="text-xs text-white/70 mt-1">
                                &quot;Proposal generated. Pricing tier calculation dispatched to sales pipeline.&quot;
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-mono">
                            AI RESOLVED
                          </span>
                        </div>

                        {/* Interactive Status Footer */}
                        <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-yellow-400/10 border border-amber-500/20 dark:border-yellow-400/25 flex items-center justify-between text-xs">
                          <span className="text-amber-700 dark:text-yellow-300 font-mono">Throughput: 4,820 msgs/min</span>
                          <span className="text-white/60 font-mono">Avg Latency: 11ms</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </TiltCard>
          ) : (
            <TiltCard maxRotation={8} glowColor="rgba(250, 204, 21, 0.25)">
              <div className="glass-panel rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden">
                <BorderBeam size={300} duration={9} colorFrom="#fef08a" colorTo="#facc15" />

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Left Content */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 dark:bg-yellow-400/15 text-amber-700 dark:text-yellow-300 text-xs font-mono font-medium">
                      <Globe className="w-3.5 h-3.5" />
                      <span>INTELLIGENT CRM SUITE</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                      Orbit-Trace <span className="text-amber-700 dark:text-yellow-400">Pipeline Engine</span>
                    </h3>

                    <p className="text-foreground/75 leading-relaxed text-base">
                      Move beyond static contact lists. Orbit-Trace delivers predictive lead scoring,
                      automated deal progression tracking, and deep telemetry into every interaction
                      across your customer lifecycle.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      {[
                        "Predictive Deal Win Probabilities",
                        "Automated Sequence Workflows",
                        "Unified Customer Timeline 360°",
                        "Custom API & Webhook Ecosystem",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-yellow-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <button className="px-6 py-3 rounded-full btn-cyber-primary text-xs sm:text-sm font-semibold flex items-center gap-2">
                        <span>Deploy Orbit-Trace</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono text-foreground/60 flex items-center gap-1.5">
                        <BarChart2 className="w-3.5 h-3.5 text-amber-700 dark:text-yellow-400" /> Full REST & GraphQL APIs
                      </span>
                    </div>
                  </div>

                  {/* Right: CRM Pipeline Mockup */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl bg-[#090704] dark:bg-[#070602] border border-amber-500/20 dark:border-yellow-400/30 p-4 sm:p-6 shadow-sm dark:shadow-2xl text-left font-sans">

                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          <span className="text-xs font-mono text-white/50 ml-2">orbit-crm://sales-pipeline</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 dark:bg-yellow-400/20 text-amber-400 dark:text-yellow-300">
                          Q4 REVENUE PACING: +142%
                        </span>
                      </div>

                      {/* Mockup Kanban Columns */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-mono uppercase text-white/60">Qualification</span>
                            <span className="text-[10px] font-bold text-white/40">3 Deals</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                            <p className="text-xs font-semibold text-white">Global Fintech Corp</p>
                            <p className="text-[11px] text-amber-400 dark:text-yellow-300 font-mono mt-1">$48,000 / yr</p>
                            <div className="mt-2 flex items-center justify-between text-[10px] text-white/50">
                              <span>AI Score: 94%</span>
                              <span className="text-amber-400 dark:text-yellow-300">Hot Lead</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-mono uppercase text-amber-700 dark:text-yellow-400">Contract Final</span>
                            <span className="text-[10px] font-bold text-white/40">2 Deals</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/30 dark:border-yellow-400/40">
                            <p className="text-xs font-semibold text-white">Apex Logistics SE</p>
                            <p className="text-[11px] text-orange-700 dark:text-yellow-300 font-mono mt-1">$92,500 / yr</p>
                            <div className="mt-2 flex items-center justify-between text-[10px] text-white/50">
                              <span>AI Score: 98%</span>
                              <span className="text-amber-400 dark:text-yellow-300">Closing</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Velocity Metric */}
                      <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-amber-400 dark:text-yellow-300" />
                          <span className="text-xs text-white/80">Automated Pipeline Telemetry</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-400 dark:text-yellow-300">+38% Cycle Speed</span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </TiltCard>
          )}
        </div>

      </div>
    </section>
  );
}
