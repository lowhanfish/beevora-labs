"use client";

import {
    Scale,
    Zap,
    Workflow,
    Plug,
    Shield,
    BarChart3,
    Cpu,
    Cloud
} from "lucide-react";

const features = [
    {
        icon: Scale,
        title: "Scalable Infrastructure",
        description: "Built on cloud-native architecture that grows with your business. Handle millions of requests with ease.",
    },
    {
        icon: BarChart3,
        title: "Real-time Analytics",
        description: "Get actionable insights with live dashboards and custom reports. Make data-driven decisions instantly.",
    },
    {
        icon: Workflow,
        title: "Automation Workflow",
        description: "Streamline operations with intelligent automation. Reduce manual work and focus on what matters.",
    },
    {
        icon: Plug,
        title: "Multi-channel Integration",
        description: "Connect seamlessly with 100+ integrations. Unify your tech stack without complexity.",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-level security with end-to-end encryption. Your data is protected at every step.",
    },
    {
        icon: Cpu,
        title: "AI-Powered Insights",
        description: "Leverage machine learning for predictive analytics. Stay ahead with intelligent recommendations.",
    },
    {
        icon: Cloud,
        title: "Cloud-native Deployment",
        description: "Deploy anywhere with containerized solutions. Kubernetes-ready for maximum flexibility.",
    },
    {
        icon: Zap,
        title: "Lightning Fast Speed",
        description: "Optimized performance with edge computing. Deliver sub-100ms latency experiences.",
    },
];

export default function Features() {
    return (
        <section className="py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6">
                        <span className="text-sm text-neon-green font-medium">Features</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-foreground">Powerful</span>{" "}
                        <span className="text-neon-green">Capabilities</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Everything you need to transform your business. Our platform delivers
                        enterprise-grade features out of the box.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group p-6 rounded-2xl bg-card-bg border border-card-border card-hover"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center mb-4 group-hover:bg-neon-green/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-neon-green" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-foreground/70 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-foreground/60 mb-4">
                        And many more features to explore...
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon-green text-neon-green font-semibold hover:bg-neon-green/10 transition-colors">
                        Explore All Features
                    </button>
                </div>
            </div>
        </section>
    );
}
