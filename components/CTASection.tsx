"use client";

import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import TiltCard from "./ui/TiltCard";
import BorderBeam from "./ui/BorderBeam";

export default function CTASection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background Glow */}
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/12 via-orange-500/10 to-yellow-500/10 dark:from-yellow-400/20 dark:via-yellow-300/15 dark:to-amber-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="site-container relative z-10">
        <TiltCard maxRotation={6} glowColor="rgba(250, 204, 21, 0.25)">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden text-center shadow-sm dark:shadow-2xl border border-amber-500/30 dark:border-yellow-400/40">
            <BorderBeam size={350} duration={8} colorFrom="#fef08a" colorTo="#facc15" />

            {/* Glowing Accent Orb inside card */}
            <div className="hidden dark:block absolute -top-20 -left-20 w-60 h-60 bg-amber-500/20 dark:bg-yellow-400/25 rounded-full blur-3xl pointer-events-none" />
            <div className="hidden dark:block absolute -bottom-20 -right-20 w-60 h-60 bg-orange-500/20 dark:bg-yellow-300/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 dark:bg-yellow-400/15 border border-amber-500/25 dark:border-yellow-400/25 text-amber-700 dark:text-yellow-300 text-xs font-sans mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START YOUR DIGITAL TRANSFORMATION</span>
              </div>

              <h2 className="section-title">
                <span className="text-foreground">Ready to Supercharge</span>
                <br />
                <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-400 bg-clip-text text-transparent glow-text">
                  Your Operations?
                </span>
              </h2>

              <p className="text-foreground/75 text-base lg:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Connect your team with TotO-L and Orbit-Trace today. Experience unified omni-channel
                speed and automated CRM intelligence with zero setup delays.
              </p>

              {/* Guarantees */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-xs sm:text-sm font-medium text-foreground/80">
                {[
                  "14-Day Free Trial",
                  "No Credit Card Required",
                  "Instant API Key Provisioning",
                  "24/7 Dedicated Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card-bg/60 border border-card-border">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 dark:text-yellow-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full btn-cyber-primary text-sm font-bold shadow-sm dark:shadow-xl"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:hello@beevora.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full btn-cyber-outline text-sm font-semibold"
                >
                  <span>Talk with Engineers</span>
                </a>
              </div>

            </div>

          </div>
        </TiltCard>
      </div>
    </section>
  );
}
