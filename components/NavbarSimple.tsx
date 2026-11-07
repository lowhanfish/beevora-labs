"use client";

import { useTheme } from "@/hooks/useTheme";
import Navbar from "./Navbar";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/#products" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export default function NavbarSimple({ showToggle = false }: { showToggle?: boolean }) {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <Navbar
      isDarkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
      showToggle={showToggle}
      brandHref="/"
      links={links}
    />
  );
}
