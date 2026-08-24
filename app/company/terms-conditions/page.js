export const metadata = {
  title: "Terms & Conditions - Monufact",
  description: "Monufact's Terms & Conditions for our website and client services.",
  openGraph: {
    title: "Terms & Conditions - Monufact",
    description: "Monufact's Terms & Conditions for our website and client services.",
    url: "/company/terms-conditions",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions - Monufact",
    description: "Monufact's Terms & Conditions for our website and client services.",
    images: ["/images/about/monufact-about-hero.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* Terms & Conditions hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Terms & Conditions</h1>
            <p className="service-intro">The terms that govern use of our website and our client engagements.</p>
          </div>
        </section>

        {/* Legal content */}
        <section className="section">
          <div className="container legal-content">
            <p className="legal-updated">Effective date: July 29, 2026</p>

            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using the Monufact website, or by engaging Monufact for services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or services.</p>

            <h3>2. Use of Website</h3>
            <p>This website and its content, including text, graphics, logos, and images, are the property of Monufact unless otherwise noted, and are protected by applicable intellectual property laws. You may not reproduce, distribute, or otherwise use our website content without prior written permission.</p>

            <h3>3. Client Services</h3>
            <p>Monufact provides digital marketing, creative, and communications services to manufacturers and industrial companies. The specific scope, timeline, and deliverables for any project will be outlined in a separate proposal or agreement between Monufact and the client.</p>

            <h3>4. Payment Terms</h3>
            <p>Projects generally require a deposit before work begins. Unless otherwise agreed in writing, invoices are due within 30 days of the invoice date. Late payments may result in a pause of ongoing work until the account is brought current.</p>
            <p>For eligible projects, we offer the option to finance your project cost over up to three (3) months. Payment plans are only available by credit card. By choosing a payment plan, you authorize Monufact to automatically charge your card on a monthly basis until the full project cost is paid. If a scheduled charge fails, we'll contact you to update your payment method before pausing work.</p>

            <h3>5. Ownership of Deliverables</h3>
            <p>Upon full payment for a project, ownership of the final approved deliverables (such as brand assets, campaigns, and content created specifically for the client) transfers to the client. Monufact retains the right to showcase completed work in its portfolio and marketing materials unless otherwise agreed in writing.</p>

            <h3>6. Confidentiality</h3>
            <p>Both parties agree to keep confidential any non-public business, technical, or financial information shared during the course of a project, and to use such information only for the purposes of the engagement.</p>

            <h3>7. Disclaimers & Limitation of Liability</h3>
            <p>Our website and services are provided "as is" without warranties of any kind, express or implied. Monufact is not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</p>

            <h3>8. Governing Law</h3>
            <p>These Terms & Conditions are governed by the laws of the Province of Ontario and the applicable federal laws of Canada.</p>

            <h3>9. Changes to These Terms</h3>
            <p>We may update these Terms & Conditions from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms.</p>

            <h3 id="referral-program">10. Referral Partner Program</h3>
            <p>Monufact's Referral Partner Program rewards individuals who refer a new client that signs a service agreement with us. Full eligibility rules, the reward structure, and payout terms are outlined on our Referral Partner Program page. By submitting a referral, you agree to the terms described there in addition to these Terms & Conditions.</p>
            <p>Ready to submit a referral? <a href="/company/refer-a-client">Check out our referral page</a>.</p>

            <h3>11. Contact Us</h3>
            <p>Questions about these Terms & Conditions can be directed to <a href="mailto:info@monufact.com">info@monufact.com</a> or +1 226 977 2064.</p>
          </div>
        </section>
    </>
  );
}
