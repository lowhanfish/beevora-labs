"use client";

import { Target, Eye, Heart, Mail, Globe, Code2, Sparkles } from "lucide-react";
import TiltCard from "./ui/TiltCard";
import BorderBeam from "./ui/BorderBeam";

const stats = [
  { value: "2025", label: "Year Founded", change: "Day One Innovation" },
  { value: "3+", label: "Target Regions", change: "Global Delivery" },
  { value: "78+", label: "Active Enterprise Orgs", change: "Pacing +180%" },
  { value: "99.9%", label: "System Uptime SLA", change: "Zero Downtime Deploy" },
];

const teamMembers = [
  {
    name: "Riswan M Rizal",
    role: "FullStack Engineer",
    image: "/images/photo2.png",
    specialty: "Distributed Systems & Next.js",
  },
  {
    name: "Kiken S Batara",
    role: "AI Engineer",
    image: "/images/photo1.png",
    specialty: "LLM Pipeline & Predictive Ops",
  },
  {
    name: "Hidayat Darmawan",
    role: "Frontend Engineer",
    image: "/images/photo3.png",
    specialty: "High-Perf UX & 3D Interactive",
  },
  {
    name: "Asrif Fajar Hidayat",
    role: "DevOps Engineer",
    image: "/images/photo5.png",
    specialty: "Kubernetes & Edge Mesh",
  },
  {
    name: "Fajar Syahputra",
    role: "Backend Engineer",
    image: "/images/photo4.png",
    specialty: "High Concurrency & Redis",
  },
  {
    name: "Iksan Sinatra",
    role: "Backend Engineer",
    image: "/images/photo6.png",
    specialty: "Database Engines & APIs",
  },
];

const values = [
  {
    icon: Eye,
    title: "Relentless Innovation",
    description: "We don't settle for standard SaaS templates. We build high-velocity platforms designed for tomorrow's internet scale.",
    gradient: "from-amber-400/20 dark:from-yellow-300/25 to-transparent",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Sub-15ms latency, bank-grade encryption, and intuitive micro-interactions that make powerful systems feel effortless.",
    gradient: "from-amber-500/20 dark:from-yellow-400/25 to-transparent",
  },
  {
    icon: Heart,
    title: "Customer Velocity",
    description: "Every feature we ship directly accelerates our clients' revenue, user retention, and team productivity.",
    gradient: "from-orange-500/20 dark:from-yellow-500/25 to-transparent",
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing relative">
      <div className="site-container relative z-10">

        {/* Section Header */}
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-yellow-400/15 border border-amber-500/25 dark:border-yellow-400/25 text-amber-700 dark:text-yellow-300 text-xs font-sans mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE COLLECTIVE BEHIND BEEVORA</span>
          </div>

          <h2 className="section-title">
            <span className="text-foreground">Obsessed With Craft,</span>{" "}
            <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-400 bg-clip-text text-transparent glow-text">
              Driven By Velocity
            </span>
          </h2>

          <p className="text-foreground/75 text-base lg:text-lg">
            We are builders, systems architects, and designers based in Indonesia, crafting
            enterprise-grade SaaS technologies for businesses across the globe.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat) => (
            <TiltCard key={stat.label} maxRotation={10} glowColor="rgba(250, 204, 21, 0.25)">
              <div className="glass-panel p-6 rounded-2xl border border-card-border text-center relative overflow-hidden">
                <p className="text-3xl sm:text-4xl font-extrabold text-amber-700 dark:text-yellow-400 font-sans mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-[11px] font-sans text-foreground/65">{stat.change}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {values.map((v) => (
            <TiltCard key={v.title} maxRotation={8} glowColor="rgba(250, 204, 21, 0.25)">
              <div className="glass-panel p-8 rounded-3xl border border-card-border h-full relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${v.gradient} rounded-full blur-2xl pointer-events-none`} />
                <div className="w-12 h-12 rounded-2xl bg-card-bg border border-card-border flex items-center justify-center text-amber-700 dark:text-yellow-300 mb-6">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{v.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Team Members Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-foreground mb-3">
              Meet The <span className="text-amber-700 dark:text-yellow-400">Core Team</span>
            </h3>
            <p className="text-foreground/70 text-sm max-w-xl mx-auto">
              The engineers and technologists pushing code every day to redefine digital communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TiltCard key={member.name} maxRotation={10} glowColor="rgba(250, 204, 21, 0.25)">
                <div className="glass-panel p-6 rounded-3xl border border-card-border text-center relative overflow-hidden group">
                  <BorderBeam size={180} duration={10} colorFrom="#fef08a" colorTo="#facc15" />

                  {/* Avatar with amber/yellow cyber ring */}
                  <div className="relative w-28 h-28 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-orange-500 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-500 p-0.5 animate-pulse-subtle">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black/60">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-amber-500 dark:bg-yellow-400 border-2 border-background" />
                  </div>

                  <h4 className="text-base lg:text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs font-sans font-medium text-amber-700 dark:text-yellow-300 mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-foreground/60 mb-5">
                    {member.specialty}
                  </p>

                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-card-border">
                    <a
                      href="mailto:hello@beevora.com"
                      className="p-2 rounded-xl bg-card-bg border border-card-border hover:text-amber-500 dark:hover:text-yellow-300 hover:border-amber-500/40 dark:hover:border-yellow-400/40 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="https://beevora.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-card-bg border border-card-border hover:text-amber-500 dark:hover:text-yellow-300 hover:border-amber-500/40 dark:hover:border-yellow-400/40 transition-colors"
                      aria-label="Website"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-card-bg border border-card-border hover:text-amber-500 dark:hover:text-yellow-300 hover:border-amber-500/40 dark:hover:border-yellow-400/40 transition-colors"
                      aria-label="Code"
                    >
                      <Code2 className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
