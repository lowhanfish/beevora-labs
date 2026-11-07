"use client";

import NavbarSimple from "@/components/NavbarSimple";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <>
            <NavbarSimple />
            <div className="pt-32 pb-20 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-foreground/70">
                            Beevora Labs Terms of Service
                        </p>
                        <p className="text-sm text-foreground/60 mt-2">
                            Effective: May 2026
                        </p>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-foreground/80">
                                By accessing or using Beevora Labs services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                2. Usage Rules
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                You agree to:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>Provide accurate and complete information during registration</li>
                                <li>Maintain confidentiality of your account and password</li>
                                <li>Use Services only for lawful purposes</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Not attempt to interfere with or disrupt Service integrity</li>
                                <li>Use Services in a professional manner</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                3. Prohibited Misuse
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                The following are strictly prohibited:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>Using Services for illegal activities</li>
                                <li>Attempting to hack, scan, or test system vulnerabilities</li>
                                <li>Sending spam, malware, or other harmful content</li>
                                <li>Replicating, reselling, or distributing Services without permission</li>
                                <li>Using robots or automation to access Services excessively</li>
                                <li>Stealing data or other users&apos; information</li>
                                <li>Violence or threatening others</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                4. Account Policy
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                <strong>4.1 Account Registration</strong>
                            </p>
                            <p className="text-foreground/80 mb-4">
                                You are responsible for maintaining the confidentiality of your account information. Beevora Labs is not liable for losses arising from unauthorized use of your account.
                            </p>
                            <p className="text-foreground/80 mb-4">
                                <strong>4.2 Account Suspension</strong>
                            </p>
                            <p className="text-foreground/80 mb-4">
                                We may suspend or terminate your account if:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>You violate these Terms</li>
                                <li>We detect suspicious activity</li>
                                <li>Required by legal authorities</li>
                                <li>Services are discontinued or modified</li>
                            </ul>
                            <p className="text-foreground/80 mb-4">
                                <strong>4.3 Account Deletion</strong>
                            </p>
                            <p className="text-foreground/80">
                                You can request account deletion at any time through account settings or by contacting support. See Data Deletion page for more information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                5. Limitation of Liability
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                <strong>5.1 Services "As Is"</strong>
                            </p>
                            <p className="text-foreground/80 mb-4">
                                Services are provided "as is" and "as available" without any warranties, either express or implied.
                            </p>
                            <p className="text-foreground/80 mb-4">
                                <strong>5.2 Liability Limits</strong>
                            </p>
                            <p className="text-foreground/80 mb-4">
                                Beevora Labs will not be liable for:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>Indirect, incidental, or consequential damages</li>
                                <li>Loss of data or profits</li>
                                <li>Costs for replacement services</li>
                                <li>Damages arising from Service use</li>
                            </ul>
                            <p className="text-foreground/80">
                                <strong>5.3 Total Liability</strong>
                            </p>
                            <p className="text-foreground/80">
                                Beevora Labs&apos; total liability will not exceed the amount you paid for Services in the last 12 months.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                6. Intellectual Property
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                <strong>6.1 Ownership</strong>
                            </p>
                            <p className="text-foreground/80 mb-4">
                                All content, features, and functionality of Services are the exclusive property of Beevora Labs and protected by copyright, trademark, and other intellectual property laws.
                            </p>
                            <p className="text-foreground/80 mb-4">
                                <strong>6.2 Usage License</strong>
                            </p>
                            <p className="text-foreground/80 mb-4">
                                We grant you a limited, non-exclusive, non-transferable license to use Services for your internal business.
                            </p>
                            <p className="text-foreground/80">
                                <strong>6.3 Restrictions</strong>
                            </p>
                            <p className="text-foreground/80">
                                You may not copy, distribute, modify, or create derivative works from Services without written permission from Beevora Labs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                7. Dispute Resolution
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                Any disputes arising from these Terms will be resolved through:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li><strong>Negotiation:</strong> Attempt direct resolution</li>
                                <li><strong>Mediation:</strong> With a mutually agreed mediator</li>
                                <li><strong>Arbitration:</strong> If negotiation and mediation fail</li>
                            </ul>
                            <p className="text-foreground/80 mt-4">
                                Applicable law is the law of the jurisdiction where Beevora Labs is incorporated.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                8. Terms Changes
                            </h2>
                            <p className="text-foreground/80">
                                We may revise these Terms at any time. Changes will be effective immediately upon posting. Continued use of Services after changes constitutes your acceptance of the revised Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                9. Contact Us
                            </h2>
                            <p className="text-foreground/80">
                                For questions about these Terms:
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
