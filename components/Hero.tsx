"use client";

import { ArrowRight, Terminal, Shield, Zap, Sparkles } from "lucide-react";
import Hero3DCanvas from "./canvas/Hero3DCanvas";
import BorderBeam from "./ui/BorderBeam";
import TechnologyMarquee from "./TechnologyMarquee";

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
          <div className="lg:col-span-7 min-w-0 text-center lg:text-left">

            {/* Cyber Tag Badge */}
            <div className="inline-flex items-center max-w-full gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-card-bg/80 border border-card-border backdrop-blur-md mb-4 shadow-sm group">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-amber-500 dark:bg-yellow-400 animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono tracking-normal text-foreground/85 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700 dark:text-yellow-400" />
                <span><span className="hidden sm:inline">NEXT-GEN </span>ENTERPRISE INTELLIGENCE</span>
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
              Beevora Labs brings together <span className="text-foreground font-semibold">SaaS platforms</span>,{" "}
              <span className="text-foreground font-semibold">applied AI research</span>, and{" "}
              <span className="text-foreground font-semibold">custom software development</span>.
              From RAG and intelligent assistants to AI-integrated business applications,
              we connect your data, systems, and teams to turn ideas into working solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full btn-cyber-primary group"
              >
                <span>Explore Our Expertise</span>
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
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-card-border max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-xl sm:text-3xl font-extrabold text-amber-700 dark:text-yellow-400 font-mono tabular-nums">
                  99.9%
                </div>
                <div className="text-xs text-foreground/60 font-sans mt-0.5">High Uptime SLA</div>
              </div>

              <div className="text-left border-l border-card-border pl-3 sm:pl-4">
                <div className="text-xl sm:text-3xl font-extrabold text-amber-700 dark:text-yellow-300 font-mono tabular-nums">
                  &lt;15ms
                </div>
                <div className="text-xs text-foreground/60 font-sans mt-0.5">Edge Latency</div>
              </div>

              <div className="text-left border-l border-card-border pl-3 sm:pl-4">
                <div className="text-xl sm:text-3xl font-extrabold text-orange-700 dark:text-yellow-400 font-mono tabular-nums">
                  E2EE
                </div>
                <div className="text-xs text-foreground/60 font-sans mt-0.5">Bank-Grade Security</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Canvas Hologram + Floating HUD Elements */}
          <div className="lg:col-span-5 min-w-0 relative flex items-center justify-center">

            {/* Interactive 3D Hologram Canvas */}
            <div className="relative w-full aspect-square max-w-[520px] rounded-3xl overflow-hidden glass-panel border border-amber-500/25 dark:border-yellow-400/35 shadow-sm dark:shadow-[0_0_55px_rgba(245,158,11,0.2)] dark:shadow-[0_0_60px_rgba(250,204,21,0.25)] group">

              {/* Border Beam light sweep */}
              <BorderBeam size={260} duration={7} borderWidth={1.5} colorFrom="#fef08a" colorTo="#facc15" />

              {/* Holographic Header Bar */}
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-20 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-3 sm:px-4 py-2 rounded-xl bg-card-bg/65 backdrop-blur-md border border-card-border text-[10px] sm:text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-yellow-400 animate-pulse" />
                  <span className="text-foreground/80">CORE<span className="hidden sm:inline">_SYSTEM</span>: ACTIVE</span>
                </div>
                <span className="text-stone-800 dark:text-yellow-400 font-semibold">3D INTERACTIVE</span>
              </div>

              {/* Three.js Interactive 3D Sphere Core */}
              <Hero3DCanvas />

              {/* Interactive Gesture Hint */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 px-3 sm:px-3.5 py-2 rounded-xl bg-card-bg/75 backdrop-blur-md border border-card-border text-[10px] sm:text-xs font-mono text-foreground/60">
                <span><span className="sm:hidden">TOUCH TO ROTATE</span><span className="hidden sm:inline">MOUSE / TOUCH TO ROTATE</span></span>
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

        <TechnologyMarquee />

      </div>
    </section>
  );
}
