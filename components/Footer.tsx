"use client";

import {
    ExternalLink,
    Link,
    Video,
    Mail,
    MapPin,
    Phone,
    ArrowRight
} from "lucide-react";

const footerLinks = {
    Product: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#integrations" },
        { name: "API", href: "#api" },
    ],
    Company: [
        { name: "About", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Blog", href: "#blog" },
        { name: "Press", href: "#press" },
    ],
    Resources: [
        { name: "Documentation", href: "#docs" },
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "Contact", href: "#contact" },
    ],
    Legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Data Deletion", href: "/data-deletion" },
        { name: "Security", href: "#security" },
    ],
};

const socialLinks = [
    { name: "LinkedIn", icon: Link, href: "https://linkedin.com" },
    { name: "Website", icon: ExternalLink, href: "https://beevora.com" },
    { name: "YouTube", icon: Video, href: "https://youtube.com" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-card-bg/30 border-t border-card-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 md:py-16 grid gap-8 lg:grid-cols-5">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="flex items-center gap-2 group mb-4">
                            <img
                                src="/logo.png"
                                alt="Beevora Labs"
                                className="w-10 h-10 rounded-lg object-contain"
                            />
                            <span className="text-xl font-bold text-foreground">
                                Beevora<span className="text-neon-green">Labs</span>
                            </span>
                        </a>

                        <p className="text-foreground/70 mb-6 max-w-sm">
                            Empowering businesses with cutting-edge SaaS solutions for
                            digital transformation. Join thousands of satisfied customers worldwide.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a href="mailto:hello@beevora.com" className="flex items-center gap-3 text-foreground/70 hover:text-neon-green transition-colors">
                                <Mail className="w-4 h-4 text-neon-green" />
                                <span className="text-sm">lowhanfish@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-foreground/70">
                                <MapPin className="w-4 h-4 text-neon-green" />
                                <span className="text-sm">Indonesia, Sulawesi Tenggara - Kendari</span>
                            </div>
                            <a href="tel:+1234567890" className="flex items-center gap-3 text-foreground/70 hover:text-neon-green transition-colors">
                                <Phone className="w-4 h-4 text-neon-green" />
                                <span className="text-sm">+62 822-9166-2895</span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-card-bg border border-card-border flex items-center justify-center hover:bg-neon-green/10 hover:border-neon-green/30 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4 text-foreground/70 hover:text-neon-green" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-semibold text-foreground mb-4">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-foreground/70 hover:text-neon-green transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="py-8 border-t border-card-border">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h4 className="font-semibold text-foreground mb-1">
                                Subscribe to our newsletter
                            </h4>
                            <p className="text-sm text-foreground/70">
                                Get the latest updates and offers directly in your inbox.
                            </p>
                        </div>

                        <form className="flex w-full md:w-auto">
                            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-3 rounded-lg bg-card-bg border border-card-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-neon-green transition-colors w-full sm:w-64"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neon-green text-black font-semibold hover:bg-neon-green-dark transition-colors"
                                >
                                    Subscribe
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-card-border">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-foreground/60">
                            © {new Date().getFullYear()} Beevora Labs. All rights reserved.
                        </p>

                        <div className="flex items-center gap-6">
                            <a href="/privacy-policy" className="text-sm text-foreground/60 hover:text-neon-green transition-colors">
                                Privacy
                            </a>
                            <a href="/terms-of-service" className="text-sm text-foreground/60 hover:text-neon-green transition-colors">
                                Terms
                            </a>
                            <a href="/data-deletion" className="text-sm text-foreground/60 hover:text-neon-green transition-colors">
                                Data Deletion
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
