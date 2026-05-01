"use client";

import { Layers, Globe, ArrowRight, CheckCircle } from "lucide-react";

const products = [
    {
        id: "toto-l",
        name: "TotO-L",
        subtitle: "Omni-channel Platform",
        description:
            "Unified customer engagement across all channels. Connect with your customers wherever they are with seamless communication tools.",
        icon: Layers,
        features: [
            "Multi-channel Messaging",
            "Real-time Chat Integration",
            "Automated Workflows",
            "Analytics Dashboard",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        color: "from-neon-green/20 to-transparent",
    },
    {
        id: "orbit-trace",
        name: "Orbit-Trace",
        subtitle: "Customer Relationship Management",
        description:
            "Intelligent CRM that helps you build lasting relationships. Track interactions, manage leads, and grow your business with data-driven insights.",
        icon: Globe,
        features: [
            "Lead Management",
            "Contact Tracking",
            "Sales Forecasting",
            "Integration APIs",
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        color: "from-blue-500/20 to-transparent",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-20 md:py-32 bg-card-bg/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6">
                        <span className="text-sm text-neon-green font-medium">Our Products</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-foreground">Innovative</span>{" "}
                        <span className="text-neon-green">Solutions</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Cutting-edge platforms designed to transform your business operations
                        and deliver exceptional customer experiences.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid gap-8 lg:gap-12">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`relative group rounded-2xl overflow-hidden bg-card-bg border border-card-border card-hover ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Gradient Background */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-50`}
                            />

                            <div className="relative z-10 flex flex-col lg:flex-row">
                                {/* Content Side */}
                                <div className="flex-1 p-8 lg:p-12">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center">
                                            <product.icon className="w-6 h-6 text-neon-green" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-neon-green">{product.subtitle}</p>
                                        </div>
                                    </div>

                                    <p className="text-foreground/70 mb-6 text-lg">
                                        {product.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-8">
                                        {product.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-foreground/80"
                                            >
                                                <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="inline-flex items-center gap-2 text-neon-green font-semibold hover:gap-4 transition-all group/btn">
                                        Learn More
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Image Side */}
                                <div className="flex-1 relative min-h-[300px] lg:min-h-auto">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
