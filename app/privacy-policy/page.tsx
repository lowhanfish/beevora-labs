"use client";

import NavbarSimple from "@/components/NavbarSimple";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <NavbarSimple />
            <div className="pt-32 pb-20 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-foreground/70">
                            Beevora Labs Privacy Policy
                        </p>
                        <p className="text-sm text-foreground/60 mt-2">
                            Last updated: May 2026
                        </p>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                1. Introduction
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                Beevora Labs ("we", "company") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our services.
                            </p>
                            <p className="text-foreground/80">
                                By using Beevora Labs services, you consent to the collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                2. Data We Collect
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                We collect the following information to provide better services:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li><strong>Personal Information:</strong> Name, email address, phone number, and contact information you provide during registration.</li>
                                <li><strong>Usage Data:</strong> Data about how you use our services, including features accessed, access times, and usage patterns.</li>
                                <li><strong>Automatic Data:</strong> IP address, browser type, device, and system information automatically collected.</li>
                                <li><strong>Communication Data:</strong> Message content and other communications you send through our services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                3. Purpose of Data Use
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                We use the data we collect to:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>Provide and improve our services</li>
                                <li>Communicate important information about services</li>
                                <li>Personalize user experience</li>
                                <li>Analyze service usage for improvements</li>
                                <li>Comply with legal obligations</li>
                                <li>Prevent fraud and abuse</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                4. Data Security and Storage
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                We are committed to protecting your data security:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li><strong>Encryption:</strong> All data is encrypted using industry standards (SSL/TLS).</li>
                                <li><strong>Storage:</strong> Data is stored on secure servers with physical and digital protection.</li>
                                <li><strong>Limited Access:</strong> Only authorized personnel can access personal data.</li>
                                <li><strong>Retention:</strong> We retain data as long as necessary to provide services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                5. Third-Party Services
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                We use third-party services to support our operations:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li><strong>Meta / WhatsApp API:</strong> For omni-channel communication features via WhatsApp Business.</li>
                                <li><strong>Cloud Infrastructure:</strong> For data storage and processing (AWS/Google Cloud).</li>
                                <li><strong>Analytics:</strong> To understand service usage.</li>
                                <li><strong>Payment Processor:</strong> For payment processing (if applicable).</li>
                            </ul>
                            <p className="text-foreground/80 mt-4">
                                These third-party service providers are bound by contract to maintain confidentiality of your data.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                6. User Rights
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                You have the following rights regarding your personal data:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li><strong>Right to Access:</strong> You can request a copy of your personal data.</li>
                                <li><strong>Right to Correction:</strong> You can request correction of inaccurate data.</li>
                                <li><strong>Right to Deletion:</strong> You can request data deletion ("Right to be Forgotten"). See Data Deletion page for details.</li>
                                <li><strong>Right to Withdraw Consent:</strong> You can withdraw consent at any time.</li>
                                <li><strong>Right to Portability:</strong> You can request data in a machine-readable format.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                7. Policy Changes
                            </h2>
                            <p className="text-foreground/80">
                                We may update this policy at any time. Significant changes will be notified via email or notices on our services. Continued use of services after changes constitutes your acceptance of the updated policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                8. Contact Us
                            </h2>
                            <p className="text-foreground/80">
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="text-[#f59e0b] font-medium mt-2">
                                Email: lowhanfish@gmail.com
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
