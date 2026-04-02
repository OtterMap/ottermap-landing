"use client"
import React, { useEffect } from "react";
import { customTrack } from "../utils/mixpanel/customTrack";
const page = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        customTrack("Privacy Policy page entered", { page: 'privacy policy page' });
    })
    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "40px auto",
                padding: "40px",
                fontFamily: "Times New Roman, serif",
                lineHeight: "1.8",
                color: "#000",
                backgroundColor: "#fff",
            }}
        >
            <h1 style={{ textAlign: "center", marginBottom: "10px" }} className="font-bold text-2xl text-[#1f497d]">
                OTTERMAP PRIVACY POLICY
            </h1>

            <p style={{ textAlign: "center", marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <strong>Effective Date:</strong> April 2, 2026
                <strong>Last Revised:</strong> April 2, 2026
            </p>

            <p>
                This Privacy Policy explains how Ottermap (ottermap.com), operated by
                Moonsate Private Limited, collects, uses, and protects information about
                you when you use our website and services, or when you otherwise interact
                with us.
            </p>

            <p>
                By visiting our website, creating an account, or using any of our
                products or services, you agree to the collection, use, and disclosure of
                your information as described in this Privacy Policy.
            </p>
            <br /><hr /><br />
            <h2 className="font-bold text-xl text-[#1f497d]">1. Changes to This Privacy Policy</h2>
            <br />
            <p>
                We may update this Privacy Policy from time to time. Any changes will be
                published on this page. We encourage you to review this page periodically
                to stay informed. If you continue to use our website after we update this
                policy, you will be taken to have accepted the revised terms. If you
                disagree with any changes, you should stop using our website and services.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">2. Information We Collect</h2>
            <br />

            <h3 className="font-bold text-lg text-[#1f497d]">2.1 Information You Provide to Us</h3>
            <br />
            <p>
                We collect information you provide directly to us. This includes
                information you give when you:
            </p>

            <ul className="list-disc list-inside">
                <li>Create a member account with the Service</li>
                <li>
                    Sign up using your LinkedIn, Google, or other social networking site
                    (SNS) account
                </li>
                <li>Fill out a form, subscribe to a plan, or make a purchase</li>
                <li>
                    Contact us for support or communicate with us via email or social media
                </li>
                <li>Apply for a job or partnership</li>
            </ul>

            <p>
                The types of personal information we may collect include your name, job
                title, company, email address, billing address, and SNS user ID. If you
                connect your ottermap.com account with an SNS account, we may also
                collect certain profile information from that SNS account with your
                permission.
            </p>

            <p>
                If you provide information about someone else, you must ensure you are
                authorized to share that information with us and that the individual is
                aware of this Privacy Policy.
            </p>

            <p>
                We do not intentionally collect sensitive personal information such as
                health data, political opinions, religious beliefs, or financial credit
                history.
            </p>
            <br />
            <h3 className="font-bold text-lg text-[#1f497d]">2.2 Information We Collect Automatically</h3>
            <br />
            <p>
                When you use our website or services, we automatically collect certain
                usage and technical data ("Navigational Data"), including:
            </p>

            <ul className="list-disc list-inside">
                <li>Browser type, domain, and server information</li>
                <li>Your IP address</li>
                <li>Referring URL and pages visited on our website</li>
                <li>Date/time stamps and time spent on pages</li>
                <li>Approximate location (if you have opted in)</li>
                <li>Cookie data and other usage statistics</li>
            </ul>

            <p>
                We use this Navigational Data to analyze user behaviour, improve our
                services, ensure security, and for research and development. Occasionally,
                we may combine Navigational Data with personal information to improve
                individual customer experiences, in which case we treat the combined
                information in accordance with this Privacy Policy.
            </p>
            <br />
            <h3 className="font-bold text-lg text-[#1f497d]">2.3 Information from Third Parties</h3>
            <br />
            <p>
                We may collect personal information about you from third-party sources
                you have authorized to share data with us (such as LinkedIn or other
                service providers), and combine it with information we collect through
                our website and services.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">3. How We Use Your Information</h2>
            <br />
            <p>
                We use the information we collect about you for the following purposes:
            </p>

            <ul className="list-disc list-inside">
                <li>To provide, maintain, and improve our website and services</li>
                <li>To process subscriptions, payments, and fulfil orders</li>
                <li>To verify your identity and manage your account</li>
                <li>
                    To send technical notices, security alerts, and administrative messages
                </li>
                <li>
                    To respond to comments, questions, complaints, and customer service
                    requests
                </li>
                <li>
                    To communicate with you about new products, offers, promotions, and
                    events
                </li>
                <li>
                    To personalize and customize our website or services to your interests
                </li>
                <li>
                    To analyze usage data to generate trends, insights, and intelligence
                </li>
                <li>
                    To conduct market research and improve our understanding of user needs
                </li>
                <li>To assess job applications</li>
                <li>
                    To carry out any other purpose for which the information was collected
                </li>
            </ul>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">4. Information Sharing and Disclosure</h2>
            <br />
            <h3 className="font-bold text-lg text-[#1f497d]">4.1 Third-Party Contractors</h3>
            <br />
            <p>
                Information we collect may be disclosed to third-party contractors who
                perform specialized functions on our behalf (such as website hosting,
                payment processing, or analytics). These contractors are authorized to
                use your personal information only as necessary to provide services to us.
            </p>
            <br />
            <h3 className="font-bold text-lg text-[#1f497d]">4.2 Legal Disclosures</h3>
            <br />
            <p>
                We may disclose your information to law enforcement agencies, government
                bodies, courts, or external advisors where required by law or legal
                obligation.
            </p>
            <br />
            <h3 className="font-bold text-lg text-[#1f497d]">4.3 Business Transfers</h3>
            <br />
            <p>
                In the event of a merger, acquisition, or sale of all or part of our
                business, your information may be transferred to the acquiring
                organization. We will notify you before your personal information is
                transferred and becomes subject to a different privacy policy.
            </p>
            <br />
            <h3 className="font-bold text-lg text-[#1f497d]">4.4 No Sale of Personal Data</h3>
            <br />
            <p>
                We will never sell, rent, or trade your personal information to third
                parties for their own independent use.
            </p>
            <br />
            <h3 className="font-bold text-lg text-[#1f497d]">4.5 International Transfers</h3>
            <br />
            <p>
                As Moonsate Private Limited is incorporated in India, your information
                may be processed and stored in India or other countries. By using our
                services, you consent to the transfer and processing of your information
                in these jurisdictions, which may have different data protection laws
                than your own country.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">5. Subscriptions and Payments</h2>
            <br />
            <p>
                Subscribing to one of our plans requires you to provide contact
                information (such as your name and billing address) and financial
                information for billing purposes. We use this information to process
                orders and contact you if there are issues with payment.
            </p>
            <br />
            <p>
                Your payment details (such as credit card number and security code) are
                never stored on our servers. All payment processing is handled by PayPal
                (www.paypal.com), a trusted third-party payment service provider. Your
                payment information is encrypted and processed securely by PayPal.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">6. Security</h2>
            <br />
            <p>
                We are committed to protecting your personal information. We have
                implemented appropriate physical, electronic, and managerial procedures
                to safeguard the information we collect online from unauthorized access,
                disclosure, alteration, or destruction. Our systems are password-protected
                and comply with our internal security standards.
            </p>

            <p>
                While we take reasonable measures to protect your information, no method
                of transmission over the internet or electronic storage is completely
                secure. We encourage you to use strong passwords and take precautions to
                protect your account.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">7. Cookies and Tracking Technologies</h2>
            <br />
            <p>
                We use cookies and similar tracking technologies to recognize you when
                you visit our website and to enhance your experience. Cookies allow us to
                remember your preferences and track your usage of the website.
            </p>
            <br />
            <p>
                Cookies do not capture personally identifiable information on their own.
                You may configure your browser to refuse cookies; however, doing so may
                limit your ability to use certain features of our services.
            </p>
            <br />
            <p>
                We may also allow third parties to provide advertising and analytics
                services on our platform. These entities may use cookies, web beacons,
                and other technologies to collect information about your use of our
                website, including your IP address, pages viewed, and links clicked, in
                order to deliver targeted content and measure the effectiveness of their
                services.
            </p>
            <br />
            <p>For more details, please refer to our Cookie Policy.</p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">8. Direct Marketing</h2>
            <br />
            <p>
                From time to time, we may use your information to contact you about our
                products and services, special offers, or updates we think may interest
                you. By providing us with your information, you consent to us contacting
                you for marketing purposes by email, SMS, or other channels.
            </p>
            <br />
            <p>
                You may opt out of marketing communications at any time by contacting us
                at info@ottermap.com or by following the unsubscribe instructions in any
                marketing email. We will honor your request as promptly as reasonably
                possible and at no charge to you.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">9. Third-Party Links</h2>
            <br />
            <p>
                Our website may contain links to third-party websites for your
                convenience. Once you leave our site using these links, we have no control
                over and are not responsible for the privacy practices of those websites.
                We recommend reviewing the privacy policy of any third-party site you
                visit.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">10. Accessing and Updating Your Information</h2>
            <br />
            <p>
                It is important that the information we hold about you is accurate and up
                to date. You may:
            </p>

            <ul className="list-disc list-inside">
                <li>
                    Update or correct your account information by logging in and navigating
                    to your Account settings
                </li>
                <li>
                    Request access to the personal information we hold about you by
                    contacting us in writing
                </li>
                <li>Request correction of any inaccurate information</li>
                <li>Request deactivation of your account by contacting us</li>
            </ul>

            <p>
                We will consider all access and correction requests in a timely manner.
                Note that we may retain certain information as required by law or for
                legitimate business purposes, including cached or archived copies for a
                limited period of time.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">11. Withdrawing Consent</h2>
            <br />
            <p>
                You may withdraw your consent to our use of your personal information at
                any time by emailing us at info@ottermap.com. We will return or securely
                destroy your personal information within five (5) days of receiving your
                withdrawal request, except where we are required by law to retain it.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">12. Complaints and Further Information</h2>
            <br />
            <p>
                If you have any questions, concerns, or complaints about our privacy
                practices or this Privacy Policy, please contact us. We will investigate
                your complaint and respond within a reasonable time, provided we have all
                necessary information to do so. If we require additional time or
                information to complete our investigation, we will agree on an
                alternative timeframe with you.
            </p>
            <br />
            <h2 className="font-bold text-xl text-[#1f497d]">13. Contact Us</h2>
            <br />
            <p>
                If you have any questions about this Privacy Policy or how we handle your
                personal information, you can reach us at:
            </p>

            <p>
                Ottermap Inc.<br />
                Operating: ottermap.com<br />
                Incorporated in: USA
            </p>
            <p>Email: <a href="mailto:info@ottermap.com" className="text-[#0D80F2] cursor-pointer">info@ottermap.com</a></p>
        </div>
    );
};

export default page;