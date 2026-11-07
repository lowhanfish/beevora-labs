"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import BorderBeam from "@/components/ui/BorderBeam";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-20 relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="hidden dark:block absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 dark:bg-yellow-400/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 dark:bg-yellow-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-500 p-[1.5px] transition-transform group-hover:scale-105 shadow-sm dark:shadow-[0_0_20px_rgba(245,158,11,0.35)] dark:shadow-[0_0_25px_rgba(250,204,21,0.4)]">
              <div className="w-full h-full bg-[#090704] dark:bg-[#080703] rounded-[14px] flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Beevora Labs"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </Link>
          <h1 className="text-3xl font-extrabold text-foreground mt-4 tracking-tight">
            Create Account
          </h1>
          <p className="text-foreground/70 text-sm mt-2">
            Start your 14-day full enterprise trial
          </p>
        </div>

        {/* Register Form with 3D Tilt Card */}
        <TiltCard maxRotation={5} glowColor="rgba(250, 204, 21, 0.25)">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-sm dark:shadow-2xl">
            <BorderBeam size={220} duration={8} colorFrom="#fef08a" colorTo="#facc15" />

            <form className="space-y-4 relative z-10">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-sans font-medium text-foreground mb-1.5"
                >
                  FULL NAME
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card-bg border border-card-border text-foreground placeholder:text-foreground/60 text-base focus:outline-none focus:border-amber-500 dark:focus:border-yellow-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-sans font-medium text-foreground mb-1.5"
                >
                  WORK EMAIL
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card-bg border border-card-border text-foreground placeholder:text-foreground/60 text-base focus:outline-none focus:border-amber-500 dark:focus:border-yellow-400 transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-sans font-medium text-foreground mb-1.5"
                >
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Min. 8 characters"
                    className="w-full pl-10 pr-12 py-2.5 rounded-xl bg-card-bg border border-card-border text-foreground placeholder:text-foreground/60 text-base focus:outline-none focus:border-amber-500 dark:focus:border-yellow-400 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-foreground/50 hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Requirements */}
              <div className="grid grid-cols-2 gap-2 text-sm text-foreground/60 py-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-yellow-400" />
                  <span>8+ characters</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 dark:text-yellow-400" />
                  <span>Encrypted AES-256</span>
                </div>
              </div>

              {/* Agreement */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="agreements"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-card-border bg-card-bg text-amber-700 dark:text-yellow-400 focus:ring-0"
                />
                <label htmlFor="agreements" className="text-sm text-foreground/70 leading-relaxed">
                  I agree to Beevora&apos;s{" "}
                  <Link href="/terms-of-service" className="text-amber-700 dark:text-yellow-400 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-amber-700 dark:text-yellow-400 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!agreedToTerms}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl btn-cyber-primary text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Initialize Account</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </TiltCard>

        {/* Sign In Link */}
        <p className="text-center text-sm text-foreground/70 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-700 dark:text-yellow-400 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
