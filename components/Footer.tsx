"use client";

import { useState } from "react";
import {
  ExternalLink,
  Link as LinkIcon,
  Video,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const footerLinks = {
  Platform: [
    { name: "TotO-L Omni-Channel", href: "#products" },
    { name: "Orbit-Trace CRM", href: "#products" },
    { name: "Global Edge Network", href: "#features" },
    { name: "REST & GraphQL APIs", href: "#features" },
  ],
  Services: [
    { name: "AI Research & RAG", href: "/#ai-research" },
    { name: "AI Software Development", href: "/#ai-development" },
    { name: "Integration & Automation", href: "/#services" },
    { name: "Discuss a Project", href: "mailto:hello@beevora.com" },
  ],
  Company: [
    { name: "About Beevora", href: "#about" },
    { name: "Engineering Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Data Deletion", href: "/data-deletion" },
    { name: "Security Whitepaper", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: LinkIcon, href: "https://linkedin.com" },
  { name: "Website", icon: ExternalLink, href: "https://beevora.com" },
  { name: "YouTube", icon: Video, href: "https://youtube.com" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="relative border-t border-card-border bg-card-bg/40 backdrop-blur-xl">
      <div className="site-container py-12 lg:py-16">

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-12 mb-16">

          {/* Brand & Contact (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-500 p-[1.5px] shadow-sm dark:shadow-[0_0_15px_rgba(245,158,11,0.3)] dark:shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                <div className="w-full h-full bg-[#090704] dark:bg-[#080703] rounded-[10px] flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Beevora Labs"
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-foreground">
                Beevora<span className="text-amber-700 dark:text-yellow-400">Labs</span>
              </span>
            </a>

            <p className="text-foreground/75 text-sm max-w-sm leading-relaxed">
              SaaS platforms, applied AI research, and custom software development.
              We connect AI with your knowledge, workflows, and business systems.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-3 font-sans text-sm">
              <a
                href="mailto:lowhanfish@gmail.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-amber-500 dark:hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-700 dark:text-yellow-400" />
                <span>lowhanfish@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin className="w-4 h-4 text-orange-700 dark:text-yellow-400" />
                <span>Indonesia, Sulawesi Tenggara - Kendari</span>
              </div>

              <a
                href="tel:+6282291662895"
                className="flex items-center gap-3 text-foreground/70 hover:text-amber-500 dark:hover:text-yellow-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700 dark:text-yellow-400" />
                <span>+62 822-9166-2895</span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-card-bg border border-card-border flex items-center justify-center text-foreground/70 hover:text-amber-500 dark:hover:text-yellow-300 hover:border-amber-500/40 dark:hover:border-yellow-400/40 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns (Span 7) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-sm font-sans font-bold uppercase tracking-wider text-foreground">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-foreground/70 hover:text-amber-500 dark:hover:text-yellow-300 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Newsletter Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-card-bg border border-card-border mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-700 dark:text-yellow-400" />
              Subscribe to Beevora Tech Radar
            </h4>
            <p className="text-sm text-foreground/60">
              Receive periodic engineering breakdowns, architecture whitepapers, and product updates.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-sm font-sans text-amber-700 dark:text-yellow-300 bg-amber-500/10 dark:bg-yellow-400/15 px-4 py-2.5 rounded-xl border border-amber-500/25 dark:border-yellow-400/30">
              <CheckCircle2 className="w-4 h-4" />
              <span>Subscribed successfully! Welcome to the ecosystem.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                className="px-4 py-2.5 rounded-xl bg-card-bg border border-card-border text-sm text-foreground placeholder:text-foreground/60 focus:outline-none focus:border-amber-500 dark:focus:border-yellow-400 w-full sm:w-72"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl btn-cyber-primary text-sm font-bold shrink-0 flex items-center gap-1.5"
              >
                <span>Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Bottom Bar with Status Ping */}
        <div className="pt-8 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-sans text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 dark:bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-yellow-400"></span>
            </span>
            <span>All Systems Operational (99.9% Uptime)</span>
          </div>

          <p>© {new Date().getFullYear()} Beevora Labs. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-amber-500 dark:hover:text-yellow-300 transition-colors">Privacy</a>
            <a href="/terms-of-service" className="hover:text-amber-500 dark:hover:text-yellow-300 transition-colors">Terms</a>
            <a href="/data-deletion" className="hover:text-amber-500 dark:hover:text-yellow-300 transition-colors">Data Deletion</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
