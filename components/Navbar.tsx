"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showToggle?: boolean;
  brandHref?: string;
  links?: { name: string; href: string }[];
}

const defaultLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Architecture", href: "#demo" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({
  isDarkMode,
  toggleDarkMode,
  showToggle = true,
  brandHref = "#home",
  links = defaultLinks,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const handlePointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const handleResize = () => {
      if (desktop.matches) setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isMobileMenuOpen]);

  const productsHref = brandHref === "#home" ? "#products" : "/#products";

  return (
    <header ref={headerRef} className="site-header" data-scrolled={isScrolled}>
      <div className="site-container">
        <div className="nav-shell">
          <nav className="nav-bar" aria-label="Main navigation">
            <a href={brandHref} className="nav-brand" aria-label="Beevora Labs home">
              <span className="nav-logo">
                <Image src="/logo.png" alt="" width={28} height={28} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap">
                Beevora<span className="text-neon-amber">Labs</span>
              </span>
            </a>

            <div className="hidden xl:flex items-center gap-0.5">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              {showToggle && (
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="nav-icon-button"
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
              <a href={productsHref} className="nav-cta hidden sm:inline-flex">
                Explore <ArrowRight size={16} aria-hidden="true" />
              </a>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="nav-icon-button xl:hidden"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>

          {isMobileMenuOpen && (
            <nav id="mobile-navigation" className="nav-mobile xl:hidden" aria-label="Mobile navigation">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="nav-link">
                  {link.name}
                </a>
              ))}
              <a href={productsHref} onClick={() => setIsMobileMenuOpen(false)} className="nav-cta mt-3 flex justify-center">
                Explore solutions <ArrowRight size={16} aria-hidden="true" />
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
