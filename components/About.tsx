"use client";

import { Target, Eye, Heart, Mail, Globe, Code } from "lucide-react";

const stats = [
    { value: "2025", label: "Founded" },
    { value: "3", label: "Countries" },
    { value: "78", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
];

const teamMembers = [
    {
        name: "Riswan M Rizal",
        role: "FullStack Engineer",
        image: "/images/photo2.png",
    },
    {
        name: "Kiken S Batara",
        role: "AI Engineer",
        image: "/images/photo1.png",
    },
    {
        name: "Hidayat Darmawan",
        role: "Frontend Engineer",
        image: "/images/photo3.png",
    },
    {
        name: "Asrif Fajar Hidayat",
        role: "DevOps",
        image: "/images/photo5.png",
    },
    {
        name: "Fajar Syahputra",
        role: "Backend Engineer",
        image: "/images/photo4.png",
    },
    {
        name: "Iksan Sinatra",
        role: "Backend Engineer",
        image: "/images/photo6.png",
    },
];

const values = [
    {
        icon: Eye,
        title: "Vision",
        description: "To be the leading force in digital transformation, empowering businesses worldwide with innovative SaaS solutions.",
    },
    {
        icon: Target,
        title: "Mission",
        description: "To deliver cutting-edge platforms that simplifies operations, enhances customer engagement, and drives measurable growth.",
    },
    {
        icon: Heart,
        title: "Values",
        description: "Innovation, integrity, and customer-centricity are at the heart of everything we do. We believe in building lasting partnerships.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-card-bg/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6">
                        <span className="text-sm text-neon-green font-medium">About Us</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-foreground">Who We</span>{" "}
                        <span className="text-neon-green">Are</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        We are a team of passionate technologists dedicated to transforming
                        how businesses operate in the digital age.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="p-6 rounded-2xl bg-card-bg border border-card-border text-center"
                        >
                            <p className="text-3xl lg:text-4xl font-bold text-neon-green mb-1">
                                {stat.value}
                            </p>
                            <p className="text-sm text-foreground/60">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* About Content */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden bg-card-bg border border-card-border">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                                alt="Beevora Labs Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-neon-green/30 rounded-tr-xl" />
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-neon-green/30 rounded-bl-xl" />
                    </div>

                    {/* Right - Content */}
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                            Pioneering Digital Excellence Since 2025
                        </h3>

                        <p className="text-foreground/70 mb-8 text-lg">
                            Beevora Labs was founded with a clear vision: to make enterprise-grade
                            technology accessible to businesses of all sizes. Today, we serve
                            thousands of customers across 50+ countries, helping them transform
                            their operations and deliver exceptional customer experiences.
                        </p>

                        {/* Values */}
                        <div className="space-y-6">
                            {values.map((value) => (
                                <div
                                    key={value.title}
                                    className="flex gap-4 p-4 rounded-xl bg-card-bg/50 border border-card-border"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                                        <value.icon className="w-5 h-5 text-neon-green" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-1">
                                            {value.title}
                                        </h4>
                                        <p className="text-sm text-foreground/70">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                            Meet Our <span className="text-neon-green">Team</span>
                        </h3>
                        <p className="text-foreground/70 max-w-2xl mx-auto">
                            The passionate people behind Beevora Labs who make innovation happen.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-card-bg border border-card-border text-center card-hover"
                            >
                                <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-neon-green/30">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h4 className="font-semibold text-foreground mb-1 text-xs sm:text-sm">
                                    {member.name}
                                </h4>
                                <p className="text-xs text-neon-green mb-2 sm:mb-3">
                                    {member.role}
                                </p>
                                <div className="flex justify-center gap-2 sm:gap-3">
                                    <button className="p-1.5 sm:p-2 rounded-lg hover:bg-neon-green/10 transition-colors">
                                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/60" />
                                    </button>
                                    <button className="p-1.5 sm:p-2 rounded-lg hover:bg-neon-green/10 transition-colors">
                                        <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/60" />
                                    </button>
                                    <button className="p-1.5 sm:p-2 rounded-lg hover:bg-neon-green/10 transition-colors">
                                        <Code className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/60" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
