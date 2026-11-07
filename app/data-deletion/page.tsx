"use client";

import NavbarSimple from "@/components/NavbarSimple";
import Footer from "@/components/Footer";
import { Mail, Clock, Shield, CheckCircle } from "lucide-react";

export default function DataDeletion() {
    return (
        <>
            <NavbarSimple />
            <div className="pt-32 pb-20 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Data Deletion
                        </h1>
                        <p className="text-lg text-foreground/70">
                            User Data Deletion Request
                        </p>
                        <p className="text-sm text-foreground/60 mt-2">
                            ("Right to be Forgotten")
                        </p>
                    </div>

                    {/* Intro */}
                    <div className="bg-card-bg border border-card-border rounded-2xl p-6 mb-8">
                        <p className="text-foreground/80">
                            Beevora Labs respects your privacy rights. You can request deletion of your personal data at any time. This page explains how to submit a request and what to expect.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                1. How to Submit a Request
                            </h2>
                            <p className="text-foreground/80 mb-6">
                                We provide several simple methods to submit a data deletion request:
                            </p>

                            <div className="space-y-4">
                                {/* Method 1 */}
                                <div className="bg-card-bg border border-card-border rounded-xl p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-[#f59e0b]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Via Email (Primary Method)</h3>
                                            <p className="text-foreground/70 text-sm mb-2">
                                                Send an email request to:
                                            </p>
                                            <p className="text-[#f59e0b] font-medium">
                                                lowhanfish@gmail.com
                                            </p>
                                            <p className="text-foreground/60 text-sm mt-2">
                                                Subject: "Data Deletion Request"
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Method 2 */}
                                <div className="bg-card-bg border border-card-border rounded-xl p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-[#f59e0b]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Via Account Settings</h3>
                                            <p className="text-foreground/70 text-sm">
                                                Go to Account Settings {'>'} Privacy {'>'} "Delete My Data"
                                            </p>
                                            <p className="text-foreground/60 text-sm mt-1">
                                                (Available after login)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Method 3 */}
                                <div className="bg-card-bg border border-card-border rounded-xl p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-5 h-5 text-[#f59e0b]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">Via Online Form</h3>
                                            <p className="text-foreground/70 text-sm">
                                                Fill out the request form on our support portal
                                            </p>
                                            <p className="text-foreground/60 text-sm mt-1">
                                                (Coming soon)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                2. Information Required
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                To process your request quickly, please prepare the following:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li><strong>Full Name:</strong> As registered on your account</li>
                                <li><strong>Email:</strong> Registered email address</li>
                                <li><strong>Account ID:</strong> (Optional) User account number</li>
                                <li><strong>Reason:</strong> (Optional) Reason for deletion</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                3. Process and Timeline
                            </h2>

                            <div className="bg-card-bg border border-card-border rounded-xl p-6 mb-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                                        <span className="text-[#f59e0b] font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Request Confirmation</h3>
                                        <p className="text-foreground/70 text-sm">Within 24 business hours</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                                        <span className="text-[#f59e0b] font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Identity Verification</h3>
                                        <p className="text-foreground/70 text-sm">Within 24-48 business hours</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                                        <span className="text-[#f59e0b] font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Data Deletion</h3>
                                        <p className="text-foreground/70 text-sm">Within 7-14 business days</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                                        <span className="text-[#f59e0b] font-bold text-sm">4</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Completion Notification</h3>
                                        <p className="text-foreground/70 text-sm">Via email after completion</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-foreground/70 text-sm">
                                <strong>Total Timeline:</strong> Maximum 30 business days from request date to completion.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                4. Data That Will Be Deleted
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                Once approved, the following data will be permanently deleted:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>User profile and account information</li>
                                <li>Transaction history</li>
                                <li>Usage data and analytics</li>
                                <li>Correspondence and messages</li>
                                <li>Preferences and settings</li>
                                <li>Uploaded files and media</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                5. Exceptions
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                Some data may be retained to fulfill legal obligations:
                            </p>
                            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                                <li>Data for tax compliance (5-7 years retention)</li>
                                <li>Data required by legal authorities</li>
                                <li>Data in system backups (auto-deleted after 30 days)</li>
                            </ul>
                            <p className="text-foreground/70 text-sm mt-4">
                                We will notify you if any data cannot be deleted due to legal obligations.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                6. After Deletion
                            </h2>
                            <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-xl p-5">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-foreground/80">
                                            Once data is deleted, your account will be permanently deactivated. You will not be able to log in or access other services with that account.
                                        </p>
                                        <p className="text-foreground/70 text-sm mt-2">
                                            If you wish to use our services again in the future, you will need to re-register with a new email.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                7. Need Help?
                            </h2>
                            <p className="text-foreground/80 mb-4">
                                If you have questions about this process:
                            </p>
                            <p className="text-[#f59e0b] font-medium">
                                Email: lowhanfish@gmail.com
                            </p>
                            <p className="text-foreground/60 text-sm mt-2">
                                Our support team is ready to assist you.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
