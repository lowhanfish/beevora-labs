"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "Architecture", href: "#demo" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="site-container">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            isScrolled
              ? "bg-card-bg/85 backdrop-blur-xl border border-card-border shadow-sm dark:shadow-[0_8px_32px_rgba(245,158,11,0.08)] dark:shadow-[0_8px_32px_rgba(250,204,21,0.12)]"
              : "bg-card-bg/40 backdrop-blur-md border border-card-border/60"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group relative focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 dark:from-yellow-300 dark:via-yellow-400 dark:to-amber-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm dark:shadow-[0_0_15px_rgba(245,158,11,0.3)] dark:shadow-[0_0_20px_rgba(250,204,21,0.4)]">
              <div className="w-full h-full bg-[#090704] dark:bg-[#080703] rounded-[10px] flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Beevora Labs"
                  className="w-7 h-7 object-contain transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-display font-bold tracking-tight text-foreground flex items-center gap-1">
                Beevora<span className="text-[#a65b08] dark:text-[#facc15]">Labs</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1 bg-foreground/5 rounded-full px-3 py-1 border border-card-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-full text-sm font-medium text-foreground/75 hover:text-[#a65b08] dark:hover:text-[#facc15] hover:bg-foreground/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live System Pill Badge */}
            <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-yellow-400/10 border border-amber-500/25 dark:border-yellow-400/25 text-[11px] font-sans text-amber-700 dark:text-yellow-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 dark:bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500 dark:bg-yellow-400"></span>
              </span>
              <span>v2.6 ONLINE</span>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full border border-card-border bg-card-bg/60 text-foreground hover:text-[#a65b08] dark:hover:text-[#facc15] hover:border-amber-500/40 dark:hover:border-yellow-400/40 transition-all duration-200 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-[#fde047] transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#a65b08] transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Launch App Button */}
            <a
              href="#products"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full btn-cyber-primary"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-3 rounded-full border border-card-border bg-card-bg text-foreground hover:text-[#a65b08] dark:hover:text-[#facc15] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-2 p-4 rounded-2xl bg-card-bg/95 backdrop-blur-2xl border border-card-border shadow-sm dark:shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-[#a65b08] dark:hover:text-[#facc15] hover:bg-amber-500/10 dark:hover:bg-yellow-400/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-card-border flex items-center justify-between">
                <span className="text-xs text-foreground/60 font-sans">Status: All Systems Normal</span>
                <a
                  href="#products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-full btn-cyber-primary"
                >
                  Explore <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
