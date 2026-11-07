"use client";

import Image from "next/image";
import { Target, Eye, Heart, ArrowUpRight, Sparkles } from "lucide-react";

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
    image: "/images/photo9.png",
    specialty: "LLM Pipeline & Predictive Ops",
  },
  {
    name: "Bayu Lazuardi",
    role: "Data Scientist & Data Analyst",
    image: "/images/photo7.jpeg",
    specialty: "Data Science & Analytics",
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
  {
    name: "Fendy Anand",
    role: "IoT Engineer",
    image: "/images/photo8.jpeg",
    specialty: "Internet of Things & Connected Systems",
  },
];

const values = [
  {
    icon: Eye,
    title: "Relentless Innovation",
    description: "We don't settle for standard SaaS templates. We build high-velocity platforms designed for tomorrow's internet scale.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Sub-15ms latency, bank-grade encryption, and intuitive micro-interactions that make powerful systems feel effortless.",
  },
  {
    icon: Heart,
    title: "Customer Velocity",
    description: "Every feature we ship directly accelerates our clients' revenue, user retention, and team productivity.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing relative">
      <div className="site-container">
        <div className="section-header">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-neon-amber mb-4">
            <Sparkles size={14} aria-hidden="true" /> The collective behind Beevora
          </div>
          <h2 className="section-title">
            Obsessed With Craft,<br />
            <span className="font-editorial italic font-normal text-neon-amber">Driven By Velocity</span>
          </h2>
          <p className="text-foreground/70 text-base lg:text-lg">
            We are builders, systems architects, and designers based in Indonesia, crafting
            SaaS products, applied AI research, and AI-integrated software for businesses across the globe.
          </p>
        </div>

        <dl className="about-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat">
              <dt className="text-sm text-foreground/70">{stat.label}</dt>
              <dd className="font-display text-3xl sm:text-4xl font-semibold tracking-tight my-2">{stat.value}</dd>
              <dd className="flex items-center gap-1.5 text-xs text-foreground/60">
                <span className="h-1 w-1 rounded-full bg-neon-amber" />{stat.change}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {values.map((value, index) => (
            <article key={value.title} className="about-value" data-pattern={index}>
              <div className="flex items-center justify-between">
                <span className="about-value-icon"><value.icon size={20} strokeWidth={1.5} /></span>
                <span className="font-mono text-xs text-foreground/45">0{index + 1} / PRINCIPLE</span>
              </div>
              <div className="about-value-art" aria-hidden="true">
                {index === 0 ? (
                  <div className="craft-orbits"><span /><span /><span /><i /></div>
                ) : index === 1 ? (
                  <div className="craft-target"><span /><span /><span /><i /></div>
                ) : (
                  <div className="craft-bars">{[28, 40, 36, 60, 76, 100].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div>
                )}
              </div>
              <div className="border-t border-card-border pt-5">
                <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-3">{value.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="team-studio">
          <div className="team-intro">
            <p className="team-eyebrow"><span /> THE PEOPLE / BEEVORA</p>
            <h3 className="team-heading">Different minds.<br /><span>One ambition.</span></h3>
            <p className="text-sm text-foreground/65 max-w-sm mt-5">
              Engineers, builders, and curious minds. A small team turning complex challenges into thoughtful digital products.
            </p>
            <a href="mailto:hello@beevora.com" className="team-contact">
              Talk to the team <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="team-roster">
            {teamMembers.map((member, index) => (
              <article key={member.name} className="team-member group">
                <div className="team-portrait">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 639px) 48px, 56px" className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105" />
                  ) : (
                    <span className="absolute inset-0 grid place-items-center font-display text-lg font-semibold text-neon-amber" aria-label={member.name}>BL</span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="team-role">{member.role}</p>
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-specialty">{member.specialty}</p>
                </div>
                <span className="team-index" aria-hidden="true">0{index + 1}</span>
              </article>
            ))}
            <div className="team-signoff"><span>Based in Indonesia</span><span>Building for everywhere ↗</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
