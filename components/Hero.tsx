"use client";

import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 255, 159, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 159, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                            <span className="text-sm text-neon-green font-medium">
                                Leading Innovation in Digital Transformation
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
                            <span className="text-foreground">Empowering</span>
                            <br />
                            <span className="text-neon-green glow-text">Tomorrow's</span>
                            <br />
                            <span className="text-foreground">Digital Solutions</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Beevora Labs delivers cutting-edge SaaS platforms that transform
                            how businesses operate. From omni-channel engagement to intelligent
                            CRM, we build the tools that drive growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neon-green text-black font-semibold btn-glow hover:scale-105 transition-transform">
                                Get Started
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-neon-green text-neon-green font-semibold hover:bg-neon-green/10 transition-colors">
                                <PlayCircle className="w-5 h-5" />
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Image/ Illustration */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-xl">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative rounded-2xl overflow-hidden bg-card-bg border border-card-border shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                                    alt="Futuristic technology dashboard"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />

                                {/* Floating stats card */}
                                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card-bg/90 backdrop-blur-sm border border-card-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-foreground/60">Active Users</p>
                                            <p className="text-2xl font-bold text-neon-green">78</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-foreground/60">Uptime</p>
                                            <p className="text-2xl font-bold text-neon-green">99.9%</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-foreground/60">Countries</p>
                                            <p className="text-2xl font-bold text-neon-green">3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-neon-green/30 rounded-tr-xl" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-neon-green/30 rounded-bl-xl" />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-xs text-foreground/50">Scroll</span>
                    <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}
