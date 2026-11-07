"use client";

import { ArrowRight, Terminal, Shield, Zap, Sparkles } from "lucide-react";
import Hero3DCanvas from "./canvas/Hero3DCanvas";
import BorderBeam from "./ui/BorderBeam";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden pt-28 pb-10 sm:pt-32 lg:pt-32 lg:pb-12"
    >
      {/* Background Cyber Mesh */}
      <div className="absolute inset-0 hero-mesh opacity-40 pointer-events-none" />
      <div className="absolute inset-0 cyber-gradient pointer-events-none" />

      {/* Radiant Glowing Spheres */}
      <div className="hidden dark:block absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-amber-500/15 dark:bg-yellow-400/15 rounded-full blur-[130px] pointer-events-none animate-pulse-subtle" />
      <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-500/10 dark:bg-yellow-300/12 rounded-full blur-[140px] pointer-events-none animate-pulse-subtle" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 site-container w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Cyber Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card-bg/80 border border-card-border backdrop-blur-md mb-4 shadow-sm group">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 dark:bg-yellow-400 animate-ping" />
              <span className="text-[12px] font-mono tracking-normal text-foreground/85 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-yellow-400" />
                <span>NEXT-GEN ENTERPRISE INTELLIGENCE</span>
              </span>
              <span className="text-xs uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/15 dark:bg-yellow-400/20 text-amber-700 dark:text-yellow-300 font-semibold">
                v2.6
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              <span className="hero-title-intro text-foreground/75">Architecting The</span>
              <span className="hero-title-focus bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-400 bg-clip-text text-transparent glow-text">
                Future of Digital
              </span>
              <span className="hero-title-outro text-foreground">Operations</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-sm text-foreground/75 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Beevora Labs builds next-generation SaaS ecosystems. Unify customer touchpoints
              with <span className="text-foreground font-semibold">TotO-L</span> and supercharge
              growth with <span className="text-foreground font-semibold">Orbit-Trace</span> CRM —
              engineered for scale, real-time sync, and intelligent automation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full btn-cyber-primary group"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full btn-cyber-outline group"
              >
                <Terminal className="w-4 h-4 text-amber-700 dark:text-yellow-400 transition-transform group-hover:scale-110" />
                <span>Live Interactive Demo</span>
              </a>
            </div>

            {/* Metrics Ticker */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-card-border max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 dark:text-yellow-400 font-mono tabular-nums">
                  99.9%
                </div>
                <div className="text-xs text-foreground/60 font-sans mt-0.5">High Uptime SLA</div>
              </div>

              <div className="text-left border-l border-card-border pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 dark:text-yellow-300 font-mono tabular-nums">
                  &lt;15ms
                </div>
                <div className="text-xs text-foreground/60 font-sans mt-0.5">Edge Latency</div>
              </div>

              <div className="text-left border-l border-card-border pl-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-orange-700 dark:text-yellow-400 font-mono tabular-nums">
                  E2EE
                </div>
                <div className="text-xs text-foreground/60 font-sans mt-0.5">Bank-Grade Security</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Canvas Hologram + Floating HUD Elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            {/* Interactive 3D Hologram Canvas */}
            <div className="relative w-full aspect-square max-w-[520px] rounded-3xl overflow-hidden glass-panel border border-amber-500/25 dark:border-yellow-400/35 shadow-sm dark:shadow-[0_0_55px_rgba(245,158,11,0.2)] dark:shadow-[0_0_60px_rgba(250,204,21,0.25)] group">

              {/* Border Beam light sweep */}
              <BorderBeam size={260} duration={7} borderWidth={1.5} colorFrom="#fef08a" colorTo="#facc15" />

              {/* Holographic Header Bar */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between px-4 py-2 rounded-xl bg-card-bg/65 backdrop-blur-md border border-card-border text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-yellow-400 animate-pulse" />
                  <span className="text-foreground/80">CORE_SYSTEM: ACTIVE</span>
                </div>
                <span className="text-stone-800 dark:text-yellow-400 font-semibold">3D INTERACTIVE</span>
              </div>

              {/* Three.js Interactive 3D Sphere Core */}
              <Hero3DCanvas />

              {/* Interactive Gesture Hint */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-2 rounded-xl bg-card-bg/75 backdrop-blur-md border border-card-border text-xs font-mono text-foreground/60">
                <span>[MOUSE / TOUCH TO ROTATE 3D]</span>
                <span className="text-amber-700 dark:text-yellow-400">60 FPS WEBGL</span>
              </div>

            </div>

            {/* Floating 3D HUD Badges */}
            <div className="hidden sm:flex absolute -top-5 -left-8 z-30 items-center gap-3 px-4 py-2.5 rounded-2xl bg-card-bg/90 backdrop-blur-xl border border-card-border shadow-sm dark:shadow-xl animate-float-slow">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 dark:bg-yellow-400/20 flex items-center justify-center text-amber-700 dark:text-yellow-300">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-foreground/65 uppercase">Data Stream</p>
                <p className="text-xs font-bold text-foreground">Real-time WebSocket</p>
              </div>
            </div>

            <div className="hidden sm:flex absolute -bottom-6 -right-6 z-30 items-center gap-3 px-4 py-2.5 rounded-2xl bg-card-bg/90 backdrop-blur-xl border border-card-border shadow-sm dark:shadow-xl animate-float-slow" style={{ animationDelay: "2.5s" }}>
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 dark:bg-yellow-400/20 flex items-center justify-center text-orange-700 dark:text-yellow-300">
                <Shield className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-foreground/65 uppercase">Architecture</p>
                <p className="text-xs font-bold text-foreground">Multi-Cloud Mesh</p>
              </div>
            </div>

          </div>

        </div>

        {/* Ecosystem Logos Marquee */}
        <div className="mt-10 pt-6 border-t border-card-border/60">
          <p className="text-center text-xs font-sans uppercase tracking-widest text-foreground/65 mb-6">
            ENGINEERED WITH INDUSTRY-STANDARD TECHNOLOGIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-70 hover:opacity-100 transition-opacity">
            {["Next.js 16", "React 19", "Three.js WebGL", "Tailwind CSS", "TypeScript", "Redis Cache", "PostgreSQL", "Docker"].map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card-bg border border-card-border text-xs font-mono text-foreground/80 hover:text-amber-500 dark:hover:text-yellow-300 hover:border-amber-500/40 dark:hover:border-yellow-400/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-yellow-400" />
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
