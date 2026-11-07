"use client";

import { useTheme } from "@/hooks/useTheme";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Features from "./Features";
import InteractiveDemo from "./InteractiveDemo";
import About from "./About";
import CTASection from "./CTASection";
import Footer from "./Footer";
import CyberGridCanvas from "./canvas/CyberGridCanvas";

export default function MainContent() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="relative min-h-screen selection:bg-[#f59e0b]/30 selection:text-foreground">
      {/* Interactive 3D constellation & cyber grid background canvas */}
      <CyberGridCanvas />

      {/* Main layout contents */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="relative z-10">
        <Hero />
        <Products />
        <Features />
        <InteractiveDemo />
        <About />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
