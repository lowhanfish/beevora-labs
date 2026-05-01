"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";
import Features from "./Features";
import About from "./About";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function MainContent() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        // Check for saved preference or use system preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        } else {
            // Default to dark mode for futuristic feel
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Apply dark mode class to html element
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            <Hero />
            <Products />
            <Features />
            <About />
            <CTASection />
            <Footer />
        </>
    );
}
