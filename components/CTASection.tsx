"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
    "14-day free trial",
    "No credit card required",
    "Cancel anytime",
    "24/7 support",
];

export default function CTASection() {
    return (
        <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-neon-green/10 via-card-bg to-neon-green/5 border border-neon-green/20">
                    {/* Background Effects */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 p-8 md:p-16 lg:p-20">
                        <div className="max-w-3xl mx-auto text-center">
                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-neon-green/20 flex items-center justify-center mx-auto mb-8">
                                <span className="text-4xl">🚀</span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                <span className="text-foreground">Ready to</span>{" "}
                                <span className="text-neon-green glow-text">Transform</span>
                                <span className="text-foreground"> Your Business?</span>
                            </h2>

                            {/* Subheading */}
                            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                                Join thousands of businesses already using Beevora Labs to streamline
                                operations and deliver exceptional customer experiences. Start your
                                free trial today.
                            </p>

                            {/* Benefits */}
                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                {benefits.map((benefit) => (
                                    <div
                                        key={benefit}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-card-bg/50 border border-card-border text-sm"
                                    >
                                        <CheckCircle className="w-4 h-4 text-neon-green" />
                                        <span className="text-foreground/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-neon-green text-black font-semibold btn-glow hover:scale-105 transition-transform">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-neon-green text-neon-green font-semibold hover:bg-neon-green/10 transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
